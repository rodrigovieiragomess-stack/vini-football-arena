{
  "name": "vini-football-arena",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@solana/web3.js": "^1.95.0",
    "@solana/spl-token": "^0.4.9",
    "@netlify/blobs": "^8.1.0",
    "bs58": "^5.0.0"
  }
}

[build]
  functions = "netlify/functions"
  publish = "."

[functions]
  node_bundler = "esbuild"

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>VINI FOOTBALL ARENA — Create your NFT player. Dominate the arena.</title>
<meta name="description" content="Vini Football Arena — the football NFT game in the Vini Meme Coin ecosystem. Build your squad, mint NFT players, trade on the marketplace and battle in PvP with $VINI." />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bungee&family=Russo+One&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="arena-styles.css?v=3">
</head>
<body>

<!-- ===== PITCH BACKGROUND ===== -->
<div class="pitch-bg"></div>
<svg class="pitch-lines" viewBox="0 0 1000 1400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <g fill="none" stroke="rgba(238,255,240,0.5)" stroke-width="2.5">
    <rect x="40" y="40" width="920" height="1320" rx="4"/>
    <line x1="40" y1="700" x2="960" y2="700"/>
    <circle cx="500" cy="700" r="130"/>
    <circle cx="500" cy="700" r="5" fill="rgba(238,255,240,0.5)"/>
    <rect x="300" y="40" width="400" height="200"/>
    <rect x="410" y="40" width="180" height="80"/>
    <path d="M 360 240 A 130 130 0 0 0 640 240"/>
    <rect x="300" y="1160" width="400" height="200"/>
    <rect x="410" y="1280" width="180" height="80"/>
    <path d="M 360 1160 A 130 130 0 0 1 640 1160"/>
  </g>
</svg>

<!-- ===== NAV ===== -->
<nav class="nav">
  <div class="nav-inner">
    <a href="#top" class="brand">
      <span class="brand-mark">V</span>
      <span class="brand-name">VINI<b>FOOTBALL ARENA</b></span>
    </a>
    <div class="nav-links">
      <a href="#ecosystem">Ecosystem</a>
      <a href="#nft">NFT Players</a>
      <a href="#builder">Squad Builder</a>
      <a href="#market">Marketplace</a>
      <a href="#pvp">PvP Arena</a>
      <a href="#presale">Presale</a>
      <a href="#economy">$VINI</a>
      <a href="Game.html" class="nav-play">⚽ Play</a>
    </div>
    <button class="wallet-btn" id="walletBtn">Connect Phantom</button>
  </div>
</nav>

<!-- ===== HERO ===== -->
<header class="hero" id="top">
  <div class="floodlights" aria-hidden="true"><span></span><span></span><span></span></div>
  <div class="hero-grid">
    <div>
      <span class="eyebrow">Football · NFT · $VINI</span>
      <h1><span class="l1">Create your</span><span class="l2">NFT Player</span></h1>
      <p class="lede">Mint footballers on Solana, evolve their attributes, build your squad and <b>dominate the arena</b> with $VINI. The football game powered by the Vini Meme Coin ecosystem.</p>
      <div class="hero-cta">
        <a class="btn btn-gold" href="#builder">Build your squad</a>
        <a class="btn btn-neon" href="#nft">Explore players</a>
      </div>
      <div class="hero-stats">
        <div class="hstat"><div class="v count" data-to="4">4</div><div class="k">Rarities</div></div>
        <div class="hstat"><div class="v count" data-to="5">5</div><div class="k">Game phases</div></div>
        <div class="hstat"><div class="v">PvP</div><div class="k">Live arena</div></div>
        <div class="hstat"><div class="v">$VINI</div><div class="k">Token economy</div></div>
      </div>
    </div>

    <!-- mini pitch with floating card -->
    <div class="hero-pitch" id="heroPitch">
      <svg viewBox="0 0 300 400" preserveAspectRatio="none" aria-hidden="true">
        <g fill="none" stroke="rgba(238,255,240,0.45)" stroke-width="1.5">
          <rect x="10" y="10" width="280" height="380" rx="3"/>
          <line x1="10" y1="200" x2="290" y2="200"/>
          <circle cx="150" cy="200" r="48"/>
          <rect x="95" y="10" width="110" height="55"/>
          <rect x="95" y="335" width="110" height="55"/>
        </g>
      </svg>
      <div style="position:absolute; inset:0; display:grid; place-items:center;">
        <div id="heroCardStage"></div>
      </div>
    </div>
  </div>
</header>

<!-- ===== ECOSYSTEM / PHASES ===== -->
<section id="ecosystem">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">The Ecosystem</span>
      <h2 class="section-title">Five phases, <span class="accent">one arena</span></h2>
      <p class="section-sub">From the MVP web game to global tournaments — every phase of Vini Football Arena, built on Solana around the $VINI token.</p>
    </div>
    <div class="phase-track reveal">
      <div class="phase">
        <span class="ptag now">Live</span>
        <div class="pn">01</div><div class="pl">MVP Web Game</div>
        <ul>
          <li><span class="ck">✓</span> Phantom wallet login</li>
          <li><span class="ck">✓</span> Player creation</li>
          <li><span class="ck">✓</span> Attribute system</li>
          <li><span class="ck">✓</span> Simulated matches</li>
          <li><span class="ck">✓</span> Online ranking &amp; XP</li>
        </ul>
      </div>
      <div class="phase">
        <span class="ptag now">Now</span>
        <div class="pn">02</div><div class="pl">NFT Players</div>
        <ul>
          <li><span class="ck">✓</span> Players become NFTs</li>
          <li><span class="ck">✓</span> Mint on Solana</li>
          <li><span class="ck">✓</span> Common &amp; Rare</li>
          <li><span class="ck">✓</span> Epic &amp; Legendary</li>
        </ul>
      </div>
      <div class="phase">
        <span class="ptag soon">Soon</span>
        <div class="pn">03</div><div class="pl">$VINI Token</div>
        <ul>
          <li><span class="ck">✓</span> Create players</li>
          <li><span class="ck">✓</span> Upgrade attributes</li>
          <li><span class="ck">✓</span> Buy items</li>
          <li><span class="ck">✓</span> Enter tournaments</li>
        </ul>
      </div>
      <div class="phase">
        <span class="ptag soon">Soon</span>
        <div class="pn">04</div><div class="pl">Marketplace</div>
        <ul>
          <li><span class="ck">✓</span> Buy &amp; sell NFTs</li>
          <li><span class="ck">✓</span> Transaction history</li>
          <li><span class="ck">✓</span> Special items</li>
          <li><span class="ck">✓</span> Player transfers</li>
        </ul>
      </div>
      <div class="phase">
        <span class="ptag soon">Soon</span>
        <div class="pn">05</div><div class="pl">Tournaments</div>
        <ul>
          <li><span class="ck">✓</span> Weekly ranking</li>
          <li><span class="ck">✓</span> Global championship</li>
          <li><span class="ck">✓</span> $VINI rewards</li>
          <li><span class="ck">✓</span> Seasons</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ===== NFT PLAYERS ===== -->
<div class="field-divider" aria-hidden="true"><span class="fd-line"></span><span class="fd-circle"></span><span class="fd-line"></span></div>
<section id="nft">
  <div class="wrap">
    <div class="nft-grid">
      <div>
        <div class="rarity-tabs">
          <button class="rarity-tab" data-r="common">Common</button>
          <button class="rarity-tab" data-r="rare">Rare</button>
          <button class="rarity-tab" data-r="epic">Epic</button>
          <button class="rarity-tab" data-r="legendary">Legendary</button>
        </div>
        <div id="cardStage" style="display:grid; place-items:center;"></div>
      </div>
      <div class="nft-info reveal">
        <span class="eyebrow">NFT Players</span>
        <h2 class="section-title left" style="text-align:left">Every player is a <span class="accent">one-of-a-kind NFT</span></h2>
        <p class="section-sub" style="margin:0">Minted on Solana via Metaplex. Each footballer carries live attributes, a rarity tier and a market value in $VINI. Switch the rarity to see how stats and floor price scale.</p>
        <div class="feat">
          <div class="nft-feat"><div class="fi">PAC</div><div><h4>Five core attributes</h4><p>Pace, Shooting, Defending, Stamina and Rarity define how your player performs on the pitch.</p></div></div>
          <div class="nft-feat"><div class="fi">★</div><div><h4>Four rarity tiers</h4><p>Common, Rare, Epic and Legendary — the rarer the card, the higher the ceiling and the floor price.</p></div></div>
          <div class="nft-feat"><div class="fi">XP</div><div><h4>Evolve &amp; upgrade</h4><p>Spend $VINI to train attributes and push your players up the rarity ladder.</p></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== SQUAD BUILDER ===== -->
<section id="builder">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Squad Builder</span>
      <h2 class="section-title">Set up your <span class="accent">starting XI</span></h2>
      <p class="section-sub">Pick a player from your roster, then tap a position on the pitch to line them up. Tap a filled spot to remove. Build chemistry and push your team rating up.</p>
    </div>
    <div class="builder-grid">
      <div class="pitch-board" id="pitchBoard">
        <svg class="field-svg" viewBox="0 0 300 410" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="rgba(238,255,240,0.4)" stroke-width="1.5">
            <rect x="8" y="8" width="284" height="394" rx="3"/>
            <line x1="8" y1="205" x2="292" y2="205"/>
            <circle cx="150" cy="205" r="46"/>
            <circle cx="150" cy="205" r="3" fill="rgba(238,255,240,0.4)"/>
            <rect x="90" y="8" width="120" height="58"/>
            <rect x="125" y="8" width="50" height="24"/>
            <rect x="90" y="344" width="120" height="58"/>
            <rect x="125" y="378" width="50" height="24"/>
          </g>
        </svg>
      </div>
      <div class="builder-side">
        <div class="team-ovr reveal">
          <div><div class="k">Team rating</div><div class="big" id="teamOvr">--</div></div>
          <div class="chem" style="text-align:right">
            <div class="ck" id="teamChem">0% chemistry</div>
            <div class="k" id="teamCount" style="margin-top:6px">0/11 starters</div>
          </div>
        </div>
        <div class="roster-head">
          <h4>Your Roster</h4>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-neon btn-sm" id="autoFill">Auto XI</button>
            <button class="btn btn-ghost btn-sm" id="clearTeam">Clear</button>
          </div>
        </div>
        <div class="roster" id="roster"></div>
      </div>
    </div>
  </div>
</section>

<!-- ===== MARKETPLACE ===== -->
<section id="market">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Marketplace</span>
      <h2 class="section-title">Buy &amp; sell <span class="accent">player NFTs</span></h2>
      <p class="section-sub">Trade footballers with the community. Filter by rarity, check the stats and grab your next star with $VINI.</p>
    </div>
    <div class="mkt-bar reveal">
      <div class="filters">
        <button class="filter" data-f="all" data-active="true">All</button>
        <button class="filter" data-f="common">Common</button>
        <button class="filter" data-f="rare">Rare</button>
        <button class="filter" data-f="epic">Epic</button>
        <button class="filter" data-f="legendary">Legendary</button>
      </div>
      <a class="btn btn-gold btn-sm" href="#builder">+ List a player</a>
    </div>
    <div class="mkt-grid" id="mktGrid"></div>
  </div>
</section>

<!-- ===== STADIUM BAND ===== -->
<section class="stadium-band" aria-hidden="false">
  <div class="sb-lights"><span></span><span></span><span></span><span></span></div>
  <div class="sb-stands"></div>
  <div class="sb-pitch"></div>
  <div class="sb-content">
    <span class="eyebrow">The Arena awaits</span>
    <h2 class="stadium-title">STEP ONTO THE <span class="accent">PITCH</span></h2>
    <p>Floodlights on. Crowd roaring. Your $VINI squad takes the field.</p>
  </div>
</section>

<!-- ===== PVP ARENA ===== -->
<section id="pvp">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">PvP Arena</span>
      <h2 class="section-title">Live <span class="accent">match scoreboard</span></h2>
      <p class="section-sub">Send your squad into a head-to-head simulation. Watch the goals roll in minute by minute and earn $VINI for the win.</p>
    </div>
    <div class="pvp-wrap">
      <div class="scoreboard reveal">
        <div class="sb-top">
          <span class="sb-live">Live</span>
          <span class="sb-comp">Weekly Cup · Round of 16</span>
        </div>
        <div class="sb-main">
          <div class="sb-team">
            <div class="sb-crest" id="homeCrest">VU</div>
            <div class="tn">Vini United</div>
            <div class="tovr">OVR 88</div>
          </div>
          <div class="sb-center">
            <div class="sb-score"><span id="scoreH">0</span> : <span id="scoreA">0</span></div>
            <div class="sb-clock" id="clock">0'</div>
          </div>
          <div class="sb-team">
            <div class="sb-crest" id="awayCrest">NG</div>
            <div class="tn">Neon Galaxy</div>
            <div class="tovr">OVR 85</div>
          </div>
        </div>
        <div class="sb-bar"><i class="home" id="barHome" style="width:50%"></i><i class="away" id="barAway" style="width:50%"></i></div>
        <div class="sb-actions">
          <button class="btn btn-gold" id="simBtn">Kick off</button>
          <button class="btn btn-ghost" id="resetMatch">Reset</button>
        </div>
      </div>
      <div class="pvp-feed reveal">
        <h4>Match feed</h4>
        <div class="feed-list" id="feedList"></div>
        <div class="pvp-reward" id="pvpReward">
          <span style="font-size:1.4rem">🏆</span>
          <div><div class="rw-amt" id="rwAmt">+0 $VINI</div><div class="rw-k" id="rwText">Victory reward</div></div>
        </div>
      </div>
    </div>

    <!-- ranking -->
    <div style="margin-top:60px">
      <div class="section-head reveal" style="margin-bottom:28px">
        <span class="eyebrow">Leaderboard</span>
        <h2 class="section-title" style="font-size:clamp(1.6rem,3.6vw,2.4rem)">Weekly <span class="accent">ranking</span></h2>
      </div>
      <div class="rank-table reveal">
        <div class="rank-row head">
          <div style="text-align:center">#</div><div>Manager</div><div>W-L</div><div>Points</div>
        </div>
        <div id="rankBody"></div>
      </div>
    </div>
  </div>
</section>

<!-- ===== GAME CARD ===== -->
<div class="field-divider" aria-hidden="true"><span class="fd-line"></span><span class="fd-circle"></span><span class="fd-line"></span></div>
<section id="play">
  <div class="wrap">
    <a class="game-card reveal" href="Game.html">
      <div class="gc-glow" aria-hidden="true"></div>
      <div class="gc-body">
        <span class="eyebrow">Play Now · Demo Mode</span>
        <h2 class="gc-title">VINI <span>PENALTY ARENA</span></h2>
        <p class="gc-sub">Step up to the spot. Aim, charge your power and beat the keeper across 5 penalties — build a combo and bank simulated $VINI. Playable on desktop and mobile.</p>
        <div class="gc-tags">
          <span class="gc-tag">⚽ Penalty shootout</span>
          <span class="gc-tag">🔥 Combo rewards</span>
          <span class="gc-tag">🏆 Leaderboard</span>
        </div>
        <span class="btn btn-gold gc-btn">▶ Open the game</span>
      </div>
      <div class="gc-visual" aria-hidden="true">
        <div class="gc-goal"></div>
        <div class="gc-ball"></div>
      </div>
    </a>
  </div>
</section>

<!-- ===== PRESALE ===== -->
<div class="field-divider" aria-hidden="true"><span class="fd-line"></span><span class="fd-circle"></span><span class="fd-line"></span></div>
<section id="presale">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Presale</span>
      <h2 class="section-title">Get <span class="accent">$VINI</span> early</h2>
      <p class="section-sub">Connect your Phantom wallet, send SOL, and secure your $VINI allocation before launch.</p>
    </div>
    <div class="presale-card reveal">
      <div class="presale-row">
        <button class="wallet-btn" id="presaleConnectBtn">Connect Phantom</button>
        <span class="presale-bal" id="presaleSolBalance"></span>
      </div>
      <div class="presale-row">
        <label for="presaleSolAmount">Amount (SOL)</label>
        <input type="number" id="presaleSolAmount" min="0" step="0.01" placeholder="0.5" />
        <span class="presale-estimate" id="presaleViniEstimate">≈ 0 $VINI</span>
      </div>
      <button class="btn btn-gold" id="presaleBuyBtn" disabled>Buy $VINI</button>
      <div class="presale-status" id="presaleStatus"></div>
      <p class="presale-disclaimer">Presale runs on Solana. Tokens are delivered to the wallet address you connect with. Crypto assets are volatile and speculative — this is not financial advice.</p>
    </div>
  </div>
</section>

<!-- ===== ECONOMY ===== -->
<div class="field-divider" aria-hidden="true"><span class="fd-line"></span><span class="fd-circle"></span><span class="fd-line"></span></div>
<section id="economy">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">$VINI Economy</span>
      <h2 class="section-title">One token, <span class="accent">the whole game</span></h2>
      <p class="section-sub">$VINI fuels every action in the arena — from minting players to entering tournaments.</p>
    </div>
    <div class="econ-grid reveal">
      <div class="econ-card"><div class="ek">Create a player</div><div class="ed">Mint a brand-new footballer NFT into your roster.</div><div class="ep">5,000 $VINI</div></div>
      <div class="econ-card"><div class="ek">Upgrade shooting</div><div class="ed">Train an attribute and raise your player's rating.</div><div class="ep">1,000 $VINI</div></div>
      <div class="econ-card"><div class="ek">Enter a tournament</div><div class="ed">Join the weekly cup and play for the prize pool.</div><div class="ep">2,000 $VINI</div></div>
    </div>

    <!-- roadmap strip -->
    <div class="section-head reveal" style="margin:64px auto 28px">
      <span class="eyebrow">Roadmap</span>
      <h2 class="section-title" style="font-size:clamp(1.6rem,3.6vw,2.4rem)">The <span class="accent">3-month</span> kickoff</h2>
    </div>
    <div class="phase-track reveal" style="grid-template-columns:repeat(3,1fr)">
      <div class="phase"><div class="pn" style="font-size:1.6rem">M1</div><div class="pl">Month One</div>
        <ul><li><span class="ck">✓</span> Game website</li><li><span class="ck">✓</span> Wallet connect</li><li><span class="ck">✓</span> Player system</li></ul></div>
      <div class="phase"><div class="pn" style="font-size:1.6rem">M2</div><div class="pl">Month Two</div>
        <ul><li><span class="ck">✓</span> NFT players</li><li><span class="ck">✓</span> Marketplace</li></ul></div>
      <div class="phase"><div class="pn" style="font-size:1.6rem">M3</div><div class="pl">Month Three</div>
        <ul><li><span class="ck">✓</span> Tournaments</li><li><span class="ck">✓</span> Ranking</li><li><span class="ck">✓</span> Rewards</li></ul></div>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer>
  <div class="foot-brand">VINI FOOTBALL ARENA</div>
  <div class="foot-slogan">Create your NFT player and dominate the arena with $VINI.</div>
  <div class="foot-socials">
    <a href="https://x.com/Vinimemecoin" target="_blank" rel="noopener" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.658l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg></a>
    <a href="https://t.me/vinimemecoin" target="_blank" rel="noopener" aria-label="Telegram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.04 15.27l-.36 5.1c.52 0 .74-.22 1.01-.49l2.43-2.33 5.04 3.7c.92.51 1.58.24 1.82-.86l3.31-15.52c.32-1.39-.5-1.93-1.4-1.6L1.16 9.7c-1.36.53-1.34 1.29-.23 1.63l4.92 1.54L17.3 6.4c.54-.34 1.03-.15.63.2"/></svg></a>
    <a href="https://www.tiktok.com/@vinimemecoin" target="_blank" rel="noopener" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.93a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31Z"/></svg></a>
  </div>
  <p class="disclaimer">Vini Football Arena is a community game built around the Vini Meme Coin ecosystem. Player stats, prices and rewards shown here are demonstrations of gameplay. Crypto assets are volatile — nothing here is financial advice.</p>
  <div class="copy">© 2026 Vini Football Arena · Powered by Solana &amp; $VINI</div>
</footer>

<script src="https://unpkg.com/@solana/[email protected]/lib/index.iife.min.js"></script>
<script src="arena.js?v=3"></script>
<script src="presale.js?v=1"></script>
<script>
  // hero floating card (legendary)
  document.addEventListener('DOMContentLoaded', () => {
    const stage = document.getElementById('heroCardStage');
    if (stage && typeof cardHTML === 'function') {
      stage.innerHTML = cardHTML(SHOWCASE.legendary);
      stage.style.transform = 'scale(0.92)';
      if (typeof bindTilt === 'function') bindTilt(stage);
    }
  });
</script>
</body>
</html>

/* ============================================================
   VINI PENALTY ARENA — game page styles
   (reuses tokens from arena-styles.css)
   ============================================================ */

.demo-banner {
  position: sticky; top: 0; z-index: 70;
  display: flex; align-items: center; justify-content: center; gap: 10px;
  padding: 9px 16px; text-align: center;
  background: linear-gradient(90deg, rgba(255,210,74,0.16), rgba(57,255,20,0.14), rgba(255,210,74,0.16));
  border-bottom: 1px solid rgba(255,210,74,0.3);
  font-family: var(--font-head); font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold);
}
.demo-banner::before { content: "●"; color: var(--neon); animation: blink 1.4s infinite; }

