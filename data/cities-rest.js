/* TravelMe — Africa, the Middle East and Oceania.
   Coordinates are real to roughly neighbourhood-or-better precision. */

window.TM_CITIES.push(
  {
    id: 'marrakech', name: 'Marrakech', country: 'Morocco', region: 'africa',
    tz: 'Africa/Casablanca', cur: 'MAD', center: [31.6295, -7.9811],
    sk: 'domes', sky: 'desert-amber',
    tagline: 'The medina has no logic. Accept the first wrong turn.',
    districts: [
      { n: 'Medina', lat: 31.626, lng: -7.989 },
      { n: 'Gueliz', lat: 31.64, lng: -8.01 },
      { n: 'Kasbah', lat: 31.618, lng: -7.987 },
      { n: 'Palmeraie', lat: 31.67, lng: -7.95 }
    ],
    hotels: [
      { n: 'Riad Yasmine', area: 'Medina', lat: 31.632, lng: -7.987 },
      { n: 'El Fenn', area: 'Medina', lat: 31.624, lng: -7.993 },
      { n: 'Le Riad Jardin Secret', area: 'Medina', lat: 31.63, lng: -7.988 }
    ],
    places: [
      { id: 'jemaa', n: 'Jemaa el-Fnaa', c: 'see', lat: 31.6258, lng: -7.9891, area: 'Medina', d: 'Snake charmers by day, food stalls and storytellers by night.', t: ['icon', 'free'], star: 1 },
      { id: 'bahia', n: 'Bahia Palace', c: 'see', lat: 31.6216, lng: -7.9832, area: 'Medina', d: 'Painted cedar ceilings and courtyards. Go at opening.', p: 1, t: ['history', 'architecture'] },
      { id: 'majorelle', n: 'Jardin Majorelle', c: 'see', lat: 31.6417, lng: -8.0033, area: 'Gueliz', d: "Yves Saint Laurent's blue garden. Book a slot; it sells out.", p: 2, t: ['nature'], star: 1 },
      { id: 'souks', n: 'The Souks', c: 'shop', lat: 31.629, lng: -7.988, area: 'Medina', d: 'Start at a third of the asking price and mean it.', p: 1, t: ['market'] },
      { id: 'benyoussef', n: 'Medersa Ben Youssef', c: 'see', lat: 31.632, lng: -7.986, area: 'Medina', d: 'A 14th-century Quranic school; the tilework is the point.', p: 1, t: ['architecture'] },
      { id: 'nomad', n: 'Nomad', c: 'eat', lat: 31.6285, lng: -7.9875, area: 'Medina', d: 'Modern Moroccan on a rooftop over the spice square.', p: 2, t: ['foodie', 'views'] },
      { id: 'lejardin', n: 'Le Jardin', c: 'eat', lat: 31.63, lng: -7.989, area: 'Medina', d: 'Green courtyard hidden behind a nondescript door.', p: 2, t: ['lunch', 'quiet'] },
      { id: 'atlas', n: 'Atlas Mountains', c: 'outdoors', lat: 31.134, lng: -7.916, area: 'High Atlas', d: 'Imlil in 90 minutes; snow on the peaks into spring.', p: 2, t: ['nature', 'daytrip'] }
    ]
  },

  {
    id: 'capetown', name: 'Cape Town', country: 'South Africa', region: 'africa',
    tz: 'Africa/Johannesburg', cur: 'R', center: [-33.9249, 18.4241],
    sk: 'coastal', sky: 'southern-sea',
    tagline: 'Do the mountain on the first clear day. There may not be a second.',
    districts: [
      { n: 'City Bowl', lat: -33.925, lng: 18.42 },
      { n: 'Camps Bay', lat: -33.95, lng: 18.378 },
      { n: 'Woodstock', lat: -33.93, lng: 18.445 },
      { n: 'V&A Waterfront', lat: -33.903, lng: 18.42 }
    ],
    hotels: [
      { n: 'The Silo Hotel', area: 'V&A Waterfront', lat: -33.907, lng: 18.422 },
      { n: 'Gorgeous George', area: 'City Bowl', lat: -33.923, lng: 18.42 },
      { n: 'Cape Cadogan', area: 'Gardens', lat: -33.933, lng: 18.409 }
    ],
    places: [
      { id: 'tablemountain', n: 'Table Mountain', c: 'see', lat: -33.9628, lng: 18.4098, area: 'Table Mountain', d: 'Cable car runs only in clear weather. Book online the same morning.', p: 2, t: ['icon', 'views'], star: 1 },
      { id: 'capepoint', n: 'Cape of Good Hope', c: 'see', lat: -34.3568, lng: 18.474, area: 'Cape Peninsula', d: 'Full-day drive round Chapman’s Peak. Baboons will take your lunch.', p: 2, t: ['nature', 'daytrip'] },
      { id: 'boulders', n: 'Boulders Beach Penguins', c: 'see', lat: -34.197, lng: 18.451, area: 'Simon’s Town', d: 'African penguins on a public beach. Boardwalk entry fee.', p: 1, t: ['family', 'nature'] },
      { id: 'kirstenbosch', n: 'Kirstenbosch Gardens', c: 'outdoors', lat: -33.9884, lng: 18.4324, area: 'Newlands', d: 'Botanic gardens up the back of the mountain; summer sunset concerts.', p: 1, t: ['nature'], star: 1 },
      { id: 'zeitz', n: 'Zeitz MOCAA & Waterfront', c: 'see', lat: -33.908, lng: 18.422, area: 'V&A Waterfront', d: 'Grain silo carved into an atrium; African contemporary art inside.', p: 2, t: ['art', 'architecture'] },
      { id: 'bokaap', n: 'Bo-Kaap', c: 'see', lat: -33.921, lng: 18.415, area: 'Bo-Kaap', d: 'Painted houses and Cape Malay history. Ask before photographing homes.', t: ['free'] },
      { id: 'lacolombe', n: 'La Colombe', c: 'eat', lat: -34.0, lng: 18.42, area: 'Constantia', d: 'Tasting menu in the winelands, consistently rated the country’s best.', p: 3, t: ['foodie'] },
      { id: 'lionshead', n: "Lion's Head", c: 'outdoors', lat: -33.9356, lng: 18.389, area: 'City Bowl', d: 'Spiral path, chains near the top, full-moon hikes monthly.', t: ['views', 'free'], star: 1 }
    ]
  },

  {
    id: 'cairo', name: 'Cairo', country: 'Egypt', region: 'africa',
    tz: 'Africa/Cairo', cur: 'E£', center: [30.0444, 31.2357],
    sk: 'domes', sky: 'desert-amber',
    tagline: 'Five thousand years in one day is ambitious. Two days, then.',
    districts: [
      { n: 'Downtown', lat: 30.048, lng: 31.24 },
      { n: 'Zamalek', lat: 30.062, lng: 31.22 },
      { n: 'Giza', lat: 29.987, lng: 31.211 },
      { n: 'Islamic Cairo', lat: 30.045, lng: 31.262 }
    ],
    water: [
      { k: 'river', w: 10, pts: [[30.11, 31.22], [30.08, 31.225], [30.05, 31.228], [30.02, 31.225], [29.98, 31.22]] }
    ],
    hotels: [
      { n: 'Kempinski Nile Hotel', area: 'Garden City', lat: 30.04, lng: 31.23 },
      { n: 'Villa Belle Epoque', area: 'Maadi', lat: 29.96, lng: 31.256 },
      { n: 'Osiris Hotel', area: 'Downtown', lat: 30.046, lng: 31.239 }
    ],
    places: [
      { id: 'pyramids', n: 'Pyramids of Giza & Sphinx', c: 'see', lat: 29.9792, lng: 31.1342, area: 'Giza', d: 'Open at 7am. Agree every camel and guide price in advance.', p: 2, t: ['icon', 'history'], star: 1 },
      { id: 'gem', n: 'Grand Egyptian Museum', c: 'see', lat: 29.993, lng: 31.119, area: 'Giza', d: "Tutankhamun's full collection, in sight of the pyramids.", p: 3, t: ['history'], star: 1 },
      { id: 'egyptmus', n: 'Egyptian Museum', c: 'see', lat: 30.0478, lng: 31.2336, area: 'Tahrir', d: 'The old museum, dustier and quieter now. Still extraordinary.', p: 2, t: ['history'] },
      { id: 'khanel', n: 'Khan el-Khalili', c: 'shop', lat: 30.0477, lng: 31.2622, area: 'Islamic Cairo', d: 'Souk since 1382. Mint tea at El Fishawy, open 24 hours.', p: 1, t: ['market'] },
      { id: 'citadel', n: 'Citadel & Alabaster Mosque', c: 'see', lat: 30.0287, lng: 31.2599, area: 'Citadel', d: 'Saladin’s fortress on the hill; the city spreads out below.', p: 1, t: ['history', 'views'] },
      { id: 'felucca', n: 'Felucca on the Nile', c: 'outdoors', lat: 30.043, lng: 31.228, area: 'Zamalek', d: 'An hour under sail at sunset. Negotiate at the Garden City moorings.', p: 1, t: ['views', 'cheap'] },
      { id: 'koshary', n: 'Koshary Abou Tarek', c: 'eat', lat: 30.05, lng: 31.244, area: 'Downtown', d: 'Four floors devoted to one dish of rice, lentils and pasta.', p: 1, t: ['cheap', 'foodie'], star: 1 },
      { id: 'azharpark', n: 'Al-Azhar Park', c: 'outdoors', lat: 30.04, lng: 31.264, area: 'Islamic Cairo', d: 'Hilltop gardens built on 500 years of rubble. Sunset over the minarets.', p: 1, t: ['views', 'quiet'] }
    ]
  },

  {
    id: 'nairobi', name: 'Nairobi', country: 'Kenya', region: 'africa',
    tz: 'Africa/Nairobi', cur: 'KSh', center: [-1.2921, 36.8219],
    sk: 'modern', sky: 'savanna',
    tagline: 'A national park inside the city limits. Start there.',
    districts: [
      { n: 'Westlands', lat: -1.265, lng: 36.802 },
      { n: 'Karen', lat: -1.319, lng: 36.71 },
      { n: 'CBD', lat: -1.286, lng: 36.823 },
      { n: 'Kilimani', lat: -1.29, lng: 36.785 }
    ],
    hotels: [
      { n: 'Hemingways Nairobi', area: 'Karen', lat: -1.335, lng: 36.716 },
      { n: 'Trademark Hotel', area: 'Westlands', lat: -1.257, lng: 36.803 },
      { n: 'Villa Rosa Kempinski', area: 'Westlands', lat: -1.288, lng: 36.788 }
    ],
    places: [
      { id: 'nnp', n: 'Nairobi National Park', c: 'see', lat: -1.373, lng: 36.859, area: 'Langata', d: 'Rhino and lion with the skyline behind them. Dawn game drive.', p: 2, t: ['nature'], star: 1 },
      { id: 'sheldrick', n: 'Sheldrick Elephant Orphanage', c: 'see', lat: -1.38, lng: 36.75, area: 'Langata', d: 'One public hour daily at 11am. Book ahead, it is tiny.', p: 1, t: ['family', 'nature'], star: 1 },
      { id: 'giraffe', n: 'Giraffe Centre', c: 'see', lat: -1.376, lng: 36.744, area: 'Langata', d: 'Feed endangered Rothschild giraffes from a raised platform.', p: 1, t: ['family'] },
      { id: 'blixen', n: 'Karen Blixen Museum', c: 'see', lat: -1.351, lng: 36.715, area: 'Karen', d: "The Out of Africa farmhouse, at the foot of the Ngong Hills.", p: 1, t: ['history'] },
      { id: 'maasaimkt', n: 'Maasai Market', c: 'shop', lat: -1.286, lng: 36.823, area: 'CBD', d: 'Rotates location by day of the week. Haggle hard, pay in cash.', p: 1, t: ['market'] },
      { id: 'talisman', n: 'Talisman', c: 'eat', lat: -1.32, lng: 36.708, area: 'Karen', d: 'Garden restaurant, long lunches, the best food in the city.', p: 2, t: ['foodie'] },
      { id: 'carnivore', n: 'Carnivore', c: 'eat', lat: -1.33, lng: 36.78, area: 'Langata', d: 'Meat on Maasai swords until you lower the flag. A spectacle.', p: 2, t: ['lively'] },
      { id: 'ngong', n: 'Ngong Hills', c: 'outdoors', lat: -1.4, lng: 36.64, area: 'Ngong', d: 'Seven peaks along a ridge, Rift Valley on one side.', p: 1, t: ['nature', 'daytrip'] }
    ]
  },

  {
    id: 'zanzibar', name: 'Zanzibar', country: 'Tanzania', region: 'africa',
    tz: 'Africa/Dar_es_Salaam', cur: 'TSh', center: [-6.1659, 39.2026],
    sk: 'coastal', sky: 'tropic-dusk',
    tagline: 'Stone Town for two nights, then move to the coast.',
    districts: [
      { n: 'Stone Town', lat: -6.162, lng: 39.192 },
      { n: 'Nungwi', lat: -5.726, lng: 39.296 },
      { n: 'Paje', lat: -6.268, lng: 39.53 },
      { n: 'Kendwa', lat: -5.74, lng: 39.29 }
    ],
    hotels: [
      { n: 'Emerson on Hurumzi', area: 'Stone Town', lat: -6.163, lng: 39.19 },
      { n: 'Upendo Beach', area: 'Paje', lat: -6.27, lng: 39.53 },
      { n: 'Zanzi Resort', area: 'Bububu', lat: -6.12, lng: 39.18 }
    ],
    places: [
      { id: 'stonetown', n: 'Stone Town', c: 'see', lat: -6.162, lng: 39.192, area: 'Stone Town', d: 'Carved doors, Omani balconies, and no street plan whatsoever.', t: ['history', 'free'], star: 1 },
      { id: 'forodhani', n: 'Forodhani Night Market', c: 'eat', lat: -6.162, lng: 39.188, area: 'Stone Town', d: 'Seafood grills in the seafront gardens from sunset. Agree prices first.', p: 1, t: ['late', 'market'] },
      { id: 'jozani', n: 'Jozani Forest', c: 'see', lat: -6.25, lng: 39.41, area: 'Central', d: 'Red colobus monkeys found nowhere else, plus a mangrove boardwalk.', p: 1, t: ['nature'] },
      { id: 'spicefarm', n: 'Spice Farm Tour', c: 'see', lat: -6.12, lng: 39.28, area: 'Kizimbani', d: 'Cloves, nutmeg and vanilla — the reason the island exists.', p: 1, t: ['history'] },
      { id: 'prisonisland', n: 'Prison Island', c: 'see', lat: -6.12, lng: 39.17, area: 'Changuu', d: 'Giant tortoises, and snorkelling on the way back.', p: 1, t: ['family'] },
      { id: 'nakupenda', n: 'Nakupenda Sandbank', c: 'outdoors', lat: -6.14, lng: 39.16, area: 'Offshore', d: 'A sandbar that appears at low tide. Half-day boat with lunch.', p: 2, t: ['nature'], star: 1 },
      { id: 'therock', n: 'The Rock Restaurant', c: 'eat', lat: -6.28, lng: 39.54, area: 'Michamvi', d: 'On a rock in the sea; you wade or are rowed depending on the tide.', p: 3, t: ['views'] },
      { id: 'kendwa', n: 'Kendwa Beach', c: 'outdoors', lat: -5.74, lng: 39.29, area: 'Kendwa', d: 'The one northern beach where the tide does not strand you.', t: ['free'] }
    ]
  },

  {
    id: 'dubai', name: 'Dubai', country: 'United Arab Emirates', region: 'meast',
    tz: 'Asia/Dubai', cur: 'AED', center: [25.2048, 55.2708],
    sk: 'modern', sky: 'desert-amber',
    tagline: 'Old Dubai across the creek is the half people skip. Do not.',
    districts: [
      { n: 'Downtown', lat: 25.197, lng: 55.274 },
      { n: 'Marina', lat: 25.08, lng: 55.14 },
      { n: 'Deira', lat: 25.27, lng: 55.31 },
      { n: 'Jumeirah', lat: 25.205, lng: 55.25 }
    ],
    hotels: [
      { n: 'Rove Downtown', area: 'Downtown', lat: 25.19, lng: 55.275 },
      { n: 'Zabeel House Al Seef', area: 'Al Seef', lat: 25.26, lng: 55.3 },
      { n: 'Form Hotel', area: 'Al Jaddaf', lat: 25.24, lng: 55.34 }
    ],
    places: [
      { id: 'burj', n: 'Burj Khalifa', c: 'see', lat: 25.1972, lng: 55.2744, area: 'Downtown', d: '828 m. Book a sunset slot online; walk-up prices are brutal.', p: 3, t: ['icon', 'views'], star: 1 },
      { id: 'dubaimall', n: 'Dubai Mall & Fountain', c: 'see', lat: 25.1975, lng: 55.2796, area: 'Downtown', d: 'Aquarium, ice rink, and a free fountain show every 30 min after 6pm.', t: ['family', 'free'] },
      { id: 'goldsouk', n: 'Gold & Spice Souks', c: 'shop', lat: 25.27, lng: 55.297, area: 'Deira', d: 'Gold sold by weight at the day’s rate; you pay for the workmanship.', p: 1, t: ['market'] },
      { id: 'abra', n: 'Abra across the Creek', c: 'outdoors', lat: 25.265, lng: 55.297, area: 'Deira', d: 'One dirham for the best ride in the city. Wooden boats, no roof.', p: 1, t: ['cheap', 'views'], star: 1 },
      { id: 'alfahidi', n: 'Al Fahidi Historic District', c: 'see', lat: 25.263, lng: 55.297, area: 'Bur Dubai', d: 'Wind-tower houses and coffee museums in the old quarter.', t: ['history', 'free'] },
      { id: 'jumeirahmosque', n: 'Jumeirah Mosque', c: 'see', lat: 25.233, lng: 55.266, area: 'Jumeirah', d: 'Open to non-Muslims on guided tours, six days a week.', p: 1, t: ['architecture'] },
      { id: 'desertsafari', n: 'Desert Safari', c: 'outdoors', lat: 24.9, lng: 55.6, area: 'Al Marmoom', d: 'Dune drive, camels, dinner under the stars. Pick a small operator.', p: 3, t: ['nature'] },
      { id: 'ravi', n: 'Ravi Restaurant', c: 'eat', lat: 25.232, lng: 55.282, area: 'Satwa', d: 'Pakistani institution since 1978. Plastic chairs, extraordinary value.', p: 1, t: ['cheap', 'foodie'], star: 1 }
    ]
  },

  {
    id: 'doha', name: 'Doha', country: 'Qatar', region: 'meast',
    tz: 'Asia/Qatar', cur: 'QAR', center: [25.2854, 51.531],
    sk: 'modern', sky: 'desert-amber',
    tagline: 'Two world-class museums and a souq. That is the trip.',
    districts: [
      { n: 'West Bay', lat: 25.32, lng: 51.53 },
      { n: 'Msheireb', lat: 25.287, lng: 51.525 },
      { n: 'Souq Waqif', lat: 25.288, lng: 51.533 },
      { n: 'The Pearl', lat: 25.37, lng: 51.55 }
    ],
    hotels: [
      { n: 'Mandarin Oriental Doha', area: 'Msheireb', lat: 25.287, lng: 51.525 },
      { n: 'Souq Waqif Boutique Hotels', area: 'Souq Waqif', lat: 25.288, lng: 51.533 },
      { n: 'Al Najada Doha', area: 'Msheireb', lat: 25.287, lng: 51.53 }
    ],
    places: [
      { id: 'mia', n: 'Museum of Islamic Art', c: 'see', lat: 25.2952, lng: 51.539, area: 'Corniche', d: 'I. M. Pei’s last great building, on its own island. Free.', t: ['art', 'architecture', 'free'], star: 1 },
      { id: 'souqwaqif', n: 'Souq Waqif', c: 'shop', lat: 25.2877, lng: 51.533, area: 'Souq Waqif', d: 'Spices, falcons and shisha courtyards. Liveliest after 8pm.', t: ['market', 'free'], star: 1 },
      { id: 'nmoq', n: 'National Museum of Qatar', c: 'see', lat: 25.287, lng: 51.551, area: 'Corniche', d: 'Jean Nouvel’s interlocking desert-rose discs.', p: 2, t: ['architecture'] },
      { id: 'katara', n: 'Katara Cultural Village', c: 'see', lat: 25.359, lng: 51.525, area: 'Katara', d: 'Amphitheatre, galleries and a beach. Free to wander.', t: ['free'] },
      { id: 'corniche', n: 'The Corniche', c: 'outdoors', lat: 25.3, lng: 51.53, area: 'Corniche', d: 'Seven km of waterfront promenade facing the West Bay towers.', t: ['views', 'free'] },
      { id: 'inlandsea', n: 'Inland Sea & Dunes', c: 'outdoors', lat: 24.6, lng: 51.2, area: 'Khor Al Adaid', d: 'Where the desert runs into the sea. 4x4 tour, full day.', p: 3, t: ['nature', 'daytrip'] },
      { id: 'parisa', n: 'Parisa Souq Waqif', c: 'eat', lat: 25.288, lng: 51.533, area: 'Souq Waqif', d: 'Persian cooking in a room of mirrored mosaic.', p: 2, t: ['foodie'] },
      { id: 'msheireb', n: 'Msheireb Downtown', c: 'see', lat: 25.287, lng: 51.523, area: 'Msheireb', d: 'A rebuilt old quarter, plus the excellent Msheireb Museums.', t: ['architecture', 'free'] }
    ]
  },

  {
    id: 'telaviv', name: 'Tel Aviv', country: 'Israel', region: 'meast',
    tz: 'Asia/Jerusalem', cur: '₪', center: [32.0853, 34.7818],
    sk: 'modern', sky: 'aegean',
    tagline: 'Beach city that eats late. Everything shuts for Shabbat.',
    districts: [
      { n: 'Neve Tzedek', lat: 32.06, lng: 34.763 },
      { n: 'Florentin', lat: 32.056, lng: 34.769 },
      { n: 'Jaffa', lat: 32.054, lng: 34.752 },
      { n: 'Rothschild', lat: 32.064, lng: 34.774 }
    ],
    hotels: [
      { n: 'The Norman', area: 'Rothschild', lat: 32.066, lng: 34.774 },
      { n: 'Brown Beach House', area: 'Lev Ha’ir', lat: 32.068, lng: 34.769 },
      { n: 'Hotel Saul', area: 'Neve Tzedek', lat: 32.059, lng: 34.764 }
    ],
    places: [
      { id: 'jaffa', n: 'Old Jaffa', c: 'see', lat: 32.054, lng: 34.752, area: 'Jaffa', d: 'Port, flea market and stone alleys, 4,000 years old.', t: ['history', 'free'], star: 1 },
      { id: 'carmel', n: 'Carmel Market', c: 'eat', lat: 32.068, lng: 34.769, area: 'Kerem HaTeimanim', d: 'Produce at the top, hummus and arak bars in the lanes beside it.', p: 1, t: ['market'] },
      { id: 'promenade', n: 'Beach Promenade', c: 'outdoors', lat: 32.08, lng: 34.766, area: 'Seafront', d: 'Walk or cycle the whole coast from the port to Jaffa.', t: ['free'] },
      { id: 'bauhaus', n: 'Bauhaus White City', c: 'see', lat: 32.078, lng: 34.774, area: 'Rothschild', d: '4,000 modernist buildings, UNESCO-listed. Free Saturday tours.', t: ['architecture', 'free'] },
      { id: 'jerusalem', n: 'Jerusalem', c: 'see', lat: 31.778, lng: 35.235, area: 'Jerusalem', d: 'An hour by train. The Old City needs a full day at minimum.', p: 2, t: ['history', 'daytrip'], star: 1 },
      { id: 'sarona', n: 'Sarona Market', c: 'eat', lat: 32.072, lng: 34.787, area: 'Sarona', d: 'Indoor food hall in a restored Templer colony.', p: 2, t: ['market'] },
      { id: 'portsaid', n: 'Port Said', c: 'drink', lat: 32.063, lng: 34.775, area: 'Rothschild', d: 'Records, cheap wine and tables on the pavement until late.', p: 2, t: ['nightlife'] },
      { id: 'dizengoff', n: 'Dizengoff Street', c: 'shop', lat: 32.079, lng: 34.774, area: 'Dizengoff', d: 'Independent shops, the fountain, and bakeries every hundred metres.', t: ['browse'] }
    ]
  },

  {
    id: 'amman', name: 'Amman', country: 'Jordan', region: 'meast',
    tz: 'Asia/Amman', cur: 'JD', center: [31.9539, 35.9106],
    sk: 'domes', sky: 'desert-amber',
    tagline: 'Most people use it as a base. Give the city itself a day.',
    districts: [
      { n: 'Jabal Amman', lat: 31.951, lng: 35.92 },
      { n: 'Downtown', lat: 31.952, lng: 35.935 },
      { n: 'Jabal Weibdeh', lat: 31.958, lng: 35.925 },
      { n: 'Abdoun', lat: 31.94, lng: 35.88 }
    ],
    hotels: [
      { n: 'Toledo Amman', area: 'Jabal Amman', lat: 31.95, lng: 35.91 },
      { n: 'Amman Rotana', area: 'Abdali', lat: 31.98, lng: 35.88 },
      { n: 'The Boulevard Arjaan', area: 'Abdali', lat: 31.99, lng: 35.88 }
    ],
    places: [
      { id: 'petra', n: 'Petra', c: 'see', lat: 30.3285, lng: 35.4444, area: 'Wadi Musa', d: 'Three hours south. Stay overnight and enter at 6am through the Siq.', p: 3, t: ['icon', 'history', 'daytrip'], star: 1 },
      { id: 'wadirum', n: 'Wadi Rum', c: 'outdoors', lat: 29.576, lng: 35.42, area: 'Wadi Rum', d: 'Sleep in a Bedouin camp. The silence is the attraction.', p: 3, t: ['nature', 'daytrip'], star: 1 },
      { id: 'citadel', n: 'Amman Citadel', c: 'see', lat: 31.9548, lng: 35.9345, area: 'Jabal al-Qal’a', d: 'Roman temple, Umayyad palace, and the whole city below.', p: 1, t: ['history', 'views'] },
      { id: 'romantheatre', n: 'Roman Theatre', c: 'see', lat: 31.9515, lng: 35.939, area: 'Downtown', d: '6,000 seats cut into the hillside in the 2nd century.', p: 1, t: ['history'] },
      { id: 'rainbowst', n: 'Rainbow Street', c: 'shop', lat: 31.951, lng: 35.923, area: 'Jabal Amman', d: 'Cafés, craft shops and a Friday souk in summer.', t: ['browse', 'free'] },
      { id: 'hashem', n: 'Hashem Restaurant', c: 'eat', lat: 31.952, lng: 35.935, area: 'Downtown', d: 'Falafel and hummus in an alley, open all hours, a few dinars.', p: 1, t: ['cheap', 'foodie'], star: 1 },
      { id: 'habibah', n: 'Habibah Sweets', c: 'eat', lat: 31.952, lng: 35.934, area: 'Downtown', d: 'Kunafa by the slab from the hole-in-the-wall counter.', p: 1, t: ['sweet', 'cheap'] },
      { id: 'deadsea', n: 'Dead Sea', c: 'outdoors', lat: 31.5, lng: 35.5, area: 'Dead Sea', d: 'An hour west, 430 m below sea level. Do not shave that morning.', p: 2, t: ['nature', 'daytrip'] }
    ]
  },

  {
    id: 'sydney', name: 'Sydney', country: 'Australia', region: 'oceania',
    tz: 'Australia/Sydney', cur: 'A$', center: [-33.8688, 151.2093],
    sk: 'harbour', sky: 'southern-sea',
    tagline: 'The harbour is public transport. Use the ferries as sightseeing.',
    districts: [
      { n: 'CBD', lat: -33.869, lng: 151.209 },
      { n: 'Surry Hills', lat: -33.885, lng: 151.211 },
      { n: 'Bondi', lat: -33.8915, lng: 151.2767 },
      { n: 'Newtown', lat: -33.898, lng: 151.179 }
    ],
    water: [
      { k: 'river', w: 12, pts: [[-33.855, 151.16], [-33.852, 151.2], [-33.856, 151.23], [-33.85, 151.26], [-33.84, 151.28]] }
    ],
    hotels: [
      { n: 'QT Sydney', area: 'CBD', lat: -33.869, lng: 151.207 },
      { n: 'Paramount House Hotel', area: 'Surry Hills', lat: -33.884, lng: 151.212 },
      { n: 'Ovolo Woolloomooloo', area: 'Woolloomooloo', lat: -33.869, lng: 151.22 }
    ],
    places: [
      { id: 'opera', n: 'Sydney Opera House', c: 'see', lat: -33.8568, lng: 151.2153, area: 'Circular Quay', d: 'Tour inside, or just take a drink on the lower concourse steps.', p: 2, t: ['icon', 'architecture'], star: 1 },
      { id: 'harbourbridge', n: 'Harbour Bridge', c: 'see', lat: -33.8523, lng: 151.2108, area: 'The Rocks', d: 'The climb costs a fortune; the pylon lookout is a fraction of it.', p: 3, t: ['views'] },
      { id: 'bondicoogee', n: 'Bondi to Coogee Walk', c: 'outdoors', lat: -33.8915, lng: 151.2767, area: 'Eastern Beaches', d: '6 km of clifftop path past four beaches and an ocean pool.', t: ['nature', 'free'], star: 1 },
      { id: 'botanic', n: 'Royal Botanic Garden', c: 'outdoors', lat: -33.8642, lng: 151.2166, area: 'CBD', d: 'Free, and Mrs Macquarie’s Chair has the classic bridge-and-opera view.', t: ['free', 'views'] },
      { id: 'manly', n: 'Manly Ferry', c: 'outdoors', lat: -33.86, lng: 151.21, area: 'Circular Quay', d: 'Thirty minutes across the harbour on an Opal card. Best value in Sydney.', p: 1, t: ['cheap', 'views'], star: 1 },
      { id: 'taronga', n: 'Taronga Zoo', c: 'see', lat: -33.843, lng: 151.241, area: 'Mosman', d: 'Arrive by ferry, start at the top, walk down toward the harbour.', p: 3, t: ['family'] },
      { id: 'fishmarket', n: 'Sydney Fish Market', c: 'eat', lat: -33.87, lng: 151.19, area: 'Pyrmont', d: 'Oysters and prawns at 7am with the gulls watching.', p: 2, t: ['market', 'morning'] },
      { id: 'ester', n: 'Ester', c: 'eat', lat: -33.885, lng: 151.198, area: 'Chippendale', d: 'Wood-fired everything. Book, or eat at the bar.', p: 2, t: ['foodie'] }
    ]
  },

  {
    id: 'melbourne', name: 'Melbourne', country: 'Australia', region: 'oceania',
    tz: 'Australia/Melbourne', cur: 'A$', center: [-37.8136, 144.9631],
    sk: 'modern', sky: 'southern-sea',
    tagline: 'The good things are down the laneways and up the staircases.',
    districts: [
      { n: 'CBD', lat: -37.814, lng: 144.963 },
      { n: 'Fitzroy', lat: -37.798, lng: 144.978 },
      { n: 'St Kilda', lat: -37.868, lng: 144.98 },
      { n: 'Carlton', lat: -37.8, lng: 144.967 }
    ],
    water: [
      { k: 'river', w: 6, pts: [[-37.82, 144.92], [-37.818, 144.95], [-37.82, 144.97], [-37.826, 144.995], [-37.83, 145.02]] }
    ],
    hotels: [
      { n: 'The Hotel Windsor', area: 'CBD', lat: -37.811, lng: 144.973 },
      { n: 'United Places', area: 'South Yarra', lat: -37.833, lng: 144.98 },
      { n: 'Ovolo Laneways', area: 'CBD', lat: -37.811, lng: 144.969 }
    ],
    places: [
      { id: 'laneways', n: 'Laneway Coffee Crawl', c: 'eat', lat: -37.815, lng: 144.966, area: 'CBD', d: 'Degraves, Centre Place, Hardware Lane. Order a flat white and blend in.', p: 1, t: ['coffee', 'foodie'], star: 1 },
      { id: 'qvm', n: 'Queen Victoria Market', c: 'shop', lat: -37.8076, lng: 144.9568, area: 'CBD', d: 'Since 1878. Winter night market on Wednesdays.', p: 1, t: ['market'] },
      { id: 'ngv', n: 'NGV International', c: 'see', lat: -37.8226, lng: 144.9689, area: 'Southbank', d: 'Free permanent collection; walk through the water wall on the way in.', t: ['art', 'free', 'rainy'] },
      { id: 'greatocean', n: 'Great Ocean Road', c: 'see', lat: -38.68, lng: 143.39, area: 'Victoria', d: 'Full day, driving west. Twelve Apostles at the far end.', p: 3, t: ['nature', 'daytrip'], star: 1 },
      { id: 'stkilda', n: 'St Kilda Penguins', c: 'outdoors', lat: -37.868, lng: 144.974, area: 'St Kilda', d: 'Little penguins come ashore on the breakwater at dusk. Free.', t: ['nature', 'free'] },
      { id: 'fitzroy', n: 'Brunswick Street, Fitzroy', c: 'shop', lat: -37.798, lng: 144.978, area: 'Fitzroy', d: 'Vintage, bookshops, bars and the city’s best people-watching.', t: ['browse'] },
      { id: 'chinchin', n: 'Chin Chin', c: 'eat', lat: -37.815, lng: 144.97, area: 'CBD', d: 'South-East Asian, no bookings, drink downstairs while you wait.', p: 2, t: ['foodie', 'lively'] },
      { id: 'mcg', n: 'MCG', c: 'see', lat: -37.82, lng: 144.9834, area: 'Yarra Park', d: 'Cricket in summer, AFL in winter, 100,000 people either way.', p: 2, t: ['lively'] }
    ]
  },

  {
    id: 'auckland', name: 'Auckland', country: 'New Zealand', region: 'oceania',
    tz: 'Pacific/Auckland', cur: 'NZ$', center: [-36.8485, 174.7633],
    sk: 'coastal', sky: 'southern-sea',
    tagline: 'Built on fifty volcanoes. Climb one, then get on a ferry.',
    districts: [
      { n: 'CBD', lat: -36.849, lng: 174.763 },
      { n: 'Ponsonby', lat: -36.856, lng: 174.744 },
      { n: 'Devonport', lat: -36.83, lng: 174.796 },
      { n: 'Mount Eden', lat: -36.877, lng: 174.764 }
    ],
    hotels: [
      { n: 'Hotel Britomart', area: 'CBD', lat: -36.844, lng: 174.767 },
      { n: 'The Convent Hotel', area: 'Grey Lynn', lat: -36.858, lng: 174.742 },
      { n: 'QT Auckland', area: 'Viaduct', lat: -36.845, lng: 174.768 }
    ],
    places: [
      { id: 'waiheke', n: 'Waiheke Island', c: 'see', lat: -36.8, lng: 175.08, area: 'Hauraki Gulf', d: '40-minute ferry to vineyards, olive groves and beaches.', p: 2, t: ['nature', 'daytrip'], star: 1 },
      { id: 'skytower', n: 'Sky Tower', c: 'see', lat: -36.8485, lng: 174.7621, area: 'CBD', d: 'Glass floor panels, and people jumping off the side on a wire.', p: 2, t: ['views'] },
      { id: 'mounteden', n: 'Mount Eden', c: 'outdoors', lat: -36.877, lng: 174.764, area: 'Mount Eden', d: 'Walk up a volcanic cone for a 360° view. Free, ten minutes.', t: ['views', 'free'] },
      { id: 'warmemorial', n: 'Auckland Museum', c: 'see', lat: -36.86, lng: 174.778, area: 'Domain', d: 'Māori and Pacific collections on the ground floor; daily cultural show.', p: 2, t: ['history'] },
      { id: 'devonport', n: 'Devonport Ferry', c: 'outdoors', lat: -36.833, lng: 174.796, area: 'Devonport', d: 'Twelve minutes across the harbour to a Victorian village.', p: 1, t: ['cheap'] },
      { id: 'piha', n: 'Piha Beach', c: 'outdoors', lat: -36.954, lng: 174.468, area: 'Waitākere', d: 'Black volcanic sand and serious surf, 45 min west. Swim between the flags.', t: ['nature', 'free'] },
      { id: 'amano', n: 'Amano', c: 'eat', lat: -36.844, lng: 174.767, area: 'Britomart', d: 'Bakery, deli and dining room in one converted warehouse.', p: 2, t: ['foodie'] },
      { id: 'kroad', n: 'Karangahape Road', c: 'drink', lat: -36.858, lng: 174.759, area: 'K Road', d: 'Where Auckland goes out. Galleries by day, bars all night.', p: 2, t: ['nightlife'] }
    ]
  },

  {
    id: 'queenstown', name: 'Queenstown', country: 'New Zealand', region: 'oceania',
    tz: 'Pacific/Auckland', cur: 'NZ$', center: [-45.0312, 168.6626],
    sk: 'coastal', sky: 'andes-violet',
    tagline: 'Book Milford Sound for a clear day. Rain makes the waterfalls better anyway.',
    districts: [
      { n: 'Town Centre', lat: -45.0312, lng: 168.6626 },
      { n: 'Frankton', lat: -45.02, lng: 168.74 },
      { n: 'Arrowtown', lat: -44.94, lng: 168.83 }
    ],
    hotels: [
      { n: "Eichardt's Private Hotel", area: 'Town Centre', lat: -45.032, lng: 168.662 },
      { n: 'Sherwood Queenstown', area: 'Fernhill', lat: -45.04, lng: 168.69 },
      { n: 'Nomads Queenstown', area: 'Town Centre', lat: -45.031, lng: 168.661 }
    ],
    places: [
      { id: 'milford', n: 'Milford Sound', c: 'see', lat: -44.671, lng: 167.925, area: 'Fiordland', d: 'Twelve-hour day by coach and boat, or fly in. Unmissable either way.', p: 3, t: ['nature', 'daytrip'], star: 1 },
      { id: 'skyline', n: 'Skyline Gondola & Luge', c: 'see', lat: -45.028, lng: 168.656, area: 'Bob’s Peak', d: 'Steepest cable car in the southern hemisphere, then a downhill go-kart.', p: 2, t: ['views', 'family'] },
      { id: 'wakatipu', n: 'Lake Wakatipu', c: 'outdoors', lat: -45.032, lng: 168.66, area: 'Lakefront', d: 'The 1912 steamship TSS Earnslaw still crosses it daily.', p: 2, t: ['views'] },
      { id: 'benlomond', n: 'Ben Lomond Track', c: 'outdoors', lat: -45.02, lng: 168.64, area: 'Ben Lomond', d: 'Six to eight hours return, 1,438 m. Serious walk, enormous payoff.', t: ['nature', 'free'] },
      { id: 'fergburger', n: 'Fergburger', c: 'eat', lat: -45.0315, lng: 168.6615, area: 'Town Centre', d: 'The queue never stops and the burger is still worth it.', p: 1, t: ['cheap'], star: 1 },
      { id: 'arrowtown', n: 'Arrowtown', c: 'see', lat: -44.94, lng: 168.83, area: 'Arrowtown', d: 'Gold-rush village, 20 minutes out. Autumn colour in April.', t: ['history', 'free'] },
      { id: 'bungy', n: 'AJ Hackett Bungy', c: 'see', lat: -45.0, lng: 168.8, area: 'Nevis / Kawarau', d: 'Where commercial bungy was invented. 43 m or 134 m.', p: 3, t: ['lively'] },
      { id: 'gibbston', n: 'Gibbston Valley Wineries', c: 'drink', lat: -45.0, lng: 168.9, area: 'Gibbston', d: 'Pinot noir in a gorge; cycle the trail between cellar doors.', p: 2, t: ['foodie'] }
    ]
  }
);
