# TravelMe

A trip countdown and proximity planner. Set your arrival date, pick the hotel
you're staying at, save the restaurants and sights you want to hit, and the app
tells you how far each one is from your base — plus what else is worth adding
nearby.

## What it does

- **Live countdown** to the moment you land, in the destination's own time zone
  (DST handled via `Intl`), switching to a "days left" countdown once you arrive.
- **A drawn skyline per city** — hand-authored SVG silhouettes over a dusk
  gradient, so each trip looks like where it's going.
- **Distance from your base** for every saved spot: straight-line distance with a
  route allowance added, expressed as a walk or a ride.
- **A vector proximity map** plotted from real coordinates, with distance rings
  around your hotel, rivers and coastlines, and numbered pins matching the list.
- **Recommendations** scored on how close a place is to your hotel, which
  categories your itinerary is missing, and the trip vibes you picked. Each
  suggestion states the reason it surfaced.
- **Multi-city trips**: pick a region, then the countries, then the cities in
  travel order, with nights per stop. Each leg carries its own hotel, itinerary,
  map and recommendations, and the countdown rolls from stop to stop.
- **Multiple trips**, kilometres or miles, and it all persists between visits.

## Coverage

57 cities across 41 countries and 7 regions, each with real coordinates, three
to five hotels, neighbourhoods and 8–16 curated places.

Eight cities (Paris, New York, Tokyo, London, Rome, Barcelona, Lisbon,
Amsterdam) have a bespoke hand-drawn skyline. The rest share seven archetype
skylines — modern, old-European, domes-and-minarets, Asian temple, coastal,
Latin colonial and harbour — chosen per city.

## Sharing and friends

The account build adds an opt-in social layer:

- **Three visibility levels** — Private (default, nothing is published), Friends
  (people who added you see current and upcoming trips) and Public (anyone using
  the app sees your trips, past ones included).
- **Privacy is enforced at write time, not in the UI.** Nothing about a trip
  reaches shared storage until you turn sharing on, and a published trip carries
  only the neighbourhood you are staying in — the hotel name is included solely
  for trips where you switch it on. A "What others can see" panel shows the
  exact published record.
- **Friends** are mutual: you add someone, they add you back.
- **Overlap detection** flags when you and someone else are in the same city on
  the same dates.

Anything published is readable by anyone who can open that artifact, so
"Friends" scopes the feed, not the database. The plain-website build has no
sign-in and therefore no social features; it says so rather than failing.

## Running it

It's a static site with no build step and no dependencies:

```sh
npx http-server -p 8099 .   # then open http://localhost:8099
```

`index.html` is the standalone page. `node build-artifact.js` regenerates
`dist/artifact.html`, the same page without the document wrapper, for publishing
as a Claude Artifact.

## Honest limits

There is no live geocoding or map-tile service here, so the app works from a
curated dataset rather than searching the whole world: a city not in
`data/cities-*.js` cannot be picked. Place details were written from general
knowledge and are not verified against opening hours or closures — check before
you travel. Distances are
straight-line estimates with a 1.28x route factor — planning numbers, not
directions. A hotel you type in yourself is placed at the centre of the
neighbourhood you choose, and is marked approximate.