/* loading screen */
.loader {
  position: fixed; inset: 0; z-index: 200; display: grid; place-items: center;
  background: radial-gradient(ellipse 80% 60% at 50% 30%, #0e3d1b, #03190a 70%);
  transition: opacity .6s ease, visibility .6s;
}
.loader.hide { opacity: 0; visibility: hidden; }
.loader-inner { text-align: center; }
.loader-ball {
  width: 70px; height: 70px; margin: 0 auto 26px; border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fff, #cfe6d2 60%, #8fb495);
  box-shadow: 0 0 40px rgba(57,255,20,0.5), inset -6px -8px 14px rgba(0,0,0,0.25);
  animation: ballSpin 1.1s linear infinite, ballBob 0.6s ease-in-out infinite alternate;
  position: relative;
}
.loader-ball::after {
  content: ""; position: absolute; inset: 0; border-radius: 50%;
  background:
    radial-gradient(circle at 50% 28%, #0a3315 8px, transparent 9px),
    radial-gradient(circle at 24% 62%, #0a3315 6px, transparent 7px),
    radial-gradient(circle at 76% 62%, #0a3315 6px, transparent 7px);
}
@keyframes ballSpin { to { transform: rotate(360deg); } }
@keyframes ballBob { to { transform: translateY(-10px); } }
.loader h1 {
  font-family: var(--font-display); font-size: clamp(1.8rem, 5vw, 3rem); text-transform: uppercase; line-height: 1;
  background: linear-gradient(180deg, #d8ffd0, #39FF14 60%, #1faf08);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 20px rgba(57,255,20,0.4));
}
.loader .lb { font-family: var(--font-head); color: var(--gold); letter-spacing: 0.3em; font-size: 0.8rem; margin-top: 8px; }
.loader-bar { width: 220px; height: 6px; border-radius: 99px; background: rgba(255,255,255,0.12); margin: 26px auto 0; overflow: hidden; }
.loader-bar i { display: block; height: 100%; width: 0; background: linear-gradient(90deg, var(--neon), var(--gold)); animation: loadfill 1.8s ease forwards; }
@keyframes loadfill { to { width: 100%; } }

/* page layout */
.game-page { padding: 28px 20px 60px; max-width: 1240px; margin: 0 auto; }
.game-head { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 22px; flex-wrap: wrap; }
.game-title { font-family: var(--font-display); font-size: clamp(1.4rem, 3.5vw, 2.2rem); text-transform: uppercase; color: #fff; line-height: 1; }
.game-title span { color: var(--gold); }
.bal-pill {
  display: inline-flex; align-items: center; gap: 9px; padding: 9px 16px; border-radius: 999px;
  background: rgba(255,210,74,0.1); border: 1px solid rgba(255,210,74,0.35);
  font-family: var(--font-head); font-size: 0.8rem; color: var(--gold);
}
.bal-pill .coin { width: 18px; height: 18px; border-radius: 50%; display: grid; place-items: center; background: linear-gradient(180deg, #FFE793, var(--gold-deep)); color: #2a1d02; font-family: var(--font-display); font-size: 0.6rem; }

.game-grid { display: grid; grid-template-columns: 1fr 320px; gap: 24px; align-items: start; }
@media (max-width: 940px) { .game-grid { grid-template-columns: 1fr; } }

/* stage */
.stage-card {
  position: relative; border-radius: 20px; overflow: hidden;
  border: 1px solid var(--card-line); background: #03190a;
  box-shadow: 0 30px 70px rgba(0,0,0,0.5);
}
.stage-hud {
  position: absolute; top: 0; left: 0; right: 0; z-index: 5;
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 18px; pointer-events: none;
}
.hud-chip {
  background: rgba(3,20,10,0.7); backdrop-filter: blur(6px);
  border: 1px solid rgba(120,220,140,0.25); border-radius: 12px; padding: 8px 14px;
  font-family: var(--font-head); text-transform: uppercase; letter-spacing: 0.08em;
}
.hud-chip .k { font-size: 0.54rem; color: #9fc1a4; letter-spacing: 0.16em; }
.hud-chip .v { font-size: 1.1rem; color: #fff; line-height: 1; margin-top: 2px; }
.hud-chip.combo .v { color: var(--neon); text-shadow: 0 0 12px rgba(57,255,20,0.5); }
.hud-shots { display: flex; gap: 6px; }
.hud-shots i { width: 11px; height: 11px; border-radius: 50%; background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.25); }
.hud-shots i.goal { background: var(--neon); box-shadow: 0 0 10px var(--neon); border-color: transparent; }
.hud-shots i.done { background: var(--gold); box-shadow: 0 0 8px rgba(255,210,74,0.6); border-color: transparent; }
.hud-shots i.miss { background: #ff5d6c; box-shadow: 0 0 10px #ff5d6c; border-color: transparent; }
.hud-shots i.live { background: var(--gold); box-shadow: 0 0 10px var(--gold); border-color: transparent; animation: blink 1s infinite; }

/* scoreboard + phase tag */
.hud-chip.scoreboard { border-color: rgba(255,210,74,0.4); background: rgba(40,28,2,0.55); }
.hud-chip.scoreboard .v { letter-spacing: 0.04em; }
.hud-chip.scoreboard .v b { color: var(--gold); font-family: var(--font-display); }
.phase-tag {
  align-self: flex-start; font-family: var(--font-head); font-size: 0.62rem; letter-spacing: 0.14em; text-transform: uppercase;
  padding: 9px 14px; border-radius: 12px; line-height: 1; white-space: nowrap;
  animation: phasePulse 1.6s ease-in-out infinite;
}
.phase-tag.shoot { color: #06250f; background: linear-gradient(180deg, #76ff5a, var(--neon)); box-shadow: 0 0 18px rgba(57,255,20,0.5); }
.phase-tag.save { color: #fff; background: linear-gradient(180deg, #ff8a3d, #ff5d6c); box-shadow: 0 0 18px rgba(255,93,108,0.5); }
@keyframes phasePulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }

#gameCanvas { display: block; width: 100%; height: auto; touch-action: none; cursor: crosshair; }

/* power meter + hint under canvas */
.stage-foot {
  position: absolute; left: 0; right: 0; bottom: 0; z-index: 5; padding: 14px 18px 16px;
  background: linear-gradient(180deg, transparent, rgba(3,20,10,0.85) 40%);
  pointer-events: none;
}
.power-row { display: flex; align-items: center; gap: 12px; }
.power-label { font-family: var(--font-head); font-size: 0.6rem; letter-spacing: 0.16em; text-transform: uppercase; color: #9fc1a4; white-space: nowrap; }
.power-track { flex: 1; height: 14px; border-radius: 99px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); overflow: hidden; position: relative; }
.power-sweet { position: absolute; top: 0; bottom: 0; left: 66%; width: 20%; background: repeating-linear-gradient(45deg, rgba(255,210,74,0.5) 0 5px, rgba(255,210,74,0.25) 5px 10px); border-left: 1px solid var(--gold); border-right: 1px solid var(--gold); z-index: 1; }
.power-fill { position: relative; z-index: 2; height: 100%; width: 0%; border-radius: 99px; background: linear-gradient(90deg, #39FF14, #FFD24A 70%, #ff5d6c); transition: width .04s linear; }

/* selected player chip under the canvas */
.player-chip { text-align: center; margin-top: 8px; font-family: var(--font-head); font-size: 0.64rem; letter-spacing: 0.06em; text-transform: uppercase; color: #cfe6d2; }
.player-chip b { letter-spacing: 0.04em; }

/* dive-zone buttons (save phase, mobile friendly) */
.dive-zones { position: absolute; inset: 0; z-index: 6; pointer-events: none; opacity: 0; transition: opacity .2s; }
.dive-zones.show { opacity: 1; }
.dz-btn {
  position: absolute; transform: translate(-50%, -50%); width: 84px; height: 84px; border-radius: 50%;
  background: radial-gradient(circle, rgba(57,255,20,0.18), rgba(57,255,20,0.04) 70%);
  border: 2px dashed rgba(57,255,20,0.6); cursor: pointer; pointer-events: auto;
  display: grid; place-items: center; transition: transform .12s, background .12s;
}
.dz-btn::after { content: "↓"; font-family: var(--font-display); color: var(--neon); font-size: 1.4rem; opacity: 0.8; }
.dz-btn:hover, .dz-btn:active { background: radial-gradient(circle, rgba(57,255,20,0.4), rgba(57,255,20,0.1) 70%); transform: translate(-50%, -50%) scale(1.08); box-shadow: 0 0 24px rgba(57,255,20,0.5); }
@media (max-width: 600px) { .dz-btn { width: 72px; height: 72px; } }

/* player & difficulty selectors (start overlay) */
.sel-label { font-family: var(--font-head); font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; color: #9fc1a4; margin: 18px 0 10px; }
.player-select { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
.psel {
  width: 92px; padding: 10px 8px 11px; border-radius: 13px; cursor: pointer; text-align: center;
  background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.12); transition: all .18s;
  display: flex; flex-direction: column; align-items: center; gap: 5px;
}
.psel.on { border-color: var(--rc); background: rgba(255,255,255,0.08); box-shadow: 0 0 18px color-mix(in srgb, var(--rc) 45%, transparent); }
.psel-art { width: 52px; height: 52px; border-radius: 50%; overflow: hidden; border: 2px solid var(--rc); display: grid; place-items: center; background: #06250f; }
.psel-art img { width: 100%; height: 100%; object-fit: cover; object-position: center 30%; }
.psel-ph { width: 100%; height: 100%; }
.psel-name { font-family: var(--font-head); font-size: 0.62rem; color: #fff; letter-spacing: 0.02em; }
.psel-st { font-size: 0.5rem; letter-spacing: 0.04em; color: #9fc1a4; text-transform: uppercase; }
.diff-select { display: flex; gap: 8px; justify-content: center; }
.diffb {
  padding: 9px 20px; border-radius: 999px; cursor: pointer;
  font-family: var(--font-head); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase;
  background: rgba(255,255,255,0.04); color: #c2d6c5; border: 1px solid rgba(255,255,255,0.14); transition: all .18s;
}
.diffb.on { color: #06250f; background: var(--neon); border-color: transparent; box-shadow: 0 0 16px rgba(57,255,20,0.4); }
#ambientBtn.off { color: #7fa085; }
.game-hint { text-align: center; margin-top: 10px; font-family: var(--font-head); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: #cfe6d2; }
.game-hint b { color: var(--gold); }

/* start / result overlay */
.overlay {
  position: absolute; inset: 0; z-index: 8; display: grid; place-items: center; text-align: center;
  background: rgba(3,20,10,0.82); backdrop-filter: blur(4px); padding: 24px;
  transition: opacity .35s; 
}
.overlay.hide { opacity: 0; visibility: hidden; pointer-events: none; }
.overlay-inner { max-width: 420px; }
.overlay h2 { font-family: var(--font-display); font-size: clamp(1.6rem, 5vw, 2.6rem); text-transform: uppercase; color: #fff; line-height: 1; margin-bottom: 12px; }
.overlay h2 span { color: var(--gold); }
.overlay p { color: #c2d6c5; font-size: 0.96rem; margin-bottom: 22px; }
.result-stats { display: flex; justify-content: center; gap: 26px; margin: 20px 0 24px; }
.result-stats .rs .v { font-family: var(--font-display); font-size: 2rem; color: var(--gold); }
.result-stats .rs.green .v { color: var(--neon); }
.result-stats .rs .k { font-size: 0.6rem; letter-spacing: 0.16em; text-transform: uppercase; color: #9fc1a4; margin-top: 4px; }
.reward-line {
  display: inline-flex; align-items: center; gap: 10px; padding: 12px 20px; border-radius: 14px; margin-bottom: 22px;
  background: rgba(255,210,74,0.1); border: 1px solid rgba(255,210,74,0.35);
  font-family: var(--font-display); color: var(--gold); font-size: 1.3rem;
}
.overlay .btn-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

/* side panels */
.side-stack { display: flex; flex-direction: column; gap: 16px; }
.panel { border: 1px solid var(--card-line); border-radius: 16px; background: var(--card); padding: 18px 18px; }
.panel h3 { font-family: var(--font-head); font-size: 0.74rem; letter-spacing: 0.14em; text-transform: uppercase; color: #fff; margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between; }
.panel h3 .tag { font-size: 0.54rem; color: var(--neon); border: 1px solid rgba(57,255,20,0.4); padding: 3px 8px; border-radius: 999px; letter-spacing: 0.1em; }

.reward-rows { display: grid; gap: 10px; }
.rwrow { display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; }
.rwrow .l { color: #b6cdba; }
.rwrow .r { font-family: var(--mono); color: #fff; }
.rwrow .r.gold { color: var(--gold); }
.rwrow .r.neon { color: var(--neon); }

.lb-row { display: grid; grid-template-columns: 26px 1fr auto; gap: 10px; align-items: center; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
.lb-row:last-child { border-bottom: none; }
.lb-row.you { background: rgba(57,255,20,0.06); margin: 0 -8px; padding: 8px; border-radius: 8px; border-bottom: none; }
.lb-pos { font-family: var(--font-display); color: #fff; font-size: 0.9rem; text-align: center; }
.lb-row.top .lb-pos { color: var(--gold); }
.lb-name { font-family: var(--font-head); font-size: 0.76rem; color: #fff; letter-spacing: 0.03em; }
.lb-row.you .lb-name { color: var(--neon); }
.lb-score { font-family: var(--mono); font-size: 0.78rem; color: var(--gold); }

.daily { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; }
.daily .day {
  aspect-ratio: 1; border-radius: 9px; display: grid; place-items: center; position: relative;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
  font-family: var(--font-head); font-size: 0.6rem; color: #9fc1a4;
}
.daily .day.claimed { background: rgba(57,255,20,0.12); border-color: rgba(57,255,20,0.4); color: var(--neon); }
.daily .day.today { background: rgba(255,210,74,0.14); border-color: var(--gold); color: var(--gold); box-shadow: 0 0 12px rgba(255,210,74,0.3); cursor: pointer; }
.daily .day .amt { position: absolute; bottom: 3px; font-size: 0.42rem; letter-spacing: 0; }

.disabled-btn {
  width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px;
  border-radius: 12px; border: 1px dashed rgba(255,255,255,0.2); background: rgba(255,255,255,0.03);
  color: #7fa085; font-family: var(--font-head); font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; cursor: not-allowed;
}
.disabled-btn .soon { color: var(--gold); font-size: 0.54rem; border: 1px solid rgba(255,210,74,0.35); padding: 2px 7px; border-radius: 999px; }

.game-foot { text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--card-line); }
.game-foot .fl { font-family: var(--font-head); color: var(--gold); letter-spacing: 0.14em; text-transform: uppercase; font-size: 0.8rem; }
.game-foot .fd { color: #7fa085; font-size: 0.76rem; margin-top: 8px; }

.float-msg {
  position: absolute; left: 50%; top: 38%; transform: translate(-50%, -50%) scale(0.6);
  z-index: 7; font-family: var(--font-display); font-size: clamp(2rem, 6vw, 3.4rem); text-transform: uppercase;
  pointer-events: none; opacity: 0; text-align: center; line-height: 0.95;
}
.float-msg.show { animation: popMsg 1.1s ease forwards; }
.float-msg.goal { color: var(--neon); text-shadow: 0 0 30px rgba(57,255,20,0.7); }
.float-msg.save { color: #ff5d6c; text-shadow: 0 0 30px rgba(255,93,108,0.6); }
.float-msg.miss { color: #ff8a3d; text-shadow: 0 0 30px rgba(255,138,61,0.6); }
.float-msg.perfect { color: var(--gold); text-shadow: 0 0 34px rgba(255,210,74,0.8); }
@keyframes popMsg {
  0% { opacity: 0; transform: translate(-50%,-50%) scale(0.5) rotate(-6deg); }
  20% { opacity: 1; transform: translate(-50%,-50%) scale(1.15) rotate(2deg); }
  70% { opacity: 1; transform: translate(-50%,-50%) scale(1) rotate(0); }
  100% { opacity: 0; transform: translate(-50%,-55%) scale(1); }
}

/* ============================================================
   VINI PENALTY ARENA — penalty SHOOTOUT (shoot + save)
   You attack AND you defend, alternating, vs CPU. Best of 5
   rounds + sudden death. Canvas render + FX + synth sfx.
   ============================================================ */
(() => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const W = 760, H = 940;
  canvas.width = W; canvas.height = H;

  const GOAL = { left: 150, right: 610, crossbar: 168, line: 360 };
  const SPOT = { x: 380, y: 838 };

  /* ---------- selectable NFT players ---------- */
  const RAR = { common: '#9fb6a4', rare: '#4db8ff', epic: '#b06bff', legendary: '#FFD24A' };
  const PLAYERS = [
    { name: 'Vini Jr',     pos: 'LW', ovr: 96, rarity: 'legendary', pac: 98, sho: 93, img: 'assets/vini-jr.png' },
    { name: 'Kauã Prado',  pos: 'ST', ovr: 89, rarity: 'epic',      pac: 92, sho: 90 },
    { name: 'Lobo Real',   pos: 'RW', ovr: 87, rarity: 'epic',      pac: 90, sho: 85 },
    { name: 'Rui Falcao',  pos: 'CM', ovr: 83, rarity: 'rare',      pac: 80, sho: 79 },
    { name: 'Léo Muralha', pos: 'GK', ovr: 86, rarity: 'rare',      pac: 60, sho: 45 },
  ];
  const DIFF = {
    easy:   { label: 'Easy',   reach: 86,  step: 2, jitter: 26, miss: 0.16 },
    normal: { label: 'Normal', reach: 100, step: 4, jitter: 16, miss: 0.08 },
    hard:   { label: 'Hard',   reach: 114, step: 5, jitter: 8,  miss: 0.03 },
  };
  const SWEET = { lo: 0.66, hi: 0.86 };

  /* ---------- procedural player faces (for the picker) ---------- */
  function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  const FSKIN = ['#7a4a2c', '#8a5a36', '#6b3f24', '#9c6a40', '#a9744a'];
  const FHAIR = ['#161310', '#0e0c0a', '#241a10', '#1c1712'];
  function faceSVG(name) {
    const h = hashStr(name), skin = FSKIN[h % FSKIN.length], hair = FHAIR[(h >>> 4) % FHAIR.length], afro = (h >>> 8) % 3;
    let hairEls;
    if (afro === 0) hairEls = `<circle cx="60" cy="30" r="22" fill="${hair}"/><circle cx="38" cy="38" r="15" fill="${hair}"/><circle cx="82" cy="38" r="15" fill="${hair}"/><circle cx="46" cy="20" r="14" fill="${hair}"/><circle cx="74" cy="20" r="14" fill="${hair}"/>`;
    else if (afro === 1) hairEls = `<circle cx="60" cy="28" r="24" fill="${hair}"/><circle cx="36" cy="40" r="15" fill="${hair}"/><circle cx="84" cy="40" r="15" fill="${hair}"/>`;
    else hairEls = `<path d="M34,44 Q34,18 60,18 Q86,18 86,44 Q86,32 60,32 Q34,32 34,44Z" fill="${hair}"/><circle cx="40" cy="40" r="11" fill="${hair}"/><circle cx="80" cy="40" r="11" fill="${hair}"/>`;
    return `data:image/svg+xml;utf8,` + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">` +
      `<rect width="120" height="120" fill="#0a3315"/>` +
      `<ellipse cx="32" cy="62" rx="5" ry="7" fill="${skin}"/><ellipse cx="88" cy="62" rx="5" ry="7" fill="${skin}"/>` +
      hairEls +
      `<ellipse cx="60" cy="62" rx="28" ry="30" fill="${skin}"/>` +
      `<path d="M44,55 Q50,52 56,55" stroke="${hair}" stroke-width="2.4" fill="none" stroke-linecap="round"/>` +
      `<path d="M64,55 Q70,52 76,55" stroke="${hair}" stroke-width="2.4" fill="none" stroke-linecap="round"/>` +
      `<ellipse cx="50" cy="61" rx="4.6" ry="5.2" fill="#fff"/><ellipse cx="70" cy="61" rx="4.6" ry="5.2" fill="#fff"/>` +
      `<circle cx="51" cy="62" r="2.6" fill="#3a2410"/><circle cx="71" cy="62" r="2.6" fill="#3a2410"/>` +
      `<path d="M59,64 Q57,70 60,71" stroke="rgba(0,0,0,0.25)" stroke-width="1.6" fill="none" stroke-linecap="round"/>` +
      `<path d="M47,74 Q60,86 73,74 Q60,80 47,74Z" fill="#fff"/>` +
      `<path d="M47,74 Q60,84 73,74" stroke="rgba(0,0,0,0.3)" stroke-width="1.6" fill="none" stroke-linecap="round"/>` +
      `</svg>`);
  }

  const G = {
    state: 'ready',        // ready|aim|charging|fly|savepick|savefly|result|over
    phase: 'shoot',        // shoot | save
    round: 1, maxRounds: 5, sudden: false,
    youScore: 0, cpuScore: 0,
    combo: 0, bestCombo: 0,
    vini: 25000, earned: 0, entry: 500,
    timer: 8, timerMax: 8,
    power: 0, charging: false, chargeDir: 1,
    perfectPower: false,
    aim: { x: 380, y: 268 },
    sel: 0, difficulty: 'normal',
    muted: false, ambient: true,
  };
  window.PENALTY = G;

  // persistent shared balance (site + game), demo only
  try { const sv = +localStorage.getItem('vini_balance'); if (sv && sv > 0) G.vini = sv; } catch (e) {}
  function persistBal() { try { localStorage.setItem('vini_balance', Math.round(G.vini)); } catch (e) {} }
  const player = () => PLAYERS[G.sel];
  let cpuReach = 100;

  let ball = { x: SPOT.x, y: SPOT.y, scale: 1, trail: [] };
  let keeper = { x: 380, y: 286, tx: 380, ty: 286, dive: 0, arm: 0 };
  let cpuTarget = null;          // where CPU striker aims (save phase)
  let particles = [], shake = 0, slowmo = 1, netRipple = 0, crowdHype = 0;
  let flyT = 0, flyDur = 0, flyFrom = null, flyTo = null, flyResult = null;

  /* ---------- audio ---------- */
  let AC = null;
  const ac = () => { if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} } return AC; };
  function tone(f, d, t, v, to) { if (G.muted) return; const a = ac(); if (!a) return; const o = a.createOscillator(), g = a.createGain(); o.type = t || 'sine'; o.frequency.value = f; if (to) o.frequency.exponentialRampToValueAtTime(to, a.currentTime + d); g.gain.value = v || 0.12; g.gain.exponentialRampToValueAtTime(0.001, a.currentTime + d); o.connect(g).connect(a.destination); o.start(); o.stop(a.currentTime + d); }
  function noise(d, v) { if (G.muted) return; const a = ac(); if (!a) return; const n = a.sampleRate * d, b = a.createBuffer(1, n, a.sampleRate), dt = b.getChannelData(0); for (let i = 0; i < n; i++) dt[i] = (Math.random() * 2 - 1) * (1 - i / n); const s = a.createBufferSource(); s.buffer = b; const g = a.createGain(); g.gain.value = v || 0.2; s.connect(g).connect(a.destination); s.start(); }
  const sfxKick = () => { noise(0.12, 0.25); tone(180, 0.12, 'square', 0.1, 90); };
  const sfxGoal = () => { tone(440, 0.15, 'sawtooth', 0.1, 660); setTimeout(() => tone(660, 0.25, 'sawtooth', 0.1, 880), 90); noise(0.5, 0.12); };
  const sfxSave = () => { noise(0.18, 0.3); tone(120, 0.18, 'square', 0.12, 60); };
  const sfxMiss = () => { tone(300, 0.3, 'sine', 0.08, 120); };
  const sfxWhistle = () => { tone(2000, 0.18, 'sine', 0.06, 2400); };
  // crowd roar: filtered noise swell
  function crowdRoar(big) {
    if (G.muted) return; const a = ac(); if (!a) return;
    const dur = big ? 2.0 : 1.1, n = a.sampleRate * dur, b = a.createBuffer(1, n, a.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1);
    const s = a.createBufferSource(); s.buffer = b;
    const lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = big ? 900 : 650;
    const g = a.createGain(); const t = a.currentTime;
    g.gain.setValueAtTime(0.001, t);
    g.gain.exponentialRampToValueAtTime(big ? 0.4 : 0.18, t + 0.18);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(lp).connect(g).connect(a.destination); s.start();
  }
  // PS3-style commentator voice
  let _voices = [];
  function loadVoices() { if (window.speechSynthesis) _voices = speechSynthesis.getVoices(); }
  loadVoices(); if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = loadVoices;
  function say(text, opts) {
    if (G.muted || !window.speechSynthesis) return;
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US'; u.rate = (opts && opts.rate) || 1.0; u.pitch = (opts && opts.pitch) || 1.0; u.volume = 1;
      const v = _voices.find(v => /en[-_]US/i.test(v.lang)) || _voices.find(v => /^en/i.test(v.lang));
      if (v) u.voice = v;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) {}
  }
  // stadium ambience loop (filtered noise hum)
  let ambNode = null, ambGain = null;
  function startAmbient() {
    if (G.muted || !G.ambient) return; const a = ac(); if (!a || ambNode) return;
    const n = a.sampleRate * 2, b = a.createBuffer(1, n, a.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1);
    const s = a.createBufferSource(); s.buffer = b; s.loop = true;
    const lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420;
    const g = a.createGain(); g.gain.value = 0.05;
    s.connect(lp).connect(g).connect(a.destination); s.start();
    ambNode = s; ambGain = g;
  }
  function stopAmbient() { if (ambNode) { try { ambNode.stop(); } catch (e) {} ambNode = null; } }
  // preload Vini Jr art
  const viniImg = new Image(); viniImg.src = 'assets/vini-jr.png'; let viniReady = false;
  viniImg.onload = () => { viniReady = true; };

  const el = id => document.getElementById(id);

  /* ---------- HUD ---------- */
  function updHUD() {
    el('hudYou').textContent = G.youScore;
    el('hudCpu').textContent = G.cpuScore;
    const rk = el('hudRoundK'); if (rk) rk.textContent = G.sudden ? 'Sudden' : 'Round';
    el('hudRound').textContent = (G.sudden ? 'SD' : G.round + '/' + G.maxRounds);
    el('hudCombo').textContent = 'x' + (1 + G.combo);
    el('balValue').textContent = Math.round(G.vini).toLocaleString();
    const ph = el('hudPhase');
    if (G.phase === 'shoot') { ph.textContent = 'YOUR SHOT'; ph.className = 'phase-tag shoot'; }
    else { ph.textContent = 'YOUR SAVE'; ph.className = 'phase-tag save'; }
    el('powerFill').style.width = (G.power * 100) + '%';
    // selected player chip
    const ps = el('hudPlayer'); if (ps) { const p = player(); ps.innerHTML = `<b style="color:${RAR[p.rarity]}">${p.name}</b> · PAC ${p.pac} · SHO ${p.sho}`; }
    // round pips
    const dots = el('hudShots'); dots.innerHTML = '';
    for (let i = 0; i < G.maxRounds; i++) {
      const d = document.createElement('i');
      if (i < G.round - 1) d.className = 'done';
      else if (i === G.round - 1 && !G.sudden) d.className = 'live';
      dots.appendChild(d);
    }
  }
  function setHint(t) { el('gameHint').innerHTML = t; }
  let toastT;
  function toastG(msg) { const t = el('gameToast'); t.innerHTML = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2200); }
  function floatMsg(text, cls) { const m = el('floatMsg'); m.textContent = text; m.className = 'float-msg ' + cls; void m.offsetWidth; m.classList.add('show'); }

  /* ---------- flow ---------- */
  function startMatch() {
    G.round = 1; G.sudden = false; G.youScore = 0; G.cpuScore = 0; G.combo = 0; G.bestCombo = 0; G.earned = 0;
    cpuReach = DIFF[G.difficulty].reach;
    G.vini -= G.entry; persistBal(); sfxWhistle(); startAmbient(); hideOverlay(); beginShoot();
  }
  function resetBall() { ball = { x: SPOT.x, y: SPOT.y, scale: 1, trail: [] }; }
  function centerKeeper() { keeper = { x: 380, y: 286, tx: 380, ty: 286, dive: 0, arm: 0 }; }

  function beginShoot() {
    G.phase = 'shoot'; resetBall(); centerKeeper();
    G.aim = { x: 380, y: 268 }; G.power = 0; G.charging = false; G.chargeDir = 1; G.perfectPower = false;
    G.timer = G.timerMax; G.state = 'aim';
    setHint('Aim with your pointer · <b>Hold</b> to charge · release in the <b>gold zone</b>');
    updHUD();
  }
  function beginSave() {
    G.phase = 'save'; resetBall(); centerKeeper();
    cpuTarget = cpuStrikerTarget(); G.dbgTarget = cpuTarget;
    G.aim = { x: 380, y: 290 };
    G.timer = 5; G.timerMax = 5; G.state = 'savepick';
    setHint('<b>Tap a corner of the goal</b> to dive and save the shot!');
    floatMsg('SAVE IT!', 'save');
    showDiveZones(true);
    updHUD();
  }

  /* ----- YOU SHOOT ----- */
  function shoot() {
    if (G.state !== 'aim' && G.state !== 'charging') return;
    G.charging = false;
    const power = Math.max(0.15, G.power);
    G.perfectPower = (power >= SWEET.lo && power <= SWEET.hi);
    const p = player();
    sfxKick(); shake = Math.min(18, power * 16);
    decideCpuKeeper();
    // accuracy: off the gold zone scatters the shot, mitigated by Shooting
    let tx = G.aim.x, ty = G.aim.y;
    if (!G.perfectPower) {
      const off = (1.15 - p.sho / 120) * (Math.abs(power - 0.76) + 0.12) * 230;
      tx += (Math.random() * 2 - 1) * off; ty += (Math.random() * 2 - 1) * off * 0.5;
      tx = Math.max(GOAL.left + 4, Math.min(GOAL.right - 4, tx));
      ty = Math.max(GOAL.crossbar + 2, Math.min(GOAL.line - 4, ty));
    }
    flyFrom = { x: ball.x, y: ball.y }; flyTo = { x: tx, y: ty };
    // Pace makes the ball faster
    flyDur = (0.52 - power * 0.24) * (1.25 - p.pac / 160); flyT = 0;
    flyResult = resolveShot(power); G.state = 'fly';
  }
  function decideCpuKeeper() {
    const xs = [GOAL.left + 55, 300, 380, 460, GOAL.right - 55], w = [3, 4, 5, 4, 3];
    let total = w.reduce((a, b) => a + b, 0), r = Math.random() * total, idx = 0;
    for (let i = 0; i < w.length; i++) { if (r < w[i]) { idx = i; break; } r -= w[i]; }
    const high = Math.random() < 0.42;
    keeper.tx = xs[idx]; keeper.ty = high ? 232 : 312; keeper.dive = idx < 2 ? -1 : idx > 2 ? 1 : 0;
  }
  function resolveShot(power) {
    const a = flyTo;
    if (a.y < GOAL.crossbar + 18 && power > 0.9) return { type: 'miss', reason: 'over' };
    if ((a.x < GOAL.left + 14 || a.x > GOAL.right - 14) && Math.random() < 0.4) return { type: 'miss', reason: 'post' };
    if (Math.hypot(a.x - keeper.tx, a.y - keeper.ty) < cpuReach) return { type: 'save' };
    const corner = (a.x < GOAL.left + 76 || a.x > GOAL.right - 76) && a.y < GOAL.crossbar + 76;
    return { type: 'goal', perfect: corner && G.perfectPower };
  }
  function applyShootResult(res) {
    if (res.type === 'goal') {
      G.youScore++; G.combo++; G.bestCombo = Math.max(G.bestCombo, G.combo);
      const base = res.perfect ? 2600 : 1600, gain = Math.round(base * (1 + G.combo * 0.25));
      G.earned += gain; G.vini += gain; persistBal();
      burst(flyTo.x, flyTo.y, res.perfect ? '#FFD24A' : '#39FF14', res.perfect ? 70 : 38);
      netRipple = 1.4; shake = Math.max(shake, res.perfect ? 18 : 10); crowdHype = 1;
      sfxGoal(); crowdRoar(true); say('Goooal!', { pitch: 1.12, rate: 1.0 });
      floatMsg(res.perfect ? 'GOLDEN GOAL! ★' : 'GOAL!', res.perfect ? 'perfect' : 'goal');
      if (res.perfect) slowmo = 0.18;
      toastG('+' + gain.toLocaleString() + ' $VINI' + (G.combo > 1 ? '  ·  x' + (1 + G.combo) + ' combo' : '') + (res.perfect ? '  ·  Perfect strike!' : ''));
    } else if (res.type === 'save') {
      G.combo = 0; G.cpuScore++; keeper.arm = 1; sfxSave(); floatMsg('KEEPER SAVES!', 'save'); burst(keeper.tx, keeper.ty, '#ff5d6c', 16);
    } else {
      G.combo = 0; G.cpuScore++; sfxMiss(); floatMsg(res.reason === 'over' ? 'OVER THE BAR!' : 'OFF THE POST!', 'miss');
    }
    updHUD(); G.state = 'result';
    setTimeout(() => { slowmo = 1; beginSave(); }, res.perfect ? 2100 : 1600);
  }

  /* ----- YOU SAVE ----- */
  function cpuStrikerTarget() {
    const zones = [
      { x: GOAL.left + 64, y: 232 }, { x: GOAL.left + 64, y: 322 },
      { x: 380, y: 250 }, { x: 380, y: 318 },
      { x: GOAL.right - 64, y: 232 }, { x: GOAL.right - 64, y: 322 },
    ];
    const w = [4, 4, 2, 2, 4, 4];
    let total = w.reduce((a, b) => a + b, 0), r = Math.random() * total, idx = 0;
    for (let i = 0; i < w.length; i++) { if (r < w[i]) { idx = i; break; } r -= w[i]; }
    const z = zones[idx], jt = DIFF[G.difficulty].jitter;
    return { x: z.x + (Math.random() * 2 - 1) * jt, y: z.y + (Math.random() * 2 - 1) * jt * 0.6 };
  }
  function pickDive(pt) {
    if (G.state !== 'savepick') return;
    showDiveZones(false);
    keeper.tx = Math.max(GOAL.left + 10, Math.min(GOAL.right - 10, pt.x));
    keeper.ty = Math.max(GOAL.crossbar + 10, Math.min(GOAL.line - 10, pt.y));
    keeper.dive = keeper.tx < 360 ? -1 : keeper.tx > 400 ? 1 : 0;
    sfxKick();
    flyFrom = { x: SPOT.x, y: SPOT.y }; flyTo = { x: cpuTarget.x, y: cpuTarget.y };
    flyDur = 0.4; flyT = 0;
    flyResult = resolveSave(); G.state = 'savefly';
  }
  function resolveSave() {
    const a = cpuTarget, reach = 92 + player().ovr * 0.36;
    if (a.y < GOAL.crossbar + 8 || a.x < GOAL.left + 8 || a.x > GOAL.right - 8) return { type: 'miss' };
    if (Math.hypot(a.x - keeper.tx, a.y - keeper.ty) < reach) return { type: 'save' };
    return { type: 'goal' };
  }
  function applySaveResult(res) {
    if (res.type === 'save') {
      G.youScore++; keeper.arm = 1; sfxSave(); floatMsg('SAVED! +1', 'goal');
      burst(keeper.tx, keeper.ty, '#39FF14', 30); shake = 10; crowdHype = 1; crowdRoar(true);
      const gain = 1400; G.earned += gain; G.vini += gain; persistBal();
      toastG('Great save! +1 point · +' + gain.toLocaleString() + ' $VINI');
    } else if (res.type === 'miss') {
      G.youScore++; sfxMiss(); floatMsg('THEY MISSED! +1', 'goal');
      toastG('Miss! Point to you');
    } else {
      G.cpuScore++; sfxGoal(); crowdRoar(false); netRipple = 1.2; burst(flyTo.x, flyTo.y, '#ff5d6c', 34);
      say('Goooal!', { pitch: 1.02 });
      floatMsg('THEY SCORED', 'save');
    }
    updHUD(); G.state = 'result';
    setTimeout(advanceRound, 1600);
  }

  function advanceRound() {
    cpuReach += DIFF[G.difficulty].step;        // keeper gets sharper each round
    const done = G.round >= G.maxRounds;
    if (done && G.youScore !== G.cpuScore) return endMatch();
    if (done) G.sudden = true;
    G.round++;
    beginShoot();
  }

  function endMatch() {
    G.state = 'over'; sfxWhistle(); stopAmbient(); persistBal(); saveResult();
    const win = G.youScore > G.cpuScore;
    el('rsScore').textContent = G.youScore + ' – ' + G.cpuScore;
    el('rsCombo').textContent = 'x' + (1 + G.bestCombo);
    el('rsEarned').textContent = G.earned.toLocaleString();
    el('rsTitle').innerHTML = win ? 'YOU <span>WIN!</span>' : (G.youScore === G.cpuScore ? 'IT\'S A <span>DRAW</span>' : 'YOU <span>LOST</span>');
    el('rsSub').textContent = win ? 'Shootout won! Demo $VINI rewards credited to your balance.'
      : (G.youScore === G.cpuScore ? 'Honours even in the shootout.' : 'The keeper got the better of you this time.');
    showOverlay('result'); renderLeaderboard();
  }

  /* ---------- particles / fx ---------- */
  function burst(x, y, color, n) { for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2, sp = 2 + Math.random() * 7; particles.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 2, life: 1, color, size: 2 + Math.random() * 4 }); } }

  /* ============ RENDER ============ */
  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    if (shake > 0.3) { ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake); shake *= 0.86; }
    drawStadium(); drawGoal(); drawKeeper();
    if (G.phase === 'shoot' && (G.state === 'aim' || G.state === 'charging' || G.state === 'fly')) drawShooter();
    if (G.phase === 'save' && (G.state === 'savepick' || G.state === 'savefly')) drawStriker();
    if (G.phase === 'shoot' && (G.state === 'aim' || G.state === 'charging')) drawAim();
    if (G.phase === 'save' && G.state === 'savepick') drawDiveZones();
    drawBall(); drawParticles();
    ctx.restore();
  }

  function drawStadium() {
    let sky = ctx.createLinearGradient(0, 0, 0, GOAL.line);
    sky.addColorStop(0, '#06241a'); sky.addColorStop(1, '#0a3a1c');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, GOAL.line);
    const t = Date.now() / 1000;
    // ---- far upper stands ----
    ctx.fillStyle = '#04140d'; ctx.fillRect(0, 0, W, 104);
    const cols = ['#39FF14', '#FFD24A', '#2a9d4f', '#e8f5e9', '#1f7a3a', '#cfa12a'];
    for (let r = 0; r < 5; r++) for (let c = 0; c < 51; c++) {
      const x = c * 15 + (r % 2) * 7, baseY = 10 + r * 17;
      const wave = Math.sin(t * 2 + c * 0.4) * 1.4;
      const jump = crowdHype > 0.02 ? Math.abs(Math.sin(t * 9 + c * 0.6)) * crowdHype * 6 : 0;
      ctx.globalAlpha = 0.5 + ((c * 7 + r * 13) % 5) * 0.06 + crowdHype * 0.25;
      ctx.fillStyle = cols[(c + r) % cols.length];
      ctx.fillRect(x, baseY - jump + wave, 8, 8);
    }
    ctx.globalAlpha = 1;
    // ---- ULTRAS stand directly behind the goal ----
    const bx0 = GOAL.left - 60, bx1 = GOAL.right + 60, bw = bx1 - bx0;
    ctx.fillStyle = '#06180f'; ctx.fillRect(bx0, 100, bw, 66);
    ctx.strokeStyle = 'rgba(120,220,140,0.25)'; ctx.lineWidth = 2; ctx.strokeRect(bx0, 100, bw, 66);
    // banner
    ctx.fillStyle = 'rgba(255,210,74,0.16)'; ctx.fillRect(bx0 + 6, 150, bw - 12, 13);
    ctx.fillStyle = 'rgba(255,210,74,0.85)'; ctx.font = 'bold 10px "Russo One", sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('VINI  ULTRAS  ·  GOOOL', (bx0 + bx1) / 2, 160);
    // seats (denser, team colours, big hype)
    for (let r = 0; r < 4; r++) {
      const seats = Math.floor(bw / 13);
      for (let c = 0; c < seats; c++) {
        const x = bx0 + 6 + c * 13 + (r % 2) * 6, baseY = 108 + r * 10;
        const wave = Math.sin(t * 2.4 + c * 0.5) * 1.6;
        const jump = crowdHype > 0.02 ? Math.abs(Math.sin(t * 10 + c * 0.7)) * crowdHype * 8 : 0;
        ctx.globalAlpha = 0.7 + crowdHype * 0.3;
        ctx.fillStyle = [ '#39FF14', '#FFD24A', '#e8f5e9' ][(c + r) % 3];
        ctx.fillRect(x, baseY - jump + wave, 9, 9);
      }
    }
    ctx.globalAlpha = 1;
    let fl = ctx.createRadialGradient(W / 2, 60, 20, W / 2, 300, 520);
    fl.addColorStop(0, 'rgba(180,255,190,0.18)'); fl.addColorStop(1, 'rgba(180,255,190,0)');
    ctx.fillStyle = fl; ctx.fillRect(0, 0, W, H);
    let pitch = ctx.createLinearGradient(0, GOAL.line, 0, H);
    pitch.addColorStop(0, '#0e4a20'); pitch.addColorStop(1, '#16692c');
    ctx.fillStyle = pitch; ctx.fillRect(0, GOAL.line, W, H - GOAL.line);
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = i % 2 ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.05)';
      const y0 = GOAL.line + (H - GOAL.line) * (i / 8), y1 = GOAL.line + (H - GOAL.line) * ((i + 1) / 8);
      ctx.beginPath(); ctx.moveTo(0, y0); ctx.lineTo(W, y0); ctx.lineTo(W, y1); ctx.lineTo(0, y1); ctx.fill();
    }
    ctx.strokeStyle = 'rgba(238,255,240,0.5)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(60, GOAL.line); ctx.lineTo(700, GOAL.line); ctx.stroke();
    ctx.beginPath(); ctx.arc(SPOT.x, SPOT.y, 4, 0, 7); ctx.fillStyle = 'rgba(238,255,240,0.7)'; ctx.fill();
    ctx.beginPath(); ctx.moveTo(120, GOAL.line); ctx.lineTo(60, H - 120); ctx.lineTo(700, H - 120); ctx.lineTo(640, GOAL.line); ctx.stroke();
  }

  function drawGoal() {
    const { left, right, crossbar, line } = GOAL;
    ctx.save(); ctx.strokeStyle = 'rgba(220,255,225,0.16)'; ctx.lineWidth = 1;
    const rip = Math.sin(Date.now() / 90) * netRipple * 4;
    for (let x = left; x <= right; x += 18) { ctx.beginPath(); ctx.moveTo(x, crossbar); ctx.lineTo(x + rip, line); ctx.stroke(); }
    for (let y = crossbar; y <= line; y += 16) { ctx.beginPath(); ctx.moveTo(left, y); ctx.lineTo(right, y); ctx.stroke(); }
    ctx.restore(); if (netRipple > 0) netRipple *= 0.9;
    ctx.fillStyle = '#f4fbf2';
    ctx.fillRect(left - 8, crossbar, 9, line - crossbar);
    ctx.fillRect(right, crossbar, 9, line - crossbar);
    ctx.fillRect(left - 8, crossbar - 8, (right - left) + 17, 9);
  }

  function drawKeeper() {
    keeper.x += (keeper.tx - keeper.x) * 0.22; keeper.y += (keeper.ty - keeper.y) * 0.22;
    const k = keeper, diving = Math.abs(k.tx - 380) > 30 && (G.state === 'fly' || G.state === 'savefly' || G.state === 'result');
    ctx.save(); ctx.translate(k.x, k.y); ctx.rotate(k.dive * (diving ? 0.5 : 0));
    ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.beginPath(); ctx.ellipse(0, 60, 36, 9, 0, 0, 7); ctx.fill();
    ctx.fillStyle = '#FFD24A'; ctx.beginPath(); ctx.roundRect(-22, -16, 44, 64, 12); ctx.fill();
    ctx.fillStyle = '#0a3315'; ctx.fillRect(-22, 6, 44, 8);
    ctx.strokeStyle = '#FFD24A'; ctx.lineWidth = 14; ctx.lineCap = 'round';
    const sp = diving ? 42 : 26;
    ctx.beginPath(); ctx.moveTo(-16, -6); ctx.lineTo(-sp, -34); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(16, -6); ctx.lineTo(sp, -34); ctx.stroke();
    ctx.fillStyle = '#39FF14'; ctx.beginPath(); ctx.arc(-sp, -38, 9, 0, 7); ctx.fill(); ctx.beginPath(); ctx.arc(sp, -38, 9, 0, 7); ctx.fill();
    ctx.fillStyle = '#063b16'; ctx.fillRect(-18, 44, 14, 24); ctx.fillRect(4, 44, 14, 24);
    ctx.fillStyle = '#8a5a36'; ctx.beginPath(); ctx.arc(0, -30, 15, 0, 7); ctx.fill();
    ctx.fillStyle = '#161310'; ctx.beginPath(); ctx.arc(0, -38, 14, Math.PI, 0); ctx.fill();
    ctx.restore();
  }

  // reusable field player, viewed from behind, optional kicking pose
  function drawFieldPlayer(px, py, o) {
    const kit = o.kit, trim = o.trim || '#fff', num = o.num || '10', kicking = o.kicking, s = o.scale || 1.2;
    ctx.save(); ctx.translate(px, py); ctx.scale(s, s);
    // shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.ellipse(6, 46, 40, 11, 0, 0, 7); ctx.fill();
    // plant leg (left)
    ctx.fillStyle = '#8a5a36';
    ctx.save(); ctx.translate(-11, 8); ctx.beginPath(); ctx.roundRect(-6, 0, 13, 40, 5); ctx.fill();
    ctx.fillStyle = '#0a3315'; ctx.fillRect(-6, 28, 13, 8); ctx.fillStyle = '#111'; ctx.fillRect(-8, 37, 17, 7); ctx.restore();
    // kick leg (right)
    ctx.save(); ctx.translate(11, 8); ctx.fillStyle = '#8a5a36';
    if (kicking) { ctx.rotate(0.8); ctx.beginPath(); ctx.roundRect(-6, -6, 13, 46, 5); ctx.fill(); ctx.fillStyle = '#111'; ctx.fillRect(-8, 36, 18, 7); }
    else { ctx.beginPath(); ctx.roundRect(-6, 0, 13, 40, 5); ctx.fill(); ctx.fillStyle = '#0a3315'; ctx.fillRect(-6, 28, 13, 8); ctx.fillStyle = '#111'; ctx.fillRect(-8, 37, 17, 7); }
    ctx.restore();
    // shorts
    ctx.fillStyle = '#08240f'; ctx.beginPath(); ctx.roundRect(-20, -6, 40, 24, 7); ctx.fill();
    // torso
    ctx.fillStyle = kit; ctx.beginPath(); ctx.roundRect(-23, -58, 46, 56, 13); ctx.fill();
    ctx.fillStyle = trim; ctx.fillRect(-23, -58, 46, 7);
    ctx.fillStyle = trim; ctx.font = 'bold 26px "Russo One", sans-serif'; ctx.textAlign = 'center'; ctx.fillText(num, 0, -22);
    // arms
    ctx.strokeStyle = kit; ctx.lineWidth = 12; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(-20, -48); ctx.lineTo(-34, kicking ? -28 : -20); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(20, -48); ctx.lineTo(34, kicking ? -32 : -20); ctx.stroke();
    ctx.fillStyle = '#8a5a36'; ctx.beginPath(); ctx.arc(-34, kicking ? -26 : -18, 6, 0, 7); ctx.fill(); ctx.beginPath(); ctx.arc(34, kicking ? -30 : -18, 6, 0, 7); ctx.fill();
    // head + hair (back) — or NFT face medallion
    if (o.faceImg) {
      ctx.save(); ctx.beginPath(); ctx.arc(0, -74, 18, 0, 7); ctx.closePath(); ctx.clip();
      ctx.drawImage(o.faceImg, -22, -98, 44, 52);
      ctx.restore();
      ctx.lineWidth = 2.5; ctx.strokeStyle = trim; ctx.beginPath(); ctx.arc(0, -74, 18, 0, 7); ctx.stroke();
    } else {
      ctx.fillStyle = '#8a5a36'; ctx.beginPath(); ctx.arc(0, -72, 16, 0, 7); ctx.fill();
      ctx.fillStyle = '#161310'; ctx.beginPath(); ctx.arc(0, -76, 16, 0, Math.PI, true); ctx.fill();
      ctx.beginPath(); ctx.arc(0, -74, 16, 0, Math.PI); ctx.fill();
    }
    ctx.restore();
  }
  function drawShooter() {
    const p = player();
    drawFieldPlayer(SPOT.x - 36, SPOT.y - 38, { kit: RAR[p.rarity], trim: '#06250f', num: '10', kicking: G.state === 'fly', scale: 1.25, faceImg: p.img && viniReady ? viniImg : null });
  }
  function drawStriker() {
    drawFieldPlayer(SPOT.x - 36, SPOT.y - 38, { kit: '#ff5d6c', trim: '#fff', num: '9', kicking: G.state === 'savefly', scale: 1.25 });
  }

  function drawDiveZones() {
    // subtle hint markers for where you can dive
    ctx.save();
    ctx.globalAlpha = 0.16 + Math.sin(Date.now() / 300) * 0.06;
    ctx.fillStyle = '#39FF14';
    const zs = [[GOAL.left + 64, 232], [GOAL.left + 64, 322], [380, 290], [GOAL.right - 64, 232], [GOAL.right - 64, 322]];
    zs.forEach(z => { ctx.beginPath(); ctx.arc(z[0], z[1], 30, 0, 7); ctx.fill(); });
    ctx.restore();
  }

  function drawAim() {
    const a = G.aim;
    ctx.save(); ctx.globalAlpha = 0.9; ctx.strokeStyle = G.charging ? '#FFD24A' : '#39FF14'; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(a.x, a.y, 22, 0, 7); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(a.x - 32, a.y); ctx.lineTo(a.x - 10, a.y); ctx.moveTo(a.x + 10, a.y); ctx.lineTo(a.x + 32, a.y);
    ctx.moveTo(a.x, a.y - 32); ctx.lineTo(a.x, a.y - 10); ctx.moveTo(a.x, a.y + 10); ctx.lineTo(a.x, a.y + 32); ctx.stroke();
    ctx.fillStyle = G.charging ? '#FFD24A' : '#39FF14'; ctx.beginPath(); ctx.arc(a.x, a.y, 3, 0, 7); ctx.fill();
    ctx.globalAlpha = 0.25; ctx.setLineDash([6, 8]);
    ctx.beginPath(); ctx.moveTo(SPOT.x, SPOT.y - 14); ctx.lineTo(a.x, a.y); ctx.stroke();
    ctx.restore();
  }

  function drawBall() {
    const flying = G.state === 'fly' || G.state === 'savefly';
    if (flying) {
      flyT += (1 / 60) * slowmo / Math.max(0.2, flyDur);
      if (flyT >= 1) {
        flyT = 1; ball.x = flyTo.x; ball.y = flyTo.y; ball.scale = 0.5;
        if (G.state === 'fly') applyShootResult(flyResult); else applySaveResult(flyResult);
      } else {
        const t = flyT;
        ball.x = flyFrom.x + (flyTo.x - flyFrom.x) * t;
        ball.y = flyFrom.y + (flyTo.y - flyFrom.y) * t - Math.sin(t * Math.PI) * 26;
        ball.scale = 1 - 0.5 * t;
        ball.trail.push({ x: ball.x, y: ball.y, s: ball.scale }); if (ball.trail.length > 14) ball.trail.shift();
      }
    }
    for (let i = 0; i < ball.trail.length; i++) { const p = ball.trail[i]; ctx.globalAlpha = (i / ball.trail.length) * 0.5; ctx.fillStyle = G.phase === 'save' ? '#ff8a3d' : '#39FF14'; ctx.beginPath(); ctx.arc(p.x, p.y, 16 * p.s, 0, 7); ctx.fill(); }
    ctx.globalAlpha = 1;
    const r = 18 * ball.scale;
    ctx.save(); ctx.shadowColor = G.phase === 'save' ? 'rgba(255,138,61,0.6)' : 'rgba(57,255,20,0.6)'; ctx.shadowBlur = 18 * ball.scale;
    const grd = ctx.createRadialGradient(ball.x - r * 0.3, ball.y - r * 0.4, r * 0.2, ball.x, ball.y, r);
    grd.addColorStop(0, '#fff'); grd.addColorStop(0.7, '#dcefdf'); grd.addColorStop(1, '#8fb495');
    ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(ball.x, ball.y, r, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
    ctx.fillStyle = '#0a3315'; ctx.beginPath(); ctx.arc(ball.x, ball.y - r * 0.05, r * 0.32, 0, 7); ctx.fill();
    ctx.restore();
  }

  function drawParticles() {
    for (let i = particles.length - 1; i >= 0; i--) { const p = particles[i]; p.x += p.vx; p.y += p.vy; p.vy += 0.35; p.life -= 0.022; if (p.life <= 0) { particles.splice(i, 1); continue; } ctx.globalAlpha = Math.max(0, p.life); ctx.fillStyle = p.color; ctx.fillRect(p.x, p.y, p.size, p.size); }
    ctx.globalAlpha = 1;
  }

  /* ============ LOOP ============ */
  let last = performance.now();
  function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (G.state === 'charging') {
      G.power += G.chargeDir * dt * 1.5;
      if (G.power >= 1) { G.power = 1; G.chargeDir = -1; }
      if (G.power <= 0.1) { G.power = 0.1; G.chargeDir = 1; }
      el('powerFill').style.width = (G.power * 100) + '%';
    }
    if (G.state === 'aim' || G.state === 'charging' || G.state === 'savepick') {
      G.timer -= dt;
      el('hudTimer').textContent = Math.max(0, Math.ceil(G.timer));
      el('hudTimer').style.color = G.timer < 3 ? '#ff5d6c' : '#fff';
      if (G.timer <= 0) {
        if (G.phase === 'shoot') { G.combo = 0; G.cpuScore++; floatMsg('TOO SLOW!', 'miss'); sfxMiss(); G.state = 'result'; updHUD(); setTimeout(beginSave, 1300); }
        else { // didn't dive in time -> auto center, likely concede
          pickDive({ x: 380, y: 290 });
        }
      }
    }
    if (crowdHype > 0) crowdHype = Math.max(0, crowdHype - dt * 0.5);
    draw(); requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  /* ============ INPUT ============ */
  function cp(e) { const r = canvas.getBoundingClientRect(); const cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left; const cy = (e.touches ? e.touches[0].clientY : e.clientY) - r.top; return { x: cx * (W / r.width), y: cy * (H / r.height) }; }
  function setAim(e) { if (G.state !== 'aim' && G.state !== 'charging') return; const p = cp(e); G.aim.x = Math.max(GOAL.left + 6, Math.min(GOAL.right - 6, p.x)); G.aim.y = Math.max(GOAL.crossbar + 2, Math.min(GOAL.line - 6, p.y)); }
  canvas.addEventListener('pointermove', setAim);
  canvas.addEventListener('pointerdown', (e) => {
    e.preventDefault(); ac();
    if (G.state === 'aim') { setAim(e); G.charging = true; G.power = 0.1; G.chargeDir = 1; G.state = 'charging'; }
    else if (G.state === 'savepick') { pickDive(cp(e)); }
  });
  window.addEventListener('pointerup', () => { if (G.state === 'charging') shoot(); });

  /* ============ OVERLAYS ============ */
  function showOverlay(which) { el('startOverlay').classList.toggle('hide', which !== 'start'); el('resultOverlay').classList.toggle('hide', which !== 'result'); }
  function hideOverlay() { el('startOverlay').classList.add('hide'); el('resultOverlay').classList.add('hide'); }

  const BOTS = [{ n: 'NeonStriker', s: 5 }, { n: 'GoldenFoot', s: 4 }, { n: 'MoonKeeper', s: 4 }, { n: 'SambaFlow', s: 3 }, { n: 'PitchWolf', s: 3 }, { n: 'ViniArmy_01', s: 2 }];
  const bestScore = () => +(localStorage.getItem('vini_pen_best') || 0);
  function saveResult() { if (G.youScore > bestScore()) localStorage.setItem('vini_pen_best', G.youScore); }
  function renderLeaderboard() {
    const you = { n: 'YOU', s: bestScore(), you: true };
    const rows = [...BOTS, you].sort((a, b) => b.s - a.s);
    el('leaderboard').innerHTML = rows.map((r, i) => `<div class="lb-row ${i < 3 ? 'top' : ''} ${r.you ? 'you' : ''}"><div class="lb-pos">${i + 1}</div><div class="lb-name">${r.n}</div><div class="lb-score">${r.s} pts</div></div>`).join('');
  }

  /* ---------- dive zones (mobile-friendly save targets) ---------- */
  const DZ = [
    { x: GOAL.left + 72, y: 220 }, { x: 380, y: 212 }, { x: GOAL.right - 72, y: 220 },
    { x: GOAL.left + 72, y: 322 }, { x: 380, y: 322 }, { x: GOAL.right - 72, y: 322 },
  ];
  function buildDiveZones() {
    const box = el('diveZones'); if (!box || box.dataset.built) return; box.dataset.built = '1';
    DZ.forEach(z => {
      const b = document.createElement('button'); b.className = 'dz-btn';
      b.style.left = (z.x / W * 100) + '%'; b.style.top = (z.y / H * 100) + '%';
      b.addEventListener('click', (e) => { e.stopPropagation(); pickDive(z); });
      box.appendChild(b);
    });
  }
  function showDiveZones(on) { const b = el('diveZones'); if (b) b.classList.toggle('show', on); }

  /* ---------- player & difficulty selection ---------- */
  function buildPlayerSelect() {
    const box = el('playerSelect'); if (!box || box.dataset.built) return; box.dataset.built = '1';
    box.innerHTML = PLAYERS.map((p, i) => `
      <button class="psel ${i === G.sel ? 'on' : ''}" data-i="${i}" style="--rc:${RAR[p.rarity]}">
        <span class="psel-art">${p.img ? `<img src="${p.img}" alt="">` : `<img src="${faceSVG(p.name)}" alt="">`}</span>
        <span class="psel-name">${p.name}</span>
        <span class="psel-st">PAC ${p.pac} · SHO ${p.sho}</span>
      </button>`).join('');
    box.querySelectorAll('.psel').forEach(b => b.addEventListener('click', () => {
      G.sel = +b.dataset.i; box.querySelectorAll('.psel').forEach(x => x.classList.toggle('on', x === b)); updHUD();
    }));
  }
  function buildDiffSelect() {
    const box = el('diffSelect'); if (!box || box.dataset.built) return; box.dataset.built = '1';
    box.querySelectorAll('.diffb').forEach(b => b.addEventListener('click', () => {
      G.difficulty = b.dataset.d; box.querySelectorAll('.diffb').forEach(x => x.classList.toggle('on', x === b));
    }));
  }


  el('startBtn').addEventListener('click', startMatch);
  el('againBtn').addEventListener('click', startMatch);
  el('muteBtn').addEventListener('click', () => { G.muted = !G.muted; el('muteBtn').innerHTML = G.muted ? '🔇' : '🔊'; if (G.muted) stopAmbient(); else if (G.state !== 'over' && G.state !== 'ready') startAmbient(); });
  const ambBtn = el('ambientBtn');
  if (ambBtn) ambBtn.addEventListener('click', () => { G.ambient = !G.ambient; ambBtn.classList.toggle('off', !G.ambient); ambBtn.innerHTML = G.ambient ? '🏟️' : '🔈'; if (!G.ambient) stopAmbient(); else if (G.state !== 'over' && G.state !== 'ready') startAmbient(); });
  buildDiveZones(); buildPlayerSelect(); buildDiffSelect();
  const dayEl = document.querySelector('.daily .today');
  if (dayEl) dayEl.addEventListener('click', () => { if (dayEl.dataset.claimed) return; dayEl.dataset.claimed = '1'; dayEl.classList.remove('today'); dayEl.classList.add('claimed'); G.vini += 1000; persistBal(); updHUD(); toastG('+1,000 $VINI daily reward claimed'); });

  renderLeaderboard(); updHUD(); showOverlay('start');
})();

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>VINI Football Arena — Demo Mode</title>
<meta name="description" content="VINI Football Arena — penalty shootout game for the Vini Football ecosystem. Aim, charge and score against the keeper, then dive to save. Demo mode with simulated $VINI rewards." />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bungee&family=Russo+One&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="arena-styles.css?v=4">
<link rel="stylesheet" href="game-styles.css?v=3">
</head>
<body>

<div class="pitch-bg"></div>

<!-- loading -->
<div class="loader" id="loader">
  <div class="loader-inner">
    <div class="loader-ball"></div>
    <h1>VINI FOOTBALL ARENA</h1>
    <div class="lb">LOADING THE PITCH</div>
    <div class="loader-bar"><i></i></div>
  </div>
</div>

<!-- demo banner -->
<div class="demo-banner">Demo Mode — Simulated Rewards Until Official Launch</div>

<!-- nav -->
<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="brand">
      <span class="brand-mark">V</span>
      <span class="brand-name">VINI<b>FOOTBALL ARENA</b></span>
    </a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="index.html#nft">NFT Players</a>
      <a href="index.html#market">Marketplace</a>
      <a href="index.html#pvp">PvP Arena</a>
    </div>
    <button class="wallet-btn" style="background:rgba(255,255,255,0.06);color:#7fa085;border-color:rgba(255,255,255,0.18);box-shadow:none;cursor:not-allowed" disabled>Connect Wallet · Soon</button>
  </div>
</nav>

<div class="game-page">
  <div class="game-head">
    <div class="game-title">VINI <span>FOOTBALL ARENA</span></div>
    <div style="display:flex; gap:10px; align-items:center;">
      <button id="muteBtn" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);color:#fff;width:40px;height:40px;border-radius:10px;cursor:pointer;font-size:1rem">🔊</button>
      <button id="ambientBtn" title="Stadium ambience" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);color:#fff;width:40px;height:40px;border-radius:10px;cursor:pointer;font-size:1rem">🏟️</button>
      <div class="bal-pill"><span class="coin">S</span><span id="balValue">25,000</span> $VINI</div>
    </div>
  </div>

  <div class="game-grid">
    <!-- STAGE -->
    <div class="stage-card">
      <div class="stage-hud">
        <div style="display:flex; gap:10px; align-items:flex-start;">
          <div class="hud-chip"><div class="k" id="hudRoundK">Shot</div><div class="v" id="hudRound">1/5</div></div>
          <div class="hud-chip scoreboard"><div class="k">You · CPU</div><div class="v"><b id="hudYou">0</b> : <b id="hudCpu">0</b></div></div>
          <div class="hud-chip combo"><div class="k">Combo</div><div class="v" id="hudCombo">x1</div></div>
        </div>
        <div style="display:flex; gap:10px; align-items:flex-start;">
          <span class="phase-tag shoot" id="hudPhase">YOUR SHOT</span>
          <div class="hud-chip"><div class="k">Time</div><div class="v" id="hudTimer">8</div></div>
          <div class="hud-shots" id="hudShots"></div>
        </div>
      </div>

      <canvas id="gameCanvas" width="760" height="940"></canvas>
      <div class="dive-zones" id="diveZones"></div>

      <div class="float-msg" id="floatMsg"></div>

      <div class="stage-foot">
        <div class="power-row">
          <span class="power-label">Power</span>
          <div class="power-track"><div class="power-sweet"></div><div class="power-fill" id="powerFill"></div></div>
        </div>
        <div class="player-chip" id="hudPlayer"></div>
        <div class="game-hint" id="gameHint">Aim with your pointer · <b>Hold</b> to charge power · <b>Release</b> to shoot</div>
      </div>

      <!-- start overlay -->
      <div class="overlay" id="startOverlay">
        <div class="overlay-inner">
          <h2>VINI <span>FOOTBALL ARENA</span></h2>
          <p>Real shootout rules: each round you take a penalty <b style="color:var(--neon)">and</b> dive to save theirs. A <b style="color:var(--neon)">goal or a save = 1 point</b> for you. Best of 5 — outscore the CPU.</p>
          <div class="sel-label">Pick your player</div>
          <div class="player-select" id="playerSelect"></div>
          <div class="sel-label">Difficulty</div>
          <div class="diff-select" id="diffSelect">
            <button class="diffb" data-d="easy">Easy</button>
            <button class="diffb on" data-d="normal">Normal</button>
            <button class="diffb" data-d="hard">Hard</button>
          </div>
          <div class="reward-line"><span class="coin" style="width:22px;height:22px;background:linear-gradient(180deg,#FFE793,#C9962A);border-radius:50%;display:grid;place-items:center;color:#2a1d02;font-family:var(--font-display);font-size:0.7rem">S</span> Entry 500 $VINI · Pool 100,000</div>
          <div class="btn-row">
            <button class="btn btn-gold" id="startBtn">Kick off</button>
          </div>
        </div>
      </div>

      <!-- result overlay -->
      <div class="overlay hide" id="resultOverlay">
        <div class="overlay-inner">
          <h2 id="rsTitle">FULL <span>TIME</span></h2>
          <p id="rsSub">You scored 0 of 5.</p>
          <div class="result-stats">
            <div class="rs"><div class="v" id="rsScore">0 – 0</div><div class="k">You · CPU</div></div>
            <div class="rs green"><div class="v" id="rsCombo">x1</div><div class="k">Best combo</div></div>
          </div>
          <div class="reward-line"><span class="coin" style="width:22px;height:22px;background:linear-gradient(180deg,#FFE793,#C9962A);border-radius:50%;display:grid;place-items:center;color:#2a1d02;font-family:var(--font-display);font-size:0.7rem">S</span> +<span id="rsEarned">0</span> $VINI earned</div>
          <div class="btn-row">
            <button class="btn btn-gold" id="againBtn">Play again</button>
            <a class="btn btn-ghost" href="index.html">Back to arena</a>
          </div>
        </div>
      </div>
    </div>

    <!-- SIDE -->
    <div class="side-stack">
      <div class="panel">
        <h3>Match Rewards <span class="tag">Demo</span></h3>
        <div class="reward-rows">
          <div class="rwrow"><span class="l">Entry fee</span><span class="r gold">500 $VINI</span></div>
          <div class="rwrow"><span class="l">Reward pool</span><span class="r gold">100,000 $VINI</span></div>
          <div class="rwrow"><span class="l">Per goal scored</span><span class="r neon">1,600 $VINI</span></div>
          <div class="rwrow"><span class="l">Per save made</span><span class="r neon">1,400 $VINI</span></div>
          <div class="rwrow"><span class="l">Top corner bonus</span><span class="r neon">+1,000 $VINI</span></div>
          <div class="rwrow"><span class="l">Combo multiplier</span><span class="r">up to x2.25</span></div>
        </div>
      </div>

      <div class="panel">
        <h3>Weekly Leaderboard</h3>
        <div id="leaderboard"></div>
      </div>

      <div class="panel">
        <h3>Daily Rewards</h3>
        <div class="daily">
          <div class="day claimed">1<span class="amt">200</span></div>
          <div class="day claimed">2<span class="amt">400</span></div>
          <div class="day today" title="Claim today">3<span class="amt">1K</span></div>
          <div class="day">4<span class="amt">800</span></div>
          <div class="day">5<span class="amt">1.2K</span></div>
          <div class="day">6<span class="amt">2K</span></div>
          <div class="day">7<span class="amt">5K</span></div>
        </div>
        <div style="font-size:0.7rem;color:#7fa085;margin-top:10px;text-align:center">Tap day 3 to claim your simulated reward</div>
      </div>

      <div class="panel">
        <h3>Wallet</h3>
        <div style="display:grid; gap:10px;">
          <div class="disabled-btn">Connect Wallet <span class="soon">Coming Soon</span></div>
          <div class="disabled-btn">Buy $VINI <span class="soon">Coming Soon</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="game-foot">
    <div class="fl">The future VINI football ecosystem starts here.</div>
    <div class="fd">Demo Mode — all balances, rewards and rankings are simulated until the official launch. Not financial advice.</div>
  </div>
</div>

<div class="toast" id="gameToast"></div>

<script src="game.js?v=9"></script>
<script>
  window.addEventListener('load', () => { setTimeout(() => document.getElementById('loader').classList.add('hide'), 1700); });
</script>
</body>
</html>

/* ============================================================
   VINI FOOTBALL ARENA — pitch-green design system
   ============================================================ */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background: var(--pitch-0);
  color: #f3f7f1;
  overflow-x: hidden;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
button { font-family: inherit; }

:root {
  /* greens (pitch) */
  --pitch-0:  #06250f;   /* darkest base */
  --pitch-1:  #0a3115;   /* stripe dark */
  --pitch-2:  #0e3d1b;   /* stripe light */
  --pitch-3:  #12491f;
  --pitch-edge: #04200c;
  --line-white: rgba(238, 255, 240, 0.55);
  --line-soft: rgba(238, 255, 240, 0.16);

  /* accents (VINI) */
  --gold: #FFD24A;
  --gold-deep: #C9962A;
  --neon: #39FF14;
  --neon-soft: #76ff5a;

  /* rarities */
  --r-comum: #9fb6a4;
  --r-raro: #4db8ff;
  --r-epico: #b06bff;
  --r-lendario: #FFD24A;

  --card: rgba(8, 40, 18, 0.72);
  --card-line: rgba(120, 220, 140, 0.18);

  --font-display: 'Bungee', sans-serif;
  --font-head: 'Russo One', sans-serif;
  --font-body: 'Space Grotesk', system-ui, sans-serif;
  --mono: ui-monospace, 'JetBrains Mono', 'SF Mono', monospace;
}

/* ============ PITCH BACKGROUND ============ */
.pitch-bg {
  position: fixed; inset: 0; z-index: -3; pointer-events: none;
  background:
    repeating-linear-gradient(
      180deg,
      var(--pitch-1) 0 64px,
      var(--pitch-2) 64px 128px
    );
}
.pitch-bg::after {
  /* vignette + top glow */
  content: ""; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 120% 70% at 50% -10%, rgba(57,255,20,0.10), transparent 55%),
    radial-gradient(ellipse 140% 100% at 50% 50%, transparent 35%, rgba(2,18,8,0.78) 100%);
}
.pitch-lines {
  position: fixed; inset: 0; z-index: -2; pointer-events: none;
  opacity: 0.5;
}

/* ============ TYPE / COMMON ============ */
section { padding: clamp(70px, 9vw, 120px) 24px; position: relative; }
.wrap { max-width: 1180px; margin: 0 auto; }

.eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-head);
  font-size: 0.74rem;
  letter-spacing: 0.3em;
  color: var(--neon);
  padding: 7px 16px;
  border: 1px solid rgba(57, 255, 20, 0.4);
  border-radius: 999px;
  background: rgba(57, 255, 20, 0.06);
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.4);
}
.eyebrow::before {
  content: ""; width: 7px; height: 7px; border-radius: 50%;
  background: var(--neon); box-shadow: 0 0 10px var(--neon);
}
.section-head { text-align: center; max-width: 720px; margin: 0 auto 54px; }
.section-head.left { text-align: left; margin-left: 0; }
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.6vw, 3.3rem);
  letter-spacing: 0.01em;
  margin: 18px 0 14px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1.02;
}
.section-title .accent { color: var(--gold); text-shadow: 0 0 22px rgba(255,210,74,0.5); }
.section-sub {
  color: #c2d6c5;
  font-size: 1.05rem;
  max-width: 600px;
  margin: 0 auto;
}
.section-head.left .section-sub { margin: 0; }

/* ============ NAV ============ */
.nav {
  position: sticky; top: 0; z-index: 60;
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  background: rgba(5, 32, 14, 0.7);
  border-bottom: 1px solid var(--card-line);
}
.nav-inner {
  max-width: 1180px; margin: 0 auto;
  padding: 14px 24px;
  display: flex; align-items: center; justify-content: space-between; gap: 18px;
}
.brand { display: flex; align-items: center; gap: 12px; }
.brand-mark {
  width: 40px; height: 40px;
  display: grid; place-items: center;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #FFE680, var(--gold) 55%, var(--gold-deep) 100%);
  color: #06250f;
  font-family: var(--font-display); font-size: 1rem;
  box-shadow: 0 0 0 2px #04200c, 0 0 0 3px var(--gold), 0 0 18px rgba(255,210,74,0.5);
}
.brand-name {
  font-family: var(--font-display);
  font-size: 1rem; letter-spacing: 0.04em;
  color: #fff; line-height: 1.05;
}
.brand-name b { color: var(--gold); display: block; font-size: 0.62rem; letter-spacing: 0.28em; }
.nav-links { display: flex; gap: 24px; font-size: 0.86rem; }
.nav-links a {
  text-transform: uppercase; letter-spacing: 0.12em; opacity: 0.78;
  transition: color .2s, opacity .2s, text-shadow .2s;
  font-family: var(--font-head); font-size: 0.74rem;
}
.nav-links a:hover { color: var(--neon); opacity: 1; text-shadow: 0 0 10px rgba(57,255,20,0.55); }
.nav-links a.nav-play {
  opacity: 1; color: #06250f; background: linear-gradient(180deg, #FFE38A, var(--gold) 60%, var(--gold-deep));
  padding: 7px 16px; border-radius: 999px; box-shadow: 0 0 16px rgba(255,210,74,0.4);
  display: inline-flex; align-items: center; gap: 5px;
}
.nav-links a.nav-play:hover { color: #06250f; text-shadow: none; transform: translateY(-1px); box-shadow: 0 0 24px rgba(255,210,74,0.65); }
@media (max-width: 920px) {
  .nav-links { display: flex; gap: 0; }
  .nav-links a:not(.nav-play) { display: none; }
  .nav-links a.nav-play { display: inline-flex; }
}

/* ============ GAME CARD ============ */
.game-card {
  position: relative; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px; align-items: center;
  border-radius: 24px; overflow: hidden; padding: 44px 44px;
  background:
    repeating-linear-gradient(115deg, rgba(0,0,0,0.10) 0 40px, transparent 40px 80px),
    linear-gradient(150deg, #12491f, #06250f 70%);
  border: 1px solid rgba(255,210,74,0.35);
  box-shadow: 0 30px 70px rgba(0,0,0,0.45), inset 0 0 60px rgba(0,0,0,0.3);
  transition: transform .25s, box-shadow .25s, border-color .25s;
}
.game-card:hover { transform: translateY(-5px); border-color: var(--gold); box-shadow: 0 40px 90px rgba(0,0,0,0.55), 0 0 50px rgba(255,210,74,0.25); }
.gc-glow { position: absolute; inset: 0; background: radial-gradient(circle at 80% 30%, rgba(57,255,20,0.18), transparent 55%); pointer-events: none; }
.gc-body { position: relative; z-index: 2; }
.gc-title { font-family: var(--font-display); font-size: clamp(1.8rem, 4vw, 3rem); text-transform: uppercase; color: #fff; line-height: 1; margin: 16px 0 14px; }
.gc-title span { background: linear-gradient(180deg, #FFF1B8, var(--gold) 55%, var(--gold-deep)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
.gc-sub { color: #cfe6d2; font-size: 1rem; max-width: 480px; margin-bottom: 18px; }
.gc-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px; }
.gc-tag { font-family: var(--font-head); font-size: 0.66rem; letter-spacing: 0.06em; text-transform: uppercase; color: #d4e6d6; padding: 7px 13px; border-radius: 999px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); }
.gc-btn { pointer-events: none; }
.gc-visual { position: relative; z-index: 2; height: 220px; }
.gc-goal {
  position: absolute; top: 10px; left: 50%; transform: translateX(-50%); width: 78%; height: 120px;
  border: 4px solid #f4fbf2; border-bottom: none; border-radius: 4px 4px 0 0;
  background:
    repeating-linear-gradient(90deg, transparent 0 15px, rgba(220,255,225,0.18) 15px 16px),
    repeating-linear-gradient(0deg, transparent 0 15px, rgba(220,255,225,0.18) 15px 16px);
  box-shadow: 0 0 24px rgba(255,255,255,0.12);
}
.gc-ball {
  position: absolute; bottom: 6px; left: 50%; width: 54px; height: 54px; border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fff, #cfe6d2 60%, #8fb495);
  box-shadow: 0 0 30px rgba(57,255,20,0.5), inset -5px -6px 12px rgba(0,0,0,0.25);
  transform: translateX(-50%);
  animation: gcShoot 2.6s ease-in-out infinite;
}
.gc-ball::after { content: ""; position: absolute; inset: 0; border-radius: 50%;
  background: radial-gradient(circle at 50% 30%, #0a3315 6px, transparent 7px), radial-gradient(circle at 26% 64%, #0a3315 4px, transparent 5px), radial-gradient(circle at 74% 64%, #0a3315 4px, transparent 5px); }
@keyframes gcShoot {
  0%, 12% { bottom: 6px; transform: translateX(-50%) scale(1); }
  48% { bottom: 96px; transform: translateX(-90%) scale(0.62); }
  60%, 100% { bottom: 6px; transform: translateX(-50%) scale(1); }
}
@media (max-width: 760px) {
  .game-card { grid-template-columns: 1fr; padding: 32px 28px; }
  .gc-visual { height: 170px; }
}
@media (max-width: 920px) { .nav-links { display: none; } }

/* ============ WALLET BUTTON ============ */
.wallet-btn {
  display: inline-flex; align-items: center; gap: 9px;
  padding: 10px 18px; border-radius: 999px; cursor: pointer;
  font-family: var(--font-head); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
  background: linear-gradient(180deg, #b388ff, #7a52d6);
  color: #fff; border: 1px solid rgba(255,255,255,0.3);
  box-shadow: 0 6px 20px rgba(122,82,214,0.4);
  transition: transform .2s, box-shadow .2s, filter .2s;
  white-space: nowrap;
}
.wallet-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(122,82,214,0.55); }
.wallet-btn svg { width: 16px; height: 16px; }
.wallet-btn.connected {
  background: rgba(57,255,20,0.1); color: var(--neon);
  border-color: rgba(57,255,20,0.45); box-shadow: 0 0 18px rgba(57,255,20,0.25);
}
.wallet-btn .wbal { font-family: var(--mono); font-size: 0.72rem; color: var(--gold); }

/* ============ BUTTONS ============ */
.btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 24px; border-radius: 999px;
  font-family: var(--font-head); font-size: 0.84rem;
  letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer;
  border: 1px solid transparent;
  transition: transform .2s, box-shadow .25s, background .25s, color .25s;
  background: rgba(255,255,255,0.05); color: #fff;
}
.btn svg { width: 18px; height: 18px; }
.btn:hover { transform: translateY(-2px); }
.btn-gold {
  background: linear-gradient(180deg, #FFE38A, var(--gold) 60%, var(--gold-deep));
  color: #06250f; border-color: rgba(255,255,255,0.4);
  box-shadow: 0 8px 26px rgba(255,210,74,0.35), inset 0 1px 0 rgba(255,255,255,0.6);
}
.btn-gold:hover { box-shadow: 0 12px 34px rgba(255,210,74,0.55), inset 0 1px 0 rgba(255,255,255,0.6); }
.btn-neon {
  background: rgba(57,255,20,0.08); color: var(--neon);
  border-color: rgba(57,255,20,0.45); text-shadow: 0 0 10px rgba(57,255,20,0.5);
}
.btn-neon:hover { background: rgba(57,255,20,0.16); box-shadow: 0 0 24px rgba(57,255,20,0.45); color: #d8ffcf; }
.btn-ghost { border-color: rgba(255,255,255,0.22); color: #eaeaea; }
.btn-ghost:hover { border-color: var(--gold); color: var(--gold); box-shadow: 0 0 20px rgba(255,210,74,0.25); }
.btn-sm { padding: 9px 16px; font-size: 0.72rem; }

/* ============ HERO ============ */
.hero {
  min-height: 92vh; display: flex; align-items: center;
  padding: 80px 24px 70px; position: relative; overflow: hidden;
}
.hero-grid {
  max-width: 1180px; margin: 0 auto;
  display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 50px; align-items: center;
}
@media (max-width: 940px) { .hero-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; } }
.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 7vw, 5.4rem); line-height: 0.96; letter-spacing: 0.01em;
  text-transform: uppercase; margin: 16px 0 12px;
  color: #fff;
}
.hero h1 .l1 {
  display: block;
  background: linear-gradient(180deg, #d8ffd0, #39FF14 70%, #1faf08);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(57,255,20,0.4));
}
.hero h1 .l2 {
  display: block;
  background: linear-gradient(180deg, #FFF1B8, var(--gold) 55%, var(--gold-deep));
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(255,210,74,0.45));
}
.hero .lede {
  font-size: 1.12rem; color: #d4e6d6; max-width: 520px; margin: 18px 0 30px;
}
@media (max-width: 940px) { .hero .lede { margin-inline: auto; } }
.hero .lede b { color: var(--neon); text-shadow: 0 0 10px rgba(57,255,20,0.45); }
.hero-cta { display: flex; flex-wrap: wrap; gap: 14px; }
@media (max-width: 940px) { .hero-cta { justify-content: center; } }
.hero-stats { display: flex; gap: 30px; margin-top: 38px; flex-wrap: wrap; }
@media (max-width: 940px) { .hero-stats { justify-content: center; } }
.hstat .v { font-family: var(--font-display); font-size: 1.7rem; color: var(--gold); text-shadow: 0 0 12px rgba(255,210,74,0.4); }
.hstat .k { font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9fc1a4; margin-top: 4px; }

/* hero pitch card (mini field with player) */
.hero-pitch {
  position: relative; aspect-ratio: 3/4; border-radius: 22px; overflow: hidden;
  background:
    repeating-linear-gradient(90deg, rgba(0,0,0,0.10) 0 38px, transparent 38px 76px),
    linear-gradient(150deg, #15692b, #0c3d18);
  border: 1px solid rgba(120,220,140,0.3);
  box-shadow: 0 30px 80px rgba(0,0,0,0.5), inset 0 0 60px rgba(0,0,0,0.3);
}
.hero-pitch svg { position: absolute; inset: 0; width: 100%; height: 100%; }

/* ============ NFT CARD (FUT style) ============ */
.player-card {
  width: 360px; max-width: 100%; border-radius: 20px; position: relative; overflow: hidden;
  background: #06140b;
  border: 3px solid var(--rar, var(--gold));
  box-shadow: 0 28px 70px rgba(0,0,0,0.55), 0 0 38px var(--rar-glow, rgba(255,210,74,0.3));
  font-family: var(--font-body);
}
.pc-upper {
  position: relative; height: 320px; overflow: hidden;
  background:
    radial-gradient(ellipse 78% 68% at 50% 40%, var(--rar-glow, rgba(255,210,74,0.4)), transparent 70%),
    repeating-linear-gradient(135deg, rgba(0,0,0,0.22) 0 16px, rgba(0,0,0,0) 16px 32px),
    linear-gradient(160deg, #155720, #0a2c12);
}
.pc-badges { position: absolute; top: 14px; left: 18px; z-index: 3; }
.pc-ovr { font-family: var(--font-head); font-size: 2.7rem; line-height: 0.85; color: #fff; text-shadow: 0 2px 8px rgba(0,0,0,0.6); }
.pc-pos { font-family: var(--font-head); font-size: 0.92rem; letter-spacing: 0.08em; color: var(--rar, var(--gold)); margin-top: 3px; text-shadow: 0 1px 4px rgba(0,0,0,0.6); }
.pc-rarity {
  position: absolute; top: 16px; right: 16px; z-index: 3;
  font-family: var(--font-head); font-size: 0.66rem; letter-spacing: 0.12em; text-transform: uppercase;
  padding: 7px 15px; border-radius: 999px; color: #2a1d02;
  background: linear-gradient(180deg, #FFE793, var(--rar, var(--gold)) 55%, var(--rar-deep, #C9962A));
  box-shadow: 0 4px 14px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.55);
}
.pc-portrait { position: absolute; inset: 0; display: grid; place-items: end center; z-index: 2; }
.pc-portrait .art-img { width: 100%; height: 100%; object-fit: cover; object-position: center 50%; }
.pc-portrait .avatar { width: 92%; height: 99%; position: relative; z-index: 1; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.45)); }
.pc-sparkles { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
.pc-sparkles i { position: absolute; color: var(--gold); filter: drop-shadow(0 0 6px rgba(255,210,74,0.85)); }

.pc-lower { background: linear-gradient(180deg, #0d2c17, #07200f); padding: 16px 20px 18px; }
.pc-name { font-family: var(--font-head); font-size: 1.7rem; letter-spacing: 0.01em; text-transform: uppercase; color: #fff; line-height: 1; }
.pc-stats { display: flex; gap: 28px; margin: 11px 0 14px; }
.pc-stats span { font-family: var(--font-head); font-size: 0.82rem; letter-spacing: 0.08em; color: #4f9e64; text-transform: uppercase; }
.pc-stats b { color: #fff; margin-left: 8px; font-family: var(--font-head); }
.pc-buyrow { display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; }
.pc-price .num { font-family: var(--font-head); font-size: 1.7rem; color: var(--gold); line-height: 1; text-shadow: 0 0 14px rgba(255,210,74,0.3); }
.pc-price .cur { display: flex; align-items: center; gap: 7px; font-family: var(--font-head); font-size: 0.86rem; color: #4f9e64; margin-top: 7px; }
.pc-price .cur::before { content: "S"; display: grid; place-items: center; width: 17px; height: 17px; border-radius: 50%; background: linear-gradient(180deg, #FFE793, var(--gold-deep)); color: #2a1d02; font-size: 0.6rem; font-family: var(--font-display); }
.pc-buy {
  flex: none; border: none; cursor: pointer; padding: 14px 32px; border-radius: 13px;
  font-family: var(--font-head); font-size: 1rem; letter-spacing: 0.05em; text-transform: uppercase; color: #2a1d02;
  background: linear-gradient(180deg, #FFE793, var(--gold) 55%, var(--gold-deep));
  box-shadow: 0 6px 18px rgba(255,210,74,0.4), inset 0 1px 0 rgba(255,255,255,0.55);
  transition: transform .18s, box-shadow .18s;
}
.pc-buy:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(255,210,74,0.6), inset 0 1px 0 rgba(255,255,255,0.55); }
.pc-buy.owned { background: rgba(57,255,20,0.14); color: var(--neon); box-shadow: inset 0 0 0 1px rgba(57,255,20,0.5); }

/* rarity tabs */
.rarity-tabs { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
.rarity-tab {
  padding: 9px 18px; border-radius: 999px; cursor: pointer;
  font-family: var(--font-head); font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase;
  background: rgba(255,255,255,0.04); color: #c2d6c5; border: 1px solid rgba(255,255,255,0.12);
  transition: all .2s;
}
.rarity-tab[data-active="true"] { color: #06250f; background: var(--tabc, var(--gold)); border-color: transparent; box-shadow: 0 0 18px var(--tabc, rgba(255,210,74,0.4)); }

/* nft showcase layout */
.nft-grid { display: grid; grid-template-columns: auto 1fr; gap: 50px; align-items: center; }
@media (max-width: 880px) { .nft-grid { grid-template-columns: 1fr; justify-items: center; } }
.nft-info .feat { display: grid; gap: 16px; margin-top: 24px; }
.nft-feat { display: flex; gap: 14px; align-items: flex-start; }
.nft-feat .fi {
  width: 40px; height: 40px; flex: none; border-radius: 11px; display: grid; place-items: center;
  background: rgba(57,255,20,0.1); border: 1px solid rgba(57,255,20,0.3); color: var(--neon);
  font-family: var(--font-display); font-size: 0.9rem;
}
.nft-feat h4 { font-family: var(--font-head); font-size: 0.95rem; letter-spacing: 0.04em; color: #fff; }
.nft-feat p { color: #b6cdba; font-size: 0.92rem; margin-top: 3px; }

/* ============ PHASES (ecosystem) ============ */
.phase-track { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
@media (max-width: 1080px) { .phase-track { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .phase-track { grid-template-columns: 1fr; } }
.phase {
  border: 1px solid var(--card-line); border-radius: 18px; padding: 26px 22px;
  background: var(--card); position: relative; overflow: hidden;
  transition: transform .25s, border-color .25s, box-shadow .25s;
}
.phase::before {
  content: ""; position: absolute; inset: 0;
  background: radial-gradient(circle at 100% 0%, rgba(57,255,20,0.16), transparent 55%);
  opacity: 0; transition: opacity .3s;
}
.phase:hover { transform: translateY(-5px); border-color: rgba(57,255,20,0.5); box-shadow: 0 14px 40px rgba(0,0,0,0.4); }
.phase:hover::before { opacity: 1; }
.phase .pn {
  font-family: var(--font-display); font-size: 2.2rem; line-height: 1;
  background: linear-gradient(180deg, #FFE38A, var(--gold-deep));
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
}
.phase .pl { font-family: var(--font-head); color: var(--neon); letter-spacing: 0.14em; font-size: 0.68rem; text-transform: uppercase; margin: 8px 0 14px; text-shadow: 0 0 8px rgba(57,255,20,0.4); }
.phase ul { list-style: none; display: grid; gap: 9px; }
.phase li { display: flex; gap: 9px; align-items: flex-start; font-size: 0.86rem; color: #d4e6d6; }
.phase li .ck {
  width: 15px; height: 15px; flex: none; margin-top: 2px; display: grid; place-items: center;
  border-radius: 50%; border: 1px solid rgba(57,255,20,0.45); color: var(--neon);
  background: rgba(57,255,20,0.08); font-size: 0.55rem;
}
.phase .ptag {
  position: absolute; top: 18px; right: 18px; font-family: var(--font-head); font-size: 0.56rem;
  letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 9px; border-radius: 999px;
}
.ptag.now { color: var(--neon); background: rgba(57,255,20,0.12); border: 1px solid rgba(57,255,20,0.4); }
.ptag.soon { color: #9fc1a4; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); }

/* ============ TEAM BUILDER ============ */
.builder-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 30px; align-items: start; }
@media (max-width: 960px) { .builder-grid { grid-template-columns: 1fr; } }
.pitch-board {
  position: relative; aspect-ratio: 3/4.1; border-radius: 18px; overflow: hidden;
  background:
    repeating-linear-gradient(180deg, rgba(0,0,0,0.10) 0 44px, transparent 44px 88px),
    linear-gradient(160deg, #15692b, #0a3315);
  border: 1px solid rgba(120,220,140,0.3);
  box-shadow: inset 0 0 70px rgba(0,0,0,0.4);
}
.pitch-board .field-svg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.slot {
  position: absolute; transform: translate(-50%, -50%);
  width: 58px; height: 58px; border-radius: 50%; cursor: pointer;
  display: grid; place-items: center; text-align: center;
  border: 2px dashed rgba(255,255,255,0.4); background: rgba(0,0,0,0.25);
  transition: all .2s;
}
.slot:hover { border-color: var(--neon); box-shadow: 0 0 18px rgba(57,255,20,0.4); }
.slot.filled { border-style: solid; border-color: var(--rar, var(--gold)); background: rgba(6,30,14,0.85); box-shadow: 0 0 16px var(--rar-glow, rgba(255,210,74,0.4)); }
.slot.selected { border-color: var(--neon); box-shadow: 0 0 0 3px rgba(57,255,20,0.4), 0 0 22px rgba(57,255,20,0.5); }
.slot .s-pos { font-family: var(--font-head); font-size: 0.56rem; letter-spacing: 0.08em; color: rgba(255,255,255,0.7); }
.slot.filled .s-ovr {
  position: absolute; z-index: 2; bottom: -7px; left: 50%; transform: translateX(-50%);
  background: var(--rar, var(--gold)); color: #06250f; font-family: var(--font-display);
  font-size: 0.56rem; line-height: 1; padding: 2px 7px; border-radius: 999px; box-shadow: 0 2px 6px rgba(0,0,0,0.55);
}
.slot.filled .s-name {
  position: absolute; z-index: 2; top: calc(100% + 11px); left: 50%; transform: translateX(-50%);
  width: 84px; text-align: center; font-size: 0.52rem; color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  letter-spacing: 0.04em; text-transform: uppercase; text-shadow: 0 1px 4px rgba(0,0,0,0.8);
}
.slot-face { position: absolute; inset: 2px; border-radius: 50%; overflow: hidden; z-index: 0; background: #06250f; }
.slot-face .art-img { position: absolute; width: 150%; height: 150%; left: 50%; top: 50%; transform: translate(-50%, -50%); object-fit: cover; object-position: center 30%; }
.slot-face .avatar { position: absolute; width: 150%; height: 178%; left: 50%; top: -12%; transform: translateX(-50%); }

.builder-side { display: flex; flex-direction: column; gap: 18px; }
.team-ovr {
  border: 1px solid var(--card-line); border-radius: 16px; padding: 18px 20px; background: var(--card);
  display: flex; align-items: center; justify-content: space-between;
}
.team-ovr .big { font-family: var(--font-display); font-size: 2.6rem; color: var(--gold); line-height: 0.9; text-shadow: 0 0 16px rgba(255,210,74,0.4); }
.team-ovr .k { font-size: 0.64rem; letter-spacing: 0.18em; text-transform: uppercase; color: #9fc1a4; }
.team-ovr .chem .ck { font-family: var(--font-head); font-size: 0.7rem; color: var(--neon); letter-spacing: 0.1em; }

.roster-head { display: flex; align-items: center; justify-content: space-between; }
.roster-head h4 { font-family: var(--font-head); font-size: 0.84rem; letter-spacing: 0.1em; text-transform: uppercase; color: #fff; }
.roster { display: grid; gap: 8px; max-height: 360px; overflow-y: auto; padding-right: 4px; }
.roster::-webkit-scrollbar { width: 6px; }
.roster::-webkit-scrollbar-thumb { background: rgba(120,220,140,0.3); border-radius: 3px; }
.r-player {
  display: grid; grid-template-columns: 38px 1fr auto auto; gap: 12px; align-items: center;
  padding: 10px 12px; border-radius: 12px; cursor: pointer;
  background: rgba(8,40,18,0.6); border: 1px solid rgba(255,255,255,0.07);
  transition: all .18s;
}
.r-player:hover { border-color: rgba(57,255,20,0.4); transform: translateX(3px); }
.r-player[data-used="true"] { opacity: 0.38; }
.r-player[data-selected="true"] { border-color: var(--neon); box-shadow: 0 0 16px rgba(57,255,20,0.3); }
.r-badge { width: 38px; height: 38px; border-radius: 9px; display: grid; place-items: center; font-family: var(--font-display); font-size: 0.92rem; color: #06250f; }
.r-meta .rn { font-family: var(--font-head); font-size: 0.78rem; color: #fff; letter-spacing: 0.03em; }
.r-meta .rp { font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: #9fc1a4; }
.r-pos { font-family: var(--font-head); font-size: 0.66rem; color: #c2d6c5; }
.r-rar { font-size: 0.54rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 8px; border-radius: 999px; color: #06250f; }

/* ============ MARKETPLACE ============ */
.mkt-bar { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 28px; }
.filters { display: flex; gap: 9px; flex-wrap: wrap; }
.filter {
  padding: 8px 16px; border-radius: 999px; cursor: pointer;
  font-family: var(--font-head); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase;
  background: rgba(255,255,255,0.04); color: #c2d6c5; border: 1px solid rgba(255,255,255,0.12); transition: all .2s;
}
.filter[data-active="true"] { color: #06250f; background: var(--neon); border-color: transparent; box-shadow: 0 0 16px rgba(57,255,20,0.4); }
.mkt-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
@media (max-width: 1000px) { .mkt-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 540px) { .mkt-grid { grid-template-columns: 1fr; } }
.mkt-card {
  border-radius: 16px; overflow: hidden; position: relative;
  background: linear-gradient(170deg, rgba(14,55,27,0.92), rgba(6,30,14,0.96));
  border: 1px solid var(--rar, rgba(255,255,255,0.12));
  box-shadow: 0 12px 30px rgba(0,0,0,0.4);
  transition: transform .22s, box-shadow .22s;
}
.mkt-card:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(0,0,0,0.5), 0 0 24px var(--rar-glow, rgba(255,210,74,0.25)); }
.mkt-art {
  height: 150px; position: relative; display: grid; place-items: center;
  background:
    repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 7px, transparent 7px 14px),
    radial-gradient(circle at 50% 30%, var(--rar-glow, rgba(255,210,74,0.3)), rgba(6,30,14,0.5) 72%);
}
.mkt-art .ovr { position: absolute; z-index: 3; top: 10px; left: 12px; font-family: var(--font-display); font-size: 1.5rem; color: #fff; text-shadow: 0 2px 6px rgba(0,0,0,0.6); }
.mkt-art .pos { position: absolute; z-index: 3; top: 44px; left: 13px; font-family: var(--font-head); font-size: 0.6rem; letter-spacing: 0.12em; color: var(--rar, var(--gold)); text-shadow: 0 1px 4px rgba(0,0,0,0.7); }
.mkt-art .rar { position: absolute; z-index: 3; top: 10px; right: 12px; font-family: var(--font-head); font-size: 0.52rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 3px 9px; border-radius: 999px; color: #06250f; background: var(--rar, var(--gold)); }
.mkt-art { display: grid; place-items: end center; overflow: hidden; }
.mkt-art .avatar { width: 74%; height: 98%; filter: drop-shadow(0 5px 8px rgba(0,0,0,0.35)); }
.mkt-art .art-img { position: absolute; z-index: 1; left: 50%; top: 50%; transform: translate(-50%, -50%); height: 104%; width: auto; object-fit: contain; }
.mkt-body { padding: 13px 15px 15px; }
.mkt-name { font-family: var(--font-head); font-size: 0.84rem; color: #fff; letter-spacing: 0.03em; text-transform: uppercase; }
.mkt-mini { display: flex; gap: 10px; margin: 8px 0 12px; }
.mkt-mini span { font-size: 0.58rem; letter-spacing: 0.06em; color: #9fc1a4; text-transform: uppercase; white-space: nowrap; }
.mkt-mini b { color: #fff; font-family: var(--mono); margin-left: 4px; }
.mkt-foot { display: flex; align-items: center; justify-content: space-between; }
.mkt-price { font-family: var(--font-display); color: var(--gold); font-size: 0.98rem; }
.mkt-price small { display: block; font-family: var(--font-body); font-size: 0.52rem; color: #9fc1a4; letter-spacing: 0.12em; }
.buy-mini {
  padding: 8px 15px; border-radius: 9px; cursor: pointer; border: none;
  font-family: var(--font-head); font-size: 0.64rem; letter-spacing: 0.1em; text-transform: uppercase;
  background: linear-gradient(180deg, #FFE38A, var(--gold-deep)); color: #06250f;
  transition: transform .18s, box-shadow .18s;
}
.buy-mini:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(255,210,74,0.4); }
.buy-mini.owned { background: rgba(57,255,20,0.12); color: var(--neon); border: 1px solid rgba(57,255,20,0.4); }

/* ============ PVP SCOREBOARD ============ */
.pvp-wrap { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 26px; align-items: start; }
@media (max-width: 940px) { .pvp-wrap { grid-template-columns: 1fr; } }
.scoreboard {
  border: 1px solid var(--card-line); border-radius: 20px; overflow: hidden;
  background: linear-gradient(180deg, rgba(6,30,14,0.95), rgba(4,24,11,0.98));
  box-shadow: 0 24px 60px rgba(0,0,0,0.5);
}
.sb-top {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 20px; background: rgba(0,0,0,0.3); border-bottom: 1px solid rgba(255,255,255,0.07);
}
.sb-live { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-head); font-size: 0.66rem; letter-spacing: 0.2em; text-transform: uppercase; color: #ff5d6c; }
.sb-live::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: #ff5d6c; box-shadow: 0 0 10px #ff5d6c; animation: blink 1.3s ease-in-out infinite; }
@keyframes blink { 0%,100%{opacity:1; transform:scale(1);} 50%{opacity:.4; transform:scale(.8);} }
.sb-comp { font-family: var(--font-head); font-size: 0.66rem; letter-spacing: 0.16em; text-transform: uppercase; color: #9fc1a4; }
.sb-main { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 28px 20px; gap: 14px; }
.sb-team { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }
.sb-crest {
  width: 64px; height: 64px; border-radius: 16px; display: grid; place-items: center;
  font-family: var(--font-display); font-size: 1.5rem; color: #06250f;
}
.sb-team .tn { font-family: var(--font-head); font-size: 0.8rem; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; }
.sb-team .tovr { font-size: 0.6rem; letter-spacing: 0.14em; color: #9fc1a4; text-transform: uppercase; }
.sb-center { text-align: center; }
.sb-score { font-family: var(--font-display); font-size: 3.4rem; color: #fff; line-height: 0.9; letter-spacing: 0.04em; }
.sb-score span { color: var(--gold); }
.sb-clock { font-family: var(--mono); font-size: 0.92rem; color: var(--neon); margin-top: 6px; }
.sb-clock.ft { color: var(--gold); }
.sb-bar { height: 8px; background: rgba(255,255,255,0.1); display: flex; }
.sb-bar i { height: 100%; }
.sb-bar .home { background: linear-gradient(90deg, var(--neon), #1faf08); }
.sb-bar .away { background: linear-gradient(90deg, #ff8a3d, #ff5d6c); margin-left: auto; }
.sb-actions { display: flex; gap: 12px; padding: 16px 20px; border-top: 1px solid rgba(255,255,255,0.07); }
.sb-actions .btn { flex: 1; justify-content: center; }

.pvp-feed {
  border: 1px solid var(--card-line); border-radius: 18px; background: var(--card);
  padding: 18px 20px; display: flex; flex-direction: column; gap: 4px; min-height: 200px;
}
.pvp-feed h4 { font-family: var(--font-head); font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; color: #fff; margin-bottom: 12px; }
.feed-list { display: flex; flex-direction: column; gap: 9px; }
.feed-ev { display: flex; gap: 10px; align-items: baseline; font-size: 0.82rem; color: #d4e6d6; animation: feedIn .35s ease; }
@keyframes feedIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
.feed-ev .min { font-family: var(--mono); font-size: 0.7rem; color: var(--neon); width: 34px; flex: none; }
.feed-ev.goal .min { color: var(--gold); }
.feed-ev .ico { width: 16px; flex: none; }
.feed-empty { color: #7fa085; font-size: 0.84rem; }

.pvp-reward {
  margin-top: 16px; padding: 14px 16px; border-radius: 12px;
  background: rgba(255,210,74,0.08); border: 1px solid rgba(255,210,74,0.3);
  display: none; align-items: center; gap: 12px;
}
.pvp-reward.show { display: flex; animation: feedIn .4s ease; }
.pvp-reward .rw-amt { font-family: var(--font-display); color: var(--gold); font-size: 1.1rem; }
.pvp-reward .rw-k { font-size: 0.66rem; letter-spacing: 0.12em; text-transform: uppercase; color: #c2d6c5; }

/* ============ RANKING ============ */
.rank-table { border: 1px solid var(--card-line); border-radius: 16px; overflow: hidden; background: var(--card); }
.rank-row { display: grid; grid-template-columns: 48px 1fr auto auto; gap: 14px; align-items: center; padding: 13px 20px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.rank-row:last-child { border-bottom: none; }
.rank-row.head { background: rgba(0,0,0,0.3); font-family: var(--font-head); font-size: 0.62rem; letter-spacing: 0.14em; text-transform: uppercase; color: #9fc1a4; }
.rank-pos { font-family: var(--font-display); font-size: 1.1rem; color: #fff; text-align: center; }
.rank-row.top .rank-pos { color: var(--gold); text-shadow: 0 0 12px rgba(255,210,74,0.5); }
.rank-mgr { display: flex; align-items: center; gap: 12px; }
.rank-mgr .av { width: 34px; height: 34px; border-radius: 9px; display: grid; place-items: center; font-family: var(--font-display); font-size: 0.8rem; color: #06250f; background: linear-gradient(180deg, #FFE38A, var(--gold-deep)); }
.rank-mgr .nm { font-family: var(--font-head); font-size: 0.82rem; color: #fff; letter-spacing: 0.03em; }
.rank-w { font-family: var(--mono); font-size: 0.82rem; color: #c2d6c5; }
.rank-pts { font-family: var(--font-display); font-size: 0.95rem; color: var(--neon); text-shadow: 0 0 10px rgba(57,255,20,0.35); }

/* ============ ECONOMY ============ */
.econ-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
@media (max-width: 820px) { .econ-grid { grid-template-columns: 1fr; } }
.econ-card {
  border: 1px solid var(--card-line); border-radius: 16px; padding: 24px 22px; background: var(--card);
  display: flex; flex-direction: column; gap: 6px;
}
.econ-card .ei { font-family: var(--font-display); font-size: 1.4rem; color: var(--gold); }
.econ-card .ek { font-family: var(--font-head); font-size: 0.78rem; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; }
.econ-card .ed { font-size: 0.84rem; color: #b6cdba; }
.econ-card .ep { margin-top: 10px; font-family: var(--mono); color: var(--neon); font-size: 1.05rem; }

/* ============ FOOTER ============ */
footer { border-top: 1px solid var(--card-line); padding: 56px 24px 40px; text-align: center; background: rgba(4,24,11,0.6); }
.foot-brand { font-family: var(--font-display); color: var(--gold); font-size: 1.5rem; letter-spacing: 0.04em; text-shadow: 0 0 18px rgba(255,210,74,0.45); }
.foot-slogan { color: #c2d6c5; margin-top: 10px; font-size: 0.95rem; }
.foot-socials { display: flex; gap: 14px; justify-content: center; margin: 24px 0; }
.foot-socials a { width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #fff; transition: all .2s; }
.foot-socials a:hover { color: var(--neon); border-color: rgba(57,255,20,0.4); box-shadow: 0 0 18px rgba(57,255,20,0.25); transform: translateY(-3px); }
.foot-socials svg { width: 20px; height: 20px; }
.disclaimer { max-width: 600px; margin: 0 auto; color: #7fa085; font-size: 0.8rem; line-height: 1.6; }
.copy { margin-top: 18px; color: #5a7a5f; font-size: 0.74rem; letter-spacing: 0.1em; text-transform: uppercase; }

/* toast */
.toast {
  position: fixed; bottom: 26px; left: 50%; transform: transl(-50%, 20px);
  transform: translateX(-50%) translateY(20px);
  background: rgba(6,30,14,0.96); border: 1px solid rgba(57,255,20,0.4);
  color: #fff; padding: 13px 22px; border-radius: 12px; z-index: 200;
  font-family: var(--font-head); font-size: 0.78rem; letter-spacing: 0.04em;
  box-shadow: 0 14px 40px rgba(0,0,0,0.5), 0 0 24px rgba(57,255,20,0.25);
  opacity: 0; pointer-events: none; transition: opacity .25s, transform .25s;
}
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
.toast .tg { color: var(--gold); }

/* reveal on scroll */
.reveal { opacity: 0; transform: translateY(26px); transition: opacity .6s ease, transform .6s ease; }
.reveal.in { opacity: 1; transform: none; }

/* ============================================================
   VISUAL ENHANCEMENTS
   ============================================================ */

/* ---- hero floodlights ---- */
.floodlights { position: absolute; inset: 0; z-index: -1; overflow: hidden; pointer-events: none; }
.floodlights span {
  position: absolute; top: -12%; width: 320px; height: 130%;
  background: linear-gradient(180deg, rgba(255,255,220,0.12), rgba(255,255,220,0.02) 55%, transparent 72%);
  filter: blur(22px); transform-origin: top center; mix-blend-mode: screen;
  animation: flicker 7s ease-in-out infinite;
}
.floodlights span:nth-child(1) { left: 4%;  transform: rotate(15deg); }
.floodlights span:nth-child(2) { left: 44%; transform: rotate(-5deg); animation-delay: 1.4s; }
.floodlights span:nth-child(3) { right: 4%; transform: rotate(-15deg); animation-delay: 2.7s; }
@keyframes flicker { 0%,100% { opacity: .85; } 45% { opacity: 1; } 70% { opacity: .7; } }

/* ---- field divider ---- */
.field-divider { display: flex; align-items: center; justify-content: center; max-width: 1180px; margin: 0 auto; padding: 0 24px; }
.fd-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--line-soft), transparent); }
.fd-circle { width: 56px; height: 56px; flex: none; border: 1.5px solid var(--line-soft); border-radius: 50%; position: relative; margin: 0 -1px; }
.fd-circle::after { content: ""; position: absolute; inset: 43%; border-radius: 50%; background: var(--line-soft); }

/* ---- stadium band ---- */
.stadium-band {
  position: relative; min-height: 320px; overflow: hidden;
  display: grid; place-items: center; text-align: center; padding: 90px 24px;
  border-block: 1px solid var(--card-line);
}
.stadium-band .sb-stands {
  position: absolute; left: 0; right: 0; top: 0; height: 64%;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,0.045) 0 5px, transparent 5px 11px),
    repeating-linear-gradient(180deg, rgba(0,0,0,0.18) 0 14px, transparent 14px 28px),
    linear-gradient(180deg, #061f0d, #0a3015);
}
.stadium-band .sb-pitch {
  position: absolute; left: -10%; right: -10%; bottom: -2%; height: 46%;
  background:
    repeating-linear-gradient(90deg, rgba(0,0,0,0.14) 0 46px, transparent 46px 92px),
    linear-gradient(180deg, #1a7a32, #0c4019);
  transform: perspective(420px) rotateX(42deg); transform-origin: bottom center;
  box-shadow: 0 -30px 60px rgba(0,0,0,0.4);
}
.stadium-band .sb-lights { position: absolute; top: 4%; left: 0; right: 0; height: 40%; pointer-events: none; }
.stadium-band .sb-lights span {
  position: absolute; top: 0; width: 84px; height: 9px; border-radius: 5px;
  background: linear-gradient(90deg, #FFE793, #fff, #FFE793);
  box-shadow: 0 0 34px 10px rgba(255,235,150,0.45);
}
.stadium-band .sb-lights span::after {
  content: ""; position: absolute; left: 50%; top: 100%; transform: translateX(-50%);
  border-left: 60px solid transparent; border-right: 60px solid transparent;
  border-top: 150px solid rgba(255,240,180,0.07);
}
.stadium-band .sb-lights span:nth-child(1) { left: 12%; }
.stadium-band .sb-lights span:nth-child(2) { left: 37%; }
.stadium-band .sb-lights span:nth-child(3) { left: 62%; }
.stadium-band .sb-lights span:nth-child(4) { left: 84%; }
.stadium-band .sb-content { position: relative; z-index: 3; }
.stadium-title { font-family: var(--font-display); font-size: clamp(2rem, 5.2vw, 3.4rem); color: #fff; text-transform: uppercase; letter-spacing: 0.02em; text-shadow: 0 6px 24px rgba(0,0,0,0.6); margin: 14px 0 10px; }
.stadium-title .accent { color: var(--gold); text-shadow: 0 0 26px rgba(255,210,74,0.55); }
.stadium-band p { color: #d4e6d6; font-size: 1.05rem; max-width: 460px; margin: 0 auto; }

/* ---- button shine sweep ---- */
.btn, .pc-buy, .buy-mini, .wallet-btn { position: relative; overflow: hidden; }
.btn::after, .pc-buy::after, .buy-mini::after, .wallet-btn::after {
  content: ""; position: absolute; top: 0; left: -130%; width: 55%; height: 100%;
  background: linear-gradient(100deg, transparent, rgba(255,255,255,0.5), transparent);
  transform: skewX(-18deg); pointer-events: none;
}
.btn:hover::after, .pc-buy:hover::after, .buy-mini:hover::after, .wallet-btn:hover::after { animation: shine .7s ease; }
@keyframes shine { from { left: -130%; } to { left: 150%; } }

/* ---- card 3D tilt + holographic legendary + sparkle twinkle ---- */
.player-card { transition: transform .18s ease, box-shadow .25s ease; transform-style: preserve-3d; will-change: transform; }
.mkt-card { transition: transform .18s ease, box-shadow .22s ease; will-change: transform; }
.player-card.is-legendary .pc-upper::before {
  content: ""; position: absolute; inset: 0; z-index: 4; pointer-events: none; mix-blend-mode: screen;
  background: linear-gradient(115deg, transparent 32%, rgba(255,255,255,0.22) 47%, rgba(180,255,210,0.10) 54%, transparent 68%);
  background-size: 250% 100%; animation: holo 4.8s ease-in-out infinite;
}
@keyframes holo { 0% { background-position: 130% 0; } 55% { background-position: -30% 0; } 100% { background-position: 130% 0; } }
.pc-sparkles i { animation: twinkle 2.4s ease-in-out infinite; }
.pc-sparkles i:nth-child(2n) { animation-duration: 3s; animation-delay: .5s; }
.pc-sparkles i:nth-child(3n) { animation-duration: 3.6s; animation-delay: 1s; }
@keyframes twinkle { 0%,100% { opacity: .25; transform: scale(.7); } 50% { opacity: 1; transform: scale(1.18); } }

/* richer avatars: soft floor glow */
.pc-portrait::after {
  content: ""; position: absolute; left: 50%; bottom: 4%; width: 70%; height: 26px; transform: translateX(-50%);
  background: radial-gradient(ellipse at center, var(--rar-glow, rgba(255,210,74,0.35)), transparent 70%);
  filter: blur(4px); z-index: 0; pointer-events: none;
}
.pc-portrait:has(.art-img)::after { display: none; }

/* count-up tabular */
.count { font-variant-numeric: tabular-nums; }

/* ---- mobile polish ---- */
@media (max-width: 700px) {
  section { padding: 58px 18px; }
  .hero { padding: 56px 18px 46px; min-height: auto; }
  .hero h1 { font-size: clamp(2.4rem, 13vw, 3.6rem); }
  .hero-stats { gap: 22px; }
  .player-card { width: 100%; }
  .pc-upper { height: 300px; }
  .pc-name { font-size: 1.5rem; }
  .nav-inner { padding: 11px 14px; gap: 10px; }
  .wallet-btn { padding: 9px 12px; font-size: 0.58rem; }
  .wallet-btn .wbal { display: none; }
  .stadium-band { min-height: 240px; padding: 64px 20px; }
  .field-divider { padding: 0 18px; }
  .builder-grid, .pvp-wrap { gap: 22px; }
}
@media (max-width: 460px) {
  .hero-cta { width: 100%; }
  .hero-cta .btn { flex: 1; justify-content: center; }
  .pc-buy { padding: 12px 22px; }
}

/* respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .floodlights span, .player-card.is-legendary .pc-upper::before, .pc-sparkles i, .stadium-band .sb-lights span { animation: none !important; }
}

/* ===== PRESALE ===== */
.presale-card {
  max-width: 560px;
  margin: 0 auto;
  padding: 32px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(20,30,22,0.7), rgba(10,16,12,0.7));
  border: 1px solid rgba(255,210,74,0.25);
  box-shadow: 0 20px 60px rgba(0,0,0,0.45);
}
.presale-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.presale-row label {
  font-family: var(--font-head);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: var(--gold);
  white-space: nowrap;
}
.presale-row input[type="number"] {
  flex: 1;
  min-width: 120px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255,210,74,0.3);
  background: rgba(255,255,255,0.04);
  color: #eefff0;
  font-family: var(--mono);
  font-size: 0.95rem;
}
.presale-row input[type="number"]:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(255,210,74,0.15);
}
.presale-bal, .presale-estimate {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--neon);
}
#presaleBuyBtn {
  width: 100%;
  padding: 14px;
  font-size: 1rem;
}
#presaleBuyBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.presale-status {
  margin-top: 16px;
  font-size: 0.88rem;
  line-height: 1.6;
  color: #eefff0;
}
.presale-status a { color: var(--gold); }
.presale-disclaimer {
  margin-top: 18px;
  font-size: 0.72rem;
  opacity: 0.6;
  line-height: 1.5;
}

/* ============================================================
   VINI FOOTBALL ARENA — data + interactivity  (English UI)
   ============================================================ */

/* ---------- rarity config ---------- */
const RARITY = {
  common:    { label: 'Common',    color: '#9fb6a4', glow: 'rgba(159,182,164,0.4)',  deep: '#6f8275' },
  rare:      { label: 'Rare',      color: '#4db8ff', glow: 'rgba(77,184,255,0.45)',  deep: '#2a7bc0' },
  epic:      { label: 'Epic',      color: '#b06bff', glow: 'rgba(176,107,255,0.5)',  deep: '#7d3fc4' },
  legendary: { label: 'Legendary', color: '#FFD24A', glow: 'rgba(255,210,74,0.55)', deep: '#C9962A' },
};

/* ---------- showcase players (one per rarity) ---------- */
const SHOWCASE = {
  common:    { name: 'Tiao Silva',   pos: 'CB', ovr: 71, rarity: 'common',    spd: 64, sho: 55, def: 78, ene: 80, price: '5,000' },
  rare:      { name: 'Rui Falcao',   pos: 'CM', ovr: 83, rarity: 'rare',      spd: 80, sho: 79, def: 74, ene: 86, price: '24,000' },
  epic:      { name: 'Kauã Prado',   pos: 'ST', ovr: 89, rarity: 'epic',      spd: 92, sho: 90, def: 41, ene: 84, price: '78,000' },
  legendary: { name: 'Vini Jr',       pos: 'LW', ovr: 96, rarity: 'legendary', spd: 98, sho: 93, def: 46, ene: 90, price: '420,000' },
};

/* ============================================================
   PLAYER ARTWORK — Vini Boy photo + procedural cartoon avatars
   ============================================================ */
const VINI_IMG = 'assets/vini-jr.png';
function isViniBoy(name) { return /vini/i.test(name); }

function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

/* palettes tuned to the Vini Boy character family */
const SKINS = ['#7a4a2c', '#8a5a36', '#6b3f24', '#9c6a40', '#5e3a1e', '#a9744a'];
const HAIRS = ['#161310', '#0e0c0a', '#241a10', '#1c1712'];
const KITS = [
  ['#39FF14', '#0a3b16'], ['#FFD24A', '#3a2a06'], ['#4db8ff', '#0a2a4a'],
  ['#ff5d6c', '#3a0a12'], ['#b06bff', '#241038'], ['#ff8a3d', '#3a1a05'],
  ['#f4f4f4', '#141414'], ['#1faf08', '#f4f4f4'],
];

let _avUid = 0;
function viniAvatar(name) {
  const h = hashStr(name);
  const skin = SKINS[h % SKINS.length];
  const hair = HAIRS[(h >>> 4) % HAIRS.length];
  const kit = KITS[(h >>> 7) % KITS.length];
  const prim = kit[0], trim = kit[1];
  const afro = (h >>> 11) % 3;          // 0 round, 1 fuller, 2 flat-ish
  const num = ((h >>> 13) % 30) + 1;
  const numCol = (prim === '#f4f4f4') ? '#141414' : '#fff';
  const u = 'a' + (_avUid++);
  // darker skin tone for shading
  const dark = 'rgba(0,0,0,0.18)';

  // afro shapes
  let afroEls = '';
  if (afro === 0) {
    afroEls = `
      <circle cx="60" cy="28" r="20" fill="${hair}"/>
      <circle cx="40" cy="34" r="14" fill="${hair}"/>
      <circle cx="80" cy="34" r="14" fill="${hair}"/>
      <circle cx="46" cy="18" r="13" fill="${hair}"/>
      <circle cx="74" cy="18" r="13" fill="${hair}"/>`;
  } else if (afro === 1) {
    afroEls = `
      <circle cx="60" cy="26" r="23" fill="${hair}"/>
      <circle cx="38" cy="36" r="15" fill="${hair}"/>
      <circle cx="82" cy="36" r="15" fill="${hair}"/>
      <circle cx="48" cy="15" r="14" fill="${hair}"/>
      <circle cx="72" cy="15" r="14" fill="${hair}"/>`;
  } else {
    afroEls = `
      <path d="M34,40 Q34,16 60,16 Q86,16 86,40 Q86,30 60,30 Q34,30 34,40 Z" fill="${hair}"/>
      <circle cx="40" cy="36" r="10" fill="${hair}"/>
      <circle cx="80" cy="36" r="10" fill="${hair}"/>`;
  }

  return `
  <svg class="avatar" viewBox="0 0 120 140" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
    <!-- jersey -->
    <path d="M6,140 C8,106 26,96 47,94 L60,104 L73,94 C94,96 112,106 114,140 Z" fill="${prim}"/>
    <path d="M47,94 L60,104 L73,94 L70,90 L60,98 L50,90 Z" fill="${trim}"/>
    <path d="M6,140 C8,106 26,96 47,94" fill="none" stroke="${trim}" stroke-width="3" opacity="0.5"/>
    <text x="60" y="128" text-anchor="middle" font-family="Bungee, sans-serif" font-size="17" fill="${numCol}" opacity="0.92">${num}</text>
    <!-- neck -->
    <rect x="50" y="74" width="20" height="20" rx="6" fill="${skin}"/>
    <rect x="50" y="74" width="20" height="6" fill="${dark}"/>
    <!-- ears -->
    <ellipse cx="32" cy="58" rx="5" ry="7" fill="${skin}"/>
    <ellipse cx="88" cy="58" rx="5" ry="7" fill="${skin}"/>
    <!-- afro behind head -->
    ${afroEls}
    <!-- head -->
    <ellipse cx="60" cy="56" rx="27" ry="29" fill="${skin}"/>
    <path d="M60,27 Q33,29 33,56 Q33,40 60,38 Z" fill="${dark}"/>
    <!-- eyebrows -->
    <path d="M44,49 Q50,46 56,49" fill="none" stroke="${hair}" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M64,49 Q70,46 76,49" fill="none" stroke="${hair}" stroke-width="2.4" stroke-linecap="round"/>
    <!-- eyes -->
    <ellipse cx="50" cy="55" rx="4.6" ry="5.2" fill="#fff"/>
    <ellipse cx="70" cy="55" rx="4.6" ry="5.2" fill="#fff"/>
    <circle cx="51" cy="56" r="2.6" fill="#3a2410"/>
    <circle cx="71" cy="56" r="2.6" fill="#3a2410"/>
    <circle cx="52" cy="55" r="0.9" fill="#fff"/>
    <circle cx="72" cy="55" r="0.9" fill="#fff"/>
    <!-- nose -->
    <path d="M59,58 Q57,64 60,65" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="1.6" stroke-linecap="round"/>
    <!-- big smile -->
    <path d="M47,67 Q60,80 73,67 Q60,72 47,67 Z" fill="#fff"/>
    <path d="M47,67 Q60,78 73,67" fill="none" stroke="rgba(0,0,0,0.35)" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`;
}

function playerArt(name) {
  if (isViniBoy(name)) return `<img class="art-img" src="${VINI_IMG}" alt="Vini Jr" />`;
  return viniAvatar(name);
}

/* ---------- team builder roster ---------- */
const ROSTER = [
  { id: 'p1',  name: 'Vini Jr',      pos: 'LW', ovr: 96, rarity: 'legendary' },
  { id: 'p2',  name: 'Kauã Prado',   pos: 'ST', ovr: 89, rarity: 'epic' },
  { id: 'p3',  name: 'Lobo Real',    pos: 'RW', ovr: 87, rarity: 'epic' },
  { id: 'p4',  name: 'Rui Falcao',   pos: 'CM', ovr: 83, rarity: 'rare' },
  { id: 'p5',  name: 'Dedé Mota',    pos: 'CM', ovr: 81, rarity: 'rare' },
  { id: 'p6',  name: 'Caio Veloz',   pos: 'CM', ovr: 79, rarity: 'rare' },
  { id: 'p7',  name: 'Bruno Sá',     pos: 'LB', ovr: 78, rarity: 'rare' },
  { id: 'p8',  name: 'Tiao Silva',   pos: 'CB', ovr: 76, rarity: 'common' },
  { id: 'p9',  name: 'Marco Pé',     pos: 'CB', ovr: 75, rarity: 'common' },
  { id: 'p10', name: 'Igor Lima',    pos: 'RB', ovr: 74, rarity: 'common' },
  { id: 'p11', name: 'Léo Muralha',  pos: 'GK', ovr: 82, rarity: 'rare' },
  { id: 'p12', name: 'Zeca Fox',     pos: 'ST', ovr: 80, rarity: 'rare' },
  { id: 'p13', name: 'Nando Rocha',  pos: 'CB', ovr: 72, rarity: 'common' },
  { id: 'p14', name: 'Pivete X',     pos: 'CM', ovr: 70, rarity: 'common' },
];

/* 4-3-3 formation slots (percent positions on the pitch) */
const FORMATION = [
  { id: 's-gk',  pos: 'GK', x: 50, y: 90 },
  { id: 's-lb',  pos: 'LB', x: 16, y: 70 },
  { id: 's-lcb', pos: 'CB', x: 38, y: 76 },
  { id: 's-rcb', pos: 'CB', x: 62, y: 76 },
  { id: 's-rb',  pos: 'RB', x: 84, y: 70 },
  { id: 's-lcm', pos: 'CM', x: 30, y: 50 },
  { id: 's-cm',  pos: 'CM', x: 50, y: 46 },
  { id: 's-rcm', pos: 'CM', x: 70, y: 50 },
  { id: 's-lw',  pos: 'LW', x: 20, y: 24 },
  { id: 's-st',  pos: 'ST', x: 50, y: 18 },
  { id: 's-rw',  pos: 'RW', x: 80, y: 24 },
];

/* ---------- marketplace listings ---------- */
const MARKET = [
  { name: 'Vini Jr',     pos: 'LW', ovr: 96, rarity: 'legendary', price: '420,000', spd: 98, sho: 93 },
  { name: 'Selva King',  pos: 'ST', ovr: 91, rarity: 'epic',      price: '96,000',  spd: 88, sho: 92 },
  { name: 'Kauã Prado',  pos: 'ST', ovr: 89, rarity: 'epic',      price: '78,000',  spd: 92, sho: 90 },
  { name: 'Lobo Real',   pos: 'RW', ovr: 87, rarity: 'epic',      price: '64,000',  spd: 90, sho: 85 },
  { name: 'Léo Muralha', pos: 'GK', ovr: 82, rarity: 'rare',      price: '31,000',  spd: 58, sho: 30 },
  { name: 'Rui Falcao',  pos: 'CM', ovr: 83, rarity: 'rare',      price: '24,000',  spd: 80, sho: 79 },
  { name: 'Bruno Sá',    pos: 'LB', ovr: 78, rarity: 'rare',      price: '18,500',  spd: 84, sho: 60 },
  { name: 'Zeca Fox',    pos: 'ST', ovr: 80, rarity: 'rare',      price: '21,000',  spd: 86, sho: 82 },
  { name: 'Tiao Silva',  pos: 'CB', ovr: 76, rarity: 'common',    price: '7,200',   spd: 64, sho: 55 },
  { name: 'Igor Lima',   pos: 'RB', ovr: 74, rarity: 'common',    price: '6,400',   spd: 79, sho: 52 },
  { name: 'Nando Rocha', pos: 'CB', ovr: 72, rarity: 'common',    price: '5,500',   spd: 66, sho: 40 },
  { name: 'Pivete X',    pos: 'CM', ovr: 70, rarity: 'common',    price: '5,000',   spd: 72, sho: 64 },
];

/* ---------- ranking ---------- */
const RANKING = [
  { mgr: 'NeonStriker',  init: 'NS', w: '38-4',  pts: 1248 },
  { mgr: 'GoldenFoot',   init: 'GF', w: '35-7',  pts: 1187 },
  { mgr: 'MoonKeeper',   init: 'MK', w: '33-9',  pts: 1102 },
  { mgr: 'SambaFlow',    init: 'SF', w: '31-11', pts: 1044 },
  { mgr: 'ViniArmy_01',  init: 'VA', w: '29-12', pts: 987 },
  { mgr: 'PitchWolf',    init: 'PW', w: '27-15', pts: 921 },
];

/* ============================================================
   helpers
   ============================================================ */
function rarStyle(r) {
  const c = RARITY[r];
  return `--rar:${c.color};--rar-glow:${c.glow};--rar-deep:${c.deep}`;
}
let toastT;
function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.innerHTML = msg;
  t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ============================================================
   WALLET (simulated Phantom)
   ============================================================ */
let wallet = { connected: false, addr: '', bal: 0 };
function initWallet() {
  const btn = document.getElementById('walletBtn');
  const render = () => {
    if (wallet.connected) {
      btn.classList.add('connected');
      btn.innerHTML = `<span class="wdot"></span>${wallet.addr} <span class="wbal">${wallet.bal.toLocaleString()} $VINI</span>`;
    } else {
      btn.classList.remove('connected');
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 7H5a1 1 0 0 1 0-2h14a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h15a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-3 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/></svg> Connect Phantom`;
    }
  };
  btn.addEventListener('click', () => {
    if (wallet.connected) {
      wallet = { connected: false, addr: '', bal: 0 };
      toast('Wallet disconnected');
    } else {
      const hex = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
      const r = n => Array.from({length:n}, () => hex[Math.floor(Math.random()*hex.length)]).join('');
      let bal = 250000; try { const sv = +localStorage.getItem('vini_balance'); if (sv && sv > 0) bal = sv; } catch(e) {}
      wallet = { connected: true, addr: r(4) + '…' + r(4), bal };
      try { localStorage.setItem('vini_balance', bal); } catch(e) {}
      toast('Phantom connected · <span class="tg">' + bal.toLocaleString() + ' $VINI</span> ready');
    }
    render();
  });
  render();
}

/* ============================================================
   NFT SHOWCASE CARD
   ============================================================ */
function cardHTML(p) {
  const r = RARITY[p.rarity];
  const sparkles = (p.rarity === 'legendary')
    ? `<div class="pc-sparkles"><i style="left:28%;top:40%;font-size:20px">✦</i><i style="left:17%;top:55%;font-size:12px">✦</i><i style="left:68%;top:24%;font-size:11px">✦</i><i style="left:74%;top:48%;font-size:15px">✦</i><i style="left:82%;top:64%;font-size:10px">✦</i><i style="left:23%;top:27%;font-size:9px">✦</i></div>`
    : '';
  return `
  <div class="player-card ${p.rarity === 'legendary' ? 'is-legendary' : ''}" style="${rarStyle(p.rarity)}">
    <div class="pc-upper">
      ${sparkles}
      <div class="pc-portrait">${playerArt(p.name)}</div>
      <div class="pc-badges"><div class="pc-ovr">${p.ovr}</div><div class="pc-pos">${p.pos}</div></div>
      <div class="pc-rarity">${r.label}</div>
    </div>
    <div class="pc-lower">
      <div class="pc-name">${p.name}</div>
      <div class="pc-stats"><span>PAC<b>${p.spd}</b></span><span>SHO<b>${p.sho}</b></span></div>
      <div class="pc-buyrow">
        <div class="pc-price"><div class="num">${p.price}</div><div class="cur">$VINI</div></div>
        <button class="pc-buy" onclick="cardBuy('${p.name.replace(/'/g, '')}','${p.price}',this)">Buy</button>
      </div>
    </div>
  </div>`;
}
function cardBuy(name, price, btn) {
  if (!wallet.connected) { toast('Connect your <span class="tg">Phantom</span> wallet first'); return; }
  if (btn) { btn.classList.add('owned'); btn.textContent = 'Owned'; }
  toast('Bought <span class="tg">' + name + '</span> · ' + price + ' $VINI');
}
function initShowcase() {
  const stage = document.getElementById('cardStage');
  const tabs = document.querySelectorAll('.rarity-tab');
  const set = r => {
    stage.innerHTML = cardHTML(SHOWCASE[r]);
    bindTilt(stage);
    tabs.forEach(t => {
      const on = t.dataset.r === r;
      t.dataset.active = on;
      t.style.setProperty('--tabc', RARITY[t.dataset.r].color);
    });
  };
  tabs.forEach(t => t.addEventListener('click', () => set(t.dataset.r)));
  set('legendary');
}

/* ============================================================
   TEAM BUILDER
   ============================================================ */
const lineup = {};      // slotId -> playerId
let selectedPlayer = null;
let selectedSlot = null;

function posMatch(slotPos, playerPos) {
  const groups = {
    GK: ['GK'], LB: ['LB','RB'], RB: ['LB','RB'], CB: ['CB'],
    CM: ['CM'], LW: ['LW','RW','ST'], RW: ['LW','RW','ST'], ST: ['ST','LW','RW'],
  };
  return (groups[slotPos] || []).includes(playerPos);
}

function buildPitch() {
  const board = document.getElementById('pitchBoard');
  FORMATION.forEach(s => {
    const el = document.createElement('div');
    el.className = 'slot'; el.id = s.id;
    el.style.left = s.x + '%'; el.style.top = s.y + '%';
    el.dataset.pos = s.pos;
    el.innerHTML = `<span class="s-pos">${s.pos}</span>`;
    el.addEventListener('click', () => onSlot(s.id));
    board.appendChild(el);
  });
}

function buildRoster() {
  const list = document.getElementById('roster');
  list.innerHTML = '';
  ROSTER.forEach(p => {
    const r = RARITY[p.rarity];
    const el = document.createElement('div');
    el.className = 'r-player'; el.dataset.id = p.id;
    el.innerHTML = `
      <span class="r-badge" style="background:linear-gradient(180deg,${r.color},${r.color}cc)">${p.ovr}</span>
      <div class="r-meta"><div class="rn">${p.name}</div><div class="rp">${r.label}</div></div>
      <span class="r-pos">${p.pos}</span>
      <span class="r-rar" style="background:${r.color}">${r.label[0]}</span>`;
    el.addEventListener('click', () => onPlayer(p.id));
    list.appendChild(el);
  });
}

function onPlayer(id) {
  selectedPlayer = (selectedPlayer === id) ? null : id;
  selectedSlot = null;
  // if a slot was selected first, place immediately
  refreshBuilder();
}
function onSlot(slotId) {
  if (selectedPlayer) {
    // place player (remove from any other slot)
    for (const k in lineup) if (lineup[k] === selectedPlayer) delete lineup[k];
    lineup[slotId] = selectedPlayer;
    selectedPlayer = null;
    toast('Player added to the lineup');
  } else if (lineup[slotId]) {
    // tap filled slot to remove
    delete lineup[slotId];
  } else {
    selectedSlot = (selectedSlot === slotId) ? null : slotId;
  }
  refreshBuilder();
}

function autoFill() {
  Object.keys(lineup).forEach(k => delete lineup[k]);
  const pool = [...ROSTER].sort((a,b) => b.ovr - a.ovr);
  FORMATION.forEach(s => {
    const idx = pool.findIndex(p => posMatch(s.pos, p.pos) && !Object.values(lineup).includes(p.id));
    const pick = idx >= 0 ? pool[idx] : pool.find(p => !Object.values(lineup).includes(p.id));
    if (pick) lineup[s.id] = pick.id;
  });
  selectedPlayer = null; selectedSlot = null;
  refreshBuilder();
  toast('Best XI auto-filled');
}
function clearTeam() {
  Object.keys(lineup).forEach(k => delete lineup[k]);
  selectedPlayer = null; selectedSlot = null;
  refreshBuilder();
}

function refreshBuilder() {
  // slots
  FORMATION.forEach(s => {
    const el = document.getElementById(s.id);
    const pid = lineup[s.id];
    el.classList.toggle('selected', selectedSlot === s.id);
    if (pid) {
      const p = ROSTER.find(x => x.id === pid);
      el.classList.add('filled');
      el.style.cssText += rarStyle(p.rarity);
      el.style.left = s.x + '%'; el.style.top = s.y + '%';
      el.innerHTML = `<div class="slot-face">${playerArt(p.name)}</div><span class="s-ovr">${p.ovr}</span><span class="s-name">${p.name.split(' ')[0]}</span>`;
    } else {
      el.classList.remove('filled');
      el.style.left = s.x + '%'; el.style.top = s.y + '%';
      el.innerHTML = `<span class="s-pos">${s.pos}</span>`;
    }
  });
  // roster used/selected
  document.querySelectorAll('.r-player').forEach(el => {
    const id = el.dataset.id;
    el.dataset.used = Object.values(lineup).includes(id);
    el.dataset.selected = (selectedPlayer === id);
  });
  // ratings
  const ids = Object.values(lineup);
  const players = ids.map(id => ROSTER.find(p => p.id === id));
  const count = players.length;
  const ovr = count ? Math.round(players.reduce((a,p) => a + p.ovr, 0) / count) : 0;
  // chemistry: % of slots whose player matches position group
  let chem = 0;
  FORMATION.forEach(s => { const pid = lineup[s.id]; if (pid) { const p = ROSTER.find(x=>x.id===pid); if (posMatch(s.pos, p.pos)) chem++; } });
  const chemPct = count ? Math.round((chem / count) * 100) : 0;
  document.getElementById('teamOvr').textContent = ovr || '--';
  document.getElementById('teamCount').textContent = `${count}/11 starters`;
  document.getElementById('teamChem').textContent = `${chemPct}% chemistry`;
}

/* ============================================================
   MARKETPLACE
   ============================================================ */
const owned = new Set();
function mktCardHTML(p, i) {
  const r = RARITY[p.rarity];
  return `
  <div class="mkt-card" data-rarity="${p.rarity}" style="${rarStyle(p.rarity)}">
    <div class="mkt-art">
      <span class="ovr">${p.ovr}</span><span class="pos">${p.pos}</span>
      <span class="rar">${r.label}</span>${playerArt(p.name)}
    </div>
    <div class="mkt-body">
      <div class="mkt-name">${p.name}</div>
      <div class="mkt-mini"><span>PAC <b>${p.spd}</b></span><span>SHO <b>${p.sho}</b></span></div>
      <div class="mkt-foot">
        <div class="mkt-price">${p.price}<small>$VINI</small></div>
        <button class="buy-mini" data-i="${i}">Buy</button>
      </div>
    </div>
  </div>`;
}
function initMarket() {
  const grid = document.getElementById('mktGrid');
  const render = (filter) => {
    grid.innerHTML = MARKET
      .map((p,i) => ({p,i}))
      .filter(({p}) => filter === 'all' || p.rarity === filter)
      .map(({p,i}) => mktCardHTML(p,i)).join('');
    grid.querySelectorAll('.buy-mini').forEach(b => {
      const i = +b.dataset.i;
      if (owned.has(i)) { b.classList.add('owned'); b.textContent = 'Owned'; }
      b.addEventListener('click', () => buy(i, b));
    });
    bindTilt(grid);
  };
  document.querySelectorAll('.filter').forEach(f => {
    f.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(x => x.dataset.active = false);
      f.dataset.active = true;
      render(f.dataset.f);
    });
  });
  render('all');
}
function buy(i, btn) {
  if (owned.has(i)) { toast('Already in your squad'); return; }
  if (!wallet.connected) { toast('Connect your <span class="tg">Phantom</span> wallet first'); return; }
  const p = MARKET[i];
  owned.add(i);
  btn.classList.add('owned'); btn.textContent = 'Owned';
  toast(`Bought <span class="tg">${p.name}</span> · ${p.price} $VINI`);
}

/* ============================================================
   PVP SCOREBOARD (match simulation)
   ============================================================ */
const PVP = {
  home: { name: 'Vini United', ovr: 88, init: 'VU', col: '#39FF14' },
  away: { name: 'Neon Galaxy', ovr: 85, init: 'NG', col: '#ff5d6c' },
};
let matchRunning = false;
const SCORERS_H = ['Vini Jr', 'Kauã Prado', 'Lobo Real', 'Rui Falcao'];
const SCORERS_A = ['Selva King', 'Zeca Fox', 'Dedé Mota'];

function initPvP() {
  document.getElementById('homeCrest').style.background = `linear-gradient(180deg, ${PVP.home.col}, ${PVP.home.col}aa)`;
  document.getElementById('awayCrest').style.background = `linear-gradient(180deg, ${PVP.away.col}, ${PVP.away.col}aa)`;
  document.getElementById('simBtn').addEventListener('click', simulate);
  document.getElementById('resetMatch').addEventListener('click', resetMatch);
  resetMatch();
}
function resetMatch() {
  document.getElementById('scoreH').textContent = '0';
  document.getElementById('scoreA').textContent = '0';
  const clk = document.getElementById('clock');
  clk.textContent = "0'"; clk.classList.remove('ft');
  document.getElementById('feedList').innerHTML = '<div class="feed-empty">Kick off to start the match simulation.</div>';
  document.getElementById('barHome').style.width = '50%';
  document.getElementById('barAway').style.width = '50%';
  document.getElementById('pvpReward').classList.remove('show');
}
function addEvent(min, txt, goal, side) {
  const feed = document.getElementById('feedList');
  if (feed.querySelector('.feed-empty')) feed.innerHTML = '';
  const el = document.createElement('div');
  el.className = 'feed-ev' + (goal ? ' goal' : '');
  const ico = goal ? '⚽' : (txt.includes('Yellow') ? '🟨' : '•');
  el.innerHTML = `<span class="min">${min}'</span><span class="ico">${ico}</span><span>${txt}</span>`;
  feed.prepend(el);
}
function simulate() {
  if (matchRunning) return;
  matchRunning = true;
  const btn = document.getElementById('simBtn');
  btn.textContent = 'Playing…'; btn.style.opacity = .7;
  resetMatch();
  document.getElementById('feedList').innerHTML = '';
  let h = 0, a = 0, min = 0;
  const pHome = PVP.home.ovr / (PVP.home.ovr + PVP.away.ovr);
  const clk = document.getElementById('clock');
  const tick = setInterval(() => {
    min += 3;
    clk.textContent = min + "'";
    // possession wiggle
    const poss = 50 + Math.round((pHome - .5) * 60 + (Math.random()*16 - 8));
    document.getElementById('barHome').style.width = poss + '%';
    document.getElementById('barAway').style.width = (100 - poss) + '%';
    // chance ~ every few ticks
    if (Math.random() < 0.30) {
      const homeChance = Math.random() < pHome;
      if (Math.random() < 0.5) {
        if (homeChance) { h++; document.getElementById('scoreH').textContent = h;
          addEvent(min, `<b style="color:var(--neon)">GOAL!</b> ${SCORERS_H[Math.floor(Math.random()*SCORERS_H.length)]} (${PVP.home.name})`, true); }
        else { a++; document.getElementById('scoreA').textContent = a;
          addEvent(min, `<b style="color:#ff8a3d">GOAL!</b> ${SCORERS_A[Math.floor(Math.random()*SCORERS_A.length)]} (${PVP.away.name})`, true); }
      } else {
        const who = homeChance ? PVP.home.name : PVP.away.name;
        const evs = ['Shot saved', 'Yellow card', 'Corner kick', 'Off the post!', 'Great tackle'];
        addEvent(min, `${evs[Math.floor(Math.random()*evs.length)]} — ${who}`, false);
      }
    }
    if (min >= 90) {
      clearInterval(tick);
      clk.textContent = "FT"; clk.classList.add('ft');
      matchRunning = false;
      btn.textContent = 'Play again'; btn.style.opacity = 1;
      finishMatch(h, a);
    }
  }, 360);
}
function finishMatch(h, a) {
  const res = h > a ? 'Vini United wins!' : h < a ? 'Neon Galaxy wins!' : 'Draw!';
  addEvent(90, `<b style="color:var(--gold)">FULL TIME — ${res}</b>`, false);
  const reward = h > a ? 2500 : h === a ? 800 : 0;
  const rw = document.getElementById('pvpReward');
  document.getElementById('rwAmt').textContent = '+' + reward.toLocaleString() + ' $VINI';
  document.getElementById('rwText').textContent = h > a ? 'Victory reward' : h === a ? 'Draw reward' : 'No reward — better luck next match';
  rw.classList.add('show');
  if (wallet.connected && reward) { wallet.bal += reward; const ev = new Event('click'); /* refresh */ }
}

/* ============================================================
   RANKING
   ============================================================ */
function initRanking() {
  const t = document.getElementById('rankBody');
  t.innerHTML = RANKING.map((r, i) => `
    <div class="rank-row ${i < 3 ? 'top' : ''}">
      <div class="rank-pos">${i+1}</div>
      <div class="rank-mgr"><span class="av">${r.init}</span><span class="nm">${r.mgr}</span></div>
      <div class="rank-w">${r.w}</div>
      <div class="rank-pts">${r.pts.toLocaleString()}</div>
    </div>`).join('');
}

/* ============================================================
   scroll reveal
   ============================================================ */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ============================================================
   visual enhancements: tilt, count-up, hero parallax
   ============================================================ */
function bindTilt(root) {
  if (!root) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  root.querySelectorAll('.player-card, .mkt-card').forEach(card => {
    if (card._tilt) return; card._tilt = true;
    const max = card.classList.contains('mkt-card') ? 5 : 7;
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

function initCount() {
  const els = document.querySelectorAll('.count[data-to]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target; io.unobserve(el);
      const to = parseFloat(el.dataset.to); const dur = 900; const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const v = Math.round(to * (1 - Math.pow(1 - p, 3)));
        el.textContent = v.toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  els.forEach(el => io.observe(el));
}

function initHeroParallax() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  const hero = document.querySelector('.hero');
  const pitch = document.getElementById('heroPitch');
  const lights = document.querySelector('.floodlights');
  if (!hero) return;
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (pitch) pitch.style.transform = `translate(${px * 16}px, ${py * 12}px)`;
    if (lights) lights.style.transform = `translateX(${px * 22}px)`;
  });
  hero.addEventListener('pointerleave', () => {
    if (pitch) pitch.style.transform = '';
    if (lights) lights.style.transform = '';
  });
}

/* ============================================================
   boot
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // reveal first so a later failure can never hide the whole page
  try { initReveal(); } catch (e) { console.error(e); }
  const safe = (label, fn) => { try { fn(); } catch (e) { console.error('[' + label + ']', e); } };
  safe('wallet', initWallet);
  safe('showcase', initShowcase);
  safe('pitch', buildPitch);
  safe('roster', buildRoster);
  safe('builder', refreshBuilder);
  safe('builderBtns', () => {
    document.getElementById('autoFill').addEventListener('click', autoFill);
    document.getElementById('clearTeam').addEventListener('click', clearTeam);
  });
  safe('market', initMarket);
  safe('pvp', initPvP);
  safe('ranking', initRanking);
  safe('count', initCount);
  safe('parallax', initHeroParallax);
});

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
  RATE_VINI_PER_SOL: 1000000, // how many VINI tokens 1 SOL buys
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
