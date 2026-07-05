/* ============================================================
   $VINI PRESALE — automatic token delivery (SERVER SIDE ONLY)
   ============================================================
   This function runs on Netlify's servers, never in the buyer's
   browser. It is the ONLY place the treasury private key is used.

   REQUIRED environment variables (set in Netlify dashboard,
   Site settings -> Environment variables -> NEVER commit them
   to git, NEVER paste them in chat with anyone, including Claude):

   TREASURY_SECRET_KEY   Base58-encoded secret key of the treasury
                         wallet (the one holding the $VINI supply
                         and receiving SOL). Export it from Phantom:
                         Settings -> Security & Privacy -> Export
                         Private Key. Paste that string as this
                         env var's value. Do this ONLY in the
                         Netlify dashboard, never anywhere else.
   SOLANA_NETWORK        'devnet' or 'mainnet-beta'
   SOLANA_RPC_URL        optional custom RPC endpoint
   TOKEN_MINT            your $VINI token CA
   TREASURY_WALLET       public address of the treasury wallet
                         (must match TREASURY_SECRET_KEY's pubkey)
   RATE_VINI_PER_SOL     how many VINI per 1 SOL (e.g. 1000000)
   MIN_SOL / MAX_SOL     purchase limits, mirror presale.js
   ============================================================ */

const {
  Connection,
  PublicKey,
  Keypair,
  clusterApiUrl,
} = require('@solana/web3.js');
const {
  getOrCreateAssociatedTokenAccount,
  transfer,
} = require('@solana/spl-token');
const bs58 = require('bs58');
const { getStore } = require('@netlify/blobs');

function getConnection() {
  const network = process.env.SOLANA_NETWORK || 'devnet';
  const endpoint = process.env.SOLANA_RPC_URL || clusterApiUrl(network);
  return new Connection(endpoint, 'confirmed');
}

function getTreasuryKeypair() {
  const secret = process.env.TREASURY_SECRET_KEY;
  if (!secret) throw new Error('TREASURY_SECRET_KEY is not set');
  return Keypair.fromSecretKey(bs58.decode(secret));
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { signature, buyer } = body;
  if (!signature || !buyer) {
    return { statusCode: 400, body: 'Missing signature or buyer address' };
  }

  const store = getStore('vini-presale-deliveries');

  // idempotency check — never deliver twice for the same payment
  const already = await store.get(signature, { type: 'json' }).catch(() => null);
  if (already) {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'already_delivered', ...already }),
    };
  }

  const connection = getConnection();

  // 1. Fetch and validate the payment transaction on-chain
  const tx = await connection.getParsedTransaction(signature, {
    maxSupportedTransactionVersion: 0,
    commitment: 'confirmed',
  });

  if (!tx || tx.meta?.err) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Transaction not found or failed' }) };
  }

  const treasuryWallet = process.env.TREASURY_WALLET;
  const instructions = tx.transaction.message.instructions;

  const transferIx = instructions.find(
    (ix) =>
      ix.program === 'system' &&
      ix.parsed?.type === 'transfer' &&
      ix.parsed?.info?.destination === treasuryWallet &&
      ix.parsed?.info?.source === buyer
  );

  if (!transferIx) {
    return { statusCode: 400, body: JSON.stringify({ error: 'No matching SOL transfer to treasury found in this transaction' }) };
  }

  const lamports = Number(transferIx.parsed.info.lamports);
  const solPaid = lamports / 1e9;

  const minSol = parseFloat(process.env.MIN_SOL || '0.05');
  const maxSol = parseFloat(process.env.MAX_SOL || '10');
  if (solPaid < minSol || solPaid > maxSol) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Payment amount outside allowed presale range' }) };
  }

  const rate = parseFloat(process.env.RATE_VINI_PER_SOL || '1000000');
  const viniAmount = Math.floor(solPaid * rate);

  // 2. Deliver $VINI to the buyer
  try {
    const treasuryKeypair = getTreasuryKeypair();
    const mint = new PublicKey(process.env.TOKEN_MINT);
    const buyerPubkey = new PublicKey(buyer);

    const treasuryTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      treasuryKeypair,
      mint,
      treasuryKeypair.publicKey
    );

    const buyerTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      treasuryKeypair,
      mint,
      buyerPubkey
    );

    // NOTE: adjust for your token's decimals (default assumes 9, like SOL).
    // If your token uses fewer/more decimals, multiply viniAmount accordingly.
    const decimals = parseInt(process.env.TOKEN_DECIMALS || '9', 10);
    const rawAmount = BigInt(viniAmount) * BigInt(10 ** decimals);

    const deliverySignature = await transfer(
      connection,
      treasuryKeypair,
      treasuryTokenAccount.address,
      buyerTokenAccount.address,
      treasuryKeypair,
      rawAmount
    );

    const record = {
      buyer,
      solPaid,
      viniAmount,
      paymentSignature: signature,
      deliverySignature,
      deliveredAt: new Date().toISOString(),
    };

    await store.setJSON(signature, record);

    return { statusCode: 200, body: JSON.stringify({ status: 'delivered', ...record }) };
  } catch (err) {
    console.error('delivery failed', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Token delivery failed', detail: String(err.message || err) }) };
  }
};
