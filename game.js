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
