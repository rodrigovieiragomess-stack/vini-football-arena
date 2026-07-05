/* ============================================================
   $VINI PRESALE — real Phantom wallet connect + real SOL payment
   ============================================================
   IMPORTANT — READ BEFORE LAUNCHING:
   1. Fill in CONFIG below with YOUR treasury wallet + token info.
   2. Start with NETWORK: 'devnet' and test end-to-end with fake
      SOL before ever switching to 'mainnet-beta'.
   3. This file NEVER touches a private key. It only builds a
      transaction that the BUYER signs with their own Phantom.
      Token delivery (sending $VINI back to the buyer) has to
      happen from a backend or program that holds YOUR treasury
      key — never put that key in this file or any frontend code.
   ============================================================ */

const PRESALE_CONFIG = {
  NETWORK: 'devnet', // 'devnet' for testing, 'mainnet-beta' for real launch
  RPC_ENDPOINT: '', // optional: your own RPC URL (e.g. Helius/QuickNode). Leave '' to use the public cluster endpoint.
  TREASURY_WALLET: 'CJPrFZogidFfmgUfHnN9pKzxtAhc4uSdudaL21RrG5w5',
  TOKEN_MINT: 'LLo9wJmq6rHeJR9GF8HZBQfzYB6fJGxLiqrNgAu8c5x',
  TOKEN_SYMBOL: '$VINI',
  RATE_VINI_PER_SOL: 1000, // 1 VINI = 0.001 SOL → 1 SOL buys 1000 VINI
  MIN_SOL: 0.05,
  MAX_SOL: 10,
};

let presaleConnection = null;
let presaleProvider = null;
let presaleWallet = { connected: false, pubkey: null, solBalance: 0 };

function getExplorerUrl(signatureOrAddress, type = 'tx') {
  const cluster = PRESALE_CONFIG.NETWORK === 'mainnet-beta' ? '' : `?cluster=${PRESALE_CONFIG.NETWORK}`;
  return `https://explorer.solana.com/${type}/${signatureOrAddress}${cluster}`;
}

function getPhantomProvider() {
  if ('phantom' in window) {
    const provider = window.phantom?.solana;
    if (provider?.isPhantom) return provider;
  }
  if (window.solana?.isPhantom) return window.solana;
  return null;
}

function presaleToast(html) {
  if (typeof toast === 'function') { toast(html); return; }
  const el = document.getElementById('presaleStatus');
  if (el) el.innerHTML = html;
}

async function initPresaleConnection() {
  const endpoint = PRESALE_CONFIG.RPC_ENDPOINT || solanaWeb3.clusterApiUrl(PRESALE_CONFIG.NETWORK);
  presaleConnection = new solanaWeb3.Connection(endpoint, 'confirmed');
}

async function connectPresaleWallet() {
  const provider = getPhantomProvider();
  if (!provider) {
    presaleToast('Phantom not found — <a href="https://phantom.app/" target="_blank" rel="noopener">install it here</a>');
    window.open('https://phantom.app/', '_blank');
    return;
  }
  presaleProvider = provider;
  try {
    const resp = await provider.connect();
    presaleWallet.connected = true;
    presaleWallet.pubkey = resp.publicKey;
    await refreshPresaleBalance();
    renderPresaleWallet();
    presaleToast(`Phantom connected: ${shortAddr(presaleWallet.pubkey.toString())}`);
  } catch (err) {
    console.error(err);
    presaleToast('Connection cancelled or failed.');
  }
}

async function disconnectPresaleWallet() {
  try { await presaleProvider?.disconnect(); } catch (e) {}
  presaleWallet = { connected: false, pubkey: null, solBalance: 0 };
  renderPresaleWallet();
}

async function refreshPresaleBalance() {
  if (!presaleConnection || !presaleWallet.pubkey) return;
  try {
    const lamports = await presaleConnection.getBalance(presaleWallet.pubkey);
    presaleWallet.solBalance = lamports / solanaWeb3.LAMPORTS_PER_SOL;
  } catch (err) {
    console.error('balance fetch failed', err);
  }
}

function shortAddr(addr) {
  return addr.slice(0, 4) + '…' + addr.slice(-4);
}

function renderPresaleWallet() {
  const btn = document.getElementById('presaleConnectBtn');
  const balEl = document.getElementById('presaleSolBalance');
  const buyBtn = document.getElementById('presaleBuyBtn');
  if (!btn) return;

  if (presaleWallet.connected) {
    btn.textContent = `Connected: ${shortAddr(presaleWallet.pubkey.toString())} (disconnect)`;
    btn.classList.add('connected');
    if (balEl) balEl.textContent = `${presaleWallet.solBalance.toFixed(4)} SOL available`;
    if (buyBtn) buyBtn.disabled = false;
  } else {
    btn.textContent = 'Connect Phantom';
    btn.classList.remove('connected');
    if (balEl) balEl.textContent = '';
    if (buyBtn) buyBtn.disabled = true;
  }
}

function updatePresaleEstimate() {
  const input = document.getElementById('presaleSolAmount');
  const out = document.getElementById('presaleViniEstimate');
  if (!input || !out) return;
  const sol = parseFloat(input.value) || 0;
  const vini = sol * PRESALE_CONFIG.RATE_VINI_PER_SOL;
  out.textContent = `≈ ${vini.toLocaleString()} ${PRESALE_CONFIG.TOKEN_SYMBOL}`;
}

