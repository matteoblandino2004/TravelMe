/* TravelMe — shared vocabulary: regions, sky palettes, categories, vibes.
   Loaded before the city files, which push into window.TM_CITIES. */

window.TM_CITIES = [];

window.TM_REGIONS = [
  { id: "europe", n: "Europe" },
  { id: "asia", n: "Asia" },
  { id: "namerica", n: "North America" },
  { id: "samerica", n: "South America" },
  { id: "africa", n: "Africa" },
  { id: "meast", n: "Middle East" },
  { id: "oceania", n: "Oceania" }
];

/* Sky gradients: [high sky, mid sky, horizon] plus the silhouette ink.
   Cities reference one by key so the set stays coherent across 56 cities. */
window.TM_SKIES = {
  "paris-dusk":   { c: ["#1B1440", "#5C3A6E", "#E9927C"], ink: "#150E2C" },
  "nyc-dusk":     { c: ["#0A1130", "#2A3F7A", "#F0A15E"], ink: "#090E24" },
  "tokyo-neon":   { c: ["#150B33", "#4B1F6B", "#F2739A"], ink: "#120A28" },
  "london-grey":  { c: ["#101A33", "#3C4E75", "#DCA96B"], ink: "#0D1426" },
  "rome-terra":   { c: ["#241338", "#7A3B55", "#F0A06A"], ink: "#1C1029" },
  "barca-sea":    { c: ["#0E1B3D", "#2F5C86", "#F4A26B"], ink: "#0B1530" },
  "lisbon-gold":  { c: ["#171438", "#6B3A63", "#F5B077"], ink: "#130F2B" },
  "amsterdam-ij": { c: ["#101C3A", "#33577F", "#E8B27A"], ink: "#0C152C" },
  "nordic-blue":  { c: ["#0B1730", "#27466E", "#C6D6E4"], ink: "#0A1226" },
  "alpine-rose":  { c: ["#141A3C", "#4A4074", "#EDA98C"], ink: "#0F1330" },
  "aegean":       { c: ["#0C1A3A", "#2B5C8C", "#F3C98B"], ink: "#0A1430" },
  "tuscan":       { c: ["#25173A", "#7E4451", "#F2B27C"], ink: "#1B1029" },
  "bosphorus":    { c: ["#161436", "#5B3A6B", "#F0A489"], ink: "#111029" },
  "neon-asia":    { c: ["#110C30", "#3B2170", "#E96FA0"], ink: "#0D0A24" },
  "tropic-dusk":  { c: ["#101A38", "#3E4E86", "#F6A87E"], ink: "#0C1329" },
  "monsoon-gold": { c: ["#1A1234", "#63406B", "#F7C078"], ink: "#140E28" },
  "pacific-haze": { c: ["#111C38", "#3C5C86", "#F3B08C"], ink: "#0D1528" },
  "desert-amber": { c: ["#1B1430", "#7A4A52", "#F7BE7C"], ink: "#150F26" },
  "savanna":      { c: ["#1C1730", "#6E4A4A", "#F2A868"], ink: "#151125" },
  "andes-violet": { c: ["#151238", "#514185", "#EFA0A0"], ink: "#100E2B" },
  "latin-sun":    { c: ["#1A1338", "#6A3E78", "#F6AE72"], ink: "#140F2A" },
  "southern-sea": { c: ["#0D1A38", "#2D5A8A", "#EEB894"], ink: "#0A1429" }
};

window.TM_CATS = {
  see: { label: "Sight", one: "sight", plural: "sights" },
  eat: { label: "Food", one: "place to eat", plural: "places to eat" },
  drink: { label: "Drinks", one: "bar", plural: "bars" },
  outdoors: { label: "Outdoors", one: "green spot", plural: "green spots" },
  shop: { label: "Shops", one: "market", plural: "markets & shops" }
};

window.TM_VIBES = [
  { id: "art", label: "Museums & art", tags: ["art", "architecture"] },
  { id: "foodie", label: "Serious food", tags: ["foodie", "market"] },
  { id: "nightlife", label: "Late nights", tags: ["nightlife", "lively", "late"] },
  { id: "nature", label: "Outdoors", tags: ["nature", "views"] },
  { id: "history", label: "History", tags: ["history", "icon"] },
  { id: "cheap", label: "Keep it cheap", tags: ["cheap", "free"] }
];
