/* TravelMe — Europe. Coordinates are real to roughly neighbourhood-or-better precision.
   Distances derived from them are straight-line estimates, not routed. */

window.TM_CITIES.push(
  {
    id: 'paris', name: 'Paris', country: 'France', region: 'europe',
    tz: 'Europe/Paris', cur: '€', center: [48.86, 2.335],
    sk: 'paris', sky: 'paris-dusk',
    tagline: 'Six arrondissements a day is two too many.',
    districts: [
      { n: 'Montmartre', lat: 48.886, lng: 2.34 },
      { n: 'Le Marais', lat: 48.859, lng: 2.362 },
      { n: 'Saint-Germain', lat: 48.853, lng: 2.333 },
      { n: 'Latin Quarter', lat: 48.848, lng: 2.347 }
    ],
    water: [
      { k: 'river', w: 9, pts: [[48.838, 2.262], [48.847, 2.279], [48.853, 2.294], [48.862, 2.306], [48.859, 2.323], [48.854, 2.34], [48.85, 2.356], [48.845, 2.375], [48.839, 2.396], [48.834, 2.415]] }
    ],
    hotels: [
      { n: 'Hôtel Lutetia', area: 'Saint-Germain', lat: 48.8515, lng: 2.3264 },
      { n: 'Hôtel Fabric', area: 'Oberkampf', lat: 48.8646, lng: 2.3746 },
      { n: 'Le Meurice', area: 'Tuileries', lat: 48.8654, lng: 2.3282 },
      { n: 'Generator Paris', area: 'Buttes-Chaumont', lat: 48.879, lng: 2.3706 },
      { n: 'Hôtel Malte Opéra', area: '2nd arr.', lat: 48.8686, lng: 2.3417 }
    ],
    places: [
      { id: 'eiffel', n: 'Eiffel Tower', c: 'see', lat: 48.8584, lng: 2.2945, area: 'Champ de Mars', d: 'Book the summit lift; the stairs queue moves faster.', t: ['views', 'icon'], star: 1 },
      { id: 'louvre', n: 'Musée du Louvre', c: 'see', lat: 48.8606, lng: 2.3376, area: '1st arr.', d: 'Enter via Porte des Lions to skip the pyramid crush.', p: 2, t: ['art', 'rainy'], star: 1 },
      { id: 'orsay', n: 'Musée d\'Orsay', c: 'see', lat: 48.86, lng: 2.3266, area: '7th arr.', d: 'Impressionists on the top floor, behind the station clock.', p: 2, t: ['art', 'rainy'], star: 1 },
      { id: 'chapelle', n: 'Sainte-Chapelle', c: 'see', lat: 48.8554, lng: 2.345, area: 'Île de la Cité', d: 'Go on a bright afternoon — it\'s all about the glass.', p: 1, t: ['history', 'architecture'] },
      { id: 'sacre', n: 'Sacré-Cœur', c: 'see', lat: 48.8867, lng: 2.3431, area: 'Montmartre', d: 'Climb the dome for the widest view in the city.', t: ['views', 'icon'] },
      { id: 'lachaise', n: 'Père Lachaise', c: 'see', lat: 48.8614, lng: 2.3933, area: '20th arr.', d: 'Cobbled cemetery hill; grab a map at the gate.', t: ['history', 'quiet'] },
      { id: 'luxembourg', n: 'Jardin du Luxembourg', c: 'outdoors', lat: 48.8462, lng: 2.3372, area: '6th arr.', d: 'Drag a green chair to the pond and do nothing.', t: ['nature', 'free'] },
      { id: 'canal', n: 'Canal Saint-Martin', c: 'outdoors', lat: 48.8709, lng: 2.3663, area: '10th arr.', d: 'Iron footbridges, picnic crowds, best around 7pm.', t: ['nature', 'evening'] },
      { id: 'comptoir', n: 'Le Comptoir du Relais', c: 'eat', lat: 48.8531, lng: 2.3387, area: 'Odéon', d: 'Classic bistro; lunch walk-ins beat the dinner list.', p: 2, t: ['foodie', 'bistro'], star: 1 },
      { id: 'septime', n: 'Septime', c: 'eat', lat: 48.8531, lng: 2.3806, area: '11th arr.', d: 'Tasting menu worth the 3-week-ahead booking.', p: 3, t: ['foodie', 'special'] },
      { id: 'janou', n: 'Chez Janou', c: 'eat', lat: 48.857, lng: 2.3673, area: 'Le Marais', d: 'Provençal plates and 80 kinds of pastis.', p: 2, t: ['bistro', 'lively'] },
      { id: 'breizh', n: 'Breizh Café', c: 'eat', lat: 48.8607, lng: 2.3625, area: 'Le Marais', d: 'Buckwheat galettes and cider in stoneware bowls.', p: 1, t: ['casual', 'lunch'] },
      { id: 'dupain', n: 'Du Pain et des Idées', c: 'eat', lat: 48.8712, lng: 2.3624, area: '10th arr.', d: 'Pistachio escargot pastry. Closed weekends.', p: 1, t: ['coffee', 'morning'], star: 1 },
      { id: 'enfants', n: 'Marché des Enfants Rouges', c: 'eat', lat: 48.863, lng: 2.3625, area: 'Le Marais', d: 'Oldest covered market in the city; eat standing up.', p: 1, t: ['market', 'lunch'] },
      { id: 'reddoor', n: 'Little Red Door', c: 'drink', lat: 48.8634, lng: 2.3619, area: 'Le Marais', d: 'Cocktail menu built around single ingredients.', p: 2, t: ['nightlife'] },
      { id: 'shakespeare', n: 'Shakespeare and Company', c: 'shop', lat: 48.8526, lng: 2.347, area: 'Latin Quarter', d: 'English bookshop with beds upstairs for writers.', p: 1, t: ['browse', 'rainy'] }
    ]
  },

  {
    id: 'london', name: 'London', country: 'United Kingdom', region: 'europe',
    tz: 'Europe/London', cur: '£', center: [51.51, -0.11],
    sk: 'london', sky: 'london-grey',
    tagline: 'The tube map lies about distance. Walk more than you think.',
    districts: [
      { n: 'Soho', lat: 51.5135, lng: -0.133 },
      { n: 'Shoreditch', lat: 51.525, lng: -0.079 },
      { n: 'South Bank', lat: 51.506, lng: -0.115 },
      { n: 'Camden', lat: 51.54, lng: -0.144 }
    ],
    water: [
      { k: 'river', w: 11, pts: [[51.487, -0.22], [51.489, -0.18], [51.494, -0.145], [51.507, -0.124], [51.509, -0.1], [51.506, -0.076], [51.498, -0.04], [51.483, -0.006]] }
    ],
    hotels: [
      { n: 'The Hoxton Shoreditch', area: 'Shoreditch', lat: 51.5253, lng: -0.081 },
      { n: 'The Z Hotel Soho', area: 'Soho', lat: 51.5133, lng: -0.133 },
      { n: 'citizenM Tower of London', area: 'City', lat: 51.51, lng: -0.077 },
      { n: 'The Standard London', area: 'King\'s Cross', lat: 51.53, lng: -0.123 },
      { n: 'Artist Residence', area: 'Pimlico', lat: 51.49, lng: -0.14 }
    ],
    places: [
      { id: 'britishmuseum', n: 'British Museum', c: 'see', lat: 51.5194, lng: -0.127, area: 'Bloomsbury', d: 'Free. Book a slot anyway; enter from Montague Place.', t: ['history', 'rainy', 'free'], star: 1 },
      { id: 'tate', n: 'Tate Modern', c: 'see', lat: 51.5076, lng: -0.0994, area: 'Bankside', d: 'Free collection; the Level 10 terrace beats the paid views.', t: ['art', 'views', 'free'] },
      { id: 'tower', n: 'Tower of London', c: 'see', lat: 51.5081, lng: -0.0759, area: 'City', d: 'First entry beats the crowds to the Crown Jewels.', p: 3, t: ['history', 'icon'] },
      { id: 'westminster', n: 'Westminster & Big Ben', c: 'see', lat: 51.5007, lng: -0.1246, area: 'Westminster', d: 'Best angle is from the Southbank end of the bridge.', t: ['icon', 'free'] },
      { id: 'skygarden', n: 'Sky Garden', c: 'see', lat: 51.5112, lng: -0.0836, area: 'City', d: 'Free rooftop if you book three weeks out.', t: ['views', 'free'], star: 1 },
      { id: 'greenwich', n: 'Royal Observatory', c: 'see', lat: 51.4769, lng: -0.0005, area: 'Greenwich', d: 'Take the river bus there; the view back is the point.', p: 2, t: ['views', 'history'] },
      { id: 'hyde', n: 'Hyde Park', c: 'outdoors', lat: 51.5073, lng: -0.1657, area: 'West End', d: 'Serpentine swim in summer, Speakers\' Corner on Sundays.', t: ['nature', 'free'] },
      { id: 'heath', n: 'Hampstead Heath', c: 'outdoors', lat: 51.5608, lng: -0.163, area: 'Hampstead', d: 'Parliament Hill for the skyline; ponds for the swim.', t: ['nature', 'free'] },
      { id: 'borough', n: 'Borough Market', c: 'eat', lat: 51.5055, lng: -0.091, area: 'Southwark', d: 'Get there by 11am; closed Sunday and Monday.', p: 2, t: ['market', 'lunch'], star: 1 },
      { id: 'dishoom', n: 'Dishoom Shoreditch', c: 'eat', lat: 51.5245, lng: -0.078, area: 'Shoreditch', d: 'Bacon naan before 11am, no queue. Black daal always.', p: 2, t: ['foodie', 'brunch'], star: 1 },
      { id: 'padella', n: 'Padella', c: 'eat', lat: 51.5052, lng: -0.0907, area: 'Borough', d: 'Eight-pound pasta at a counter. Join the virtual queue.', p: 1, t: ['cheap', 'lunch'] },
      { id: 'bricklane', n: 'Brick Lane', c: 'eat', lat: 51.522, lng: -0.0716, area: 'Spitalfields', d: 'Beigels at the north end, open all night, cash only.', p: 1, t: ['cheap', 'late'] },
      { id: 'nightjar', n: 'Nightjar', c: 'drink', lat: 51.525, lng: -0.087, area: 'Old Street', d: 'Basement, live jazz, table service only. Book it.', p: 3, t: ['nightlife', 'music'] },
      { id: 'columbia', n: 'Columbia Road Flower Market', c: 'shop', lat: 51.529, lng: -0.069, area: 'Bethnal Green', d: 'Sunday only. Late afternoon is when prices collapse.', p: 1, t: ['market', 'morning'] },
      { id: 'camden', n: 'Camden Market', c: 'shop', lat: 51.5415, lng: -0.1465, area: 'Camden', d: 'Street food by the lock; the stables are the good bit.', p: 1, t: ['browse', 'market'] },
      { id: 'daunt', n: 'Daunt Books', c: 'shop', lat: 51.518, lng: -0.152, area: 'Marylebone', d: 'Edwardian galleries, travel section shelved by country.', p: 2, t: ['browse', 'rainy'] }
    ]
  },

  {
    id: 'rome', name: 'Rome', country: 'Italy', region: 'europe',
    tz: 'Europe/Rome', cur: '€', center: [41.895, 12.48],
    sk: 'rome', sky: 'rome-terra',
    tagline: 'Everything is closer than it looks and older than you think.',
    districts: [
      { n: 'Centro Storico', lat: 41.898, lng: 12.475 },
      { n: 'Trastevere', lat: 41.888, lng: 12.469 },
      { n: 'Monti', lat: 41.894, lng: 12.491 },
      { n: 'Prati', lat: 41.91, lng: 12.465 }
    ],
    water: [
      { k: 'river', w: 7, pts: [[41.93, 12.472], [41.915, 12.466], [41.902, 12.467], [41.895, 12.47], [41.887, 12.474], [41.876, 12.474], [41.865, 12.47]] }
    ],
    hotels: [
      { n: 'Palazzo Manfredi', area: 'Colosseo', lat: 41.889, lng: 12.494 },
      { n: 'G-Rough', area: 'Navona', lat: 41.8975, lng: 12.472 },
      { n: 'Hotel Santa Maria', area: 'Trastevere', lat: 41.889, lng: 12.469 },
      { n: 'Hotel Artemide', area: 'Via Nazionale', lat: 41.901, lng: 12.493 },
      { n: 'The Yellow', area: 'Termini', lat: 41.902, lng: 12.505 }
    ],
    places: [
      { id: 'colosseum', n: 'Colosseum', c: 'see', lat: 41.8902, lng: 12.4922, area: 'Colosseo', d: 'Arena-floor ticket is worth the extra ten euro.', p: 2, t: ['history', 'icon'], star: 1 },
      { id: 'forum', n: 'Roman Forum & Palatine', c: 'see', lat: 41.8925, lng: 12.4853, area: 'Centro', d: 'Same ticket as the Colosseum. Enter from Via di San Gregorio.', p: 2, t: ['history'] },
      { id: 'pantheon', n: 'Pantheon', c: 'see', lat: 41.8986, lng: 12.4769, area: 'Centro Storico', d: 'Go at opening, or in rain to watch the oculus.', p: 1, t: ['history', 'icon'], star: 1 },
      { id: 'trevi', n: 'Trevi Fountain', c: 'see', lat: 41.9009, lng: 12.4833, area: 'Centro', d: 'Only bearable before 7am or after midnight.', t: ['icon', 'free'] },
      { id: 'vatican', n: 'Vatican Museums', c: 'see', lat: 41.9065, lng: 12.4536, area: 'Vatican', d: 'Friday late openings are the least crowded slot.', p: 3, t: ['art', 'history'], star: 1 },
      { id: 'stpeters', n: 'St. Peter\'s Basilica', c: 'see', lat: 41.9022, lng: 12.4539, area: 'Vatican', d: 'Free entry, paid dome climb, 551 steps.', t: ['views', 'free'] },
      { id: 'borghese', n: 'Borghese Gallery', c: 'see', lat: 41.9142, lng: 12.4922, area: 'Villa Borghese', d: 'Timed two-hour slots, booked well ahead. Bernini\'s best.', p: 2, t: ['art'] },
      { id: 'appia', n: 'Appian Way', c: 'outdoors', lat: 41.855, lng: 12.518, area: 'Appia Antica', d: 'Rent a bike on Sunday when the road closes to cars.', t: ['nature', 'history'] },
      { id: 'trastevere', n: 'Trastevere Lanes', c: 'outdoors', lat: 41.889, lng: 12.47, area: 'Trastevere', d: 'No plan needed. Start at Santa Maria and drift.', t: ['evening', 'free'] },
      { id: 'roscioli', n: 'Roscioli', c: 'eat', lat: 41.8946, lng: 12.4744, area: 'Centro', d: 'Deli counter out front, carbonara in the back. Book.', p: 3, t: ['foodie'], star: 1 },
      { id: 'daenzo', n: 'Da Enzo al 29', c: 'eat', lat: 41.888, lng: 12.477, area: 'Trastevere', d: 'Twelve tables, cacio e pepe, queue from 7pm.', p: 2, t: ['foodie', 'bistro'] },
      { id: 'bonci', n: 'Pizzarium Bonci', c: 'eat', lat: 41.907, lng: 12.446, area: 'Prati', d: 'Pizza al taglio sold by weight. Point and eat outside.', p: 1, t: ['cheap', 'lunch'] },
      { id: 'giolitti', n: 'Giolitti', c: 'eat', lat: 41.9, lng: 12.4785, area: 'Centro', d: 'Pay at the till first, then hand the receipt over.', p: 1, t: ['cheap', 'sweet'] },
      { id: 'testaccio', n: 'Testaccio Market', c: 'eat', lat: 41.876, lng: 12.475, area: 'Testaccio', d: 'Box 15 for the panino con allesso. Mornings only.', p: 1, t: ['market', 'lunch'] },
      { id: 'jerry', n: 'Jerry Thomas Project', c: 'drink', lat: 41.897, lng: 12.47, area: 'Centro', d: 'Speakeasy with a password on the website. Members\' rules.', p: 3, t: ['nightlife'] },
      { id: 'campo', n: 'Campo de\' Fiori', c: 'shop', lat: 41.8956, lng: 12.4722, area: 'Centro', d: 'Produce and spice stalls until 2pm, bars after dark.', p: 1, t: ['market', 'morning'] }
    ]
  },

  {
    id: 'barcelona', name: 'Barcelona', country: 'Spain', region: 'europe',
    tz: 'Europe/Madrid', cur: '€', center: [41.39, 2.17],
    sk: 'barcelona', sky: 'barca-sea',
    tagline: 'Dinner starts at nine. Adjust the whole day around it.',
    districts: [
      { n: 'Gràcia', lat: 41.403, lng: 2.156 },
      { n: 'Eixample', lat: 41.392, lng: 2.165 },
      { n: 'Gòtic', lat: 41.383, lng: 2.177 },
      { n: 'Barceloneta', lat: 41.379, lng: 2.19 }
    ],
    water: [
      { k: 'shore', side: 'SE', w: 0, pts: [[41.356, 2.142], [41.366, 2.165], [41.374, 2.183], [41.383, 2.199], [41.396, 2.218], [41.408, 2.235]] }
    ],
    hotels: [
      { n: 'Casa Bonay', area: 'Eixample', lat: 41.393, lng: 2.173 },
      { n: 'Hotel Brummell', area: 'Poble-sec', lat: 41.372, lng: 2.165 },
      { n: 'Yurbban Trafalgar', area: 'Born', lat: 41.388, lng: 2.178 },
      { n: 'Generator Barcelona', area: 'Gràcia', lat: 41.399, lng: 2.165 },
      { n: 'H10 Port Vell', area: 'Port Vell', lat: 41.381, lng: 2.183 }
    ],
    places: [
      { id: 'sagrada', n: 'Sagrada Família', c: 'see', lat: 41.4036, lng: 2.1744, area: 'Eixample', d: 'Afternoon slot: the west windows set the nave on fire.', p: 3, t: ['architecture', 'icon'], star: 1 },
      { id: 'guell', n: 'Park Güell', c: 'see', lat: 41.4145, lng: 2.1527, area: 'Gràcia', d: 'Monumental zone is ticketed; the surrounding park is free.', p: 2, t: ['architecture', 'views'], star: 1 },
      { id: 'batllo', n: 'Casa Batlló', c: 'see', lat: 41.3917, lng: 2.1649, area: 'Passeig de Gràcia', d: 'Gaudí\'s dragon-back roof, best seen last thing before close.', p: 3, t: ['architecture'] },
      { id: 'pedrera', n: 'La Pedrera', c: 'see', lat: 41.3953, lng: 2.1619, area: 'Eixample', d: 'Rooftop chimneys at night with a glass of cava.', p: 3, t: ['architecture', 'views'] },
      { id: 'picasso', n: 'Picasso Museum', c: 'see', lat: 41.3851, lng: 2.181, area: 'Born', d: 'Five medieval palaces; the early work is the surprise.', p: 2, t: ['art', 'rainy'] },
      { id: 'gotic', n: 'Barri Gòtic', c: 'outdoors', lat: 41.383, lng: 2.177, area: 'Gòtic', d: 'Roman wall, cathedral geese, lanes that dead-end beautifully.', t: ['free', 'history'] },
      { id: 'bunkers', n: 'Bunkers del Carmel', c: 'outdoors', lat: 41.4193, lng: 2.162, area: 'El Carmel', d: 'Civil-war gun platform, now the best sunset in town.', t: ['views', 'free'], star: 1 },
      { id: 'barceloneta', n: 'Barceloneta Beach', c: 'outdoors', lat: 41.3785, lng: 2.1925, area: 'Barceloneta', d: 'Walk northeast past the marina for fewer people.', t: ['nature', 'free'] },
      { id: 'tibidabo', n: 'Tibidabo', c: 'see', lat: 41.4222, lng: 2.1187, area: 'Collserola', d: 'Funicular up to a clifftop church and a 1901 fairground.', p: 2, t: ['views', 'family'] },
      { id: 'boqueria', n: 'La Boqueria', c: 'eat', lat: 41.3817, lng: 2.1716, area: 'Raval', d: 'Skip the front stalls; eat at El Quim in the middle.', p: 1, t: ['market', 'morning'], star: 1 },
      { id: 'quimet', n: 'Quimet & Quimet', c: 'eat', lat: 41.374, lng: 2.167, area: 'Poble-sec', d: 'Standing room only, montaditos built to order.', p: 2, t: ['foodie', 'tapas'], star: 1 },
      { id: 'bardelpla', n: 'Bar del Pla', c: 'eat', lat: 41.386, lng: 2.18, area: 'Born', d: 'Tapas done precisely. Sit at the bar, order the ravioli.', p: 2, t: ['foodie', 'tapas'] },
      { id: 'xampanyet', n: 'El Xampanyet', c: 'eat', lat: 41.3852, lng: 2.1815, area: 'Born', d: 'Anchovies and house cava, elbow to elbow since 1929.', p: 1, t: ['lively', 'tapas'] },
      { id: 'paixano', n: 'Can Paixano', c: 'drink', lat: 41.382, lng: 2.184, area: 'Born', d: 'Cheap cava and sausage sandwiches. Cash, chaos, standing.', p: 1, t: ['cheap', 'lively'] },
      { id: 'paradiso', n: 'Paradiso', c: 'drink', lat: 41.3846, lng: 2.183, area: 'Born', d: 'Through the pastrami-bar fridge door. Queue early.', p: 3, t: ['nightlife'] },
      { id: 'santantoni', n: 'Mercat de Sant Antoni', c: 'shop', lat: 41.379, lng: 2.161, area: 'Sant Antoni', d: 'Sunday book-and-coin market wraps the whole building.', p: 1, t: ['market', 'browse'] }
    ]
  },

  {
    id: 'lisbon', name: 'Lisbon', country: 'Portugal', region: 'europe',
    tz: 'Europe/Lisbon', cur: '€', center: [38.715, -9.15],
    sk: 'lisbon', sky: 'lisbon-gold',
    tagline: 'Every viewpoint costs a hill. Wear the other shoes.',
    districts: [
      { n: 'Alfama', lat: 38.7125, lng: -9.129 },
      { n: 'Baixa', lat: 38.711, lng: -9.139 },
      { n: 'Bairro Alto', lat: 38.713, lng: -9.146 },
      { n: 'Belém', lat: 38.696, lng: -9.205 }
    ],
    water: [
      { k: 'shore', side: 'S', w: 0, pts: [[38.688, -9.23], [38.692, -9.19], [38.699, -9.16], [38.704, -9.13], [38.706, -9.095], [38.702, -9.07]] }
    ],
    hotels: [
      { n: 'Memmo Alfama', area: 'Alfama', lat: 38.7115, lng: -9.13 },
      { n: 'The Independente', area: 'Príncipe Real', lat: 38.715, lng: -9.146 },
      { n: 'Santiago de Alfama', area: 'Alfama', lat: 38.711, lng: -9.129 },
      { n: 'Hotel da Baixa', area: 'Baixa', lat: 38.711, lng: -9.139 },
      { n: 'Casa Amora', area: 'Amoreiras', lat: 38.722, lng: -9.156 }
    ],
    places: [
      { id: 'belemtower', n: 'Belém Tower', c: 'see', lat: 38.6916, lng: -9.216, area: 'Belém', d: 'Go early; the spiral stair runs one direction at a time.', p: 1, t: ['history', 'icon'] },
      { id: 'jeronimos', n: 'Jerónimos Monastery', c: 'see', lat: 38.6979, lng: -9.2065, area: 'Belém', d: 'The cloister is the reason. Ticket queue moves after 3pm.', p: 2, t: ['history', 'architecture'], star: 1 },
      { id: 'castelo', n: 'São Jorge Castle', c: 'see', lat: 38.7139, lng: -9.1335, area: 'Alfama', d: 'Ramparts at golden hour, peacocks the rest of the time.', p: 2, t: ['views', 'history'] },
      { id: 'tram28', n: 'Tram 28', c: 'see', lat: 38.714, lng: -9.131, area: 'Graça', d: 'Board at Martim Moniz early or you\'ll stand the whole way.', p: 1, t: ['icon', 'cheap'], star: 1 },
      { id: 'senhora', n: 'Miradouro da Senhora do Monte', c: 'outdoors', lat: 38.7165, lng: -9.133, area: 'Graça', d: 'Highest viewpoint in the city. Bring a bottle, stay for sunset.', t: ['views', 'free'], star: 1 },
      { id: 'alfama', n: 'Alfama Lanes', c: 'outdoors', lat: 38.712, lng: -9.13, area: 'Alfama', d: 'Get lost on purpose; fado spills out of doorways after 9pm.', t: ['free', 'evening'] },
      { id: 'sintra', n: 'Sintra Day Trip', c: 'see', lat: 38.792, lng: -9.39, area: 'Sintra', d: '40-min train from Rossio. Pena Palace first, Quinta second.', p: 2, t: ['history', 'daytrip'] },
      { id: 'cristo', n: 'Cristo Rei & the Bridge', c: 'see', lat: 38.678, lng: -9.17, area: 'Almada', d: 'Ferry over, lift up, whole city laid out across the water.', p: 1, t: ['views'] },
      { id: 'pasteis', n: 'Pastéis de Belém', c: 'eat', lat: 38.6975, lng: -9.2035, area: 'Belém', d: 'Sit-down room moves faster than the takeaway line.', p: 1, t: ['sweet', 'morning'], star: 1 },
      { id: 'timeout', n: 'Time Out Market', c: 'eat', lat: 38.7071, lng: -9.1459, area: 'Cais do Sodré', d: 'Two dozen kitchens, one hall. Go off-peak or stand.', p: 2, t: ['market', 'foodie'] },
      { id: 'ramiro', n: 'Cervejaria Ramiro', c: 'eat', lat: 38.723, lng: -9.136, area: 'Intendente', d: 'Garlic prawns, then a steak sandwich for dessert. No bookings.', p: 2, t: ['foodie', 'lively'], star: 1 },
      { id: 'cevicheria', n: 'A Cevicheria', c: 'eat', lat: 38.717, lng: -9.152, area: 'Príncipe Real', d: 'Giant octopus on the ceiling. Put your name down and wait.', p: 2, t: ['foodie'] },
      { id: 'pensao', n: 'Pensão Amor', c: 'drink', lat: 38.708, lng: -9.144, area: 'Cais do Sodré', d: 'Old brothel turned bar; the bookshop at the back still trades.', p: 2, t: ['nightlife'] },
      { id: 'parkbar', n: 'Park Bar', c: 'drink', lat: 38.7118, lng: -9.1452, area: 'Bairro Alto', d: 'Top of a car park. Take the lift to level 6, then the stairs.', p: 2, t: ['views', 'nightlife'] },
      { id: 'lxfactory', n: 'LX Factory', c: 'shop', lat: 38.7025, lng: -9.1786, area: 'Alcântara', d: 'Print works turned studios; Ler Devagar bookshop inside.', p: 2, t: ['browse', 'market'] },
      { id: 'ladra', n: 'Feira da Ladra', c: 'shop', lat: 38.7155, lng: -9.125, area: 'Graça', d: 'Flea market Tuesday and Saturday, tiles to typewriters.', p: 1, t: ['market', 'browse'] }
    ]
  },

  {
    id: 'amsterdam', name: 'Amsterdam', country: 'Netherlands', region: 'europe',
    tz: 'Europe/Amsterdam', cur: '€', center: [52.37, 4.895],
    sk: 'amsterdam', sky: 'amsterdam-ij',
    tagline: 'Rent the bike. Then learn to fear the tram tracks.',
    districts: [
      { n: 'Jordaan', lat: 52.376, lng: 4.881 },
      { n: 'Centrum', lat: 52.372, lng: 4.895 },
      { n: 'De Pijp', lat: 52.355, lng: 4.893 },
      { n: 'Oost', lat: 52.363, lng: 4.925 }
    ],
    water: [
      { k: 'river', w: 10, pts: [[52.39, 4.84], [52.387, 4.875], [52.383, 4.9], [52.379, 4.925], [52.374, 4.95]] },
      { k: 'river', w: 4, pts: [[52.366, 4.879], [52.372, 4.883], [52.378, 4.889], [52.381, 4.9], [52.375, 4.906], [52.366, 4.902], [52.361, 4.892], [52.362, 4.881], [52.366, 4.879]] }
    ],
    hotels: [
      { n: 'The Hoxton Herengracht', area: 'Centrum', lat: 52.37, lng: 4.886 },
      { n: 'Hotel V Nesplein', area: 'Centrum', lat: 52.369, lng: 4.894 },
      { n: 'Conscious Westerpark', area: 'Westerpark', lat: 52.386, lng: 4.872 },
      { n: 'Pillows Anne', area: 'Jordaan', lat: 52.378, lng: 4.883 },
      { n: 'Volkshotel', area: 'Oost', lat: 52.351, lng: 4.911 }
    ],
    places: [
      { id: 'rijks', n: 'Rijksmuseum', c: 'see', lat: 52.36, lng: 4.8852, area: 'Museumplein', d: 'Night Watch at opening, then the doll houses nobody queues for.', p: 2, t: ['art', 'rainy'], star: 1 },
      { id: 'vangogh', n: 'Van Gogh Museum', c: 'see', lat: 52.3584, lng: 4.8811, area: 'Museumplein', d: 'Timed tickets sell out a week ahead in summer.', p: 2, t: ['art', 'rainy'], star: 1 },
      { id: 'anne', n: 'Anne Frank House', c: 'see', lat: 52.3752, lng: 4.884, area: 'Jordaan', d: 'Tickets released six weeks out, to the minute, online only.', p: 2, t: ['history'], star: 1 },
      { id: 'adam', n: 'A\'DAM Lookout', c: 'see', lat: 52.384, lng: 4.901, area: 'Noord', d: 'Free ferry from Centraal, then a swing over the edge.', p: 2, t: ['views'] },
      { id: 'ndsm', n: 'NDSM Wharf', c: 'see', lat: 52.401, lng: 4.893, area: 'Noord', d: 'Shipyard turned street-art sprawl. Ferry runs all day.', t: ['art', 'free'] },
      { id: 'begijnhof', n: 'Begijnhof', c: 'see', lat: 52.369, lng: 4.89, area: 'Centrum', d: 'Hidden courtyard off a shopping street. Keep your voice down.', t: ['quiet', 'free'] },
      { id: 'artis', n: 'Artis & Micropia', c: 'see', lat: 52.3665, lng: 4.9145, area: 'Oost', d: 'The microbe museum is stranger and better than the zoo.', p: 2, t: ['family', 'rainy'] },
      { id: 'jordaancanals', n: 'Jordaan Canals', c: 'outdoors', lat: 52.376, lng: 4.883, area: 'Jordaan', d: 'Nine Streets for browsing, Brouwersgracht for the photo.', t: ['free', 'evening'] },
      { id: 'vondel', n: 'Vondelpark', c: 'outdoors', lat: 52.358, lng: 4.8686, area: 'Oud-West', d: 'Cycle a loop; free open-air theatre on summer weekends.', t: ['nature', 'free'] },
      { id: 'foodhallen', n: 'Foodhallen', c: 'eat', lat: 52.3665, lng: 4.87, area: 'Oud-West', d: 'Tram depot turned food hall. Bitterballen and a beer.', p: 2, t: ['market', 'lively'] },
      { id: 'dekas', n: 'De Kas', c: 'eat', lat: 52.35, lng: 4.928, area: 'Park Frankendael', d: 'Menu picked from the greenhouse it\'s served in. Book ahead.', p: 3, t: ['foodie', 'special'] },
      { id: 'winkel', n: 'Winkel 43', c: 'eat', lat: 52.379, lng: 4.883, area: 'Jordaan', d: 'The apple pie. Saturday market day means a queue.', p: 1, t: ['sweet', 'coffee'], star: 1 },
      { id: 'klos', n: 'Café de Klos', c: 'eat', lat: 52.365, lng: 4.883, area: 'Nine Streets', d: 'Ribs, wooden booths, no reservations, 5pm or 9pm.', p: 2, t: ['casual', 'lively'] },
      { id: 'ij', n: 'Brouwerij \'t IJ', c: 'drink', lat: 52.3667, lng: 4.9265, area: 'Oost', d: 'Brewery under a windmill. Terrace fills by 4pm.', p: 1, t: ['nightlife', 'free'] },
      { id: 'cuyp', n: 'Albert Cuyp Market', c: 'shop', lat: 52.3555, lng: 4.8925, area: 'De Pijp', d: 'Stroopwafels pressed to order, Monday to Saturday.', p: 1, t: ['market', 'morning'] },
      { id: 'zaanse', n: 'Zaanse Schans', c: 'see', lat: 52.474, lng: 4.818, area: 'Zaandam', d: 'Working windmills, 17 minutes by train from Centraal.', p: 1, t: ['daytrip', 'family'] }
    ]
  }
,

  {
    id: 'berlin', name: 'Berlin', country: 'Germany', region: 'europe',
    tz: 'Europe/Berlin', cur: '€', center: [52.52, 13.405],
    sk: 'modern', sky: 'nordic-blue',
    tagline: 'Nothing opens early. Everything stays open late.',
    districts: [
      { n: 'Mitte', lat: 52.52, lng: 13.405 },
      { n: 'Kreuzberg', lat: 52.498, lng: 13.42 },
      { n: 'Prenzlauer Berg', lat: 52.54, lng: 13.42 },
      { n: 'Friedrichshain', lat: 52.515, lng: 13.454 }
    ],
    water: [
      { k: 'river', w: 6, pts: [[52.535, 13.32], [52.525, 13.37], [52.518, 13.4], [52.512, 13.43], [52.497, 13.46], [52.49, 13.5]] }
    ],
    hotels: [
      { n: 'Michelberger Hotel', area: 'Friedrichshain', lat: 52.502, lng: 13.448 },
      { n: 'Hotel Oderberger', area: 'Prenzlauer Berg', lat: 52.54, lng: 13.411 },
      { n: 'The Circus Hotel', area: 'Mitte', lat: 52.529, lng: 13.401 }
    ],
    places: [
      { id: 'brandenburg', n: 'Brandenburg Gate', c: 'see', lat: 52.5163, lng: 13.3777, area: 'Mitte', d: 'Five minutes and a photo. The Tiergarten behind it is the real draw.', t: ['icon', 'free'] },
      { id: 'museumsinsel', n: 'Museum Island', c: 'see', lat: 52.5169, lng: 13.401, area: 'Mitte', d: 'Five museums on one island; the Pergamon needs its own morning.', p: 2, t: ['art', 'rainy'], star: 1 },
      { id: 'eastside', n: 'East Side Gallery', c: 'see', lat: 52.505, lng: 13.439, area: 'Friedrichshain', d: '1.3 km of painted Wall, still standing where it stood.', t: ['history', 'free'], star: 1 },
      { id: 'reichstag', n: 'Reichstag Dome', c: 'see', lat: 52.5186, lng: 13.3761, area: 'Mitte', d: 'Free, but register online days ahead with passport details.', t: ['views', 'free'] },
      { id: 'tempelhof', n: 'Tempelhofer Feld', c: 'outdoors', lat: 52.473, lng: 13.403, area: 'Tempelhof', d: 'Disused airport turned park. Cycle the runways.', t: ['nature', 'free'] },
      { id: 'markthalle', n: 'Markthalle Neun', c: 'eat', lat: 52.502, lng: 13.433, area: 'Kreuzberg', d: 'Thursday street-food night is the one to catch.', p: 1, t: ['market', 'foodie'] },
      { id: 'mustafas', n: 'Mustafas Gemüse Kebap', c: 'eat', lat: 52.487, lng: 13.377, area: 'Kreuzberg', d: 'The queue is real and the kebab is worth it.', p: 1, t: ['cheap', 'late'] },
      { id: 'prater', n: 'Prater Garten', c: 'drink', lat: 52.539, lng: 13.41, area: 'Prenzlauer Berg', d: "Berlin's oldest beer garden. Self-service, shared benches.", p: 1, t: ['nightlife', 'cheap'] }
    ]
  },

  {
    id: 'prague', name: 'Prague', country: 'Czechia', region: 'europe',
    tz: 'Europe/Prague', cur: 'Kč', center: [50.0755, 14.4378],
    sk: 'euro-old', sky: 'alpine-rose',
    tagline: 'The old town is a stage set by 10am. Go early or go uphill.',
    districts: [
      { n: 'Staré Město', lat: 50.087, lng: 14.421 },
      { n: 'Malá Strana', lat: 50.088, lng: 14.403 },
      { n: 'Žižkov', lat: 50.081, lng: 14.45 },
      { n: 'Vinohrady', lat: 50.075, lng: 14.445 }
    ],
    water: [
      { k: 'river', w: 7, pts: [[50.105, 14.41], [50.095, 14.413], [50.087, 14.411], [50.08, 14.408], [50.07, 14.413], [50.06, 14.416]] }
    ],
    hotels: [
      { n: 'Hotel Josef', area: 'Staré Město', lat: 50.09, lng: 14.427 },
      { n: 'Mosaic House', area: 'Nové Město', lat: 50.076, lng: 14.418 },
      { n: "Miss Sophie's", area: 'Vinohrady', lat: 50.072, lng: 14.429 }
    ],
    places: [
      { id: 'charles', n: 'Charles Bridge', c: 'see', lat: 50.0865, lng: 14.4114, area: 'Staré Město', d: 'Empty at 6am, unbearable at noon. Choose.', t: ['icon', 'free'], star: 1 },
      { id: 'castle', n: 'Prague Castle', c: 'see', lat: 50.09, lng: 14.4, area: 'Hradčany', d: 'Enter from the top via tram 22 and walk down.', p: 2, t: ['history'] },
      { id: 'astro', n: 'Astronomical Clock', c: 'see', lat: 50.087, lng: 14.4208, area: 'Staré Město', d: 'The hourly show is brief; the tower view is the better ticket.', p: 1, t: ['icon'] },
      { id: 'vysehrad', n: 'Vyšehrad', c: 'outdoors', lat: 50.064, lng: 14.418, area: 'Vyšehrad', d: 'The other castle, with none of the crowd and all of the view.', t: ['views', 'free', 'quiet'], star: 1 },
      { id: 'letna', n: 'Letná Beer Garden', c: 'drink', lat: 50.095, lng: 14.417, area: 'Letná', d: 'Cheap beer, plastic cups, the whole city below you.', p: 1, t: ['views', 'cheap'] },
      { id: 'lokal', n: 'Lokál Dlouhá', c: 'eat', lat: 50.09, lng: 14.425, area: 'Staré Město', d: 'Tank beer and proper Czech plates at local prices.', p: 1, t: ['cheap', 'lively'] },
      { id: 'savoy', n: 'Café Savoy', c: 'eat', lat: 50.08, lng: 14.406, area: 'Malá Strana', d: 'Frescoed ceiling, long breakfasts, worth the wait.', p: 2, t: ['brunch', 'coffee'] },
      { id: 'naplavka', n: 'Náplavka Market', c: 'shop', lat: 50.073, lng: 14.416, area: 'Riverbank', d: 'Saturday farmers market along the embankment.', p: 1, t: ['market', 'morning'] }
    ]
  },

  {
    id: 'vienna', name: 'Vienna', country: 'Austria', region: 'europe',
    tz: 'Europe/Vienna', cur: '€', center: [48.2082, 16.3738],
    sk: 'euro-old', sky: 'alpine-rose',
    tagline: 'Sit in a café for three hours. That is the activity.',
    districts: [
      { n: 'Innere Stadt', lat: 48.208, lng: 16.373 },
      { n: 'Neubau', lat: 48.202, lng: 16.35 },
      { n: 'Leopoldstadt', lat: 48.218, lng: 16.39 },
      { n: 'Mariahilf', lat: 48.197, lng: 16.35 }
    ],
    water: [
      { k: 'river', w: 8, pts: [[48.26, 16.4], [48.235, 16.4], [48.215, 16.405], [48.195, 16.415], [48.175, 16.43]] }
    ],
    hotels: [
      { n: 'Hotel Altstadt Vienna', area: 'Neubau', lat: 48.205, lng: 16.353 },
      { n: '25hours Hotel', area: 'Museumsquartier', lat: 48.203, lng: 16.357 },
      { n: 'Hotel Am Brillantengrund', area: 'Neubau', lat: 48.2, lng: 16.343 }
    ],
    places: [
      { id: 'schonbrunn', n: 'Schönbrunn Palace', c: 'see', lat: 48.1849, lng: 16.3122, area: 'Hietzing', d: 'Gardens are free and better than the state rooms.', p: 2, t: ['history'], star: 1 },
      { id: 'khm', n: 'Kunsthistorisches Museum', c: 'see', lat: 48.2038, lng: 16.3616, area: 'Innere Stadt', d: 'Bruegel room alone justifies the ticket.', p: 2, t: ['art', 'rainy'] },
      { id: 'stephans', n: "St Stephen's Cathedral", c: 'see', lat: 48.2085, lng: 16.3731, area: 'Innere Stadt', d: 'Climb the south tower: 343 steps, no lift.', p: 1, t: ['icon'] },
      { id: 'naschmarkt', n: 'Naschmarkt', c: 'eat', lat: 48.1985, lng: 16.363, area: 'Wieden', d: 'Skip the tourist stalls at the top end; eat at the bottom.', p: 1, t: ['market'] },
      { id: 'central', n: 'Café Central', c: 'eat', lat: 48.21, lng: 16.3655, area: 'Innere Stadt', d: 'Famous, queued, still a genuine coffee house.', p: 2, t: ['coffee'] },
      { id: 'figlmuller', n: 'Figlmüller', c: 'eat', lat: 48.2085, lng: 16.3766, area: 'Innere Stadt', d: 'Schnitzel wider than the plate. Book or queue.', p: 2, t: ['foodie'] },
      { id: 'prater-vie', n: 'Prater', c: 'outdoors', lat: 48.2165, lng: 16.396, area: 'Leopoldstadt', d: 'Free park, paid ferris wheel, unlimited sausage.', t: ['family', 'free'] },
      { id: 'loos', n: 'Loos American Bar', c: 'drink', lat: 48.209, lng: 16.371, area: 'Innere Stadt', d: 'Tiny 1908 room in marble and mirrors. Twelve seats.', p: 3, t: ['nightlife'] }
    ]
  },

  {
    id: 'copenhagen', name: 'Copenhagen', country: 'Denmark', region: 'europe',
    tz: 'Europe/Copenhagen', cur: 'kr', center: [55.6761, 12.5683],
    sk: 'euro-old', sky: 'nordic-blue',
    tagline: 'Get a bike on day one. Everything is fifteen minutes away.',
    districts: [
      { n: 'Indre By', lat: 55.679, lng: 12.575 },
      { n: 'Nørrebro', lat: 55.69, lng: 12.55 },
      { n: 'Vesterbro', lat: 55.669, lng: 12.55 },
      { n: 'Christianshavn', lat: 55.672, lng: 12.59 }
    ],
    hotels: [
      { n: 'Hotel SP34', area: 'Indre By', lat: 55.679, lng: 12.567 },
      { n: 'Manon Les Suites', area: 'Nørrebro', lat: 55.687, lng: 12.56 },
      { n: 'Wakeup Copenhagen', area: 'Vesterbro', lat: 55.669, lng: 12.562 }
    ],
    places: [
      { id: 'nyhavn', n: 'Nyhavn', c: 'see', lat: 55.6797, lng: 12.5913, area: 'Indre By', d: 'The postcard. Ten minutes, then walk on to Amalienborg.', t: ['icon', 'free'] },
      { id: 'tivoli', n: 'Tivoli Gardens', c: 'see', lat: 55.6736, lng: 12.5681, area: 'Indre By', d: '1843 pleasure garden, best after dark when the lamps come on.', p: 3, t: ['family'], star: 1 },
      { id: 'louisiana', n: 'Louisiana Museum', c: 'see', lat: 55.97, lng: 12.543, area: 'Humlebæk', d: '35 min by train; modern art in a garden over the sea.', p: 2, t: ['art', 'daytrip'], star: 1 },
      { id: 'christiania', n: 'Freetown Christiania', c: 'see', lat: 55.674, lng: 12.599, area: 'Christianshavn', d: 'Self-governing since 1971. No photos on Pusher Street.', t: ['free'] },
      { id: 'torvehallerne', n: 'Torvehallerne', c: 'eat', lat: 55.683, lng: 12.569, area: 'Nørreport', d: 'Glass food halls: smørrebrød, coffee, porridge.', p: 2, t: ['market', 'lunch'] },
      { id: 'reffen', n: 'Reffen', c: 'eat', lat: 55.693, lng: 12.605, area: 'Refshaleøen', d: 'Street food on the harbour, summer only, bike there.', p: 1, t: ['cheap', 'lively'] },
      { id: 'mikkeller', n: 'Mikkeller & Friends', c: 'drink', lat: 55.689, lng: 12.546, area: 'Nørrebro', d: 'Forty taps, none of them boring.', p: 2, t: ['nightlife'] },
      { id: 'superkilen', n: 'Superkilen', c: 'outdoors', lat: 55.696, lng: 12.543, area: 'Nørrebro', d: 'Public park built from objects donated by sixty nationalities.', t: ['free', 'architecture'] }
    ]
  },

  {
    id: 'madrid', name: 'Madrid', country: 'Spain', region: 'europe',
    tz: 'Europe/Madrid', cur: '€', center: [40.4168, -3.7038],
    sk: 'euro-old', sky: 'tuscan',
    tagline: 'Lunch at three, dinner at ten, bed whenever.',
    districts: [
      { n: 'Sol', lat: 40.417, lng: -3.7035 },
      { n: 'Malasaña', lat: 40.426, lng: -3.705 },
      { n: 'La Latina', lat: 40.411, lng: -3.71 },
      { n: 'Salamanca', lat: 40.429, lng: -3.68 }
    ],
    hotels: [
      { n: 'Only YOU Hotel Atocha', area: 'Atocha', lat: 40.408, lng: -3.69 },
      { n: 'Dear Hotel Madrid', area: 'Gran Vía', lat: 40.421, lng: -3.708 },
      { n: 'Hotel Urban', area: 'Sol', lat: 40.416, lng: -3.698 }
    ],
    places: [
      { id: 'prado', n: 'Museo del Prado', c: 'see', lat: 40.4138, lng: -3.6921, area: 'Retiro', d: 'Free the last two hours daily; Velázquez and Goya are the point.', p: 2, t: ['art', 'rainy'], star: 1 },
      { id: 'reina', n: 'Reina Sofía', c: 'see', lat: 40.408, lng: -3.6946, area: 'Atocha', d: "Guernica is here, and it's bigger than you expect.", p: 2, t: ['art'] },
      { id: 'retiro', n: 'Parque del Retiro', c: 'outdoors', lat: 40.4152, lng: -3.6844, area: 'Retiro', d: 'Row a boat, then find the Crystal Palace.', t: ['nature', 'free'] },
      { id: 'palacio', n: 'Royal Palace', c: 'see', lat: 40.418, lng: -3.7143, area: 'Ópera', d: '3,000 rooms; you see about fifty.', p: 2, t: ['history'] },
      { id: 'sanmiguel', n: 'Mercado de San Miguel', c: 'eat', lat: 40.4153, lng: -3.709, area: 'Sol', d: 'Pretty, pricey, packed. One drink and move on.', p: 2, t: ['market'] },
      { id: 'botin', n: 'Sobrino de Botín', c: 'eat', lat: 40.4141, lng: -3.7078, area: 'Sol', d: 'Oldest restaurant on earth, 1725. Order the suckling pig.', p: 3, t: ['foodie', 'history'] },
      { id: 'casajulio', n: 'Bar Casa Julio', c: 'eat', lat: 40.4245, lng: -3.7025, area: 'Malasaña', d: 'Croquetas, standing room, six euros.', p: 1, t: ['cheap', 'tapas'], star: 1 },
      { id: 'latina', n: 'La Latina Tapas Crawl', c: 'drink', lat: 40.411, lng: -3.709, area: 'La Latina', d: 'Cava Baja street, Sunday afternoons, one bar per round.', p: 1, t: ['lively', 'tapas'] }
    ]
  },

  {
    id: 'athens', name: 'Athens', country: 'Greece', region: 'europe',
    tz: 'Europe/Athens', cur: '€', center: [37.9838, 23.7275],
    sk: 'euro-old', sky: 'aegean',
    tagline: 'Climb something before 9am, eat at midnight.',
    districts: [
      { n: 'Plaka', lat: 37.972, lng: 23.729 },
      { n: 'Monastiraki', lat: 37.976, lng: 23.725 },
      { n: 'Koukaki', lat: 37.966, lng: 23.725 },
      { n: 'Exarchia', lat: 37.987, lng: 23.733 }
    ],
    hotels: [
      { n: 'Coco-Mat Athens BC', area: 'Koukaki', lat: 37.968, lng: 23.727 },
      { n: 'AthensWas', area: 'Makrigianni', lat: 37.969, lng: 23.729 },
      { n: 'The Foundry Suites', area: 'Psyrri', lat: 37.978, lng: 23.722 }
    ],
    places: [
      { id: 'acropolis', n: 'Acropolis & Parthenon', c: 'see', lat: 37.9715, lng: 23.7267, area: 'Acropolis', d: 'First entry at 8am, or last two hours. Never midday in summer.', p: 2, t: ['icon', 'history'], star: 1 },
      { id: 'acropmus', n: 'Acropolis Museum', c: 'see', lat: 37.9683, lng: 23.7286, area: 'Makrigianni', d: 'Glass floor over the excavation; top floor holds the frieze.', p: 1, t: ['history', 'rainy'] },
      { id: 'agora', n: 'Ancient Agora', c: 'see', lat: 37.975, lng: 23.722, area: 'Monastiraki', d: 'Where Socrates argued. Quieter than the hill above.', p: 1, t: ['history'] },
      { id: 'lycabettus', n: 'Lycabettus Hill', c: 'outdoors', lat: 37.982, lng: 23.743, area: 'Kolonaki', d: 'Funicular up, walk down, sunset over the Acropolis.', t: ['views', 'free'], star: 1 },
      { id: 'varvakios', n: 'Varvakios Central Market', c: 'eat', lat: 37.98, lng: 23.725, area: 'Athinas St', d: 'Meat and fish halls, plus the best cheap lunch in town.', p: 1, t: ['market', 'morning'] },
      { id: 'karamanlidika', n: 'Karamanlidika', c: 'eat', lat: 37.98, lng: 23.726, area: 'Psyrri', d: 'Deli counter meets meze table. Order the pastourma.', p: 2, t: ['foodie'] },
      { id: 'brettos', n: 'Brettos', c: 'drink', lat: 37.972, lng: 23.729, area: 'Plaka', d: 'Backlit wall of coloured bottles, distilling since 1909.', p: 1, t: ['nightlife'] },
      { id: 'monasflea', n: 'Monastiraki Flea Market', c: 'shop', lat: 37.976, lng: 23.724, area: 'Monastiraki', d: 'Sunday is the proper market; the rest is souvenirs.', p: 1, t: ['market', 'browse'] }
    ]
  },

  {
    id: 'florence', name: 'Florence', country: 'Italy', region: 'europe',
    tz: 'Europe/Rome', cur: '€', center: [43.7696, 11.2558],
    sk: 'euro-old', sky: 'tuscan',
    tagline: 'Everything worth seeing is inside one square mile. Book all of it.',
    districts: [
      { n: 'Duomo', lat: 43.773, lng: 11.256 },
      { n: 'Oltrarno', lat: 43.766, lng: 11.248 },
      { n: 'Santa Croce', lat: 43.769, lng: 11.262 },
      { n: 'San Lorenzo', lat: 43.776, lng: 11.254 }
    ],
    water: [
      { k: 'river', w: 6, pts: [[43.771, 11.22], [43.769, 11.24], [43.768, 11.255], [43.766, 11.27], [43.762, 11.285]] }
    ],
    hotels: [
      { n: 'Hotel Calimala', area: 'Duomo', lat: 43.77, lng: 11.254 },
      { n: 'Palazzo Guadagni', area: 'Oltrarno', lat: 43.767, lng: 11.248 },
      { n: 'Hotel Pendini', area: 'Repubblica', lat: 43.771, lng: 11.253 }
    ],
    places: [
      { id: 'uffizi', n: 'Uffizi Gallery', c: 'see', lat: 43.7678, lng: 11.2553, area: 'Duomo', d: 'Book a timed slot weeks out. Botticelli is room 10.', p: 3, t: ['art'], star: 1 },
      { id: 'duomo', n: "Duomo & Brunelleschi's Dome", c: 'see', lat: 43.7731, lng: 11.256, area: 'Duomo', d: '463 steps between the two shells. Not for the claustrophobic.', p: 2, t: ['icon', 'architecture'], star: 1 },
      { id: 'accademia', n: 'Galleria dell’Accademia', c: 'see', lat: 43.777, lng: 11.2586, area: 'San Marco', d: 'David, and not much else. Thirty minutes, booked ahead.', p: 2, t: ['art'] },
      { id: 'michelangelo', n: 'Piazzale Michelangelo', c: 'outdoors', lat: 43.7629, lng: 11.265, area: 'Oltrarno', d: 'Walk up for sunset. Take wine.', t: ['views', 'free'], star: 1 },
      { id: 'centrale', n: 'Mercato Centrale', c: 'eat', lat: 43.7765, lng: 11.2537, area: 'San Lorenzo', d: 'Butchers below, food hall above, tripe sandwich outside.', p: 1, t: ['market'] },
      { id: 'vinaio', n: "All'Antico Vinaio", c: 'eat', lat: 43.769, lng: 11.258, area: 'Santa Croce', d: 'Enormous schiacciata sandwiches. The queue moves fast.', p: 1, t: ['cheap', 'lunch'] },
      { id: 'mario', n: 'Trattoria Mario', c: 'eat', lat: 43.776, lng: 11.254, area: 'San Lorenzo', d: 'Lunch only, shared tables, cash. Bistecca on Thursdays.', p: 2, t: ['foodie', 'lunch'] },
      { id: 'santospirito', n: 'Piazza Santo Spirito', c: 'drink', lat: 43.7669, lng: 11.248, area: 'Oltrarno', d: 'Where Florence goes after dark. Sit on the church steps.', t: ['free', 'evening'] }
    ]
  },

  {
    id: 'venice', name: 'Venice', country: 'Italy', region: 'europe',
    tz: 'Europe/Rome', cur: '€', center: [45.4408, 12.3155],
    sk: 'euro-old', sky: 'aegean',
    tagline: 'Get lost on purpose. The signs lie anyway.',
    districts: [
      { n: 'San Marco', lat: 45.434, lng: 12.339 },
      { n: 'Cannaregio', lat: 45.444, lng: 12.328 },
      { n: 'Dorsoduro', lat: 45.432, lng: 12.327 },
      { n: 'Castello', lat: 45.435, lng: 12.352 }
    ],
    hotels: [
      { n: 'Hotel Flora', area: 'San Marco', lat: 45.433, lng: 12.335 },
      { n: "Ca' Pisani", area: 'Dorsoduro', lat: 45.431, lng: 12.327 },
      { n: 'Generator Venice', area: 'Giudecca', lat: 45.427, lng: 12.319 }
    ],
    places: [
      { id: 'sanmarco', n: "St Mark's Basilica", c: 'see', lat: 45.4345, lng: 12.3397, area: 'San Marco', d: 'Book the skip-the-line slot; the gold mosaics need daylight.', p: 1, t: ['icon', 'history'], star: 1 },
      { id: 'doge', n: "Doge's Palace", c: 'see', lat: 45.4337, lng: 12.3402, area: 'San Marco', d: 'Secret Itineraries tour beats the standard route.', p: 2, t: ['history'] },
      { id: 'rialto', n: 'Rialto Market', c: 'eat', lat: 45.44, lng: 12.335, area: 'San Polo', d: 'Fish market mornings, closed Sunday and Monday.', p: 1, t: ['market', 'morning'] },
      { id: 'guggenheim', n: 'Peggy Guggenheim Collection', c: 'see', lat: 45.4308, lng: 12.3312, area: 'Dorsoduro', d: 'Her house, her Pollocks, a garden on the Grand Canal.', p: 2, t: ['art'] },
      { id: 'cicchetti', n: 'Cannaregio Cicchetti Crawl', c: 'eat', lat: 45.444, lng: 12.327, area: 'Cannaregio', d: 'Bacari along Fondamenta della Misericordia: one plate, one ombra, move.', p: 1, t: ['foodie', 'cheap'], star: 1 },
      { id: 'acquaalta', n: 'Libreria Acqua Alta', c: 'shop', lat: 45.437, lng: 12.341, area: 'Castello', d: 'Books stored in a gondola against the floods.', t: ['browse', 'free'] },
      { id: 'burano', n: 'Burano', c: 'see', lat: 45.4853, lng: 12.417, area: 'Lagoon', d: '45-min vaporetto. Painted houses, lace, far fewer people.', p: 1, t: ['daytrip'] },
      { id: 'biennale', n: 'Giardini della Biennale', c: 'outdoors', lat: 45.429, lng: 12.356, area: 'Castello', d: 'Actual trees, actual quiet, actual Venetians.', t: ['quiet', 'free'] }
    ]
  },

  {
    id: 'budapest', name: 'Budapest', country: 'Hungary', region: 'europe',
    tz: 'Europe/Budapest', cur: 'Ft', center: [47.4979, 19.0402],
    sk: 'euro-old', sky: 'lisbon-gold',
    tagline: 'Buda for the views, Pest for everything else.',
    districts: [
      { n: 'District VII', lat: 47.498, lng: 19.062 },
      { n: 'Buda Castle', lat: 47.496, lng: 19.039 },
      { n: 'Belváros', lat: 47.493, lng: 19.052 },
      { n: 'Újlipótváros', lat: 47.515, lng: 19.05 }
    ],
    water: [
      { k: 'river', w: 9, pts: [[47.56, 19.055], [47.54, 19.045], [47.515, 19.043], [47.499, 19.042], [47.485, 19.048], [47.47, 19.06]] }
    ],
    hotels: [
      { n: 'Hotel Rum Budapest', area: 'Belváros', lat: 47.492, lng: 19.056 },
      { n: 'Brody House', area: 'District VIII', lat: 47.493, lng: 19.062 },
      { n: 'Aria Hotel', area: 'Belváros', lat: 47.499, lng: 19.053 }
    ],
    places: [
      { id: 'szechenyi', n: 'Széchenyi Baths', c: 'see', lat: 47.5187, lng: 19.0823, area: 'City Park', d: 'Outdoor pools at 38°C, best in falling snow. Bring flip-flops.', p: 2, t: ['icon'], star: 1 },
      { id: 'fishermans', n: "Fisherman's Bastion", c: 'see', lat: 47.5025, lng: 19.0347, area: 'Buda Castle', d: 'Free below, paid on the upper terrace. Go at dawn.', t: ['views', 'free'] },
      { id: 'parliament', n: 'Hungarian Parliament', c: 'see', lat: 47.5072, lng: 19.0456, area: 'Kossuth tér', d: 'Tours in English sell out; view it from the Buda bank instead.', p: 2, t: ['architecture'] },
      { id: 'greatmarket', n: 'Great Market Hall', c: 'eat', lat: 47.487, lng: 19.059, area: 'Fővám tér', d: 'Paprika downstairs, lángos upstairs, closed Sunday.', p: 1, t: ['market'] },
      { id: 'szimpla', n: 'Szimpla Kert', c: 'drink', lat: 47.497, lng: 19.0637, area: 'District VII', d: 'The original ruin bar: a bombed-out block full of junk and beer.', p: 1, t: ['nightlife', 'cheap'], star: 1 },
      { id: 'gellert', n: 'Gellért Hill', c: 'outdoors', lat: 47.486, lng: 19.04, area: 'Buda', d: 'Twenty-minute climb to the Citadella and the whole river.', t: ['views', 'free'] },
      { id: 'karavan', n: 'Karaván Street Food', c: 'eat', lat: 47.497, lng: 19.063, area: 'District VII', d: 'Food trucks in a yard next to Szimpla. Get the lángos.', p: 1, t: ['cheap', 'late'] },
      { id: 'rudas', n: 'Rudas Baths', c: 'see', lat: 47.49, lng: 19.05, area: 'Buda', d: 'Ottoman octagonal pool from 1550, plus a rooftop tub.', p: 2, t: ['history'] }
    ]
  },

  {
    id: 'dublin', name: 'Dublin', country: 'Ireland', region: 'europe',
    tz: 'Europe/Dublin', cur: '€', center: [53.3498, -6.2603],
    sk: 'euro-old', sky: 'london-grey',
    tagline: 'The good pubs are the ones with no television.',
    districts: [
      { n: 'Temple Bar', lat: 53.345, lng: -6.264 },
      { n: 'Portobello', lat: 53.332, lng: -6.268 },
      { n: 'Stoneybatter', lat: 53.35, lng: -6.285 },
      { n: 'Docklands', lat: 53.347, lng: -6.24 }
    ],
    water: [
      { k: 'river', w: 6, pts: [[53.347, -6.31], [53.346, -6.285], [53.346, -6.265], [53.347, -6.245], [53.345, -6.22]] }
    ],
    hotels: [
      { n: 'The Dean Dublin', area: 'Camden', lat: 53.337, lng: -6.262 },
      { n: 'The Wilder', area: 'Portobello', lat: 53.334, lng: -6.256 },
      { n: 'Jacobs Inn', area: 'North City', lat: 53.352, lng: -6.25 }
    ],
    places: [
      { id: 'trinity', n: 'Trinity College & Book of Kells', c: 'see', lat: 53.3438, lng: -6.2546, area: 'City Centre', d: 'The Long Room is the reason, not the manuscript.', p: 2, t: ['history'], star: 1 },
      { id: 'guinness', n: 'Guinness Storehouse', c: 'see', lat: 53.3419, lng: -6.2867, area: 'Liberties', d: 'Touristy, yes, but the Gravity Bar view is real.', p: 3, t: ['icon'] },
      { id: 'kilmainham', n: 'Kilmainham Gaol', c: 'see', lat: 53.3418, lng: -6.3098, area: 'Kilmainham', d: 'Guided tour only, booked well ahead. Sobering and essential.', p: 1, t: ['history'], star: 1 },
      { id: 'stephens', n: "St Stephen's Green", c: 'outdoors', lat: 53.3382, lng: -6.2591, area: 'City Centre', d: 'Twenty-two acres of lunch break.', t: ['nature', 'free'] },
      { id: 'longhall', n: 'The Long Hall', c: 'drink', lat: 53.342, lng: -6.265, area: 'South City', d: 'Victorian mirrors, no music, perfect pint.', p: 1, t: ['nightlife'], star: 1 },
      { id: 'kehoes', n: "Kehoe's", c: 'drink', lat: 53.341, lng: -6.259, area: 'South City', d: 'Snugs downstairs, living room upstairs.', p: 1, t: ['nightlife'] },
      { id: 'woollen', n: 'The Woollen Mills', c: 'eat', lat: 53.347, lng: -6.267, area: 'North City', d: 'Proper Irish cooking over the Ha’penny Bridge.', p: 2, t: ['foodie'] },
      { id: 'howth', n: 'Howth Cliff Walk', c: 'outdoors', lat: 53.39, lng: -6.065, area: 'Howth', d: '30 min on the DART, then 6 km of cliff and seals.', t: ['nature', 'free', 'daytrip'] }
    ]
  },

  {
    id: 'edinburgh', name: 'Edinburgh', country: 'United Kingdom', region: 'europe',
    tz: 'Europe/London', cur: '£', center: [55.9533, -3.1883],
    sk: 'euro-old', sky: 'london-grey',
    tagline: 'Bring a waterproof. Bring it in August too.',
    districts: [
      { n: 'Old Town', lat: 55.95, lng: -3.19 },
      { n: 'New Town', lat: 55.956, lng: -3.195 },
      { n: 'Leith', lat: 55.975, lng: -3.17 },
      { n: 'Stockbridge', lat: 55.959, lng: -3.208 }
    ],
    hotels: [
      { n: 'The Balmoral', area: 'New Town', lat: 55.953, lng: -3.189 },
      { n: 'Eden Locke', area: 'New Town', lat: 55.954, lng: -3.199 },
      { n: 'CoDE Pod Hostel', area: 'Old Town', lat: 55.947, lng: -3.188 }
    ],
    places: [
      { id: 'edcastle', n: 'Edinburgh Castle', c: 'see', lat: 55.9486, lng: -3.1999, area: 'Old Town', d: 'Book online; the 1pm gun still goes off daily.', p: 2, t: ['icon', 'history'] },
      { id: 'arthurs', n: "Arthur's Seat", c: 'outdoors', lat: 55.9444, lng: -3.1617, area: 'Holyrood', d: 'An extinct volcano in the city. 45 minutes up, worth every one.', t: ['views', 'free', 'nature'], star: 1 },
      { id: 'royalmile', n: 'The Royal Mile', c: 'see', lat: 55.95, lng: -3.188, area: 'Old Town', d: 'Duck into the closes off it — that is where the old city is.', t: ['free', 'history'] },
      { id: 'deanvillage', n: 'Dean Village', c: 'outdoors', lat: 55.952, lng: -3.218, area: 'Dean', d: 'Millers’ cottages on the Water of Leith, ten minutes from Princes St.', t: ['quiet', 'free'] },
      { id: 'sheepheid', n: 'The Sheep Heid Inn', c: 'eat', lat: 55.943, lng: -3.156, area: 'Duddingston', d: 'Pub since 1360 with a skittle alley out back.', p: 2, t: ['history'] },
      { id: 'marysmilk', n: "Mary's Milk Bar", c: 'eat', lat: 55.947, lng: -3.193, area: 'Grassmarket', d: 'Gelato churned that morning under the castle rock.', p: 1, t: ['sweet', 'cheap'] },
      { id: 'bowbar', n: 'The Bow Bar', c: 'drink', lat: 55.948, lng: -3.195, area: 'Old Town', d: 'Three hundred whiskies, no music, no nonsense.', p: 1, t: ['nightlife'] },
      { id: 'leithshore', n: 'The Shore, Leith', c: 'eat', lat: 55.976, lng: -3.172, area: 'Leith', d: 'Old docks turned restaurant row; several Michelin stars.', p: 2, t: ['foodie'] }
    ]
  },

  {
    id: 'istanbul', name: 'Istanbul', country: 'Türkiye', region: 'europe',
    tz: 'Europe/Istanbul', cur: '₺', center: [41.0082, 28.9784],
    sk: 'domes', sky: 'bosphorus',
    tagline: 'Cross to the Asian side at least once. The ferry is the point.',
    districts: [
      { n: 'Sultanahmet', lat: 41.006, lng: 28.977 },
      { n: 'Beyoğlu', lat: 41.033, lng: 28.977 },
      { n: 'Kadıköy', lat: 40.99, lng: 29.025 },
      { n: 'Karaköy', lat: 41.024, lng: 28.974 }
    ],
    water: [
      { k: 'river', w: 14, pts: [[41.07, 29.05], [41.045, 29.02], [41.025, 28.995], [41.005, 28.975], [40.985, 28.96]] }
    ],
    hotels: [
      { n: 'Georges Hotel Galata', area: 'Karaköy', lat: 41.025, lng: 28.973 },
      { n: 'Sirkeci Mansion', area: 'Sultanahmet', lat: 41.014, lng: 28.978 },
      { n: 'Vault Karaköy', area: 'Karaköy', lat: 41.024, lng: 28.976 }
    ],
    places: [
      { id: 'hagia', n: 'Hagia Sophia', c: 'see', lat: 41.0086, lng: 28.9802, area: 'Sultanahmet', d: 'Church, then mosque, then museum, now mosque again. Cover up.', t: ['icon', 'history'], star: 1 },
      { id: 'bluemosque', n: 'Blue Mosque', c: 'see', lat: 41.0054, lng: 28.9768, area: 'Sultanahmet', d: 'Free; closed to visitors at the five prayer times.', t: ['architecture', 'free'] },
      { id: 'topkapi', n: 'Topkapı Palace', c: 'see', lat: 41.0115, lng: 28.9834, area: 'Sultanahmet', d: 'Pay extra for the Harem. Allow three hours.', p: 2, t: ['history'] },
      { id: 'grandbazaar', n: 'Grand Bazaar', c: 'shop', lat: 41.0106, lng: 28.9681, area: 'Fatih', d: '4,000 shops since 1461. Haggle, and never at the first stall.', p: 1, t: ['market'], star: 1 },
      { id: 'spicebazaar', n: 'Spice Bazaar', c: 'shop', lat: 41.0166, lng: 28.9709, area: 'Eminönü', d: 'Smaller, louder, better for actually buying things.', p: 1, t: ['market'] },
      { id: 'ciya', n: 'Çiya Sofrası', c: 'eat', lat: 40.99, lng: 29.027, area: 'Kadıköy', d: 'Regional Anatolian cooking you will not find anywhere else.', p: 2, t: ['foodie'], star: 1 },
      { id: 'gulluoglu', n: 'Karaköy Güllüoğlu', c: 'eat', lat: 41.024, lng: 28.977, area: 'Karaköy', d: 'Pistachio baklava since 1949. Eat it standing.', p: 1, t: ['sweet', 'cheap'] },
      { id: 'bosphorus', n: 'Bosphorus Ferry', c: 'outdoors', lat: 41.02, lng: 28.98, area: 'Eminönü', d: 'Public ferry, not a cruise. Tea on deck, two continents.', p: 1, t: ['views', 'cheap'], star: 1 }
    ]
  }
);
