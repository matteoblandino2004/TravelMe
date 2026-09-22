/* TravelMe — city dataset.
   Coordinates are real, rounded to ~4 decimals (roughly 10 m).
   Distances derived from them are straight-line estimates, not routed. */

window.TM_CITIES = [
  {
    id: "paris",
    name: "Paris",
    country: "France",
    tz: "Europe/Paris",
    cur: "€",
    center: [48.8600, 2.3350],
    tagline: "Six arrondissements a day is two too many.",
    sky: ["#1B1440", "#5C3A6E", "#E9927C"],
    ink: "#150E2C",
    districts: [
      { n: "Montmartre", lat: 48.8860, lng: 2.3400 },
      { n: "Le Marais", lat: 48.8590, lng: 2.3620 },
      { n: "Saint-Germain", lat: 48.8530, lng: 2.3330 },
      { n: "Latin Quarter", lat: 48.8480, lng: 2.3470 }
    ],
    water: [
      { k: "river", w: 9, pts: [[48.8380, 2.2620], [48.8470, 2.2790], [48.8530, 2.2940], [48.8620, 2.3060], [48.8590, 2.3230], [48.8540, 2.3400], [48.8500, 2.3560], [48.8450, 2.3750], [48.8390, 2.3960], [48.8340, 2.4150]] }
    ],
    hotels: [
      { n: "Hôtel Lutetia", area: "Saint-Germain", lat: 48.8515, lng: 2.3264 },
      { n: "Hôtel Fabric", area: "Oberkampf", lat: 48.8646, lng: 2.3746 },
      { n: "Le Meurice", area: "Tuileries", lat: 48.8654, lng: 2.3282 },
      { n: "Generator Paris", area: "Buttes-Chaumont", lat: 48.8790, lng: 2.3706 },
      { n: "Hôtel Malte Opéra", area: "2nd arr.", lat: 48.8686, lng: 2.3417 }
    ],
    places: [
      { id: "eiffel", n: "Eiffel Tower", c: "see", lat: 48.8584, lng: 2.2945, area: "Champ de Mars", d: "Book the summit lift; the stairs queue moves faster.", t: ["views", "icon"], star: 1 },
      { id: "louvre", n: "Musée du Louvre", c: "see", lat: 48.8606, lng: 2.3376, area: "1st arr.", d: "Enter via Porte des Lions to skip the pyramid crush.", p: 2, t: ["art", "rainy"], star: 1 },
      { id: "orsay", n: "Musée d'Orsay", c: "see", lat: 48.8600, lng: 2.3266, area: "7th arr.", d: "Impressionists on the top floor, behind the station clock.", p: 2, t: ["art", "rainy"], star: 1 },
      { id: "chapelle", n: "Sainte-Chapelle", c: "see", lat: 48.8554, lng: 2.3450, area: "Île de la Cité", d: "Go on a bright afternoon — it's all about the glass.", p: 1, t: ["history", "architecture"] },
      { id: "sacre", n: "Sacré-Cœur", c: "see", lat: 48.8867, lng: 2.3431, area: "Montmartre", d: "Climb the dome for the widest view in the city.", t: ["views", "icon"] },
      { id: "lachaise", n: "Père Lachaise", c: "see", lat: 48.8614, lng: 2.3933, area: "20th arr.", d: "Cobbled cemetery hill; grab a map at the gate.", t: ["history", "quiet"] },
      { id: "luxembourg", n: "Jardin du Luxembourg", c: "outdoors", lat: 48.8462, lng: 2.3372, area: "6th arr.", d: "Drag a green chair to the pond and do nothing.", t: ["nature", "free"] },
      { id: "canal", n: "Canal Saint-Martin", c: "outdoors", lat: 48.8709, lng: 2.3663, area: "10th arr.", d: "Iron footbridges, picnic crowds, best around 7pm.", t: ["nature", "evening"] },
      { id: "comptoir", n: "Le Comptoir du Relais", c: "eat", lat: 48.8531, lng: 2.3387, area: "Odéon", d: "Classic bistro; lunch walk-ins beat the dinner list.", p: 2, t: ["foodie", "bistro"], star: 1 },
      { id: "septime", n: "Septime", c: "eat", lat: 48.8531, lng: 2.3806, area: "11th arr.", d: "Tasting menu worth the 3-week-ahead booking.", p: 3, t: ["foodie", "special"] },
      { id: "janou", n: "Chez Janou", c: "eat", lat: 48.8570, lng: 2.3673, area: "Le Marais", d: "Provençal plates and 80 kinds of pastis.", p: 2, t: ["bistro", "lively"] },
      { id: "breizh", n: "Breizh Café", c: "eat", lat: 48.8607, lng: 2.3625, area: "Le Marais", d: "Buckwheat galettes and cider in stoneware bowls.", p: 1, t: ["casual", "lunch"] },
      { id: "dupain", n: "Du Pain et des Idées", c: "eat", lat: 48.8712, lng: 2.3624, area: "10th arr.", d: "Pistachio escargot pastry. Closed weekends.", p: 1, t: ["coffee", "morning"], star: 1 },
      { id: "enfants", n: "Marché des Enfants Rouges", c: "eat", lat: 48.8630, lng: 2.3625, area: "Le Marais", d: "Oldest covered market in the city; eat standing up.", p: 1, t: ["market", "lunch"] },
      { id: "reddoor", n: "Little Red Door", c: "drink", lat: 48.8634, lng: 2.3619, area: "Le Marais", d: "Cocktail menu built around single ingredients.", p: 2, t: ["nightlife"] },
      { id: "shakespeare", n: "Shakespeare and Company", c: "shop", lat: 48.8526, lng: 2.3470, area: "Latin Quarter", d: "English bookshop with beds upstairs for writers.", p: 1, t: ["browse", "rainy"] }
    ]
  },

  {
    id: "nyc",
    name: "New York",
    country: "United States",
    tz: "America/New_York",
    cur: "$",
    center: [40.7450, -73.9850],
    tagline: "Twenty blocks is a mile. Plan accordingly.",
    sky: ["#0A1130", "#2A3F7A", "#F0A15E"],
    ink: "#090E24",
    districts: [
      { n: "Midtown", lat: 40.7570, lng: -73.9820 },
      { n: "Village", lat: 40.7320, lng: -74.0010 },
      { n: "LES", lat: 40.7180, lng: -73.9870 },
      { n: "Brooklyn", lat: 40.7060, lng: -73.9700 }
    ],
    water: [
      { k: "river", w: 14, pts: [[40.7020, -74.0180], [40.7300, -74.0130], [40.7550, -74.0080], [40.7800, -73.9980], [40.8050, -73.9720]] },
      { k: "river", w: 12, pts: [[40.6950, -74.0000], [40.7060, -73.9900], [40.7180, -73.9720], [40.7400, -73.9630], [40.7700, -73.9430], [40.7930, -73.9270]] }
    ],
    hotels: [
      { n: "The Standard, High Line", area: "Meatpacking", lat: 40.7410, lng: -74.0080 },
      { n: "Ace Hotel New York", area: "NoMad", lat: 40.7452, lng: -73.9882 },
      { n: "The Bowery Hotel", area: "East Village", lat: 40.7259, lng: -73.9919 },
      { n: "citizenM Times Square", area: "Midtown West", lat: 40.7616, lng: -73.9866 },
      { n: "The Hoxton Williamsburg", area: "Brooklyn", lat: 40.7213, lng: -73.9578 }
    ],
    places: [
      { id: "met", n: "The Met", c: "see", lat: 40.7794, lng: -73.9632, area: "Upper East Side", d: "Pay-what-you-wish for NY State residents only — budget full price.", p: 3, t: ["art", "rainy"], star: 1 },
      { id: "moma", n: "MoMA", c: "see", lat: 40.7614, lng: -73.9776, area: "Midtown", d: "Friday evenings are free and, predictably, mobbed.", p: 3, t: ["art", "rainy"] },
      { id: "topofrock", n: "Top of the Rock", c: "see", lat: 40.7593, lng: -73.9794, area: "Midtown", d: "Better than the Empire State — because it's in the view.", p: 3, t: ["views", "icon"], star: 1 },
      { id: "brooklynbridge", n: "Brooklyn Bridge Walk", c: "outdoors", lat: 40.7061, lng: -73.9969, area: "Civic Center", d: "Walk Brooklyn-to-Manhattan at sunrise for an empty deck.", t: ["views", "free"], star: 1 },
      { id: "highline", n: "The High Line", c: "outdoors", lat: 40.7480, lng: -74.0048, area: "Chelsea", d: "Old freight line, now a 1.5-mile garden in the air.", t: ["nature", "free"] },
      { id: "centralpark", n: "Central Park", c: "outdoors", lat: 40.7740, lng: -73.9709, area: "Bethesda Terrace", d: "Enter at 72nd St; the Ramble hides the crowds.", t: ["nature", "free"] },
      { id: "washsq", n: "Washington Square Park", c: "outdoors", lat: 40.7308, lng: -73.9973, area: "Village", d: "Chess hustlers, piano guy, the arch. Free theatre.", t: ["free", "people-watching"] },
      { id: "dumbo", n: "DUMBO & Time Out Market", c: "see", lat: 40.7033, lng: -73.9903, area: "Brooklyn", d: "Washington St for the bridge shot, then eat upstairs.", p: 2, t: ["views", "foodie"] },
      { id: "katz", n: "Katz's Delicatessen", c: "eat", lat: 40.7223, lng: -73.9874, area: "LES", d: "Keep the ticket. Tip the carver. Get the pastrami.", p: 2, t: ["foodie", "icon"], star: 1 },
      { id: "joes", n: "Joe's Pizza", c: "eat", lat: 40.7304, lng: -74.0022, area: "Carmine St", d: "Plain slice, folded, eaten standing at the counter.", p: 1, t: ["cheap", "late"] },
      { id: "russ", n: "Russ & Daughters Cafe", c: "eat", lat: 40.7186, lng: -73.9882, area: "LES", d: "Bagels, lox and egg creams in a diner booth.", p: 2, t: ["brunch", "morning"] },
      { id: "xian", n: "Xi'an Famous Foods", c: "eat", lat: 40.7169, lng: -73.9938, area: "Chinatown", d: "Hand-ripped noodles, cumin lamb, ten-minute meal.", p: 1, t: ["cheap", "lunch"] },
      { id: "chelseamkt", n: "Chelsea Market", c: "eat", lat: 40.7425, lng: -74.0061, area: "Chelsea", d: "Tacos, lobster, doughnuts — one block, indoors.", p: 2, t: ["market", "rainy"] },
      { id: "attaboy", n: "Attaboy", c: "drink", lat: 40.7185, lng: -73.9915, area: "LES", d: "No menu, no sign. Tell them what you like.", p: 3, t: ["nightlife"] },
      { id: "bluenote", n: "Blue Note Jazz Club", c: "drink", lat: 40.7307, lng: -74.0007, area: "Village", d: "Late set is cheaper and the players loosen up.", p: 3, t: ["nightlife", "music"] },
      { id: "strand", n: "Strand Book Store", c: "shop", lat: 40.7333, lng: -73.9906, area: "Union Square", d: "18 miles of books; the dollar carts are outside.", p: 1, t: ["browse", "rainy"] }
    ]
  },

  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    tz: "Asia/Tokyo",
    cur: "¥",
    center: [35.6800, 139.7400],
    tagline: "Pick two neighbourhoods a day. The trains do the rest.",
    sky: ["#150B33", "#4B1F6B", "#F2739A"],
    ink: "#120A28",
    districts: [
      { n: "Shibuya", lat: 35.6600, lng: 139.7010 },
      { n: "Shinjuku", lat: 35.6930, lng: 139.7020 },
      { n: "Asakusa", lat: 35.7130, lng: 139.7950 },
      { n: "Ginza", lat: 35.6720, lng: 139.7650 }
    ],
    water: [
      { k: "river", w: 8, pts: [[35.7400, 139.8000], [35.7150, 139.8000], [35.6950, 139.7920], [35.6750, 139.7880], [35.6550, 139.7860], [35.6400, 139.7900]] },
      { k: "shore", side: "S", w: 0, pts: [[35.6300, 139.7400], [35.6250, 139.7700], [35.6220, 139.8000], [35.6300, 139.8400]] }
    ],
    hotels: [
      { n: "Trunk Hotel", area: "Shibuya", lat: 35.6650, lng: 139.7080 },
      { n: "Shinjuku Granbell", area: "Shinjuku", lat: 35.6938, lng: 139.7036 },
      { n: "Hotel Ryumeikan", area: "Tokyo Station", lat: 35.6836, lng: 139.7690 },
      { n: "Cerulean Tower", area: "Shibuya", lat: 35.6570, lng: 139.6980 },
      { n: "Book and Bed", area: "Asakusa", lat: 35.7119, lng: 139.7967 }
    ],
    places: [
      { id: "sensoji", n: "Senso-ji Temple", c: "see", lat: 35.7148, lng: 139.7967, area: "Asakusa", d: "Arrive before 8am and the approach is yours.", t: ["history", "icon"], star: 1 },
      { id: "meiji", n: "Meiji Jingu", c: "see", lat: 35.6764, lng: 139.6993, area: "Harajuku", d: "Forest shrine; wedding processions on weekend mornings.", t: ["history", "nature"], star: 1 },
      { id: "shibuya", n: "Shibuya Crossing", c: "see", lat: 35.6595, lng: 139.7005, area: "Shibuya", d: "Watch from the Starbucks window, then cross it twice.", t: ["icon", "evening"] },
      { id: "teamlab", n: "teamLab Planets", c: "see", lat: 35.6497, lng: 139.7906, area: "Toyosu", d: "Barefoot digital art. Book a slot; wear shorts.", p: 3, t: ["art", "rainy"], star: 1 },
      { id: "skytree", n: "Tokyo Skytree", c: "see", lat: 35.7101, lng: 139.8107, area: "Sumida", d: "634 m. Clear winter evenings show Fuji.", p: 3, t: ["views"] },
      { id: "yanaka", n: "Yanaka Ginza", c: "see", lat: 35.7278, lng: 139.7660, area: "Yanaka", d: "Old-Tokyo shopping street that survived the wars.", t: ["quiet", "history"] },
      { id: "gyoen", n: "Shinjuku Gyoen", c: "outdoors", lat: 35.6852, lng: 139.7100, area: "Shinjuku", d: "Three garden styles behind one wall. Small entry fee.", p: 1, t: ["nature"] },
      { id: "nakameguro", n: "Nakameguro Canal", c: "outdoors", lat: 35.6440, lng: 139.6990, area: "Nakameguro", d: "Cherry trees over the water; coffee roasters on both banks.", t: ["nature", "coffee"] },
      { id: "tsukiji", n: "Tsukiji Outer Market", c: "eat", lat: 35.6654, lng: 139.7707, area: "Tsukiji", d: "Tamagoyaki on a stick, uni on rice. Go by 9am.", p: 1, t: ["market", "morning"], star: 1 },
      { id: "omoide", n: "Omoide Yokocho", c: "eat", lat: 35.6935, lng: 139.6995, area: "Shinjuku", d: "Six-seat yakitori counters under the tracks.", p: 2, t: ["evening", "lively"] },
      { id: "ichiran", n: "Ichiran Shibuya", c: "eat", lat: 35.6614, lng: 139.7008, area: "Shibuya", d: "Solo booths, order by form, tonkotsu in four minutes.", p: 1, t: ["cheap", "late"] },
      { id: "afuri", n: "AFURI Ebisu", c: "eat", lat: 35.6465, lng: 139.7100, area: "Ebisu", d: "Yuzu shio ramen — lighter than it has any right to be.", p: 1, t: ["cheap", "lunch"] },
      { id: "toyosu", n: "Toyosu Sushi Counters", c: "eat", lat: 35.6459, lng: 139.7860, area: "Toyosu", d: "The tuna auction moved here; so did the 5am breakfast.", p: 3, t: ["foodie", "morning"] },
      { id: "goldengai", n: "Golden Gai", c: "drink", lat: 35.6940, lng: 139.7045, area: "Shinjuku", d: "200 tiny bars. Check for a cover charge before sitting.", p: 2, t: ["nightlife"], star: 1 },
      { id: "akihabara", n: "Akihabara", c: "shop", lat: 35.6987, lng: 139.7730, area: "Akihabara", d: "Eight floors of electronics, then eight more of models.", p: 2, t: ["browse", "rainy"] },
      { id: "takeshita", n: "Takeshita Street", c: "shop", lat: 35.6717, lng: 139.7031, area: "Harajuku", d: "Teen fashion at full volume. Weekday mornings are calmer.", p: 1, t: ["browse", "lively"] }
    ]
  },

  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    tz: "Europe/London",
    cur: "£",
    center: [51.5100, -0.1100],
    tagline: "The tube map lies about distance. Walk more than you think.",
    sky: ["#101A33", "#3C4E75", "#DCA96B"],
    ink: "#0D1426",
    districts: [
      { n: "Soho", lat: 51.5135, lng: -0.1330 },
      { n: "Shoreditch", lat: 51.5250, lng: -0.0790 },
      { n: "South Bank", lat: 51.5060, lng: -0.1150 },
      { n: "Camden", lat: 51.5400, lng: -0.1440 }
    ],
    water: [
      { k: "river", w: 11, pts: [[51.4870, -0.2200], [51.4890, -0.1800], [51.4940, -0.1450], [51.5070, -0.1240], [51.5090, -0.1000], [51.5060, -0.0760], [51.4980, -0.0400], [51.4830, -0.0060]] }
    ],
    hotels: [
      { n: "The Hoxton Shoreditch", area: "Shoreditch", lat: 51.5253, lng: -0.0810 },
      { n: "The Z Hotel Soho", area: "Soho", lat: 51.5133, lng: -0.1330 },
      { n: "citizenM Tower of London", area: "City", lat: 51.5100, lng: -0.0770 },
      { n: "The Standard London", area: "King's Cross", lat: 51.5300, lng: -0.1230 },
      { n: "Artist Residence", area: "Pimlico", lat: 51.4900, lng: -0.1400 }
    ],
    places: [
      { id: "britishmuseum", n: "British Museum", c: "see", lat: 51.5194, lng: -0.1270, area: "Bloomsbury", d: "Free. Book a slot anyway; enter from Montague Place.", t: ["history", "rainy", "free"], star: 1 },
      { id: "tate", n: "Tate Modern", c: "see", lat: 51.5076, lng: -0.0994, area: "Bankside", d: "Free collection; the Level 10 terrace beats the paid views.", t: ["art", "views", "free"] },
      { id: "tower", n: "Tower of London", c: "see", lat: 51.5081, lng: -0.0759, area: "City", d: "First entry beats the crowds to the Crown Jewels.", p: 3, t: ["history", "icon"] },
      { id: "westminster", n: "Westminster & Big Ben", c: "see", lat: 51.5007, lng: -0.1246, area: "Westminster", d: "Best angle is from the Southbank end of the bridge.", t: ["icon", "free"] },
      { id: "skygarden", n: "Sky Garden", c: "see", lat: 51.5112, lng: -0.0836, area: "City", d: "Free rooftop if you book three weeks out.", t: ["views", "free"], star: 1 },
      { id: "greenwich", n: "Royal Observatory", c: "see", lat: 51.4769, lng: -0.0005, area: "Greenwich", d: "Take the river bus there; the view back is the point.", p: 2, t: ["views", "history"] },
      { id: "hyde", n: "Hyde Park", c: "outdoors", lat: 51.5073, lng: -0.1657, area: "West End", d: "Serpentine swim in summer, Speakers' Corner on Sundays.", t: ["nature", "free"] },
      { id: "heath", n: "Hampstead Heath", c: "outdoors", lat: 51.5608, lng: -0.1630, area: "Hampstead", d: "Parliament Hill for the skyline; ponds for the swim.", t: ["nature", "free"] },
      { id: "borough", n: "Borough Market", c: "eat", lat: 51.5055, lng: -0.0910, area: "Southwark", d: "Get there by 11am; closed Sunday and Monday.", p: 2, t: ["market", "lunch"], star: 1 },
      { id: "dishoom", n: "Dishoom Shoreditch", c: "eat", lat: 51.5245, lng: -0.0780, area: "Shoreditch", d: "Bacon naan before 11am, no queue. Black daal always.", p: 2, t: ["foodie", "brunch"], star: 1 },
      { id: "padella", n: "Padella", c: "eat", lat: 51.5052, lng: -0.0907, area: "Borough", d: "Eight-pound pasta at a counter. Join the virtual queue.", p: 1, t: ["cheap", "lunch"] },
      { id: "bricklane", n: "Brick Lane", c: "eat", lat: 51.5220, lng: -0.0716, area: "Spitalfields", d: "Beigels at the north end, open all night, cash only.", p: 1, t: ["cheap", "late"] },
      { id: "nightjar", n: "Nightjar", c: "drink", lat: 51.5250, lng: -0.0870, area: "Old Street", d: "Basement, live jazz, table service only. Book it.", p: 3, t: ["nightlife", "music"] },
      { id: "columbia", n: "Columbia Road Flower Market", c: "shop", lat: 51.5290, lng: -0.0690, area: "Bethnal Green", d: "Sunday only. Late afternoon is when prices collapse.", p: 1, t: ["market", "morning"] },
      { id: "camden", n: "Camden Market", c: "shop", lat: 51.5415, lng: -0.1465, area: "Camden", d: "Street food by the lock; the stables are the good bit.", p: 1, t: ["browse", "market"] },
      { id: "daunt", n: "Daunt Books", c: "shop", lat: 51.5180, lng: -0.1520, area: "Marylebone", d: "Edwardian galleries, travel section shelved by country.", p: 2, t: ["browse", "rainy"] }
    ]
  },

  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    tz: "Europe/Rome",
    cur: "€",
    center: [41.8950, 12.4800],
    tagline: "Everything is closer than it looks and older than you think.",
    sky: ["#241338", "#7A3B55", "#F0A06A"],
    ink: "#1C1029",
    districts: [
      { n: "Centro Storico", lat: 41.8980, lng: 12.4750 },
      { n: "Trastevere", lat: 41.8880, lng: 12.4690 },
      { n: "Monti", lat: 41.8940, lng: 12.4910 },
      { n: "Prati", lat: 41.9100, lng: 12.4650 }
    ],
    water: [
      { k: "river", w: 7, pts: [[41.9300, 12.4720], [41.9150, 12.4660], [41.9020, 12.4670], [41.8950, 12.4700], [41.8870, 12.4740], [41.8760, 12.4740], [41.8650, 12.4700]] }
    ],
    hotels: [
      { n: "Palazzo Manfredi", area: "Colosseo", lat: 41.8890, lng: 12.4940 },
      { n: "G-Rough", area: "Navona", lat: 41.8975, lng: 12.4720 },
      { n: "Hotel Santa Maria", area: "Trastevere", lat: 41.8890, lng: 12.4690 },
      { n: "Hotel Artemide", area: "Via Nazionale", lat: 41.9010, lng: 12.4930 },
      { n: "The Yellow", area: "Termini", lat: 41.9020, lng: 12.5050 }
    ],
    places: [
      { id: "colosseum", n: "Colosseum", c: "see", lat: 41.8902, lng: 12.4922, area: "Colosseo", d: "Arena-floor ticket is worth the extra ten euro.", p: 2, t: ["history", "icon"], star: 1 },
      { id: "forum", n: "Roman Forum & Palatine", c: "see", lat: 41.8925, lng: 12.4853, area: "Centro", d: "Same ticket as the Colosseum. Enter from Via di San Gregorio.", p: 2, t: ["history"] },
      { id: "pantheon", n: "Pantheon", c: "see", lat: 41.8986, lng: 12.4769, area: "Centro Storico", d: "Go at opening, or in rain to watch the oculus.", p: 1, t: ["history", "icon"], star: 1 },
      { id: "trevi", n: "Trevi Fountain", c: "see", lat: 41.9009, lng: 12.4833, area: "Centro", d: "Only bearable before 7am or after midnight.", t: ["icon", "free"] },
      { id: "vatican", n: "Vatican Museums", c: "see", lat: 41.9065, lng: 12.4536, area: "Vatican", d: "Friday late openings are the least crowded slot.", p: 3, t: ["art", "history"], star: 1 },
      { id: "stpeters", n: "St. Peter's Basilica", c: "see", lat: 41.9022, lng: 12.4539, area: "Vatican", d: "Free entry, paid dome climb, 551 steps.", t: ["views", "free"] },
      { id: "borghese", n: "Borghese Gallery", c: "see", lat: 41.9142, lng: 12.4922, area: "Villa Borghese", d: "Timed two-hour slots, booked well ahead. Bernini's best.", p: 2, t: ["art"] },
      { id: "appia", n: "Appian Way", c: "outdoors", lat: 41.8550, lng: 12.5180, area: "Appia Antica", d: "Rent a bike on Sunday when the road closes to cars.", t: ["nature", "history"] },
      { id: "trastevere", n: "Trastevere Lanes", c: "outdoors", lat: 41.8890, lng: 12.4700, area: "Trastevere", d: "No plan needed. Start at Santa Maria and drift.", t: ["evening", "free"] },
      { id: "roscioli", n: "Roscioli", c: "eat", lat: 41.8946, lng: 12.4744, area: "Centro", d: "Deli counter out front, carbonara in the back. Book.", p: 3, t: ["foodie"], star: 1 },
      { id: "daenzo", n: "Da Enzo al 29", c: "eat", lat: 41.8880, lng: 12.4770, area: "Trastevere", d: "Twelve tables, cacio e pepe, queue from 7pm.", p: 2, t: ["foodie", "bistro"] },
      { id: "bonci", n: "Pizzarium Bonci", c: "eat", lat: 41.9070, lng: 12.4460, area: "Prati", d: "Pizza al taglio sold by weight. Point and eat outside.", p: 1, t: ["cheap", "lunch"] },
      { id: "giolitti", n: "Giolitti", c: "eat", lat: 41.9000, lng: 12.4785, area: "Centro", d: "Pay at the till first, then hand the receipt over.", p: 1, t: ["cheap", "sweet"] },
      { id: "testaccio", n: "Testaccio Market", c: "eat", lat: 41.8760, lng: 12.4750, area: "Testaccio", d: "Box 15 for the panino con allesso. Mornings only.", p: 1, t: ["market", "lunch"] },
      { id: "jerry", n: "Jerry Thomas Project", c: "drink", lat: 41.8970, lng: 12.4700, area: "Centro", d: "Speakeasy with a password on the website. Members' rules.", p: 3, t: ["nightlife"] },
      { id: "campo", n: "Campo de' Fiori", c: "shop", lat: 41.8956, lng: 12.4722, area: "Centro", d: "Produce and spice stalls until 2pm, bars after dark.", p: 1, t: ["market", "morning"] }
    ]
  },

  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    tz: "Europe/Madrid",
    cur: "€",
    center: [41.3900, 2.1700],
    tagline: "Dinner starts at nine. Adjust the whole day around it.",
    sky: ["#0E1B3D", "#2F5C86", "#F4A26B"],
    ink: "#0B1530",
    districts: [
      { n: "Gràcia", lat: 41.4030, lng: 2.1560 },
      { n: "Eixample", lat: 41.3920, lng: 2.1650 },
      { n: "Gòtic", lat: 41.3830, lng: 2.1770 },
      { n: "Barceloneta", lat: 41.3790, lng: 2.1900 }
    ],
    water: [
      { k: "shore", side: "SE", w: 0, pts: [[41.3560, 2.1420], [41.3660, 2.1650], [41.3740, 2.1830], [41.3830, 2.1990], [41.3960, 2.2180], [41.4080, 2.2350]] }
    ],
    hotels: [
      { n: "Casa Bonay", area: "Eixample", lat: 41.3930, lng: 2.1730 },
      { n: "Hotel Brummell", area: "Poble-sec", lat: 41.3720, lng: 2.1650 },
      { n: "Yurbban Trafalgar", area: "Born", lat: 41.3880, lng: 2.1780 },
      { n: "Generator Barcelona", area: "Gràcia", lat: 41.3990, lng: 2.1650 },
      { n: "H10 Port Vell", area: "Port Vell", lat: 41.3810, lng: 2.1830 }
    ],
    places: [
      { id: "sagrada", n: "Sagrada Família", c: "see", lat: 41.4036, lng: 2.1744, area: "Eixample", d: "Afternoon slot: the west windows set the nave on fire.", p: 3, t: ["architecture", "icon"], star: 1 },
      { id: "guell", n: "Park Güell", c: "see", lat: 41.4145, lng: 2.1527, area: "Gràcia", d: "Monumental zone is ticketed; the surrounding park is free.", p: 2, t: ["architecture", "views"], star: 1 },
      { id: "batllo", n: "Casa Batlló", c: "see", lat: 41.3917, lng: 2.1649, area: "Passeig de Gràcia", d: "Gaudí's dragon-back roof, best seen last thing before close.", p: 3, t: ["architecture"] },
      { id: "pedrera", n: "La Pedrera", c: "see", lat: 41.3953, lng: 2.1619, area: "Eixample", d: "Rooftop chimneys at night with a glass of cava.", p: 3, t: ["architecture", "views"] },
      { id: "picasso", n: "Picasso Museum", c: "see", lat: 41.3851, lng: 2.1810, area: "Born", d: "Five medieval palaces; the early work is the surprise.", p: 2, t: ["art", "rainy"] },
      { id: "gotic", n: "Barri Gòtic", c: "outdoors", lat: 41.3830, lng: 2.1770, area: "Gòtic", d: "Roman wall, cathedral geese, lanes that dead-end beautifully.", t: ["free", "history"] },
      { id: "bunkers", n: "Bunkers del Carmel", c: "outdoors", lat: 41.4193, lng: 2.1620, area: "El Carmel", d: "Civil-war gun platform, now the best sunset in town.", t: ["views", "free"], star: 1 },
      { id: "barceloneta", n: "Barceloneta Beach", c: "outdoors", lat: 41.3785, lng: 2.1925, area: "Barceloneta", d: "Walk northeast past the marina for fewer people.", t: ["nature", "free"] },
      { id: "tibidabo", n: "Tibidabo", c: "see", lat: 41.4222, lng: 2.1187, area: "Collserola", d: "Funicular up to a clifftop church and a 1901 fairground.", p: 2, t: ["views", "family"] },
      { id: "boqueria", n: "La Boqueria", c: "eat", lat: 41.3817, lng: 2.1716, area: "Raval", d: "Skip the front stalls; eat at El Quim in the middle.", p: 1, t: ["market", "morning"], star: 1 },
      { id: "quimet", n: "Quimet & Quimet", c: "eat", lat: 41.3740, lng: 2.1670, area: "Poble-sec", d: "Standing room only, montaditos built to order.", p: 2, t: ["foodie", "tapas"], star: 1 },
      { id: "bardelpla", n: "Bar del Pla", c: "eat", lat: 41.3860, lng: 2.1800, area: "Born", d: "Tapas done precisely. Sit at the bar, order the ravioli.", p: 2, t: ["foodie", "tapas"] },
      { id: "xampanyet", n: "El Xampanyet", c: "eat", lat: 41.3852, lng: 2.1815, area: "Born", d: "Anchovies and house cava, elbow to elbow since 1929.", p: 1, t: ["lively", "tapas"] },
      { id: "paixano", n: "Can Paixano", c: "drink", lat: 41.3820, lng: 2.1840, area: "Born", d: "Cheap cava and sausage sandwiches. Cash, chaos, standing.", p: 1, t: ["cheap", "lively"] },
      { id: "paradiso", n: "Paradiso", c: "drink", lat: 41.3846, lng: 2.1830, area: "Born", d: "Through the pastrami-bar fridge door. Queue early.", p: 3, t: ["nightlife"] },
      { id: "santantoni", n: "Mercat de Sant Antoni", c: "shop", lat: 41.3790, lng: 2.1610, area: "Sant Antoni", d: "Sunday book-and-coin market wraps the whole building.", p: 1, t: ["market", "browse"] }
    ]
  },

  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    tz: "Europe/Lisbon",
    cur: "€",
    center: [38.7150, -9.1500],
    tagline: "Every viewpoint costs a hill. Wear the other shoes.",
    sky: ["#171438", "#6B3A63", "#F5B077"],
    ink: "#130F2B",
    districts: [
      { n: "Alfama", lat: 38.7125, lng: -9.1290 },
      { n: "Baixa", lat: 38.7110, lng: -9.1390 },
      { n: "Bairro Alto", lat: 38.7130, lng: -9.1460 },
      { n: "Belém", lat: 38.6960, lng: -9.2050 }
    ],
    water: [
      { k: "shore", side: "S", w: 0, pts: [[38.6880, -9.2300], [38.6920, -9.1900], [38.6990, -9.1600], [38.7040, -9.1300], [38.7060, -9.0950], [38.7020, -9.0700]] }
    ],
    hotels: [
      { n: "Memmo Alfama", area: "Alfama", lat: 38.7115, lng: -9.1300 },
      { n: "The Independente", area: "Príncipe Real", lat: 38.7150, lng: -9.1460 },
      { n: "Santiago de Alfama", area: "Alfama", lat: 38.7110, lng: -9.1290 },
      { n: "Hotel da Baixa", area: "Baixa", lat: 38.7110, lng: -9.1390 },
      { n: "Casa Amora", area: "Amoreiras", lat: 38.7220, lng: -9.1560 }
    ],
    places: [
      { id: "belemtower", n: "Belém Tower", c: "see", lat: 38.6916, lng: -9.2160, area: "Belém", d: "Go early; the spiral stair runs one direction at a time.", p: 1, t: ["history", "icon"] },
      { id: "jeronimos", n: "Jerónimos Monastery", c: "see", lat: 38.6979, lng: -9.2065, area: "Belém", d: "The cloister is the reason. Ticket queue moves after 3pm.", p: 2, t: ["history", "architecture"], star: 1 },
      { id: "castelo", n: "São Jorge Castle", c: "see", lat: 38.7139, lng: -9.1335, area: "Alfama", d: "Ramparts at golden hour, peacocks the rest of the time.", p: 2, t: ["views", "history"] },
      { id: "tram28", n: "Tram 28", c: "see", lat: 38.7140, lng: -9.1310, area: "Graça", d: "Board at Martim Moniz early or you'll stand the whole way.", p: 1, t: ["icon", "cheap"], star: 1 },
      { id: "senhora", n: "Miradouro da Senhora do Monte", c: "outdoors", lat: 38.7165, lng: -9.1330, area: "Graça", d: "Highest viewpoint in the city. Bring a bottle, stay for sunset.", t: ["views", "free"], star: 1 },
      { id: "alfama", n: "Alfama Lanes", c: "outdoors", lat: 38.7120, lng: -9.1300, area: "Alfama", d: "Get lost on purpose; fado spills out of doorways after 9pm.", t: ["free", "evening"] },
      { id: "sintra", n: "Sintra Day Trip", c: "see", lat: 38.7920, lng: -9.3900, area: "Sintra", d: "40-min train from Rossio. Pena Palace first, Quinta second.", p: 2, t: ["history", "daytrip"] },
      { id: "cristo", n: "Cristo Rei & the Bridge", c: "see", lat: 38.6780, lng: -9.1700, area: "Almada", d: "Ferry over, lift up, whole city laid out across the water.", p: 1, t: ["views"] },
      { id: "pasteis", n: "Pastéis de Belém", c: "eat", lat: 38.6975, lng: -9.2035, area: "Belém", d: "Sit-down room moves faster than the takeaway line.", p: 1, t: ["sweet", "morning"], star: 1 },
      { id: "timeout", n: "Time Out Market", c: "eat", lat: 38.7071, lng: -9.1459, area: "Cais do Sodré", d: "Two dozen kitchens, one hall. Go off-peak or stand.", p: 2, t: ["market", "foodie"] },
      { id: "ramiro", n: "Cervejaria Ramiro", c: "eat", lat: 38.7230, lng: -9.1360, area: "Intendente", d: "Garlic prawns, then a steak sandwich for dessert. No bookings.", p: 2, t: ["foodie", "lively"], star: 1 },
      { id: "cevicheria", n: "A Cevicheria", c: "eat", lat: 38.7170, lng: -9.1520, area: "Príncipe Real", d: "Giant octopus on the ceiling. Put your name down and wait.", p: 2, t: ["foodie"] },
      { id: "pensao", n: "Pensão Amor", c: "drink", lat: 38.7080, lng: -9.1440, area: "Cais do Sodré", d: "Old brothel turned bar; the bookshop at the back still trades.", p: 2, t: ["nightlife"] },
      { id: "parkbar", n: "Park Bar", c: "drink", lat: 38.7118, lng: -9.1452, area: "Bairro Alto", d: "Top of a car park. Take the lift to level 6, then the stairs.", p: 2, t: ["views", "nightlife"] },
      { id: "lxfactory", n: "LX Factory", c: "shop", lat: 38.7025, lng: -9.1786, area: "Alcântara", d: "Print works turned studios; Ler Devagar bookshop inside.", p: 2, t: ["browse", "market"] },
      { id: "ladra", n: "Feira da Ladra", c: "shop", lat: 38.7155, lng: -9.1250, area: "Graça", d: "Flea market Tuesday and Saturday, tiles to typewriters.", p: 1, t: ["market", "browse"] }
    ]
  },

  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    tz: "Europe/Amsterdam",
    cur: "€",
    center: [52.3700, 4.8950],
    tagline: "Rent the bike. Then learn to fear the tram tracks.",
    sky: ["#101C3A", "#33577F", "#E8B27A"],
    ink: "#0C152C",
    districts: [
      { n: "Jordaan", lat: 52.3760, lng: 4.8810 },
      { n: "Centrum", lat: 52.3720, lng: 4.8950 },
      { n: "De Pijp", lat: 52.3550, lng: 4.8930 },
      { n: "Oost", lat: 52.3630, lng: 4.9250 }
    ],
    water: [
      { k: "river", w: 10, pts: [[52.3900, 4.8400], [52.3870, 4.8750], [52.3830, 4.9000], [52.3790, 4.9250], [52.3740, 4.9500]] },
      { k: "river", w: 4, pts: [[52.3660, 4.8790], [52.3720, 4.8830], [52.3780, 4.8890], [52.3810, 4.9000], [52.3750, 4.9060], [52.3660, 4.9020], [52.3610, 4.8920], [52.3620, 4.8810], [52.3660, 4.8790]] }
    ],
    hotels: [
      { n: "The Hoxton Herengracht", area: "Centrum", lat: 52.3700, lng: 4.8860 },
      { n: "Hotel V Nesplein", area: "Centrum", lat: 52.3690, lng: 4.8940 },
      { n: "Conscious Westerpark", area: "Westerpark", lat: 52.3860, lng: 4.8720 },
      { n: "Pillows Anne", area: "Jordaan", lat: 52.3780, lng: 4.8830 },
      { n: "Volkshotel", area: "Oost", lat: 52.3510, lng: 4.9110 }
    ],
    places: [
      { id: "rijks", n: "Rijksmuseum", c: "see", lat: 52.3600, lng: 4.8852, area: "Museumplein", d: "Night Watch at opening, then the doll houses nobody queues for.", p: 2, t: ["art", "rainy"], star: 1 },
      { id: "vangogh", n: "Van Gogh Museum", c: "see", lat: 52.3584, lng: 4.8811, area: "Museumplein", d: "Timed tickets sell out a week ahead in summer.", p: 2, t: ["art", "rainy"], star: 1 },
      { id: "anne", n: "Anne Frank House", c: "see", lat: 52.3752, lng: 4.8840, area: "Jordaan", d: "Tickets released six weeks out, to the minute, online only.", p: 2, t: ["history"], star: 1 },
      { id: "adam", n: "A'DAM Lookout", c: "see", lat: 52.3840, lng: 4.9010, area: "Noord", d: "Free ferry from Centraal, then a swing over the edge.", p: 2, t: ["views"] },
      { id: "ndsm", n: "NDSM Wharf", c: "see", lat: 52.4010, lng: 4.8930, area: "Noord", d: "Shipyard turned street-art sprawl. Ferry runs all day.", t: ["art", "free"] },
      { id: "begijnhof", n: "Begijnhof", c: "see", lat: 52.3690, lng: 4.8900, area: "Centrum", d: "Hidden courtyard off a shopping street. Keep your voice down.", t: ["quiet", "free"] },
      { id: "artis", n: "Artis & Micropia", c: "see", lat: 52.3665, lng: 4.9145, area: "Oost", d: "The microbe museum is stranger and better than the zoo.", p: 2, t: ["family", "rainy"] },
      { id: "jordaancanals", n: "Jordaan Canals", c: "outdoors", lat: 52.3760, lng: 4.8830, area: "Jordaan", d: "Nine Streets for browsing, Brouwersgracht for the photo.", t: ["free", "evening"] },
      { id: "vondel", n: "Vondelpark", c: "outdoors", lat: 52.3580, lng: 4.8686, area: "Oud-West", d: "Cycle a loop; free open-air theatre on summer weekends.", t: ["nature", "free"] },
      { id: "foodhallen", n: "Foodhallen", c: "eat", lat: 52.3665, lng: 4.8700, area: "Oud-West", d: "Tram depot turned food hall. Bitterballen and a beer.", p: 2, t: ["market", "lively"] },
      { id: "dekas", n: "De Kas", c: "eat", lat: 52.3500, lng: 4.9280, area: "Park Frankendael", d: "Menu picked from the greenhouse it's served in. Book ahead.", p: 3, t: ["foodie", "special"] },
      { id: "winkel", n: "Winkel 43", c: "eat", lat: 52.3790, lng: 4.8830, area: "Jordaan", d: "The apple pie. Saturday market day means a queue.", p: 1, t: ["sweet", "coffee"], star: 1 },
      { id: "klos", n: "Café de Klos", c: "eat", lat: 52.3650, lng: 4.8830, area: "Nine Streets", d: "Ribs, wooden booths, no reservations, 5pm or 9pm.", p: 2, t: ["casual", "lively"] },
      { id: "ij", n: "Brouwerij 't IJ", c: "drink", lat: 52.3667, lng: 4.9265, area: "Oost", d: "Brewery under a windmill. Terrace fills by 4pm.", p: 1, t: ["nightlife", "free"] },
      { id: "cuyp", n: "Albert Cuyp Market", c: "shop", lat: 52.3555, lng: 4.8925, area: "De Pijp", d: "Stroopwafels pressed to order, Monday to Saturday.", p: 1, t: ["market", "morning"] },
      { id: "zaanse", n: "Zaanse Schans", c: "see", lat: 52.4740, lng: 4.8180, area: "Zaandam", d: "Working windmills, 17 minutes by train from Centraal.", p: 1, t: ["daytrip", "family"] }
    ]
  }
];

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
