/* TravelMe — the social layer.
   Needs an account (the Claude-hosted copy). Everything here is opt-in:
   nothing about a trip is written to shared storage until the traveller
   turns sharing on, and hotel names are left out unless they ask for them. */

(function () {
  "use strict";

  const A = window.TM_APP;
  const $ = (id) => document.getElementById(id);
  const esc = A.esc;

  let db = null, user = null;
  let myId = null, myName = "";
  let shared = [];          // every published traveller doc
  let graph = {};           // uid -> { following: [...] }
  let profileCache = {};
  let me = { visibility: "private" };
  let view = "trips";
  let ready = false;

  const DAY = 864e5;
  const following = () => (graph[myId] && graph[myId].following) || [];
  const followsMe = (id) => ((graph[id] && graph[id].following) || []).indexOf(myId) > -1;
  const iFollow = (id) => following().indexOf(id) > -1;
  const isFriend = (id) => iFollow(id) && followsMe(id);

  function face(p, small) {
    const cls = "avatar" + (small ? " sm" : "");
    if (p && p.avatarUrl) return '<img class="' + cls + '" src="' + esc(p.avatarUrl) + '" alt="">';
    const initial = ((p && p.name) || "?").trim().charAt(0).toUpperCase() || "?";
    return '<span class="' + cls + ' ph" aria-hidden="true">' + esc(initial) + "</span>";
  }

  const fmtDay = (ms) => new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" }).format(new Date(ms));
  const fmtRange = (a, b) => fmtDay(a) + " – " + fmtDay(b);

  /* ---------- visibility ---------- */

  const LEVELS = [
    { id: "private", label: "Private", blurb: "Nothing leaves your account. Nobody can look you up." },
    { id: "friends", label: "Friends", blurb: "People you have added back can see your current and upcoming trips." },
    { id: "public", label: "Public", blurb: "Anyone using this app sees your trips, including past ones." }
  ];

  /* ---------- what gets published ---------- */

  function payload(t) {
    const sched = A.schedule(t);
    return {
      id: t.id,
      name: t.name || "",
      start: sched[0].arrive,
      end: sched[sched.length - 1].depart,
      legs: sched.map((x) => ({
        city: x.city.id,
        nights: x.nights,
        arrive: x.arrive,
        depart: x.depart,
        // A neighbourhood always; the actual hotel only when this trip opts in.
        area: (x.leg.hotel && x.leg.hotel.area) || "",
        hotel: t.showHotel ? ((x.leg.hotel && x.leg.hotel.n) || "") : ""
      }))
    };
  }

  function myPublishable() {
    const now = Date.now();
    return A.state.trips
      .filter((t) => t.share !== false)
      .map(payload)
      .filter((t) => (me.visibility === "public" ? true : t.end >= now));
  }

  async function sync() {
    if (!ready) return;
    try {
      if (me.visibility === "private") {
        await db.doc("shared/" + myId).delete();
      } else {
        await db.doc("shared/" + myId).set({
          visibility: me.visibility,
          updated: Date.now(),
          trips: myPublishable()
        });
      }
      await db.doc("profiles/" + myId).set({ visibility: me.visibility, updated: Date.now() });
    } catch (e) { /* a refused write leaves the local trip untouched */ }
    render();
  }

  /* ---------- init ---------- */

  async function init() {
    if (!window.claude || typeof window.claude.use !== "function") return gate();
    let d, u;
    try { [d, u] = await Promise.all([window.claude.use("db"), window.claude.use("user")]); }
    catch (e) { return gate(); }
    if (!d || !u) return gate();
    db = d; user = u;

    const viewer = await user.me();
    myId = viewer.id;
    myName = viewer.name || "You";
    if (!myId) return gate();

    try {
      const snap = await db.doc("profiles/" + myId).get();
      if (snap.exists) me = Object.assign(me, snap.data());
    } catch (e) { /* first run */ }

    db.collection("shared").limit(200).onSnapshot((s) => {
      shared = s.docs.map((doc) => Object.assign({ uid: doc.id }, doc.data()));
      render();
    }, () => {});

    db.collection("graph").limit(200).onSnapshot((s) => {
      graph = {};
      s.docs.forEach((doc) => { graph[doc.id] = doc.data(); });
      render();
    }, () => {});

    ready = true;
    $("socialGate").hidden = true;
    $("socialLive").hidden = false;
    $("shareTripBtn").hidden = false;
    render();
    sync();
  }

  function gate() {
    ready = false;
    $("socialGate").hidden = false;
    $("socialLive").hidden = true;
    $("shareTripBtn").hidden = true;
  }

  /* ---------- overlaps: the reason to have friends in here at all ---------- */

  function overlaps(theirTrips) {
    const mine = [];
    A.state.trips.forEach((t) => {
      A.schedule(t).forEach((x) => mine.push({ city: x.city.id, a: x.arrive, b: x.depart }));
    });
    const hits = [];
    (theirTrips || []).forEach((t) => {
      (t.legs || []).forEach((leg) => {
        mine.forEach((m) => {
          if (m.city !== leg.city) return;
          const a = Math.max(m.a, leg.arrive), b = Math.min(m.b, leg.depart);
          if (b > a) hits.push({ city: leg.city, a: a, b: b });
        });
      });
    });
    return hits;
  }

  /* ---------- render ---------- */

  async function render() {
    if (view !== "social" || !ready) { paintShareButton(); return; }
    paintShareButton();
    paintMe();
    paintTripShares();
    await paintFeed();
    await paintFriends();
  }

  function paintShareButton() {
    const btn = $("shareTripBtn");
    if (!btn || btn.hidden) return;
    const t = A.trip();
    const on = t.share !== false && me.visibility !== "private";
    btn.textContent = me.visibility === "private" ? "Not sharing"
      : (t.share === false ? "Trip hidden" : "Sharing trip");
    btn.dataset.on = on ? "1" : "0";
  }

  function paintMe() {
    $("meName").textContent = myName;
    $("meSub").textContent = LEVELS.find((l) => l.id === me.visibility).blurb;
    $("visSeg").innerHTML = LEVELS.map((l) =>
      '<button class="seg-btn" data-vis="' + l.id + '" aria-pressed="' +
      (me.visibility === l.id) + '">' + l.label + "</button>").join("");

    const pub = me.visibility === "private" ? [] : myPublishable();
    $("sharePreview").innerHTML = pub.length
      ? pub.map((t) => '<div class="prev-row"><b>' + esc(t.name || "Trip") + "</b> " +
          esc(t.legs.map((l) => A.city(l.city).name).join(" → ")) +
          '<span class="mono"> · ' + fmtRange(t.start, t.end) + "</span>" +
          '<div class="hint">Staying: ' + esc(t.legs.map((l) => l.hotel || l.area || "—").join(", ")) +
          "</div></div>").join("")
      : '<div class="hint">Nothing is published right now.</div>';
  }

  function paintTripShares() {
    const now = Date.now();
    $("tripShareList").innerHTML = A.state.trips.map((t) => {
      const sched = A.schedule(t);
      const label = t.name || sched.map((x) => x.city.name).join(" → ");
      const past = sched[sched.length - 1].depart < now;
      return '<div class="share-row"><div><div class="row-name">' + esc(label) +
        (past ? ' <span class="tag c-shop">Past</span>' : "") + "</div>" +
        '<div class="row-sub mono">' + fmtRange(sched[0].arrive, sched[sched.length - 1].depart) + "</div></div>" +
        '<div class="share-toggles">' +
        '<button class="pill" data-share="' + t.id + '" aria-pressed="' + (t.share !== false) + '">' +
        (t.share !== false ? "Shared" : "Hidden") + "</button>" +
        '<button class="pill" data-hotel="' + t.id + '" aria-pressed="' + (!!t.showHotel) + '">' +
        (t.showHotel ? "Hotel shown" : "Hotel hidden") + "</button></div></div>";
    }).join("");
  }

  function visibleToMe(doc) {
    if (doc.uid === myId) return false;
    if (doc.visibility === "public") return true;
    return doc.visibility === "friends" && followsMe(doc.uid);
  }

  async function paintFeed() {
    const docs = shared.filter(visibleToMe);
    const onlyFriends = $("feedFilter").dataset.mode === "friends";
    const list = onlyFriends ? docs.filter((d) => isFriend(d.uid)) : docs;

    if (!list.length) {
      $("feed").innerHTML = '<div class="empty">' + (onlyFriends
        ? "None of your friends are sharing a trip yet."
        : "Nobody else is sharing yet. Add people below, or send them the link.") + "</div>";
      return;
    }

    const ids = list.map((d) => d.uid);
    const ps = await user.profiles(ids);
    const now = Date.now();

    $("feed").innerHTML = list.map((doc) => {
      const p = ps[doc.uid] || {};
      const trips = (doc.trips || []).slice().sort((a, b) => a.start - b.start);
      const live = trips.find((t) => t.start <= now && t.end > now);
      const next = trips.find((t) => t.start > now);
      const past = trips.filter((t) => t.end <= now).reverse();
      const focus = live || next;
      const hits = overlaps(trips);

      let status = "No trip planned";
      if (live) status = "Travelling now";
      else if (next) status = "In " + Math.ceil((next.start - now) / DAY) + " days";

      const legsHtml = focus ? focus.legs.map((l) => {
        const c = A.city(l.city);
        return '<div class="stop"><span class="stop-city">' + esc(c.name) + "</span>" +
          '<span class="stop-when mono">' + fmtRange(l.arrive, l.depart) + "</span>" +
          '<span class="stop-stay">' + (l.hotel
            ? esc(l.hotel)
            : '<span class="muted">' + esc(l.area || "area not shared") + "</span>") + "</span></div>";
      }).join("") : '<div class="hint">Nothing upcoming.</div>';

      return '<article class="person">' +
        '<header class="person-head">' +
        face(p) +
        "<div><div class=\"person-name\">" + esc(p.name || "Someone") +
        (isFriend(doc.uid) ? '<span class="tag c-shop">Friend</span>' : "") +
        (doc.visibility === "public" ? '<span class="tag c-see">Public</span>' : "") + "</div>" +
        '<div class="person-status mono">' + esc(status) + "</div></div>" +
        '<button class="btn btn-sm ' + (iFollow(doc.uid) ? "" : "btn-primary") +
        '" data-follow="' + esc(doc.uid) + '">' + (iFollow(doc.uid) ? "Added" : "Add") + "</button>" +
        "</header>" +
        (focus ? '<div class="person-trip"><div class="eyebrow">' +
          esc(focus.name || "Trip") + "</div>" + legsHtml + "</div>" : "") +
        (hits.length ? '<div class="overlap">' + hits.map((h) =>
          "You are both in " + esc(A.city(h.city).name) + ", " + fmtRange(h.a, h.b)).join("<br>") + "</div>" : "") +
        (past.length ? '<details class="past"><summary>' + past.length + " past trip" +
          (past.length === 1 ? "" : "s") + "</summary>" + past.map((t) =>
          '<div class="past-row">' + esc(t.legs.map((l) => A.city(l.city).name).join(" → ")) +
          '<span class="mono"> · ' + fmtRange(t.start, t.end) + "</span></div>").join("") + "</details>" : "") +
        "</article>";
    }).join("");
  }

  async function paintFriends() {
    const ids = following().concat(Object.keys(graph).filter(followsMe));
    const uniq = ids.filter((v, i, a) => a.indexOf(v) === i && v !== myId);
    if (!uniq.length) {
      $("friendList").innerHTML = '<div class="hint">Nobody yet. Search for a name above.</div>';
      return;
    }
    const ps = await user.profiles(uniq);
    $("friendList").innerHTML = uniq.map((id) => {
      const p = ps[id] || {};
      const state = isFriend(id) ? "Friends" : (iFollow(id) ? "Added — waiting" : "Added you");
      return '<div class="friend">' + face(p, 1) +
        '<span class="friend-n">' + esc(p.name || "Someone") + '<span class="hint">' + state + "</span></span>" +
        '<button class="btn btn-sm ' + (iFollow(id) ? "" : "btn-primary") + '" data-follow="' + esc(id) + '">' +
        (iFollow(id) ? "Remove" : "Add back") + "</button></div>";
    }).join("");
  }

  async function searchPeople(q) {
    if (!ready) return;
    const hits = await user.search(q);
    const rows = hits.filter((h) => h.id !== myId);
    $("peopleResults").innerHTML = rows.length
      ? rows.map((h) => '<div class="friend">' + face(h, 1) +
          '<span class="friend-n">' + esc(h.name) + "</span>" +
          '<button class="btn btn-sm ' + (iFollow(h.id) ? "" : "btn-primary") + '" data-follow="' + esc(h.id) + '">' +
          (iFollow(h.id) ? "Added" : "Add") + "</button></div>").join("")
      : '<div class="hint">No match. They need an account on this app to appear.</div>';
  }

  async function toggleFollow(id) {
    if (!ready) return;
    const list = following().slice();
    const i = list.indexOf(id);
    if (i > -1) list.splice(i, 1); else list.push(id);
    graph[myId] = { following: list };
    try { await db.doc("graph/" + myId).set({ following: list }); } catch (e) { /* refused */ }
    render();
    if ($("peopleSearch").value) searchPeople($("peopleSearch").value);
  }

  /* ---------- events ---------- */

  $("viewTabs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-view]");
    if (!b) return;
    setView(b.dataset.view);
  });

  function setView(v) {
    view = v;
    $("viewTrips").hidden = v !== "trips";
    $("viewSocial").hidden = v !== "social";
    Array.prototype.forEach.call($("viewTabs").children, (b) => {
      b.setAttribute("aria-pressed", String(b.dataset.view === v));
    });
    if (v === "social") render();
  }

  $("visSeg").addEventListener("click", (e) => {
    const b = e.target.closest("[data-vis]");
    if (!b) return;
    me.visibility = b.dataset.vis;
    sync();
  });

  $("tripShareList").addEventListener("click", (e) => {
    const s = e.target.closest("[data-share]");
    if (s) {
      const t = A.state.trips.find((x) => x.id === s.dataset.share);
      t.share = t.share === false;
      A.persist(); sync();
      return;
    }
    const h = e.target.closest("[data-hotel]");
    if (h) {
      const t = A.state.trips.find((x) => x.id === h.dataset.hotel);
      t.showHotel = !t.showHotel;
      A.persist(); sync();
    }
  });

  $("feed").addEventListener("click", (e) => {
    const b = e.target.closest("[data-follow]");
    if (b) toggleFollow(b.dataset.follow);
  });
  $("friendList").addEventListener("click", (e) => {
    const b = e.target.closest("[data-follow]");
    if (b) toggleFollow(b.dataset.follow);
  });
  $("peopleResults").addEventListener("click", (e) => {
    const b = e.target.closest("[data-follow]");
    if (b) toggleFollow(b.dataset.follow);
  });

  $("peopleSearch").addEventListener("input", (e) => searchPeople(e.target.value));
  $("peopleSearch").addEventListener("focus", (e) => searchPeople(e.target.value || ""));

  $("feedFilter").addEventListener("click", (e) => {
    const b = e.target.closest("[data-mode]");
    if (!b) return;
    $("feedFilter").dataset.mode = b.dataset.mode;
    Array.prototype.forEach.call($("feedFilter").children, (x) => {
      x.setAttribute("aria-pressed", String(x.dataset.mode === b.dataset.mode));
    });
    render();
  });

  $("shareTripBtn").addEventListener("click", () => {
    if (!ready) return;
    if (me.visibility === "private") { setView("social"); return; }
    const t = A.trip();
    t.share = t.share === false;
    A.persist(); sync();
  });

  window.TM_SOCIAL = { sync: () => { if (ready) sync(); }, refresh: render };

  init();
})();