async function buyPresaleTokens() {
  if (PRESALE_CONFIG.TREASURY_WALLET.startsWith('REPLACE_')) {
    presaleToast('Presale not configured yet — set TREASURY_WALLET in presale.js');
    return;
  }
  if (!presaleWallet.connected) {
    presaleToast('Connect your Phantom wallet first');
    return;
  }
  const input = document.getElementById('presaleSolAmount');
  const sol = parseFloat(input?.value);

  if (!sol || sol < PRESALE_CONFIG.MIN_SOL || sol > PRESALE_CONFIG.MAX_SOL) {
    presaleToast(`Enter an amount between ${PRESALE_CONFIG.MIN_SOL} and ${PRESALE_CONFIG.MAX_SOL} SOL`);
    return;
  }

  const buyBtn = document.getElementById('presaleBuyBtn');
  if (buyBtn) { buyBtn.disabled = true; buyBtn.textContent = 'Confirm in Phantom…'; }

  try {
    const treasury = new solanaWeb3.PublicKey(PRESALE_CONFIG.TREASURY_WALLET);
    const lamports = Math.round(sol * solanaWeb3.LAMPORTS_PER_SOL);

    const { blockhash, lastValidBlockHeight } = await presaleConnection.getLatestBlockhash();
    const tx = new solanaWeb3.Transaction({
      feePayer: presaleWallet.pubkey,
      blockhash,
      lastValidBlockHeight,
    }).add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey: presaleWallet.pubkey,
        toPubkey: treasury,
        lamports,
      })
    );

    const signed = await presaleProvider.signTransaction(tx);
    const signature = await presaleConnection.sendRawTransaction(signed.serialize());

    if (buyBtn) buyBtn.textContent = 'Confirming on-chain…';
    await presaleConnection.confirmTransaction({ signature, blockhash, lastValidBlockHeight }, 'confirmed');

    recordPresalePurchase(presaleWallet.pubkey.toString(), sol, signature);
    await showPresaleSuccess(sol, signature);
    await refreshPresaleBalance();
    renderPresaleWallet();
  } catch (err) {
    console.error(err);
    presaleToast('Transaction failed or was rejected.');
  } finally {
    if (buyBtn) { buyBtn.disabled = false; buyBtn.textContent = `Buy ${PRESALE_CONFIG.TOKEN_SYMBOL}`; }
  }
}

function recordPresalePurchase(buyer, sol, signature) {
  // Local record only — for your own bookkeeping while delivery is manual.
  // This does NOT send tokens by itself. See NOTE at top of file.
  try {
    const key = 'vini_presale_purchases';
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    list.push({ buyer, sol, signature, at: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(list));
  } catch (e) { console.warn('could not store local record', e); }
}

async function showPresaleSuccess(sol, signature) {
  const vini = sol * PRESALE_CONFIG.RATE_VINI_PER_SOL;
  const el = document.getElementById('presaleStatus');
  if (!el) return;
  el.innerHTML = `
    ✅ Payment confirmed: ${sol} SOL received.<br>
    Delivering ~${vini.toLocaleString()} ${PRESALE_CONFIG.TOKEN_SYMBOL} to your wallet…<br>
    <a href="${getExplorerUrl(signature)}" target="_blank" rel="noopener">View payment on Solana Explorer</a>
  `;

  try {
    const resp = await fetch('/.netlify/functions/deliver-tokens', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ signature, buyer: presaleWallet.pubkey.toString() }),
    });
    const data = await resp.json();

    if (resp.ok && (data.status === 'delivered' || data.status === 'already_delivered')) {
      el.innerHTML = `
        ✅ ${vini.toLocaleString()} ${PRESALE_CONFIG.TOKEN_SYMBOL} delivered to your wallet!<br>
        <a href="${getExplorerUrl(signature)}" target="_blank" rel="noopener">Payment tx</a>
        ${data.deliverySignature ? ` · <a href="${getExplorerUrl(data.deliverySignature)}" target="_blank" rel="noopener">Delivery tx</a>` : ''}
      `;
    } else {
      el.innerHTML += `<br>⚠️ Automatic delivery failed (${data.error || 'unknown error'}). Your payment is confirmed on-chain — contact support with your transaction signature and it will be resolved manually.`;
    }
  } catch (err) {
    console.error(err);
    el.innerHTML += `<br>⚠️ Could not reach the delivery service. Your payment is confirmed on-chain — contact support with your transaction signature.`;
  }
}

function initPresale() {
  if (typeof solanaWeb3 === 'undefined') {
    console.error('solanaWeb3 not loaded — check the CDN script tag in index.html');
    return;
  }
  initPresaleConnection();

  const connectBtn = document.getElementById('presaleConnectBtn');
  const buyBtn = document.getElementById('presaleBuyBtn');
  const amountInput = document.getElementById('presaleSolAmount');

  connectBtn?.addEventListener('click', () => {
    presaleWallet.connected ? disconnectPresaleWallet() : connectPresaleWallet();
  });
  buyBtn?.addEventListener('click', buyPresaleTokens);
  amountInput?.addEventListener('input', updatePresaleEstimate);

  updatePresaleEstimate();
}

document.addEventListener('DOMContentLoaded', initPresale);
