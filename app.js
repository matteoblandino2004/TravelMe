/* TravelMe — trip countdown and proximity planner. */

(function () {
  "use strict";

  const CITIES = window.TM_CITIES;
  const CATS = window.TM_CATS;
  const VIBES = window.TM_VIBES;
  const SKY = window.TM_SKYLINES;

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const city = (id) => CITIES.find((c) => c.id === id) || CITIES[0];
  const catLabel = (c) => (CATS[c] ? CATS[c].label : c);

  /* ---------- geometry ---------- */

  function km(a, b) {
    const R = 6371, rad = Math.PI / 180;
    const dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
    const la = a.lat * rad, lb = b.lat * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(la) * Math.cos(lb) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }

  const ROUTE_FACTOR = 1.28;          // streets are never straight lines
  const WALK_KMH = 4.6;
  const RIDE_KMH = 17;

  function distLabel(d) {
    if (state.units === "mi") {
      const mi = d * 0.621371;
      return mi < 0.2 ? Math.round(mi * 5280) + " ft" : mi.toFixed(mi < 10 ? 1 : 0) + " mi";
    }
    return d < 1 ? Math.round(d * 1000) + " m" : d.toFixed(d < 10 ? 1 : 0) + " km";
  }

  function timeLabel(d) {
    const walk = Math.round((d * ROUTE_FACTOR) / WALK_KMH * 60);
    if (walk <= 42) return walk + " min walk";
    const ride = Math.round((d * ROUTE_FACTOR) / RIDE_KMH * 60) + 5;
    return "~" + ride + " min ride";
  }

  /* ---------- time zones ---------- */

  function tzOffsetMs(date, tz) {
    const p = new Intl.DateTimeFormat("en-US", {
      timeZone: tz, hour12: false, year: "numeric", month: "2-digit",
      day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"
    }).formatToParts(date).reduce((a, x) => (a[x.type] = x.value, a), {});
    const asUTC = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute, +p.second);
    return asUTC - date.getTime();
  }

  // "2026-03-12T14:00" read as wall-clock time in `tz` -> epoch ms
  function zonedToEpoch(local, tz) {
    const m = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?$/.exec(local || "");
    if (!m) return NaN;
    const guess = Date.UTC(+m[1], +m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0));
    let off = tzOffsetMs(new Date(guess), tz);
    off = tzOffsetMs(new Date(guess - off), tz);
    return guess - off;
  }

  const clockIn = (tz) => new Intl.DateTimeFormat("en-GB",
    { timeZone: tz, hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());

  const dateLabel = (local, tz) => new Intl.DateTimeFormat("en-GB",
    { timeZone: tz, weekday: "short", day: "numeric", month: "short" })
    .format(new Date(zonedToEpoch(local, tz)));

  /* ---------- state ---------- */

  const LS_KEY = "travelme.v1";
  let state = { trips: [], activeId: null, units: "km", sort: "distance", seed: 1 };
  let remote = null;          // db document reference, when available
  let saveTimer = null;

  const uid = () => Math.random().toString(36).slice(2, 9);
  const trip = () => state.trips.find((t) => t.id === state.activeId) || state.trips[0];

  function seedTrip() {
    const d = new Date(Date.now() + 64 * 864e5);
    const arrive = d.toISOString().slice(0, 10) + "T14:20";
    const back = new Date(Date.now() + 71 * 864e5).toISOString().slice(0, 10);
    const tokyo = city("tokyo");
    const pick = (id) => tokyo.places.find((p) => p.id === id);
    return {
      id: uid(), example: true, cityId: "tokyo", name: "Tokyo, spring",
      arrive, back, vibes: ["foodie", "history"],
      hotel: tokyo.hotels[0],
      saved: ["sensoji", "ichiran", "teamlab", "shibuya"].map(pick).filter(Boolean),
      created: Date.now()
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.trips) && parsed.trips.length) return parsed;
      }
    } catch (e) { /* private mode, blocked storage — fall through to the seed */ }
    return null;
  }

  function persist() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
    if (!remote) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      remote.set({ state: JSON.parse(JSON.stringify(state)), updated: Date.now() })
        .catch(() => { $("syncNote").textContent = "SAVED IN THIS BROWSER"; });
    }, 500);
  }

  async function connect() {
    if (!window.claude || typeof window.claude.use !== "function") return;
    try {
      const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
      if (!db || !user) return;
      const id = await user.id();
      if (!id) return;
      remote = db.doc("data/users/" + id + "/trips");
      const snap = await remote.get();
      const incoming = snap.exists ? snap.data() : null;
      if (incoming && incoming.state && Array.isArray(incoming.state.trips) && incoming.state.trips.length) {
        state = Object.assign({ units: "km", sort: "distance", seed: 1 }, incoming.state);
        if (!trip()) state.activeId = state.trips[0].id;
        renderAll();
      } else {
        persist();
      }
      $("syncNote").textContent = "SYNCED TO YOUR ACCOUNT";
    } catch (e) { /* stay on local storage */ }
  }

  /* ---------- derived ---------- */

  function withDistance(t) {
    const list = (t.saved || []).map((p) => Object.assign({}, p, { dist: km(t.hotel, p) }));
    if (state.sort === "distance") list.sort((a, b) => a.dist - b.dist);
    else if (state.sort === "type") list.sort((a, b) =>
      a.c === b.c ? a.dist - b.dist : Object.keys(CATS).indexOf(a.c) - Object.keys(CATS).indexOf(b.c));
    return list;
  }

  function hash(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return ((h >>> 0) % 1000) / 1000;
  }

  function recommend(t, n) {
    const c = city(t.cityId);
    const have = new Set((t.saved || []).map((p) => p.id));
    const counts = {};
    (t.saved || []).forEach((p) => { counts[p.c] = (counts[p.c] || 0) + 1; });
    const vibeTags = new Set();
    (t.vibes || []).forEach((v) => {
      const def = VIBES.find((x) => x.id === v);
      if (def) def.tags.forEach((tag) => vibeTags.add(tag));
    });

    const scored = c.places.filter((p) => !have.has(p.id)).map((p) => {
      const dist = km(t.hotel, p);
      const near = dist <= 0.9 ? 2.3 : dist <= 1.8 ? 1.7 : dist <= 3.2 ? 1.0 : dist <= 6 ? 0.4 : 0;
      const matched = (p.t || []).filter((tag) => vibeTags.has(tag));
      const vibe = Math.min(matched.length * 1.7, 3.4);
      const gap = Math.max(0, 2.1 - (counts[p.c] || 0) * 1.05);
      const sig = p.star ? 2.2 : 0;
      const jitter = hash(p.id + ":" + state.seed) * 1.1;
      let why, icon;
      if (near >= 1.7 && near >= vibe && near >= gap) {
        why = distLabel(dist) + " from " + t.hotel.n + " — " + timeLabel(dist);
        icon = "walk";
      } else if (vibe >= gap && vibe > 0) {
        const v = VIBES.find((x) => x.tags.some((tag) => matched.includes(tag)));
        why = "Matches " + (v ? v.label.toLowerCase() : "your list");
        icon = "star";
      } else if (gap > 1) {
        why = "Nothing on your list yet for " + CATS[p.c].plural;
        icon = "gap";
      } else {
        why = "A signature " + c.name + " stop";
        icon = "star";
      }
      return Object.assign({}, p, { dist, score: near + vibe + gap + sig + jitter, why, icon });
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, n || 4);
  }

  /* ---------- icons ---------- */

  const ICON = {
    walk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="1.6"/><path d="m9 20 2.5-6.5L9 11l1-4 3 1.5 3 1"/><path d="m11.5 13.5 3 2 1 4.5"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8Z"/></svg>',
    gap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 8v5M12 16.5v.5"/><circle cx="12" cy="12" r="9"/></svg>',
    bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-9M3 13h18a2 2 0 0 1 2 2v3"/><path d="M7 13v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14"/></svg>'
  };

  /* ---------- render: chrome ---------- */

  function renderTrips() {
    const now = Date.now();
    $("trips").innerHTML = state.trips.map((t) => {
      const c = city(t.cityId);
      const days = Math.ceil((zonedToEpoch(t.arrive, c.tz) - now) / 864e5);
      const badge = days > 0 ? days + "d" : days === 0 ? "now" : "past";
      return '<button class="trip-tab" role="tab" data-trip="' + t.id + '" aria-selected="' +
        (t.id === state.activeId) + '">' + esc(t.name || c.name) +
        '<span class="tt-days">' + badge + "</span></button>";
    }).join("");
  }

  function stars(c1) {
    const cv = $("heroStars"), hero = $("hero");
    if (!cv || !hero.clientWidth) return;
    const w = hero.clientWidth, h = hero.clientHeight, dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = w * dpr; cv.height = h * dpr;
    cv.style.width = w + "px"; cv.style.height = h + "px";
    const ctx = cv.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 90; i++) {
      const x = hash("x" + i + c1) * w;
      const y = hash("y" + i + c1) * h * 0.62;
      const r = hash("r" + i + c1) * 1.15 + 0.25;
      ctx.globalAlpha = (1 - y / (h * 0.75)) * 0.8;
      ctx.fillStyle = "#fff";
      ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
    }
  }

  function renderHero() {
    const t = trip(), c = city(t.cityId);
    const hero = $("hero");
    hero.style.setProperty("--sky-1", c.sky[0]);
    hero.style.setProperty("--sky-2", c.sky[1]);
    hero.style.setProperty("--sky-3", c.sky[2]);
    hero.style.setProperty("--sky-ink", c.ink);
    hero.style.setProperty("--sky-lit", c.sky[2]);
    $("heroSkyline").innerHTML = '<svg viewBox="0 0 1200 340" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' +
      (SKY[c.id] || "") + "</svg>";
    $("heroCity").textContent = c.name;
    $("heroEyebrow").textContent = t.example ? "Example trip — edit it or start your own" : (t.name || "Your trip");
    $("heroSub").textContent = c.tagline;

    const nights = t.back
      ? Math.max(0, Math.round((zonedToEpoch(t.back, c.tz) - zonedToEpoch(t.arrive.slice(0, 10), c.tz)) / 864e5))
      : null;
    const saved = (t.saved || []).length;
    $("heroMeta").innerHTML = [
      '<span class="glass mono">' + esc(c.country.toUpperCase()) + "</span>",
      '<span class="glass">Landing <b>' + dateLabel(t.arrive, c.tz) + ", " + esc(t.arrive.slice(11)) + "</b></span>",
      nights !== null ? '<span class="glass"><b>' + nights + "</b> night" + (nights === 1 ? "" : "s") + "</span>" : "",
      '<span class="glass"><b>' + saved + "</b> spot" + (saved === 1 ? "" : "s") + " saved</span>",
      '<span class="glass mono">' + esc(c.name.toUpperCase()) + " " + clockIn(c.tz) + "</span>"
    ].join("");
    stars(c.sky[0]);
    tick();
  }

  function unit(n, label) {
    return '<div class="cd-unit"><div class="cd-num">' + String(n).padStart(2, "0") +
      '</div><div class="cd-label">' + label + "</div></div>";
  }

  function tick() {
    const t = trip();
    if (!t) return;
    const c = city(t.cityId);
    const start = zonedToEpoch(t.arrive, c.tz);
    const end = t.back ? zonedToEpoch(t.back + "T10:00", c.tz) : start + 3 * 864e5;
    const now = Date.now();
    let target, tail, big, small;

    if (now < start) {
      target = start;
      tail = ["days", "hours", "mins", "secs"];
      big = "Wheels down " + dateLabel(t.arrive, c.tz);
      small = "Local time in " + c.name + " is " + clockIn(c.tz);
    } else if (now < end) {
      target = end;
      tail = ["days", "hours", "mins", "left"];
      big = "You're in " + c.name;
      small = "Heading home " + (t.back ? dateLabel(t.back, c.tz) : "soon") + " · local time " + clockIn(c.tz);
    } else {
      $("countdown").innerHTML = unit(0, "days") + unit(0, "hours") + unit(0, "mins") + unit(0, "secs");
      $("statusBig").textContent = "Trip complete";
      $("statusSmall").textContent = "Edit the dates to run it back.";
      return;
    }

    let s = Math.max(0, Math.floor((target - now) / 1000));
    const d = Math.floor(s / 86400); s -= d * 86400;
    const h = Math.floor(s / 3600); s -= h * 3600;
    const m = Math.floor(s / 60); s -= m * 60;

    $("countdown").innerHTML =
      unit(d, tail[0]) + '<div class="cd-sep">:</div>' +
      unit(h, tail[1]) + '<div class="cd-sep">:</div>' +
      unit(m, tail[2]) + '<div class="cd-sep">:</div>' + unit(s, tail[3]);
    $("statusBig").textContent = big;
    $("statusSmall").textContent = small;
  }

  /* ---------- render: panels ---------- */

  function renderBase() {
    const t = trip(), c = city(t.cityId);
    const spots = withDistance(t);
    const far = spots.length ? spots[spots.length - 1] : null;
    $("baseCard").innerHTML =
      '<div class="base"><div class="base-pin">' + ICON.bed + "</div><div>" +
      '<div class="base-name">' + esc(t.hotel.n) + "</div>" +
      '<div class="base-where">' + esc(t.hotel.area) + ", " + esc(c.name) +
      (t.hotel.approx ? " · approximate" : "") + "</div>" +
      '<div class="base-coords mono">' + t.hotel.lat.toFixed(4) + ", " + t.hotel.lng.toFixed(4) + "</div>" +
      "</div></div>" +
      (far
        ? '<p class="panel-note" style="margin-top:10px">Everything you\'ve saved sits within ' +
          distLabel(far.dist) + " of here — furthest is " + esc(far.n) + ".</p>"
        : "");
  }

  function renderSorts() {
    const opts = [["distance", "Closest first"], ["type", "By type"], ["added", "Added order"]];
    $("sortRow").innerHTML = opts.map(([k, label]) =>
      '<button class="pill" data-sort="' + k + '" aria-pressed="' + (state.sort === k) + '">' +
      label + "</button>").join("");
  }

  function renderSaved() {
    const t = trip();
    const list = withDistance(t);
    if (!list.length) {
      $("savedList").innerHTML = '<div class="empty">No spots yet. Hit <b>Add spot</b> to pull in restaurants, ' +
        "sights and bars — each one gets measured from your hotel.</div>";
      $("savedNote").textContent = "";
      return;
    }
    $("savedList").innerHTML = list.map((p, i) =>
      '<div class="row"><div class="row-idx mono">' + (i + 1) + "</div>" +
      '<div><div class="row-name">' + esc(p.n) +
      '<span class="tag c-' + p.c + '">' + catLabel(p.c) + "</span>" +
      (p.star ? '<span class="star" title="Signature stop">&#9733;</span>' : "") + "</div>" +
      '<div class="row-sub">' + esc(p.area) + " · " + timeLabel(p.dist) +
      (p.approx ? " · approx." : "") + "</div></div>" +
      '<div class="row-end"><div class="dist"><b>' + distLabel(p.dist) + "</b><span>from base</span></div>" +
      '<button class="btn btn-icon btn-ghost" data-remove="' + esc(p.id) + '" aria-label="Remove ' +
      esc(p.n) + '">' + ICON.minus + "</button></div></div>").join("");

    const byCat = {};
    list.forEach((p) => { byCat[p.c] = (byCat[p.c] || 0) + 1; });
    const walkable = list.filter((p) => (p.dist * ROUTE_FACTOR) / WALK_KMH * 60 <= 25).length;
    $("savedNote").innerHTML = list.length + " saved · " + walkable + " within a 25-minute walk · " +
      Object.keys(byCat).map((k) => byCat[k] + " " + (byCat[k] === 1 ? CATS[k].one : CATS[k].plural)).join(", ");
  }

  function renderRecs() {
    const t = trip();
    const recs = recommend(t, 4);
    if (!recs.length) {
      $("recs").innerHTML = '<div class="empty">You have saved everything we know about in this city. Respect.</div>';
      return;
    }
    $("recs").innerHTML = recs.map((p) =>
      '<div class="rec" style="--rec-color:var(--cat-' + p.c + ')"><div>' +
      '<div class="rec-name">' + esc(p.n) + '<span class="tag c-' + p.c + '">' + catLabel(p.c) + "</span></div>" +
      '<div class="rec-why">' + esc(p.d) + "</div>" +
      '<div class="rec-reason">' + ICON[p.icon] + esc(p.why) + "</div></div>" +
      '<button class="btn btn-sm btn-primary" data-add="' + esc(p.id) + '">' + ICON.plus + "Add</button></div>").join("");
  }

  /* ---------- render: map ---------- */

  function projector(pts, W, H, pad) {
    const lat0 = pts.reduce((a, p) => a + p.lat, 0) / pts.length;
    const k = Math.cos(lat0 * Math.PI / 180);
    const xs = pts.map((p) => p.lng * k), ys = pts.map((p) => -p.lat);
    let minX = Math.min.apply(null, xs), maxX = Math.max.apply(null, xs);
    let minY = Math.min.apply(null, ys), maxY = Math.max.apply(null, ys);
    const spanX = Math.max(maxX - minX, 0.006), spanY = Math.max(maxY - minY, 0.006);
    const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
    minX = cx - spanX / 2; minY = cy - spanY / 2;
    const scale = Math.min((W - pad * 2) / spanX, (H - pad * 2) / spanY);
    const ox = (W - spanX * scale) / 2 - minX * scale;
    const oy = (H - spanY * scale) / 2 - minY * scale;
    return {
      x: (p) => p.lng * k * scale + ox,
      y: (p) => -p.lat * scale + oy,
      pxPerKm: scale / 111.32
    };
  }

  function renderMap() {
    const t = trip(), c = city(t.cityId);
    const W = 640, H = 460, pad = 42;
    const spots = withDistance(t);
    const recs = recommend(t, 4);
    const pts = [t.hotel].concat(spots, recs, c.districts);
    const pr = projector(pts, W, H, pad);
    const hx = pr.x(t.hotel), hy = pr.y(t.hotel);

    const parts = [];

    // water
    (c.water || []).forEach((w) => {
      const d = w.pts.map((p, i) => (i ? "L" : "M") + pr.x({ lat: p[0], lng: p[1] }).toFixed(1) + " " +
        pr.y({ lat: p[0], lng: p[1] }).toFixed(1)).join(" ");
      if (w.k === "river") {
        parts.push('<path class="map-water" d="' + d + '" fill="none" stroke-width="' + (w.w || 6) + '"/>');
      } else {
        const first = w.pts[0], last = w.pts[w.pts.length - 1];
        const fx = pr.x({ lat: first[0], lng: first[1] }), lx = pr.x({ lat: last[0], lng: last[1] });
        const ly = pr.y({ lat: last[0], lng: last[1] });
        const close = w.side === "SE"
          ? "L" + (W + 90) + " " + ly.toFixed(1) + " L" + (W + 90) + " " + (H + 90) + " L" + fx.toFixed(1) + " " + (H + 90)
          : "L" + lx.toFixed(1) + " " + (H + 90) + " L" + fx.toFixed(1) + " " + (H + 90);
        parts.push('<path class="map-water" d="' + d + " " + close + ' Z" stroke-width="0"/>');
      }
    });

    // distance rings around the hotel
    const reach = spots.length ? Math.max.apply(null, spots.map((p) => p.dist)) : 2;
    [0.5, 1, 2, 4, 8].forEach((r) => {
      const rp = r * pr.pxPerKm;
      if (rp < 34 || rp > 640 || r > reach * 1.25) return;
      parts.push('<circle class="map-hotel-ring" cx="' + hx.toFixed(1) + '" cy="' + hy.toFixed(1) +
        '" r="' + rp.toFixed(1) + '"/>');
      parts.push('<text class="map-dist" x="' + (hx - rp * 0.72).toFixed(1) + '" y="' + (hy - rp * 0.72).toFixed(1) +
        '" text-anchor="middle">' + distLabel(r) + "</text>");
    });

    // district labels
    c.districts.forEach((d) => {
      parts.push('<text class="map-dist" x="' + pr.x(d).toFixed(1) + '" y="' + pr.y(d).toFixed(1) +
        '" text-anchor="middle">' + esc(d.n) + "</text>");
    });

    // links + pins
    spots.forEach((p) => {
      parts.push('<line class="map-link" x1="' + hx.toFixed(1) + '" y1="' + hy.toFixed(1) +
        '" x2="' + pr.x(p).toFixed(1) + '" y2="' + pr.y(p).toFixed(1) + '"/>');
    });
    recs.forEach((p) => {
      parts.push('<g class="map-pin is-rec" data-tip="' + esc(p.n) + " · " + distLabel(p.dist) +
        '"><circle cx="' + pr.x(p).toFixed(1) + '" cy="' + pr.y(p).toFixed(1) +
        '" r="6" fill="var(--cat-' + p.c + ')"/></g>');
    });
    spots.forEach((p, i) => {
      parts.push('<g class="map-pin" data-tip="' + esc(p.n) + " · " + distLabel(p.dist) + " · " + timeLabel(p.dist) +
        '"><circle cx="' + pr.x(p).toFixed(1) + '" cy="' + pr.y(p).toFixed(1) +
        '" r="11" fill="var(--cat-' + p.c + ')"/><text x="' + pr.x(p).toFixed(1) + '" y="' +
        (pr.y(p) + 3.2).toFixed(1) + '" text-anchor="middle">' + (i + 1) + "</text></g>");
    });

    parts.push('<g class="map-pin" data-tip="' + esc(t.hotel.n) + ' · your base"><path class="map-hotel" d="M' +
      hx.toFixed(1) + " " + (hy - 13).toFixed(1) + "l11 13-11 13-11-13Z" + '"/></g>');

    $("mapWrap").innerHTML = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Map of saved spots around ' +
      esc(t.hotel.n) + '">' + parts.join("") + "</svg>" + '<div class="map-tip" id="mapTip"></div>';

    $("mapNote").textContent = c.name + " · rings every " + (state.units === "mi" ? "mile" : "km");
    $("mapLegend").innerHTML =
      '<span style="color:var(--accent)"><i></i>Your hotel</span>' +
      Object.keys(CATS).map((k) => '<span style="color:var(--cat-' + k + ')"><i></i>' + CATS[k].label + "</span>").join("") +
      '<span style="color:var(--ink-3)"><i style="opacity:.45"></i>Suggested</span>';

    const tip = $("mapTip"), wrap = $("mapWrap");
    wrap.querySelectorAll(".map-pin").forEach((g) => {
      const show = (ev) => {
        const r = wrap.getBoundingClientRect();
        const cxy = g.querySelector("circle, path").getBoundingClientRect();
        tip.textContent = g.dataset.tip;
        tip.style.left = (cxy.left + cxy.width / 2 - r.left) + "px";
        tip.style.top = (cxy.top - r.top) + "px";
        tip.classList.add("on");
      };
      g.addEventListener("mouseenter", show);
      g.addEventListener("focus", show);
      g.addEventListener("mouseleave", () => tip.classList.remove("on"));
      g.addEventListener("blur", () => tip.classList.remove("on"));
      g.setAttribute("tabindex", "0");
    });
  }

  function renderAll() {
    if (!trip()) { state.trips = [seedTrip()]; state.activeId = state.trips[0].id; }
    state.activeId = trip().id;
    renderTrips();
    renderHero();
    renderBase();
    renderSorts();
    renderSaved();
    renderRecs();
    renderMap();
  }

  /* ---------- toast ---------- */

  let toastTimer;
  function toast(msg) {
    const el = $("toast");
    el.textContent = msg;
    el.classList.add("on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("on"), 2200);
  }

  /* ---------- mutations ---------- */

  function addPlace(id) {
    const t = trip(), c = city(t.cityId);
    const p = c.places.find((x) => x.id === id);
    if (!p || (t.saved || []).some((x) => x.id === id)) return;
    t.saved = (t.saved || []).concat([p]);
    t.example = false;
    persist(); renderAll();
    toast(p.n + " added — " + distLabel(km(t.hotel, p)) + " from " + t.hotel.n);
  }

  function removePlace(id) {
    const t = trip();
    t.saved = (t.saved || []).filter((x) => x.id !== id);
    persist(); renderAll();
  }

  /* ---------- dialogs ---------- */

  let draftCity = null, draftVibes = [];

  function openTrip(mode) {
    const dlg = $("tripDlg"), t = trip();
    const editing = mode === "edit";
    $("tripDlgTitle").textContent = editing ? "Edit trip" : "New trip";
    draftCity = editing ? t.cityId : "paris";
    draftVibes = editing ? (t.vibes || []).slice() : ["foodie"];
    $("fDate").value = editing ? t.arrive.slice(0, 10) : new Date(Date.now() + 30 * 864e5).toISOString().slice(0, 10);
    $("fTime").value = editing ? t.arrive.slice(11) : "14:00";
    $("fBack").value = editing ? (t.back || "") : "";
    $("fName").value = editing && !t.example ? (t.name || "") : "";
    $("tripSave").textContent = editing ? "Save changes" : "Start the countdown";
    paintCityChoices(); paintVibes();
    dlg.dataset.mode = mode;
    dlg.showModal();
  }

  function paintCityChoices() {
    $("fCityChoices").innerHTML = CITIES.map((c) =>
      '<button type="button" class="choice" data-city="' + c.id + '" aria-pressed="' + (c.id === draftCity) + '">' +
      "<b>" + esc(c.name) + "</b><span>" + esc(c.country) + " · " + c.places.length + " spots</span></button>").join("");
  }

  function paintVibes() {
    $("fVibes").innerHTML = VIBES.map((v) =>
      '<button type="button" class="choice" data-vibe="' + v.id + '" aria-pressed="' +
      (draftVibes.indexOf(v.id) > -1) + '"><b>' + esc(v.label) + "</b></button>").join("");
  }

  function openHotel() {
    const t = trip(), c = city(t.cityId);
    $("hotelChoices").innerHTML = c.hotels.map((h) =>
      '<button type="button" class="choice" data-hotel="' + esc(h.n) + '" aria-pressed="' +
      (h.n === t.hotel.n) + '"><b>' + esc(h.n) + "</b><span>" + esc(h.area) + "</span></button>").join("");
    $("hName").value = t.hotel.custom ? t.hotel.n : "";
    $("hArea").innerHTML = c.districts.map((d) =>
      '<option value="' + esc(d.n) + '">' + esc(d.n) + "</option>").join("");
    $("hotelDlg").showModal();
  }

  let spotFilter = "all", spotQuery = "";

  function openSpots() {
    spotFilter = "all"; spotQuery = "";
    $("spotSearch").value = "";
    $("spotDlgSub").textContent = "Measured from " + trip().hotel.n + ".";
    paintSpots();
    $("spotDlg").showModal();
  }

  function paintSpots() {
    const t = trip(), c = city(t.cityId);
    const have = new Set((t.saved || []).map((p) => p.id));
    const q = spotQuery.trim().toLowerCase();
    const rows = c.places
      .map((p) => Object.assign({}, p, { dist: km(t.hotel, p) }))
      .filter((p) => spotFilter === "all" || p.c === spotFilter)
      .filter((p) => !q || (p.n + " " + p.area + " " + p.d).toLowerCase().indexOf(q) > -1)
      .sort((a, b) => a.dist - b.dist);

    $("spotFilters").innerHTML = ['<button class="pill" data-filter="all" aria-pressed="' +
      (spotFilter === "all") + '">Everything</button>'].concat(
      Object.keys(CATS).map((k) => '<button class="pill" data-filter="' + k + '" aria-pressed="' +
        (spotFilter === k) + '">' + CATS[k].label + "</button>")).join("");

    $("spotList").innerHTML = rows.length ? rows.map((p) => {
      const on = have.has(p.id);
      return '<div class="row"><div class="row-idx" style="color:var(--cat-' + p.c + ')">&#9679;</div>' +
        '<div><div class="row-name">' + esc(p.n) + '<span class="tag c-' + p.c + '">' + catLabel(p.c) + "</span>" +
        (p.star ? '<span class="star">&#9733;</span>' : "") + "</div>" +
        '<div class="row-sub">' + esc(p.d) + "</div></div>" +
        '<div class="row-end"><div class="dist"><b>' + distLabel(p.dist) + "</b><span>" + timeLabel(p.dist) + "</span></div>" +
        '<button class="btn btn-sm ' + (on ? "" : "btn-primary") + '" data-toggle="' + esc(p.id) + '">' +
        (on ? "Added" : "Add") + "</button></div></div>";
    }).join("") : '<div class="empty">Nothing matches that. Try another word.</div>';

    $("spotCount").textContent = (t.saved || []).length + " saved for " + c.name;
  }

  /* ---------- events ---------- */

  $("newTripBtn").onclick = () => openTrip("new");
  $("editTripBtn").onclick = () => openTrip("edit");

  $("deleteTripBtn").onclick = () => {
    if (state.trips.length < 2) { toast("This is your only trip — edit it instead."); return; }
    const t = trip();
    if (!confirm("Delete " + (t.name || city(t.cityId).name) + "?")) return;
    state.trips = state.trips.filter((x) => x.id !== t.id);
    state.activeId = state.trips[0].id;
    persist(); renderAll();
  };

  $("unitsBtn").onclick = () => {
    state.units = state.units === "km" ? "mi" : "km";
    $("unitsLabel").textContent = state.units.toUpperCase();
    persist(); renderAll();
  };

  $("shuffleBtn").onclick = () => { state.seed = (state.seed + 1) % 9973; renderRecs(); renderMap(); };

  $("trips").addEventListener("click", (e) => {
    const b = e.target.closest("[data-trip]");
    if (!b) return;
    state.activeId = b.dataset.trip;
    persist(); renderAll();
  });

  $("sortRow").addEventListener("click", (e) => {
    const b = e.target.closest("[data-sort]");
    if (!b) return;
    state.sort = b.dataset.sort;
    persist(); renderSorts(); renderSaved(); renderMap();
  });

  $("savedList").addEventListener("click", (e) => {
    const b = e.target.closest("[data-remove]");
    if (b) removePlace(b.dataset.remove);
  });

  $("recs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-add]");
    if (b) addPlace(b.dataset.add);
  });

  $("addSpotBtn").onclick = openSpots;
  $("hotelBtn").onclick = openHotel;
  $("spotClose").onclick = $("spotDone").onclick = () => $("spotDlg").close();
  $("hotelClose").onclick = $("hotelCancel").onclick = () => $("hotelDlg").close();

  $("spotSearch").addEventListener("input", (e) => { spotQuery = e.target.value; paintSpots(); });
  $("spotFilters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-filter]");
    if (!b) return;
    spotFilter = b.dataset.filter;
    paintSpots();
  });
  $("spotList").addEventListener("click", (e) => {
    const b = e.target.closest("[data-toggle]");
    if (!b) return;
    const id = b.dataset.toggle;
    const t = trip();
    if ((t.saved || []).some((x) => x.id === id)) removePlace(id); else addPlace(id);
    paintSpots();
  });

  $("hotelChoices").addEventListener("click", (e) => {
    const b = e.target.closest("[data-hotel]");
    if (!b) return;
    const t = trip(), c = city(t.cityId);
    t.hotel = c.hotels.find((h) => h.n === b.dataset.hotel);
    t.example = false;
    persist(); renderAll(); $("hotelDlg").close();
    toast("Base set to " + t.hotel.n);
  });

  $("hotelSave").onclick = () => {
    const name = $("hName").value.trim();
    if (!name) { $("hName").focus(); return; }
    const t = trip(), c = city(t.cityId);
    const d = c.districts.find((x) => x.n === $("hArea").value) || c.districts[0];
    t.hotel = { n: name, area: d.n, lat: d.lat, lng: d.lng, custom: true, approx: true };
    t.example = false;
    persist(); renderAll(); $("hotelDlg").close();
    toast("Base set to " + name + " (" + d.n + ")");
  };

  $("fCityChoices").addEventListener("click", (e) => {
    const b = e.target.closest("[data-city]");
    if (!b) return;
    draftCity = b.dataset.city;
    paintCityChoices();
  });

  $("fVibes").addEventListener("click", (e) => {
    const b = e.target.closest("[data-vibe]");
    if (!b) return;
    const i = draftVibes.indexOf(b.dataset.vibe);
    if (i > -1) draftVibes.splice(i, 1); else draftVibes.push(b.dataset.vibe);
    paintVibes();
  });

  $("tripForm").addEventListener("submit", (e) => {
    const action = e.submitter && e.submitter.value;
    if (action !== "save") return;
    if (!$("fDate").value) { e.preventDefault(); $("fDate").focus(); return; }
    const mode = $("tripDlg").dataset.mode;
    const c = city(draftCity);
    const arrive = $("fDate").value + "T" + ($("fTime").value || "14:00");
    const name = $("fName").value.trim() || c.name;
    if (mode === "edit") {
      const t = trip();
      const changedCity = t.cityId !== draftCity;
      t.cityId = draftCity; t.arrive = arrive; t.back = $("fBack").value || null;
      t.name = name; t.vibes = draftVibes.slice(); t.example = false;
      if (changedCity) { t.hotel = c.hotels[0]; t.saved = []; }
    } else {
      state.trips.push({
        id: uid(), cityId: draftCity, name, arrive, back: $("fBack").value || null,
        vibes: draftVibes.slice(), hotel: c.hotels[0], saved: [], created: Date.now()
      });
      state.activeId = state.trips[state.trips.length - 1].id;
    }
    persist();
    setTimeout(() => { renderAll(); toast(mode === "edit" ? "Trip updated" : "Countdown started for " + c.name); }, 0);
  });

  let resizeTimer;
  addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => stars(city(trip().cityId).sky[0]), 150);
  });

  /* ---------- boot ---------- */

  const stored = load();
  if (stored) state = Object.assign(state, stored);
  else { state.trips = [seedTrip()]; state.activeId = state.trips[0].id; }
  $("unitsLabel").textContent = state.units.toUpperCase();
  $("syncNote").textContent = "SAVED IN THIS BROWSER";
  renderAll();
  setInterval(tick, 1000);
  connect();
})();
