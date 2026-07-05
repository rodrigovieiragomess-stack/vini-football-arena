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
