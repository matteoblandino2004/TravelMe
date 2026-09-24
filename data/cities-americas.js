/* TravelMe — the Americas. Coordinates are real to roughly neighbourhood-or-better precision. */

window.TM_CITIES.push(
  {
    id: 'nyc', name: 'New York', country: 'United States', region: 'namerica',
    tz: 'America/New_York', cur: '$', center: [40.745, -73.985],
    sk: 'nyc', sky: 'nyc-dusk',
    tagline: 'Twenty blocks is a mile. Plan accordingly.',
    districts: [
      { n: 'Midtown', lat: 40.757, lng: -73.982 },
      { n: 'Village', lat: 40.732, lng: -74.001 },
      { n: 'LES', lat: 40.718, lng: -73.987 },
      { n: 'Brooklyn', lat: 40.706, lng: -73.97 }
    ],
    water: [
      { k: 'river', w: 14, pts: [[40.702, -74.018], [40.73, -74.013], [40.755, -74.008], [40.78, -73.998], [40.805, -73.972]] },
      { k: 'river', w: 12, pts: [[40.695, -74], [40.706, -73.99], [40.718, -73.972], [40.74, -73.963], [40.77, -73.943], [40.793, -73.927]] }
    ],
    hotels: [
      { n: 'The Standard, High Line', area: 'Meatpacking', lat: 40.741, lng: -74.008 },
      { n: 'Ace Hotel New York', area: 'NoMad', lat: 40.7452, lng: -73.9882 },
      { n: 'The Bowery Hotel', area: 'East Village', lat: 40.7259, lng: -73.9919 },
      { n: 'citizenM Times Square', area: 'Midtown West', lat: 40.7616, lng: -73.9866 },
      { n: 'The Hoxton Williamsburg', area: 'Brooklyn', lat: 40.7213, lng: -73.9578 }
    ],
    places: [
      { id: 'met', n: 'The Met', c: 'see', lat: 40.7794, lng: -73.9632, area: 'Upper East Side', d: 'Pay-what-you-wish for NY State residents only — budget full price.', p: 3, t: ['art', 'rainy'], star: 1 },
      { id: 'moma', n: 'MoMA', c: 'see', lat: 40.7614, lng: -73.9776, area: 'Midtown', d: 'Friday evenings are free and, predictably, mobbed.', p: 3, t: ['art', 'rainy'] },
      { id: 'topofrock', n: 'Top of the Rock', c: 'see', lat: 40.7593, lng: -73.9794, area: 'Midtown', d: 'Better than the Empire State — because it\'s in the view.', p: 3, t: ['views', 'icon'], star: 1 },
      { id: 'brooklynbridge', n: 'Brooklyn Bridge Walk', c: 'outdoors', lat: 40.7061, lng: -73.9969, area: 'Civic Center', d: 'Walk Brooklyn-to-Manhattan at sunrise for an empty deck.', t: ['views', 'free'], star: 1 },
      { id: 'highline', n: 'The High Line', c: 'outdoors', lat: 40.748, lng: -74.0048, area: 'Chelsea', d: 'Old freight line, now a 1.5-mile garden in the air.', t: ['nature', 'free'] },
      { id: 'centralpark', n: 'Central Park', c: 'outdoors', lat: 40.774, lng: -73.9709, area: 'Bethesda Terrace', d: 'Enter at 72nd St; the Ramble hides the crowds.', t: ['nature', 'free'] },
      { id: 'washsq', n: 'Washington Square Park', c: 'outdoors', lat: 40.7308, lng: -73.9973, area: 'Village', d: 'Chess hustlers, piano guy, the arch. Free theatre.', t: ['free', 'people-watching'] },
      { id: 'dumbo', n: 'DUMBO & Time Out Market', c: 'see', lat: 40.7033, lng: -73.9903, area: 'Brooklyn', d: 'Washington St for the bridge shot, then eat upstairs.', p: 2, t: ['views', 'foodie'] },
      { id: 'katz', n: 'Katz\'s Delicatessen', c: 'eat', lat: 40.7223, lng: -73.9874, area: 'LES', d: 'Keep the ticket. Tip the carver. Get the pastrami.', p: 2, t: ['foodie', 'icon'], star: 1 },
      { id: 'joes', n: 'Joe\'s Pizza', c: 'eat', lat: 40.7304, lng: -74.0022, area: 'Carmine St', d: 'Plain slice, folded, eaten standing at the counter.', p: 1, t: ['cheap', 'late'] },
      { id: 'russ', n: 'Russ & Daughters Cafe', c: 'eat', lat: 40.7186, lng: -73.9882, area: 'LES', d: 'Bagels, lox and egg creams in a diner booth.', p: 2, t: ['brunch', 'morning'] },
      { id: 'xian', n: 'Xi\'an Famous Foods', c: 'eat', lat: 40.7169, lng: -73.9938, area: 'Chinatown', d: 'Hand-ripped noodles, cumin lamb, ten-minute meal.', p: 1, t: ['cheap', 'lunch'] },
      { id: 'chelseamkt', n: 'Chelsea Market', c: 'eat', lat: 40.7425, lng: -74.0061, area: 'Chelsea', d: 'Tacos, lobster, doughnuts — one block, indoors.', p: 2, t: ['market', 'rainy'] },
      { id: 'attaboy', n: 'Attaboy', c: 'drink', lat: 40.7185, lng: -73.9915, area: 'LES', d: 'No menu, no sign. Tell them what you like.', p: 3, t: ['nightlife'] },
      { id: 'bluenote', n: 'Blue Note Jazz Club', c: 'drink', lat: 40.7307, lng: -74.0007, area: 'Village', d: 'Late set is cheaper and the players loosen up.', p: 3, t: ['nightlife', 'music'] },
      { id: 'strand', n: 'Strand Book Store', c: 'shop', lat: 40.7333, lng: -73.9906, area: 'Union Square', d: '18 miles of books; the dollar carts are outside.', p: 1, t: ['browse', 'rainy'] }
    ]
  }
,

  {
    id: 'losangeles', name: 'Los Angeles', country: 'United States', region: 'namerica',
    tz: 'America/Los_Angeles', cur: '$', center: [34.0522, -118.2437],
    sk: 'modern', sky: 'pacific-haze',
    tagline: 'Pick one side of town per day. The traffic decides the rest.',
    districts: [
      { n: 'Downtown', lat: 34.043, lng: -118.25 },
      { n: 'Santa Monica', lat: 34.0195, lng: -118.4912 },
      { n: 'Silver Lake', lat: 34.087, lng: -118.27 },
      { n: 'Hollywood', lat: 34.0928, lng: -118.3287 }
    ],
    hotels: [
      { n: 'Ace Hotel DTLA', area: 'Downtown', lat: 34.044, lng: -118.256 },
      { n: 'Hotel June', area: 'West LA', lat: 33.98, lng: -118.42 },
      { n: 'The Hoxton DTLA', area: 'Downtown', lat: 34.047, lng: -118.256 }
    ],
    places: [
      { id: 'griffith', n: 'Griffith Observatory', c: 'see', lat: 34.1184, lng: -118.3004, area: 'Griffith Park', d: 'Free entry, paid parking. Sunset then the city lights.', t: ['views', 'free'], star: 1 },
      { id: 'getty', n: 'The Getty Center', c: 'see', lat: 34.078, lng: -118.4741, area: 'Brentwood', d: 'Free museum, $25 to park. Tram up the hill; gardens included.', t: ['art', 'free'], star: 1 },
      { id: 'smpier', n: 'Santa Monica Pier', c: 'outdoors', lat: 34.01, lng: -118.4965, area: 'Santa Monica', d: 'End of Route 66. Rent a bike and ride south to Venice.', t: ['free', 'family'] },
      { id: 'grandcentral', n: 'Grand Central Market', c: 'eat', lat: 34.0505, lng: -118.2489, area: 'Downtown', d: 'Open since 1917. Eggslut queue, tacos, sarita’s pupusas.', p: 1, t: ['market'] },
      { id: 'guisados', n: 'Guisados', c: 'eat', lat: 34.046, lng: -118.23, area: 'Boyle Heights', d: 'Braised-filling tacos on handmade tortillas. Get the sampler.', p: 1, t: ['cheap', 'foodie'] },
      { id: 'lacma', n: 'LACMA & Urban Light', c: 'see', lat: 34.0639, lng: -118.3592, area: 'Mid-Wilshire', d: 'The lamp-post installation outside is free and always photographed.', p: 2, t: ['art'] },
      { id: 'runyon', n: 'Runyon Canyon', c: 'outdoors', lat: 34.11, lng: -118.35, area: 'Hollywood Hills', d: 'Short, steep, and full of people being seen exercising.', t: ['nature', 'free'] },
      { id: 'venice', n: 'Venice Beach & Canals', c: 'outdoors', lat: 33.985, lng: -118.4695, area: 'Venice', d: 'Boardwalk for the circus, canals two blocks inland for the quiet.', t: ['free'] }
    ]
  },

  {
    id: 'sanfrancisco', name: 'San Francisco', country: 'United States', region: 'namerica',
    tz: 'America/Los_Angeles', cur: '$', center: [37.7749, -122.4194],
    sk: 'modern', sky: 'pacific-haze',
    tagline: 'Bring a jacket in August. Especially in August.',
    districts: [
      { n: 'Mission', lat: 37.76, lng: -122.419 },
      { n: 'North Beach', lat: 37.8, lng: -122.41 },
      { n: 'Haight', lat: 37.77, lng: -122.446 },
      { n: 'SoMa', lat: 37.78, lng: -122.4 }
    ],
    hotels: [
      { n: 'Hotel Zeppelin', area: 'Union Square', lat: 37.788, lng: -122.41 },
      { n: 'Hotel Kabuki', area: 'Japantown', lat: 37.785, lng: -122.43 },
      { n: 'Proper Hotel', area: 'Mid-Market', lat: 37.78, lng: -122.413 }
    ],
    places: [
      { id: 'goldengate', n: 'Golden Gate Bridge', c: 'see', lat: 37.8199, lng: -122.4783, area: 'Presidio', d: 'Walk it from the south side; fog usually clears by afternoon.', t: ['icon', 'free'], star: 1 },
      { id: 'alcatraz', n: 'Alcatraz', c: 'see', lat: 37.8267, lng: -122.423, area: 'The Bay', d: 'Book weeks ahead. The night tour is the better ticket.', p: 3, t: ['history'], star: 1 },
      { id: 'ggpark', n: 'Golden Gate Park', c: 'outdoors', lat: 37.7694, lng: -122.4862, area: 'Richmond', d: 'Bigger than Central Park. Bison, windmills, two museums.', t: ['nature', 'free'] },
      { id: 'ferrybuilding', n: 'Ferry Building Marketplace', c: 'eat', lat: 37.7955, lng: -122.3937, area: 'Embarcadero', d: 'Saturday farmers market wraps the building. Oysters inside.', p: 2, t: ['market'] },
      { id: 'tartine', n: 'Tartine Bakery', c: 'eat', lat: 37.7614, lng: -122.4241, area: 'Mission', d: 'The morning bun, and a queue that has not shortened in 20 years.', p: 1, t: ['coffee', 'morning'], star: 1 },
      { id: 'clarion', n: 'Mission Murals', c: 'see', lat: 37.763, lng: -122.419, area: 'Mission', d: 'Clarion Alley and Balmy Alley, repainted constantly.', t: ['art', 'free'] },
      { id: 'swanoyster', n: 'Swan Oyster Depot', c: 'eat', lat: 37.79, lng: -122.421, area: 'Nob Hill', d: 'Eighteen stools, cash only, closed Sundays. Crab and a beer.', p: 2, t: ['foodie'] },
      { id: 'twinpeaks', n: 'Twin Peaks', c: 'outdoors', lat: 37.7544, lng: -122.4477, area: 'Twin Peaks', d: 'The whole grid laid out below. Windy enough to hurt.', t: ['views', 'free'] }
    ]
  },

  {
    id: 'chicago', name: 'Chicago', country: 'United States', region: 'namerica',
    tz: 'America/Chicago', cur: '$', center: [41.8781, -87.6298],
    sk: 'modern', sky: 'nyc-dusk',
    tagline: 'The architecture is the attraction. See it from the water.',
    districts: [
      { n: 'The Loop', lat: 41.883, lng: -87.629 },
      { n: 'Wicker Park', lat: 41.908, lng: -87.677 },
      { n: 'Pilsen', lat: 41.857, lng: -87.656 },
      { n: 'Lincoln Park', lat: 41.925, lng: -87.639 }
    ],
    hotels: [
      { n: 'The Robey', area: 'Wicker Park', lat: 41.909, lng: -87.676 },
      { n: 'Chicago Athletic Association', area: 'The Loop', lat: 41.882, lng: -87.624 },
      { n: 'Freehand Chicago', area: 'River North', lat: 41.892, lng: -87.627 }
    ],
    places: [
      { id: 'artinstitute', n: 'Art Institute of Chicago', c: 'see', lat: 41.8796, lng: -87.6237, area: 'The Loop', d: 'Nighthawks, American Gothic, and the best Impressionist rooms outside Paris.', p: 3, t: ['art', 'rainy'], star: 1 },
      { id: 'millennium', n: 'Millennium Park & Cloud Gate', c: 'see', lat: 41.8826, lng: -87.6226, area: 'The Loop', d: 'The Bean, plus free concerts at the Pritzker all summer.', t: ['icon', 'free'] },
      { id: 'rivercruise', n: 'Architecture River Cruise', c: 'see', lat: 41.888, lng: -87.627, area: 'Riverwalk', d: 'The single best thing to do here. Book the CAC-docent boat.', p: 3, t: ['architecture'], star: 1 },
      { id: 'lakefront', n: 'Lakefront Trail', c: 'outdoors', lat: 41.89, lng: -87.612, area: 'Lakeshore', d: '18 miles of path and beach with the skyline on one side.', t: ['nature', 'free'] },
      { id: 'pequods', n: "Pequod's Pizza", c: 'eat', lat: 41.921, lng: -87.664, area: 'Lincoln Park', d: 'Caramelised crust deep dish. Order when you sit; it takes 45 min.', p: 2, t: ['foodie'] },
      { id: 'portillos', n: "Portillo's", c: 'eat', lat: 41.892, lng: -87.631, area: 'River North', d: 'Italian beef, dipped, plus a chocolate cake shake.', p: 1, t: ['cheap'] },
      { id: 'greenmill', n: 'Green Mill', c: 'drink', lat: 41.97, lng: -87.66, area: 'Uptown', d: "Capone's old haunt, still doing live jazz seven nights.", p: 2, t: ['music', 'nightlife'] },
      { id: 'garfield', n: 'Garfield Park Conservatory', c: 'outdoors', lat: 41.886, lng: -87.717, area: 'West Side', d: 'Free Victorian glasshouses. A good answer to February.', t: ['free', 'rainy'] }
    ]
  },

  {
    id: 'miami', name: 'Miami', country: 'United States', region: 'namerica',
    tz: 'America/New_York', cur: '$', center: [25.7617, -80.1918],
    sk: 'coastal', sky: 'tropic-dusk',
    tagline: 'Dinner at ten, and nobody is early to anything.',
    districts: [
      { n: 'South Beach', lat: 25.782, lng: -80.134 },
      { n: 'Wynwood', lat: 25.801, lng: -80.199 },
      { n: 'Little Havana', lat: 25.765, lng: -80.22 },
      { n: 'Brickell', lat: 25.76, lng: -80.193 }
    ],
    water: [
      { k: 'shore', side: 'SE', w: 0, pts: [[25.73, -80.13], [25.77, -80.125], [25.81, -80.12], [25.85, -80.115]] }
    ],
    hotels: [
      { n: 'The Betsy South Beach', area: 'South Beach', lat: 25.781, lng: -80.13 },
      { n: 'Life House Little Havana', area: 'Little Havana', lat: 25.766, lng: -80.218 },
      { n: 'Arlo Wynwood', area: 'Wynwood', lat: 25.798, lng: -80.198 }
    ],
    places: [
      { id: 'wynwood', n: 'Wynwood Walls', c: 'see', lat: 25.801, lng: -80.199, area: 'Wynwood', d: 'Ticketed courtyard, but the free murals run for blocks around it.', p: 2, t: ['art'], star: 1 },
      { id: 'southbeach', n: 'South Beach & Ocean Drive', c: 'outdoors', lat: 25.782, lng: -80.13, area: 'South Beach', d: 'Art-deco strip. Walk it at 8am, before the promoters wake.', t: ['free'] },
      { id: 'calleocho', n: 'Calle Ocho', c: 'see', lat: 25.765, lng: -80.22, area: 'Little Havana', d: 'Domino Park, cigar rollers, ventanita coffee windows.', t: ['free'] },
      { id: 'vizcaya', n: 'Vizcaya Museum & Gardens', c: 'see', lat: 25.7447, lng: -80.2103, area: 'Coconut Grove', d: 'A 1916 Italian villa dropped on Biscayne Bay.', p: 2, t: ['history'] },
      { id: 'versailles', n: 'Versailles Restaurant', c: 'eat', lat: 25.765, lng: -80.24, area: 'Little Havana', d: 'The Cuban institution. Cortadito at the window counter.', p: 2, t: ['foodie'] },
      { id: 'joes', n: "Joe's Stone Crab", c: 'eat', lat: 25.768, lng: -80.135, area: 'South Beach', d: 'Open October to May, no bookings, two-hour waits.', p: 3, t: ['foodie'] },
      { id: 'everglades', n: 'Everglades Airboat', c: 'outdoors', lat: 25.76, lng: -80.55, area: 'Everglades', d: 'An hour west. Loud, touristy, still alligators.', p: 2, t: ['nature', 'daytrip'] },
      { id: 'pamm', n: 'Pérez Art Museum Miami', c: 'see', lat: 25.786, lng: -80.186, area: 'Downtown', d: 'Herzog & de Meuron box with hanging gardens over the bay.', p: 2, t: ['art', 'rainy'] }
    ]
  },

  {
    id: 'neworleans', name: 'New Orleans', country: 'United States', region: 'namerica',
    tz: 'America/Chicago', cur: '$', center: [29.9511, -90.0715],
    sk: 'latin', sky: 'lisbon-gold',
    tagline: 'Bourbon Street is not the good street. Frenchmen is.',
    districts: [
      { n: 'French Quarter', lat: 29.958, lng: -90.065 },
      { n: 'Marigny', lat: 29.963, lng: -90.056 },
      { n: 'Garden District', lat: 29.929, lng: -90.084 },
      { n: 'Tremé', lat: 29.968, lng: -90.072 }
    ],
    hotels: [
      { n: 'Hotel Peter & Paul', area: 'Marigny', lat: 29.964, lng: -90.057 },
      { n: 'Ace Hotel New Orleans', area: 'CBD', lat: 29.947, lng: -90.072 },
      { n: 'The Eliza Jane', area: 'CBD', lat: 29.949, lng: -90.068 }
    ],
    places: [
      { id: 'frenchquarter', n: 'French Quarter & Jackson Square', c: 'see', lat: 29.9575, lng: -90.063, area: 'French Quarter', d: 'Wrought iron, street musicians, and a cathedral. Mornings are calm.', t: ['free', 'history'] },
      { id: 'frenchmen', n: 'Frenchmen Street', c: 'drink', lat: 29.963, lng: -90.057, area: 'Marigny', d: 'Three blocks, a dozen live bands a night, no cover at most.', p: 2, t: ['music', 'nightlife'], star: 1 },
      { id: 'cafedumonde', n: 'Café du Monde', c: 'eat', lat: 29.9575, lng: -90.062, area: 'French Quarter', d: 'Beignets and chicory coffee, open around the clock, cash only.', p: 1, t: ['cheap', 'late'], star: 1 },
      { id: 'commanders', n: "Commander's Palace", c: 'eat', lat: 29.929, lng: -90.085, area: 'Garden District', d: 'Turtle soup and 25-cent martinis at lunch. Jacket preferred.', p: 3, t: ['foodie'] },
      { id: 'gardenwalk', n: 'Garden District Walk', c: 'outdoors', lat: 29.929, lng: -90.084, area: 'Garden District', d: 'Antebellum mansions and Lafayette Cemetery. Take the St Charles streetcar.', t: ['free'] },
      { id: 'stlouis1', n: 'St Louis Cemetery No. 1', c: 'see', lat: 29.96, lng: -90.072, area: 'Tremé', d: 'Above-ground tombs; entry by guided tour only since 2015.', p: 1, t: ['history'] },
      { id: 'preservation', n: 'Preservation Hall', c: 'drink', lat: 29.958, lng: -90.065, area: 'French Quarter', d: 'Acoustic trad jazz, 45-minute sets, no drinks, no phones.', p: 2, t: ['music'], star: 1 },
      { id: 'butcher', n: 'Cochon Butcher', c: 'eat', lat: 29.944, lng: -90.069, area: 'Warehouse District', d: 'Muffuletta and house charcuterie without the white tablecloth.', p: 1, t: ['cheap', 'lunch'] }
    ]
  },

  {
    id: 'toronto', name: 'Toronto', country: 'Canada', region: 'namerica',
    tz: 'America/Toronto', cur: 'CA$', center: [43.6532, -79.3832],
    sk: 'modern', sky: 'nordic-blue',
    tagline: 'The good eating is in the neighbourhoods, not downtown.',
    districts: [
      { n: 'Downtown', lat: 43.651, lng: -79.38 },
      { n: 'Kensington', lat: 43.654, lng: -79.402 },
      { n: 'Queen West', lat: 43.647, lng: -79.42 },
      { n: 'Distillery', lat: 43.65, lng: -79.359 }
    ],
    water: [
      { k: 'shore', side: 'S', w: 0, pts: [[43.635, -79.46], [43.636, -79.41], [43.638, -79.37], [43.642, -79.33]] }
    ],
    hotels: [
      { n: 'The Drake Hotel', area: 'Queen West', lat: 43.643, lng: -79.425 },
      { n: 'Ace Hotel Toronto', area: 'Garment District', lat: 43.648, lng: -79.396 },
      { n: 'The Broadview Hotel', area: 'Riverside', lat: 43.66, lng: -79.35 }
    ],
    places: [
      { id: 'cntower', n: 'CN Tower', c: 'see', lat: 43.6426, lng: -79.3871, area: 'Downtown', d: 'Glass floor, and an EdgeWalk if you want to pay to be terrified.', p: 3, t: ['icon', 'views'] },
      { id: 'stlawrence', n: 'St Lawrence Market', c: 'eat', lat: 43.6487, lng: -79.3716, area: 'Old Town', d: 'Peameal bacon sandwich at Carousel. Closed Mondays.', p: 1, t: ['market'], star: 1 },
      { id: 'kensington', n: 'Kensington Market', c: 'shop', lat: 43.6545, lng: -79.402, area: 'Kensington', d: 'Vintage, produce, empanadas. Car-free on summer Sundays.', t: ['browse', 'free'] },
      { id: 'rom', n: 'Royal Ontario Museum', c: 'see', lat: 43.6677, lng: -79.3948, area: 'Yorkville', d: 'Crystal extension crashing out of a 1914 facade.', p: 2, t: ['rainy', 'art'] },
      { id: 'islands', n: 'Toronto Islands', c: 'outdoors', lat: 43.622, lng: -79.378, area: 'The Islands', d: '15-minute ferry to car-free beaches and the best skyline view.', p: 1, t: ['nature'], star: 1 },
      { id: 'distillery', n: 'Distillery District', c: 'see', lat: 43.6503, lng: -79.3596, area: 'Distillery', d: 'Victorian industrial lanes, pedestrian only, Christmas market in winter.', t: ['free'] },
      { id: 'sevenlives', n: 'Seven Lives Tacos', c: 'eat', lat: 43.6545, lng: -79.401, area: 'Kensington', d: 'Baja fish and smoked-marlin tacos from a counter the size of a hallway.', p: 1, t: ['cheap', 'foodie'] },
      { id: 'ago', n: 'Art Gallery of Ontario', c: 'see', lat: 43.6536, lng: -79.3925, area: 'Grange Park', d: 'Gehry spiral staircase; the Group of Seven rooms are the local draw.', p: 2, t: ['art', 'rainy'] }
    ]
  },

  {
    id: 'vancouver', name: 'Vancouver', country: 'Canada', region: 'namerica',
    tz: 'America/Vancouver', cur: 'CA$', center: [49.2827, -123.1207],
    sk: 'coastal', sky: 'pacific-haze',
    tagline: 'Mountains, sea and city in one afternoon, if it stops raining.',
    districts: [
      { n: 'Downtown', lat: 49.283, lng: -123.118 },
      { n: 'Gastown', lat: 49.284, lng: -123.106 },
      { n: 'Kitsilano', lat: 49.268, lng: -123.156 },
      { n: 'Mount Pleasant', lat: 49.264, lng: -123.1 }
    ],
    hotels: [
      { n: 'Skwachàys Lodge', area: 'Downtown Eastside', lat: 49.281, lng: -123.101 },
      { n: 'The Burrard', area: 'Downtown', lat: 49.281, lng: -123.125 },
      { n: 'Opus Hotel', area: 'Yaletown', lat: 49.274, lng: -123.128 }
    ],
    places: [
      { id: 'stanley', n: 'Stanley Park Seawall', c: 'outdoors', lat: 49.302, lng: -123.144, area: 'Stanley Park', d: '10 km loop around a rainforest, rentable bikes at the entrance.', t: ['nature', 'free'], star: 1 },
      { id: 'granville', n: 'Granville Island Market', c: 'eat', lat: 49.271, lng: -123.134, area: 'Granville Island', d: 'Take the tiny Aquabus across. Go hungry, arrive early.', p: 1, t: ['market'], star: 1 },
      { id: 'capilano', n: 'Capilano Suspension Bridge', c: 'see', lat: 49.343, lng: -123.115, area: 'North Vancouver', d: 'Expensive and busy; Lynn Canyon nearby is free and similar.', p: 3, t: ['nature'] },
      { id: 'grouse', n: 'Grouse Mountain', c: 'see', lat: 49.38, lng: -123.082, area: 'North Vancouver', d: 'Gondola up, or the Grouse Grind if you hate yourself.', p: 3, t: ['views'] },
      { id: 'gastown', n: 'Gastown', c: 'see', lat: 49.284, lng: -123.109, area: 'Gastown', d: 'Cobbles, the steam clock, and the city’s best cocktail bars.', t: ['free'] },
      { id: 'miku', n: 'Miku', c: 'eat', lat: 49.288, lng: -123.118, area: 'Coal Harbour', d: 'Flame-seared aburi sushi, waterfront tables.', p: 3, t: ['foodie'] },
      { id: 'kitsbeach', n: 'Kitsilano Beach', c: 'outdoors', lat: 49.274, lng: -123.153, area: 'Kitsilano', d: 'Skyline and mountains from the sand. Heated saltwater pool alongside.', t: ['free', 'nature'] },
      { id: 'moa', n: 'Museum of Anthropology', c: 'see', lat: 49.2695, lng: -123.259, area: 'UBC', d: 'Haida house posts and Bill Reid carvings in an Erickson building.', p: 2, t: ['art', 'history'] }
    ]
  },

  {
    id: 'mexicocity', name: 'Mexico City', country: 'Mexico', region: 'namerica',
    tz: 'America/Mexico_City', cur: 'MX$', center: [19.4326, -99.1332],
    sk: 'latin', sky: 'latin-sun',
    tagline: 'Altitude 2,240 m. Go easy on the mezcal the first night.',
    districts: [
      { n: 'Roma Norte', lat: 19.418, lng: -99.16 },
      { n: 'Condesa', lat: 19.412, lng: -99.172 },
      { n: 'Centro Histórico', lat: 19.434, lng: -99.133 },
      { n: 'Coyoacán', lat: 19.35, lng: -99.162 }
    ],
    hotels: [
      { n: 'Hotel Carlota', area: 'Cuauhtémoc', lat: 19.428, lng: -99.17 },
      { n: 'Círculo Mexicano', area: 'Centro Histórico', lat: 19.435, lng: -99.133 },
      { n: 'Casa Pancha', area: 'Roma Norte', lat: 19.418, lng: -99.159 }
    ],
    places: [
      { id: 'zocalo', n: 'Zócalo & Templo Mayor', c: 'see', lat: 19.434, lng: -99.132, area: 'Centro Histórico', d: 'Aztec ruins excavated beside the cathedral that replaced them.', p: 1, t: ['history', 'icon'] },
      { id: 'antropologia', n: 'Museo Nacional de Antropología', c: 'see', lat: 19.426, lng: -99.1863, area: 'Chapultepec', d: 'One of the great museums on earth. Allow half a day.', p: 1, t: ['history', 'art'], star: 1 },
      { id: 'teotihuacan', n: 'Teotihuacán', c: 'see', lat: 19.6925, lng: -98.8438, area: 'State of Mexico', d: 'An hour out. Go at opening; the pyramids bake by eleven.', p: 2, t: ['history', 'daytrip'], star: 1 },
      { id: 'frida', n: 'Museo Frida Kahlo', c: 'see', lat: 19.355, lng: -99.1624, area: 'Coyoacán', d: 'The Blue House. Tickets online only, days ahead.', p: 2, t: ['art'] },
      { id: 'coyoacanmkt', n: 'Mercado de Coyoacán', c: 'eat', lat: 19.35, lng: -99.162, area: 'Coyoacán', d: 'Tostadas counter at the centre. Point at what looks good.', p: 1, t: ['market'] },
      { id: 'califa', n: 'Taquería El Califa', c: 'eat', lat: 19.413, lng: -99.17, area: 'Condesa', d: 'Late-night tacos al pastor with proper salsas.', p: 1, t: ['cheap', 'late'] },
      { id: 'xochimilco', n: 'Xochimilco', c: 'outdoors', lat: 19.27, lng: -99.103, area: 'Xochimilco', d: 'Painted boats on Aztec canals. Split one; bring your own drinks.', p: 2, t: ['lively'] },
      { id: 'chapultepec', n: 'Bosque de Chapultepec', c: 'outdoors', lat: 19.42, lng: -99.181, area: 'Chapultepec', d: 'Twice the size of Central Park, with a castle on the hill.', t: ['nature', 'free'] }
    ]
  },

  {
    id: 'rio', name: 'Rio de Janeiro', country: 'Brazil', region: 'samerica',
    tz: 'America/Sao_Paulo', cur: 'R$', center: [-22.9068, -43.1729],
    sk: 'coastal', sky: 'southern-sea',
    tagline: 'Beach in the morning, mountain in the afternoon, samba after dark.',
    districts: [
      { n: 'Copacabana', lat: -22.97, lng: -43.186 },
      { n: 'Ipanema', lat: -22.984, lng: -43.205 },
      { n: 'Santa Teresa', lat: -22.92, lng: -43.187 },
      { n: 'Centro', lat: -22.905, lng: -43.176 }
    ],
    water: [
      { k: 'shore', side: 'S', w: 0, pts: [[-22.995, -43.23], [-22.988, -43.19], [-22.975, -43.17], [-22.96, -43.15]] }
    ],
    hotels: [
      { n: 'Hotel Fasano Rio', area: 'Ipanema', lat: -22.984, lng: -43.198 },
      { n: 'Mama Ruisa', area: 'Santa Teresa', lat: -22.919, lng: -43.185 },
      { n: 'Arena Copacabana', area: 'Copacabana', lat: -22.972, lng: -43.184 }
    ],
    places: [
      { id: 'christ', n: 'Christ the Redeemer', c: 'see', lat: -22.9519, lng: -43.2105, area: 'Corcovado', d: 'Van or cog train up. Go early; cloud closes in by midday.', p: 2, t: ['icon', 'views'], star: 1 },
      { id: 'sugarloaf', n: 'Sugarloaf Mountain', c: 'see', lat: -22.9486, lng: -43.1566, area: 'Urca', d: 'Two cable cars. Sunset from the first station is the trick.', p: 3, t: ['views'] },
      { id: 'ipanema', n: 'Ipanema Beach', c: 'outdoors', lat: -22.984, lng: -43.205, area: 'Ipanema', d: 'Posto 9 for the scene, Arpoador rock for the sunset applause.', t: ['free'], star: 1 },
      { id: 'selaron', n: 'Escadaria Selarón', c: 'see', lat: -22.9152, lng: -43.179, area: 'Lapa', d: '215 steps tiled from 60 countries. Busy, but free.', t: ['art', 'free'] },
      { id: 'tijuca', n: 'Tijuca Forest', c: 'outdoors', lat: -22.96, lng: -43.28, area: 'Tijuca', d: 'The largest urban rainforest on earth, with waterfalls in it.', t: ['nature', 'free'] },
      { id: 'colombo', n: 'Confeitaria Colombo', c: 'eat', lat: -22.905, lng: -43.179, area: 'Centro', d: 'Belle-époque mirrors and pastries since 1894.', p: 2, t: ['coffee', 'history'] },
      { id: 'lapa', n: 'Lapa Arches Nightlife', c: 'drink', lat: -22.913, lng: -43.18, area: 'Lapa', d: 'Samba spilling into the street under the aqueduct, Friday on.', p: 1, t: ['nightlife', 'music'] },
      { id: 'saocristovao', n: 'Feira de São Cristóvão', c: 'eat', lat: -22.897, lng: -43.222, area: 'São Cristóvão', d: 'Northeastern food and forró in a covered arena. Weekends.', p: 1, t: ['market', 'music'] }
    ]
  },

  {
    id: 'buenosaires', name: 'Buenos Aires', country: 'Argentina', region: 'samerica',
    tz: 'America/Argentina/Buenos_Aires', cur: 'AR$', center: [-34.6037, -58.3816],
    sk: 'latin', sky: 'latin-sun',
    tagline: 'Dinner at ten is early. Bring cash in good condition.',
    districts: [
      { n: 'Palermo', lat: -34.588, lng: -58.425 },
      { n: 'San Telmo', lat: -34.621, lng: -58.373 },
      { n: 'Recoleta', lat: -34.588, lng: -58.393 },
      { n: 'La Boca', lat: -34.635, lng: -58.363 }
    ],
    hotels: [
      { n: 'Home Hotel Palermo', area: 'Palermo', lat: -34.585, lng: -58.436 },
      { n: 'Mío Buenos Aires', area: 'Recoleta', lat: -34.588, lng: -58.39 },
      { n: 'Hotel Club Francés', area: 'Recoleta', lat: -34.59, lng: -58.392 }
    ],
    places: [
      { id: 'recoleta', n: 'Recoleta Cemetery', c: 'see', lat: -34.5875, lng: -58.393, area: 'Recoleta', d: 'A city of marble mausoleums. Evita is signposted.', p: 1, t: ['history'], star: 1 },
      { id: 'colon', n: 'Teatro Colón', c: 'see', lat: -34.601, lng: -58.383, area: 'Centro', d: 'One of the three best opera acoustics in the world. Tour or ticket.', p: 2, t: ['architecture'] },
      { id: 'santelmo', n: 'San Telmo Market', c: 'shop', lat: -34.621, lng: -58.373, area: 'San Telmo', d: 'Sunday antiques fair down Defensa, with tango in the square.', p: 1, t: ['market'], star: 1 },
      { id: 'caminito', n: 'Caminito, La Boca', c: 'see', lat: -34.639, lng: -58.363, area: 'La Boca', d: 'Painted corrugated houses. Daylight only, stay on the main streets.', t: ['free'] },
      { id: 'ateneo', n: 'El Ateneo Grand Splendid', c: 'shop', lat: -34.596, lng: -58.394, area: 'Recoleta', d: 'A 1919 theatre turned bookshop. Coffee on the old stage.', t: ['browse', 'free'] },
      { id: 'donjulio', n: 'Don Julio', c: 'eat', lat: -34.588, lng: -58.429, area: 'Palermo', d: 'The parrilla everyone means. Put your name down, drink the free fizz.', p: 3, t: ['foodie'], star: 1 },
      { id: 'milonga', n: 'Milonga Night', c: 'drink', lat: -34.61, lng: -58.38, area: 'San Telmo', d: 'Not a show — a dance where locals go. Class first, then floor.', p: 2, t: ['music', 'nightlife'] },
      { id: 'bosques', n: 'Bosques de Palermo', c: 'outdoors', lat: -34.572, lng: -58.418, area: 'Palermo', d: 'Rose garden, lakes, and the whole city jogging past.', t: ['nature', 'free'] }
    ]
  },

  {
    id: 'lima', name: 'Lima', country: 'Peru', region: 'samerica',
    tz: 'America/Lima', cur: 'S/', center: [-12.0464, -77.0428],
    sk: 'coastal', sky: 'pacific-haze',
    tagline: 'One of the best eating cities anywhere. Plan around lunch.',
    districts: [
      { n: 'Miraflores', lat: -12.12, lng: -77.03 },
      { n: 'Barranco', lat: -12.146, lng: -77.021 },
      { n: 'Centro', lat: -12.046, lng: -77.03 },
      { n: 'San Isidro', lat: -12.098, lng: -77.036 }
    ],
    hotels: [
      { n: 'Hotel B', area: 'Barranco', lat: -12.147, lng: -77.022 },
      { n: 'Atemporal', area: 'Miraflores', lat: -12.118, lng: -77.034 },
      { n: 'Casa República', area: 'Barranco', lat: -12.146, lng: -77.021 }
    ],
    places: [
      { id: 'central', n: 'Central', c: 'eat', lat: -12.131, lng: -77.023, area: 'Barranco', d: 'Menu organised by altitude. Book months out, genuinely.', p: 3, t: ['foodie'], star: 1 },
      { id: 'larco', n: 'Museo Larco', c: 'see', lat: -12.072, lng: -77.07, area: 'Pueblo Libre', d: 'Pre-Columbian gold and ceramics in a white colonial house.', p: 2, t: ['history'] },
      { id: 'barranco', n: 'Barranco & Bridge of Sighs', c: 'outdoors', lat: -12.146, lng: -77.021, area: 'Barranco', d: 'Murals, galleries, and the cliff path down to the sea.', t: ['free', 'art'] },
      { id: 'malecon', n: 'Malecón Cliff Walk', c: 'outdoors', lat: -12.125, lng: -77.033, area: 'Miraflores', d: 'Ten km of clifftop park above the Pacific. Paragliders overhead.', t: ['views', 'free'] },
      { id: 'surquillo', n: 'Mercado de Surquillo', c: 'eat', lat: -12.113, lng: -77.023, area: 'Surquillo', d: 'Where the chefs shop. Ceviche at the back counters.', p: 1, t: ['market', 'morning'] },
      { id: 'pucllana', n: 'Huaca Pucllana', c: 'see', lat: -12.111, lng: -77.033, area: 'Miraflores', d: 'An adobe pyramid from 500 AD, surrounded by apartments.', p: 1, t: ['history'] },
      { id: 'lamar', n: 'La Mar Cebichería', c: 'eat', lat: -12.103, lng: -77.048, area: 'San Isidro', d: 'Lunch only, no reservations. Tiradito and a pisco sour.', p: 2, t: ['foodie', 'lunch'], star: 1 },
      { id: 'plazamayor', n: 'Plaza Mayor & Cathedral', c: 'see', lat: -12.046, lng: -77.03, area: 'Centro', d: 'Colonial balconies and a changing of the guard at noon.', t: ['free', 'history'] }
    ]
  },

  {
    id: 'cusco', name: 'Cusco', country: 'Peru', region: 'samerica',
    tz: 'America/Lima', cur: 'S/', center: [-13.5319, -71.9675],
    sk: 'latin', sky: 'andes-violet',
    tagline: 'Do nothing on day one. At 3,400 m the altitude wins.',
    districts: [
      { n: 'Plaza de Armas', lat: -13.5165, lng: -71.979 },
      { n: 'San Blas', lat: -13.514, lng: -71.975 },
      { n: 'San Pedro', lat: -13.519, lng: -71.983 }
    ],
    hotels: [
      { n: 'Palacio Manco Capac', area: 'San Blas', lat: -13.515, lng: -71.978 },
      { n: 'Niños Hotel', area: 'Centro', lat: -13.514, lng: -71.982 },
      { n: 'Tierra Viva Cusco', area: 'Plaza de Armas', lat: -13.516, lng: -71.98 }
    ],
    places: [
      { id: 'machupicchu', n: 'Machu Picchu', c: 'see', lat: -13.1631, lng: -72.545, area: 'Sacred Valley', d: 'Train from Ollantaytambo. Tickets and circuit chosen months ahead.', p: 3, t: ['icon', 'history', 'daytrip'], star: 1 },
      { id: 'sacsayhuaman', n: 'Sacsayhuamán', c: 'see', lat: -13.509, lng: -71.982, area: 'Above Cusco', d: 'Inca stonework you cannot fit a blade between. Walk up from the plaza.', p: 2, t: ['history'] },
      { id: 'plazaarmas', n: 'Plaza de Armas', c: 'see', lat: -13.5165, lng: -71.979, area: 'Centro', d: 'Inca foundations, Spanish cathedral, endless arcades.', t: ['free'] },
      { id: 'sanpedro', n: 'San Pedro Market', c: 'eat', lat: -13.519, lng: -71.983, area: 'San Pedro', d: 'Juice stalls, soups, and the cheapest lunch in the Andes.', p: 1, t: ['market', 'cheap'] },
      { id: 'rainbow', n: 'Rainbow Mountain', c: 'outdoors', lat: -13.869, lng: -71.303, area: 'Vinicunca', d: '5,200 m and a 3am start. Only after you have acclimatised.', p: 2, t: ['nature', 'daytrip'] },
      { id: 'pisac', n: 'Sacred Valley & Písac', c: 'see', lat: -13.422, lng: -71.849, area: 'Sacred Valley', d: 'Terraces, ruins and the Sunday market. Lower and warmer than Cusco.', p: 2, t: ['history', 'daytrip'], star: 1 },
      { id: 'cicciolina', n: 'Cicciolina', c: 'eat', lat: -13.516, lng: -71.978, area: 'Centro', d: 'Tapas at the bar without a booking; dining room needs one.', p: 2, t: ['foodie'] },
      { id: 'sanblasview', n: 'San Blas Viewpoint', c: 'outdoors', lat: -13.514, lng: -71.974, area: 'San Blas', d: 'Steep cobbled climb, terracotta roofs, best at sunset.', t: ['views', 'free'] }
    ]
  }
);
