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
- **Multiple trips**, kilometres or miles, and it all persists between visits.

## Cities

Paris, New York, Tokyo, London, Rome, Barcelona, Lisbon, Amsterdam — each with
five hotels and ~16 places carrying real coordinates.

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
curated dataset rather than searching the whole world. Distances are
straight-line estimates with a 1.28x route factor — planning numbers, not
directions. A hotel you type in yourself is placed at the centre of the
neighbourhood you choose, and is marked approximate.
