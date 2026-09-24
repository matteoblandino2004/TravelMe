/* TravelMe — multi-city trip countdown and proximity planner. */

(function () {
  "use strict";

  const CITIES = window.TM_CITIES;
  const CATS = window.TM_CATS;
  const VIBES = window.TM_VIBES;
  const SKY = window.TM_SKYLINES;
  const SKIES = window.TM_SKIES;
  const REGIONS = window.TM_REGIONS;

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const city = (id) => CITIES.find((c) => c.id === id) || CITIES[0];
  const catLabel = (c) => (CATS[c] ? CATS[c].label : c);
  const regionName = (id) => (REGIONS.find((r) => r.id === id) || {}).n || id;

  function countriesIn(region) {
    const map = {};
    CITIES.filter((c) => !region || c.region === region)
      .forEach((c) => { (map[c.country] = map[c.country] || []).push(c); });
    return Object.keys(map).sort().map((n) => ({ n, cities: map[n] }));
  }

  /* ---------- geometry ---------- */

  function km(a, b) {
    const R = 6371, rad = Math.PI / 180;
    const dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
    const la = a.lat * rad, lb = b.lat * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(la) * Math.cos(lb) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }

  const ROUTE_FACTOR = 1.28;
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

  /* ---------- time ---------- */

  function tzOffsetMs(date, tz) {
    const p = new Intl.DateTimeFormat("en-US", {
      timeZone: tz, hour12: false, year: "numeric", month: "2-digit",
      day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"
    }).formatToParts(date).reduce((a, x) => (a[x.type] = x.value, a), {});
    return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute, +p.second) - date.getTime();
  }

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

  const stamp = (epoch, tz, opts) => new Intl.DateTimeFormat("en-GB",
    Object.assign({ timeZone: tz, weekday: "short", day: "numeric", month: "short" }, opts || {}))
    .format(new Date(epoch));

  const shortDate = (epoch, tz) => new Intl.DateTimeFormat("en-GB",
    { timeZone: tz, day: "numeric", month: "short" }).format(new Date(epoch));

  /* ---------- state ---------- */

  const LS_KEY = "travelme.v2";
  const LS_OLD = "travelme.v1";
  let state = { trips: [], activeId: null, units: "km", sort: "distance", seed: 1 };
  let remote = null;
  let saveTimer = null;

  const uid = () => Math.random().toString(36).slice(2, 9);
  const trip = () => state.trips.find((t) => t.id === state.activeId) || state.trips[0];

  /* A trip is a sequence of legs. Leg 0 starts at trip.start (wall clock in its
     own city); every later leg begins when the previous one runs out of nights. */
  function schedule(t) {
    const out = [];
    let at = zonedToEpoch(t.start, city(t.legs[0].cityId).tz);
    t.legs.forEach((leg) => {
      const nights = Math.max(1, leg.nights || 1);
      out.push({ leg: leg, city: city(leg.cityId), arrive: at, depart: at + nights * 864e5, nights: nights });
      at += nights * 864e5;
    });
    return out;
  }

  const tripEnd = (t) => { const s = schedule(t); return s[s.length - 1].depart; };

  function currentIndex(t, now) {
    const s = schedule(t);
    if (now < s[0].arrive) return -1;              // not started
    for (let i = 0; i < s.length; i++) if (now < s[i].depart) return i;
    return s.length;                               // finished
  }

  function selectedIndex(t) {
    const s = schedule(t);
    const i = t.legs.findIndex((l) => l.id === t.sel);
    if (i > -1) return i;
    const cur = currentIndex(t, Date.now());
    return cur < 0 ? 0 : Math.min(cur, s.length - 1);
  }

  const selectedLeg = (t) => t.legs[selectedIndex(t)];

  function seedTrip() {
    const start = new Date(Date.now() + 58 * 864e5).toISOString().slice(0, 10) + "T14:20";
    const mk = (id, nights, hotelIdx, picks) => {
      const c = city(id);
      return {
        id: uid(), cityId: id, nights: nights, hotel: c.hotels[hotelIdx],
        saved: picks.map((p) => c.places.find((x) => x.id === p)).filter(Boolean)
      };
    };
    return {
      id: uid(), example: true, name: "Japan, spring", start: start,
      vibes: ["foodie", "history"],
      legs: [
        mk("tokyo", 4, 0, ["sensoji", "ichiran", "teamlab"]),
        mk("kyoto", 3, 0, ["fushimi", "nishiki"]),
        mk("osaka", 2, 1, ["dotonbori"])
      ],
      created: Date.now()
    };
  }

  function migrate(old) {
    // v1 trips were single-city: {cityId, arrive, back, hotel, saved}
    if (!old || !Array.isArray(old.trips)) return null;
    old.trips = old.trips.map((t) => {
      if (t.legs) return t;
      const c = city(t.cityId);
      let nights = 3;
      if (t.back) {
        const n = Math.round((zonedToEpoch(t.back, c.tz) - zonedToEpoch(t.arrive.slice(0, 10), c.tz)) / 864e5);
        if (n > 0) nights = n;
      }
      return {
        id: t.id, name: t.name, start: t.arrive, vibes: t.vibes || [], example: t.example,
        created: t.created, legs: [{ id: uid(), cityId: t.cityId, nights: nights, hotel: t.hotel, saved: t.saved || [] }]
      };
    });
    return old;
  }

  function load() {
    try {
      const raw = localStorage.getItem(LS_KEY) || localStorage.getItem(LS_OLD);
      if (raw) {
        const parsed = migrate(JSON.parse(raw));
        if (parsed && parsed.trips && parsed.trips.length) return parsed;
      }
    } catch (e) { /* blocked storage — fall through to the seed */ }
    return null;
  }

  function persist() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
    if (window.TM_SOCIAL) window.TM_SOCIAL.sync();
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
        state = Object.assign({ units: "km", sort: "distance", seed: 1 }, migrate(incoming.state));
        if (!trip()) state.activeId = state.trips[0].id;
        renderAll();
      } else {
        persist();
      }
      $("syncNote").textContent = "SYNCED TO YOUR ACCOUNT";
    } catch (e) { /* stay on local storage */ }
  }

  /* ---------- derived ---------- */

  function withDistance(leg) {
    const list = (leg.saved || []).map((p) => Object.assign({}, p, { dist: km(leg.hotel, p) }));
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

  function recommend(t, leg, n) {
    const c = city(leg.cityId);
    const have = new Set((leg.saved || []).map((p) => p.id));
    const counts = {};
    (leg.saved || []).forEach((p) => { counts[p.c] = (counts[p.c] || 0) + 1; });
    const vibeTags = new Set();
    (t.vibes || []).forEach((v) => {
      const def = VIBES.find((x) => x.id === v);
      if (def) def.tags.forEach((tag) => vibeTags.add(tag));
    });

    const scored = c.places.filter((p) => !have.has(p.id)).map((p) => {
      const dist = km(leg.hotel, p);
      const near = dist <= 0.9 ? 2.3 : dist <= 1.8 ? 1.7 : dist <= 3.2 ? 1.0 : dist <= 6 ? 0.4 : 0;
      const matched = (p.t || []).filter((tag) => vibeTags.has(tag));
      const vibe = Math.min(matched.length * 1.7, 3.4);
      const gap = Math.max(0, 2.1 - (counts[p.c] || 0) * 1.05);
      const sig = p.star ? 2.2 : 0;
      const jitter = hash(p.id + ":" + state.seed) * 1.1;
      let why, icon;
      if (near >= 1.7 && near >= vibe && near >= gap) {
        why = distLabel(dist) + " from " + leg.hotel.n + " — " + timeLabel(dist);
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
      return Object.assign({}, p, { dist: dist, score: near + vibe + gap + sig + jitter, why: why, icon: icon });
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
    minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  /* ---------- render: chrome ---------- */

  function renderTrips() {
    const now = Date.now();
    $("trips").innerHTML = state.trips.map((t) => {
      const s = schedule(t);
      const days = Math.ceil((s[0].arrive - now) / 864e5);
      const badge = days > 0 ? days + "d" : now < tripEnd(t) ? "now" : "past";
      const label = t.name || s.map((x) => x.city.name).join(" → ");
      return '<button class="trip-tab" role="tab" data-trip="' + t.id + '" aria-selected="' +
        (t.id === state.activeId) + '">' + esc(label) +
        '<span class="tt-days">' + badge + "</span></button>";
    }).join("");
  }

  function stars(key) {
    const cv = $("heroStars"), hero = $("hero");
    if (!cv || !hero.clientWidth) return;
    const w = hero.clientWidth, h = hero.clientHeight, dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = w * dpr; cv.height = h * dpr;
    cv.style.width = w + "px"; cv.style.height = h + "px";
    const ctx = cv.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 90; i++) {
      const x = hash("x" + i + key) * w;
      const y = hash("y" + i + key) * h * 0.62;
      const r = hash("r" + i + key) * 1.15 + 0.25;
      ctx.globalAlpha = (1 - y / (h * 0.75)) * 0.8;
      ctx.fillStyle = "#fff";
      ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
    }
  }

  function renderHero() {
    const t = trip(), s = schedule(t), i = selectedIndex(t), leg = s[i];
    const c = leg.city, palette = SKIES[c.sky] || SKIES["paris-dusk"];
    const hero = $("hero");
    hero.style.setProperty("--sky-1", palette.c[0]);
    hero.style.setProperty("--sky-2", palette.c[1]);
    hero.style.setProperty("--sky-3", palette.c[2]);
    hero.style.setProperty("--sky-ink", palette.ink);
    hero.style.setProperty("--sky-lit", palette.c[2]);
    $("heroSkyline").innerHTML = '<svg viewBox="0 0 1200 340" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' +
      (SKY[c.sk] || SKY.modern) + "</svg>";
    $("heroCity").textContent = c.name;

    const multi = t.legs.length > 1;
    $("heroEyebrow").textContent = t.example
      ? "Example trip — edit it or start your own"
      : (multi ? "Stop " + (i + 1) + " of " + t.legs.length + " · " + (t.name || "Your trip") : (t.name || "Your trip"));
    $("heroSub").textContent = c.tagline;

    const saved = (leg.leg.saved || []).length;
    $("heroMeta").innerHTML = [
      '<span class="glass mono">' + esc(c.country.toUpperCase()) + "</span>",
      '<span class="glass">' + (i === 0 ? "Landing " : "Arriving ") + "<b>" + stamp(leg.arrive, c.tz) + "</b></span>",
      '<span class="glass"><b>' + leg.nights + "</b> night" + (leg.nights === 1 ? "" : "s") + " here</span>",
      '<span class="glass"><b>' + saved + "</b> spot" + (saved === 1 ? "" : "s") + " saved</span>",
      '<span class="glass mono">' + esc(c.name.toUpperCase()) + " " + clockIn(c.tz) + "</span>"
    ].join("");
    stars(c.sky + c.id);
    tick();
  }

  function renderRoute() {
    const t = trip(), s = schedule(t), sel = selectedIndex(t), now = Date.now();
    if (t.legs.length < 2) {
      $("routeWrap").hidden = true;
      return;
    }
    $("routeWrap").hidden = false;
    const total = s.reduce((a, x) => a + x.nights, 0);
    const countries = new Set(s.map((x) => x.city.country)).size;
    $("routeSummary").textContent = t.legs.length + " cities · " + countries + " countr" +
      (countries === 1 ? "y" : "ies") + " · " + total + " nights";
    $("route").innerHTML = s.map((x, i) => {
      const status = now >= x.depart ? "done" : (now >= x.arrive ? "now" : "next");
      return '<button class="leg" data-leg="' + x.leg.id + '" data-status="' + status + '" aria-pressed="' +
        (i === sel) + '"><span class="leg-i mono">' + (i + 1) + "</span><span>" +
        '<span class="leg-city">' + esc(x.city.name) + "</span>" +
        '<span class="leg-when mono">' + shortDate(x.arrive, x.city.tz) + " · " + x.nights + "n</span>" +
        "</span></button>";
    }).join('<span class="leg-sep" aria-hidden="true">' + ICON.arrow + "</span>");
  }

  function unit(n, label) {
    return '<div class="cd-unit"><div class="cd-num">' + String(n).padStart(2, "0") +
      '</div><div class="cd-label">' + label + "</div></div>";
  }

  function tick() {
    const t = trip();
    if (!t) return;
    const s = schedule(t), now = Date.now(), idx = currentIndex(t, now);
    let target, tail, big, small;

    if (idx < 0) {
      const first = s[0];
      target = first.arrive;
      tail = ["days", "hours", "mins", "secs"];
      big = "Wheels down " + stamp(first.arrive, first.city.tz);
      small = t.legs.length > 1
        ? "Then " + s.slice(1).map((x) => x.city.name).join(", ") + " · local time " + clockIn(first.city.tz)
        : "Local time in " + first.city.name + " is " + clockIn(first.city.tz);
    } else if (idx < s.length) {
      const cur = s[idx], next = s[idx + 1];
      target = cur.depart;
      tail = ["days", "hours", "mins", "left"];
      big = "You're in " + cur.city.name;
      small = next
        ? "Next stop " + next.city.name + " on " + stamp(next.arrive, next.city.tz)
        : "Heading home " + stamp(cur.depart, cur.city.tz);
    } else {
      $("countdown").innerHTML = unit(0, "days") + unit(0, "hours") + unit(0, "mins") + unit(0, "secs");
      $("statusBig").textContent = "Trip complete";
      $("statusSmall").textContent = "Edit the dates to run it back.";
      return;
    }

    let sec = Math.max(0, Math.floor((target - now) / 1000));
    const d = Math.floor(sec / 86400); sec -= d * 86400;
    const h = Math.floor(sec / 3600); sec -= h * 3600;
    const m = Math.floor(sec / 60); sec -= m * 60;

    $("countdown").innerHTML =
      unit(d, tail[0]) + '<div class="cd-sep">:</div>' +
      unit(h, tail[1]) + '<div class="cd-sep">:</div>' +
      unit(m, tail[2]) + '<div class="cd-sep">:</div>' + unit(sec, tail[3]);
    $("statusBig").textContent = big;
    $("statusSmall").textContent = small;
  }

  /* ---------- render: panels ---------- */

  function renderBase() {
    const t = trip(), leg = selectedLeg(t), c = city(leg.cityId);
    const spots = withDistance(leg);
    const far = spots.length ? spots[spots.length - 1] : null;
    $("baseTitle").textContent = t.legs.length > 1 ? "Your base in " + c.name : "Your base";
    $("baseCard").innerHTML =
      '<div class="base"><div class="base-pin">' + ICON.bed + "</div><div>" +
      '<div class="base-name">' + esc(leg.hotel.n) + "</div>" +
      '<div class="base-where">' + esc(leg.hotel.area) + ", " + esc(c.name) +
      (leg.hotel.approx ? " · approximate" : "") + "</div>" +
      '<div class="base-coords mono">' + leg.hotel.lat.toFixed(4) + ", " + leg.hotel.lng.toFixed(4) + "</div>" +
      "</div></div>" +
      (far
        ? '<p class="panel-note" style="margin-top:10px">Everything saved here sits within ' +
          distLabel(far.dist) + " of the door — furthest is " + esc(far.n) + ".</p>"
        : "");
  }

  function renderSorts() {
    const opts = [["distance", "Closest first"], ["type", "By type"], ["added", "Added order"]];
    $("sortRow").innerHTML = opts.map(([k, label]) =>
      '<button class="pill" data-sort="' + k + '" aria-pressed="' + (state.sort === k) + '">' +
      label + "</button>").join("");
  }

  function renderSaved() {
    const leg = selectedLeg(trip());
    const list = withDistance(leg);
    if (!list.length) {
      $("savedList").innerHTML = '<div class="empty">Nothing saved in ' + esc(city(leg.cityId).name) +
        ' yet. Hit <b>Add spot</b> to pull in restaurants, sights and bars — each one gets measured from your hotel.</div>';
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
    const t = trip(), leg = selectedLeg(t);
    const recs = recommend(t, leg, 4);
    $("recsTitle").textContent = t.legs.length > 1
      ? "Also worth it in " + city(leg.cityId).name : "You might also like";
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
    return {
      x: (p) => p.lng * k * scale + ((W - spanX * scale) / 2 - minX * scale),
      y: (p) => -p.lat * scale + ((H - spanY * scale) / 2 - minY * scale),
      pxPerKm: scale / 111.32
    };
  }

  function renderMap() {
    const t = trip(), leg = selectedLeg(t), c = city(leg.cityId);
    const W = 640, H = 460, pad = 42;
    const spots = withDistance(leg);
    const recs = recommend(t, leg, 4);
    const pr = projector([leg.hotel].concat(spots, recs, c.districts), W, H, pad);
    const hx = pr.x(leg.hotel), hy = pr.y(leg.hotel);
    const parts = [];

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

    const reach = spots.length ? Math.max.apply(null, spots.map((p) => p.dist)) : 2;
    [0.5, 1, 2, 4, 8].forEach((r) => {
      const rp = r * pr.pxPerKm;
      if (rp < 34 || rp > 640 || r > reach * 1.25) return;
      parts.push('<circle class="map-hotel-ring" cx="' + hx.toFixed(1) + '" cy="' + hy.toFixed(1) +
        '" r="' + rp.toFixed(1) + '"/>');
      parts.push('<text class="map-dist" x="' + (hx - rp * 0.72).toFixed(1) + '" y="' + (hy - rp * 0.72).toFixed(1) +
        '" text-anchor="middle">' + distLabel(r) + "</text>");
    });

    c.districts.forEach((d) => {
      parts.push('<text class="map-dist" x="' + pr.x(d).toFixed(1) + '" y="' + pr.y(d).toFixed(1) +
        '" text-anchor="middle">' + esc(d.n) + "</text>");
    });

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
    parts.push('<g class="map-pin" data-tip="' + esc(leg.hotel.n) + ' · your base"><path class="map-hotel" d="M' +
      hx.toFixed(1) + " " + (hy - 13).toFixed(1) + "l11 13-11 13-11-13Z" + '"/></g>');

    $("mapWrap").innerHTML = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Map of saved spots around ' +
      esc(leg.hotel.n) + '">' + parts.join("") + "</svg>" + '<div class="map-tip" id="mapTip"></div>';

    $("mapNote").textContent = c.name + " · rings every " + (state.units === "mi" ? "mile" : "km");
    $("mapLegend").innerHTML =
      '<span style="color:var(--accent)"><i></i>Your hotel</span>' +
      Object.keys(CATS).map((k) => '<span style="color:var(--cat-' + k + ')"><i></i>' + CATS[k].label + "</span>").join("") +
      '<span style="color:var(--ink-3)"><i style="opacity:.45"></i>Suggested</span>';

    const tip = $("mapTip"), wrap = $("mapWrap");
    wrap.querySelectorAll(".map-pin").forEach((g) => {
      const show = () => {
        const r = wrap.getBoundingClientRect();
        const box = g.querySelector("circle, path").getBoundingClientRect();
        tip.textContent = g.dataset.tip;
        tip.style.left = (box.left + box.width / 2 - r.left) + "px";
        tip.style.top = (box.top - r.top) + "px";
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
    renderRoute();
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
    toastTimer = setTimeout(() => el.classList.remove("on"), 2400);
  }

  /* ---------- mutations ---------- */

  function addPlace(id) {
    const t = trip(), leg = selectedLeg(t), c = city(leg.cityId);
    const p = c.places.find((x) => x.id === id);
    if (!p || (leg.saved || []).some((x) => x.id === id)) return;
    leg.saved = (leg.saved || []).concat([p]);
    t.example = false;
    persist(); renderAll();
    toast(p.n + " added — " + distLabel(km(leg.hotel, p)) + " from " + leg.hotel.n);
  }

  function removePlace(id) {
    const leg = selectedLeg(trip());
    leg.saved = (leg.saved || []).filter((x) => x.id !== id);
    persist(); renderAll();
  }

  /* ---------- trip wizard ---------- */

  const draft = { step: 1, mode: "new", region: null, countries: [], cities: [], nights: {}, vibes: [] };

  function openWizard(mode) {
    const t = trip();
    draft.mode = mode;
    draft.step = 1;
    if (mode === "edit") {
      const first = city(t.legs[0].cityId);
      draft.region = first.region;
      draft.countries = [];
      t.legs.forEach((l) => {
        const cc = city(l.cityId).country;
        if (draft.countries.indexOf(cc) < 0) draft.countries.push(cc);
      });
      draft.cities = t.legs.map((l) => l.cityId);
      draft.nights = {};
      t.legs.forEach((l) => { draft.nights[l.cityId] = l.nights; });
      draft.vibes = (t.vibes || []).slice();
      $("wDate").value = t.start.slice(0, 10);
      $("wTime").value = t.start.slice(11);
      $("wName").value = t.example ? "" : (t.name || "");
    } else {
      draft.region = null; draft.countries = []; draft.cities = []; draft.nights = {};
      draft.vibes = ["foodie"];
      $("wDate").value = new Date(Date.now() + 30 * 864e5).toISOString().slice(0, 10);
      $("wTime").value = "14:00";
      $("wName").value = "";
    }
    $("citySearch").value = "";
    paintWizard();
    $("tripDlg").showModal();
  }

  function paintWizard() {
    const step = draft.step;
    [1, 2, 3, 4].forEach((n) => { $("wStep" + n).hidden = n !== step; });
    $("tripDlgTitle").textContent = draft.mode === "edit" ? "Edit trip" : "New trip";
    $("wCrumbs").innerHTML = ["Region", "Countries", "Cities", "Dates"].map((label, i) =>
      '<span class="crumb" aria-current="' + (i + 1 === step) + '">' + label + "</span>").join("");
    $("wBack").hidden = step === 1;
    $("wNext").hidden = step === 4;
    $("wSave").hidden = step !== 4;
    $("wNext").disabled = (step === 1 && !draft.region) ||
      (step === 2 && !draft.countries.length) || (step === 3 && !draft.cities.length);

    if (step === 1) {
      $("wRegions").innerHTML = REGIONS.map((r) => {
        const n = CITIES.filter((c) => c.region === r.id).length;
        const countries = new Set(CITIES.filter((c) => c.region === r.id).map((c) => c.country)).size;
        return '<button type="button" class="choice" data-region="' + r.id + '" aria-pressed="' +
          (draft.region === r.id) + '"><b>' + esc(r.n) + "</b><span>" + countries + " countries · " +
          n + " cities</span></button>";
      }).join("");
    }

    if (step === 2) {
      const list = countriesIn(draft.region).slice();
      draft.countries.forEach((n) => {
        if (!list.some((x) => x.n === n)) list.push({ n: n, cities: CITIES.filter((c) => c.country === n) });
      });
      list.sort((a, b) => a.n.localeCompare(b.n));
      $("wCountries").innerHTML = list.map((c) =>
        '<button type="button" class="choice" data-country="' + esc(c.n) + '" aria-pressed="' +
        (draft.countries.indexOf(c.n) > -1) + '"><b>' + esc(c.n) + "</b><span>" +
        c.cities.length + " cit" + (c.cities.length === 1 ? "y" : "ies") + "</span></button>").join("");
      $("wCountryNote").textContent = draft.countries.length
        ? draft.countries.length + " selected — pick as many as you are visiting."
        : "Pick every country on this trip.";
    }

    if (step === 3) paintCityStep();

    if (step === 4) {
      $("wVibes").innerHTML = VIBES.map((v) =>
        '<button type="button" class="choice" data-vibe="' + v.id + '" aria-pressed="' +
        (draft.vibes.indexOf(v.id) > -1) + '"><b>' + esc(v.label) + "</b></button>").join("");
      const total = draft.cities.reduce((a, id) => a + (draft.nights[id] || 3), 0);
      $("wSummary").textContent = draft.cities.map((id) => city(id).name).join(" → ") +
        " · " + total + " nights";
    }
  }

  function paintCityStep() {
    const q = ($("citySearch").value || "").trim().toLowerCase();
    const pool = CITIES.filter((c) => draft.countries.indexOf(c.country) > -1)
      .filter((c) => !q || (c.name + " " + c.country).toLowerCase().indexOf(q) > -1);
    const byCountry = {};
    pool.forEach((c) => { (byCountry[c.country] = byCountry[c.country] || []).push(c); });

    $("wCities").innerHTML = Object.keys(byCountry).sort().map((country) =>
      '<div class="city-group"><div class="eyebrow">' + esc(country) + "</div>" +
      '<div class="choices">' + byCountry[country].map((c) =>
        '<button type="button" class="choice" data-city="' + c.id + '" aria-pressed="' +
        (draft.cities.indexOf(c.id) > -1) + '"><b>' + esc(c.name) + "</b><span>" +
        c.places.length + " places listed</span></button>").join("") + "</div></div>").join("");

    $("wOrder").innerHTML = draft.cities.length
      ? draft.cities.map((id, i) => {
          const c = city(id);
          return '<div class="ord"><span class="ord-i mono">' + (i + 1) + "</span>" +
            '<span class="ord-n">' + esc(c.name) + '<span class="ord-c">' + esc(c.country) + "</span></span>" +
            '<span class="stepper"><button type="button" class="btn btn-icon btn-sm" data-nights="-1" data-id="' + id +
            '" aria-label="One night fewer in ' + esc(c.name) + '">' + ICON.minus + "</button>" +
            '<b class="mono">' + (draft.nights[id] || 3) + "n</b>" +
            '<button type="button" class="btn btn-icon btn-sm" data-nights="1" data-id="' + id +
            '" aria-label="One night more in ' + esc(c.name) + '">' + ICON.plus + "</button></span>" +
            '<button type="button" class="btn btn-icon btn-ghost" data-drop="' + id +
            '" aria-label="Remove ' + esc(c.name) + '">&times;</button></div>';
        }).join("")
      : '<div class="empty">Tap cities above in the order you will visit them.</div>';
  }

  function commitWizard() {
    const t = draft.mode === "edit" ? trip() : null;
    const start = $("wDate").value + "T" + ($("wTime").value || "14:00");
    const name = $("wName").value.trim();
    const legs = draft.cities.map((id) => {
      const existing = t && t.legs.find((l) => l.cityId === id);
      const c = city(id);
      return {
        id: existing ? existing.id : uid(),
        cityId: id,
        nights: draft.nights[id] || 3,
        hotel: existing ? existing.hotel : c.hotels[0],
        saved: existing ? existing.saved : []
      };
    });
    const label = name || draft.cities.map((id) => city(id).name).join(" → ");

    if (t) {
      t.legs = legs; t.start = start; t.name = label;
      t.vibes = draft.vibes.slice(); t.example = false;
      if (!legs.some((l) => l.id === t.sel)) t.sel = legs[0].id;
    } else {
      state.trips.push({
        id: uid(), name: label, start: start, vibes: draft.vibes.slice(),
        legs: legs, sel: legs[0].id, created: Date.now()
      });
      state.activeId = state.trips[state.trips.length - 1].id;
    }
    persist();
    renderAll();
    toast(draft.mode === "edit" ? "Trip updated" : "Countdown started · " + label);
  }

  /* ---------- hotel & spot dialogs ---------- */

  function openHotel() {
    const leg = selectedLeg(trip()), c = city(leg.cityId);
    $("hotelDlgTitle").textContent = "Where are you staying in " + c.name + "?";
    $("hotelChoices").innerHTML = c.hotels.map((h) =>
      '<button type="button" class="choice" data-hotel="' + esc(h.n) + '" aria-pressed="' +
      (h.n === leg.hotel.n) + '"><b>' + esc(h.n) + "</b><span>" + esc(h.area) + "</span></button>").join("");
    $("hName").value = leg.hotel.custom ? leg.hotel.n : "";
    $("hArea").innerHTML = c.districts.map((d) =>
      '<option value="' + esc(d.n) + '">' + esc(d.n) + "</option>").join("");
    $("hotelDlg").showModal();
  }

  let spotFilter = "all", spotQuery = "";

  function openSpots() {
    spotFilter = "all"; spotQuery = "";
    $("spotSearch").value = "";
    const leg = selectedLeg(trip());
    $("spotDlgTitle").textContent = "Add a spot in " + city(leg.cityId).name;
    $("spotDlgSub").textContent = "Measured from " + leg.hotel.n + ".";
    paintSpots();
    $("spotDlg").showModal();
  }

  function paintSpots() {
    const leg = selectedLeg(trip()), c = city(leg.cityId);
    const have = new Set((leg.saved || []).map((p) => p.id));
    const q = spotQuery.trim().toLowerCase();
    const rows = c.places
      .map((p) => Object.assign({}, p, { dist: km(leg.hotel, p) }))
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

    $("spotCount").textContent = (leg.saved || []).length + " saved in " + c.name;
  }

  /* ---------- events ---------- */

  $("newTripBtn").onclick = () => openWizard("new");
  $("editTripBtn").onclick = () => openWizard("edit");

  $("deleteTripBtn").onclick = () => {
    if (state.trips.length < 2) { toast("This is your only trip — edit it instead."); return; }
    const t = trip();
    if (!confirm("Delete " + (t.name || "this trip") + "?")) return;
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

  $("route").addEventListener("click", (e) => {
    const b = e.target.closest("[data-leg]");
    if (!b) return;
    trip().sel = b.dataset.leg;
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
    const leg = selectedLeg(trip());
    if ((leg.saved || []).some((x) => x.id === b.dataset.toggle)) removePlace(b.dataset.toggle);
    else addPlace(b.dataset.toggle);
    paintSpots();
  });

  $("hotelChoices").addEventListener("click", (e) => {
    const b = e.target.closest("[data-hotel]");
    if (!b) return;
    const t = trip(), leg = selectedLeg(t), c = city(leg.cityId);
    leg.hotel = c.hotels.find((h) => h.n === b.dataset.hotel);
    t.example = false;
    persist(); renderAll(); $("hotelDlg").close();
    toast("Base set to " + leg.hotel.n);
  });

  $("hotelSave").onclick = () => {
    const name = $("hName").value.trim();
    if (!name) { $("hName").focus(); return; }
    const t = trip(), leg = selectedLeg(t), c = city(leg.cityId);
    const d = c.districts.find((x) => x.n === $("hArea").value) || c.districts[0];
    leg.hotel = { n: name, area: d.n, lat: d.lat, lng: d.lng, custom: true, approx: true };
    t.example = false;
    persist(); renderAll(); $("hotelDlg").close();
    toast("Base set to " + name + " (" + d.n + ")");
  };

  /* wizard events */
  $("wRegions").addEventListener("click", (e) => {
    const b = e.target.closest("[data-region]");
    if (!b) return;
    if (draft.region !== b.dataset.region) { draft.countries = []; draft.cities = []; }
    draft.region = b.dataset.region;
    paintWizard();
  });

  $("wCountries").addEventListener("click", (e) => {
    const b = e.target.closest("[data-country]");
    if (!b) return;
    const name = b.dataset.country;
    const i = draft.countries.indexOf(name);
    if (i > -1) {
      draft.countries.splice(i, 1);
      draft.cities = draft.cities.filter((id) => city(id).country !== name);
    } else draft.countries.push(name);
    paintWizard();
  });

  $("wCities").addEventListener("click", (e) => {
    const b = e.target.closest("[data-city]");
    if (!b) return;
    const id = b.dataset.city;
    const i = draft.cities.indexOf(id);
    if (i > -1) draft.cities.splice(i, 1);
    else { draft.cities.push(id); if (!draft.nights[id]) draft.nights[id] = 3; }
    paintCityStep();
    $("wNext").disabled = !draft.cities.length;
  });

  $("wOrder").addEventListener("click", (e) => {
    const step = e.target.closest("[data-nights]");
    if (step) {
      const id = step.dataset.id;
      draft.nights[id] = Math.min(30, Math.max(1, (draft.nights[id] || 3) + (+step.dataset.nights)));
      paintCityStep();
      return;
    }
    const drop = e.target.closest("[data-drop]");
    if (drop) {
      draft.cities = draft.cities.filter((x) => x !== drop.dataset.drop);
      paintCityStep();
      $("wNext").disabled = !draft.cities.length;
    }
  });

  $("citySearch").addEventListener("input", paintCityStep);

  $("wVibes").addEventListener("click", (e) => {
    const b = e.target.closest("[data-vibe]");
    if (!b) return;
    const i = draft.vibes.indexOf(b.dataset.vibe);
    if (i > -1) draft.vibes.splice(i, 1); else draft.vibes.push(b.dataset.vibe);
    paintWizard();
  });

  $("wBack").onclick = () => { draft.step = Math.max(1, draft.step - 1); paintWizard(); };
  $("wNext").onclick = () => { draft.step = Math.min(4, draft.step + 1); paintWizard(); };
  $("wCancel").onclick = $("wClose").onclick = () => $("tripDlg").close();
  $("wSave").onclick = () => {
    if (!$("wDate").value) { $("wDate").focus(); return; }
    commitWizard();
    $("tripDlg").close();
  };

  let resizeTimer;
  addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const c = city(selectedLeg(trip()).cityId);
      stars(c.sky + c.id);
    }, 150);
  });

  /* ---------- api for the social layer ---------- */

  window.TM_APP = {
    get state() { return state; },
    trip: trip,
    schedule: schedule,
    city: city,
    persist: persist,
    renderAll: renderAll,
    esc: esc
  };

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
