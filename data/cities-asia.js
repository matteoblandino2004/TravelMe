/* TravelMe — Asia. Coordinates are real to roughly neighbourhood-or-better precision. */

window.TM_CITIES.push(
  {
    id: 'tokyo', name: 'Tokyo', country: 'Japan', region: 'asia',
    tz: 'Asia/Tokyo', cur: '¥', center: [35.68, 139.74],
    sk: 'tokyo', sky: 'tokyo-neon',
    tagline: 'Pick two neighbourhoods a day. The trains do the rest.',
    districts: [
      { n: 'Shibuya', lat: 35.66, lng: 139.701 },
      { n: 'Shinjuku', lat: 35.693, lng: 139.702 },
      { n: 'Asakusa', lat: 35.713, lng: 139.795 },
      { n: 'Ginza', lat: 35.672, lng: 139.765 }
    ],
    water: [
      { k: 'river', w: 8, pts: [[35.74, 139.8], [35.715, 139.8], [35.695, 139.792], [35.675, 139.788], [35.655, 139.786], [35.64, 139.79]] },
      { k: 'shore', side: 'S', w: 0, pts: [[35.63, 139.74], [35.625, 139.77], [35.622, 139.8], [35.63, 139.84]] }
    ],
    hotels: [
      { n: 'Trunk Hotel', area: 'Shibuya', lat: 35.665, lng: 139.708 },
      { n: 'Shinjuku Granbell', area: 'Shinjuku', lat: 35.6938, lng: 139.7036 },
      { n: 'Hotel Ryumeikan', area: 'Tokyo Station', lat: 35.6836, lng: 139.769 },
      { n: 'Cerulean Tower', area: 'Shibuya', lat: 35.657, lng: 139.698 },
      { n: 'Book and Bed', area: 'Asakusa', lat: 35.7119, lng: 139.7967 }
    ],
    places: [
      { id: 'sensoji', n: 'Senso-ji Temple', c: 'see', lat: 35.7148, lng: 139.7967, area: 'Asakusa', d: 'Arrive before 8am and the approach is yours.', t: ['history', 'icon'], star: 1 },
      { id: 'meiji', n: 'Meiji Jingu', c: 'see', lat: 35.6764, lng: 139.6993, area: 'Harajuku', d: 'Forest shrine; wedding processions on weekend mornings.', t: ['history', 'nature'], star: 1 },
      { id: 'shibuya', n: 'Shibuya Crossing', c: 'see', lat: 35.6595, lng: 139.7005, area: 'Shibuya', d: 'Watch from the Starbucks window, then cross it twice.', t: ['icon', 'evening'] },
      { id: 'teamlab', n: 'teamLab Planets', c: 'see', lat: 35.6497, lng: 139.7906, area: 'Toyosu', d: 'Barefoot digital art. Book a slot; wear shorts.', p: 3, t: ['art', 'rainy'], star: 1 },
      { id: 'skytree', n: 'Tokyo Skytree', c: 'see', lat: 35.7101, lng: 139.8107, area: 'Sumida', d: '634 m. Clear winter evenings show Fuji.', p: 3, t: ['views'] },
      { id: 'yanaka', n: 'Yanaka Ginza', c: 'see', lat: 35.7278, lng: 139.766, area: 'Yanaka', d: 'Old-Tokyo shopping street that survived the wars.', t: ['quiet', 'history'] },
      { id: 'gyoen', n: 'Shinjuku Gyoen', c: 'outdoors', lat: 35.6852, lng: 139.71, area: 'Shinjuku', d: 'Three garden styles behind one wall. Small entry fee.', p: 1, t: ['nature'] },
      { id: 'nakameguro', n: 'Nakameguro Canal', c: 'outdoors', lat: 35.644, lng: 139.699, area: 'Nakameguro', d: 'Cherry trees over the water; coffee roasters on both banks.', t: ['nature', 'coffee'] },
      { id: 'tsukiji', n: 'Tsukiji Outer Market', c: 'eat', lat: 35.6654, lng: 139.7707, area: 'Tsukiji', d: 'Tamagoyaki on a stick, uni on rice. Go by 9am.', p: 1, t: ['market', 'morning'], star: 1 },
      { id: 'omoide', n: 'Omoide Yokocho', c: 'eat', lat: 35.6935, lng: 139.6995, area: 'Shinjuku', d: 'Six-seat yakitori counters under the tracks.', p: 2, t: ['evening', 'lively'] },
      { id: 'ichiran', n: 'Ichiran Shibuya', c: 'eat', lat: 35.6614, lng: 139.7008, area: 'Shibuya', d: 'Solo booths, order by form, tonkotsu in four minutes.', p: 1, t: ['cheap', 'late'] },
      { id: 'afuri', n: 'AFURI Ebisu', c: 'eat', lat: 35.6465, lng: 139.71, area: 'Ebisu', d: 'Yuzu shio ramen — lighter than it has any right to be.', p: 1, t: ['cheap', 'lunch'] },
      { id: 'toyosu', n: 'Toyosu Sushi Counters', c: 'eat', lat: 35.6459, lng: 139.786, area: 'Toyosu', d: 'The tuna auction moved here; so did the 5am breakfast.', p: 3, t: ['foodie', 'morning'] },
      { id: 'goldengai', n: 'Golden Gai', c: 'drink', lat: 35.694, lng: 139.7045, area: 'Shinjuku', d: '200 tiny bars. Check for a cover charge before sitting.', p: 2, t: ['nightlife'], star: 1 },
      { id: 'akihabara', n: 'Akihabara', c: 'shop', lat: 35.6987, lng: 139.773, area: 'Akihabara', d: 'Eight floors of electronics, then eight more of models.', p: 2, t: ['browse', 'rainy'] },
      { id: 'takeshita', n: 'Takeshita Street', c: 'shop', lat: 35.6717, lng: 139.7031, area: 'Harajuku', d: 'Teen fashion at full volume. Weekday mornings are calmer.', p: 1, t: ['browse', 'lively'] }
    ]
  }
,

  {
    id: 'kyoto', name: 'Kyoto', country: 'Japan', region: 'asia',
    tz: 'Asia/Tokyo', cur: '¥', center: [35.0116, 135.7681],
    sk: 'asia-temple', sky: 'lisbon-gold',
    tagline: 'Two temples a day, maximum. They blur after that.',
    districts: [
      { n: 'Gion', lat: 35.0037, lng: 135.775 },
      { n: 'Arashiyama', lat: 35.009, lng: 135.667 },
      { n: 'Kawaramachi', lat: 35.004, lng: 135.768 },
      { n: 'Higashiyama', lat: 34.998, lng: 135.782 }
    ],
    hotels: [
      { n: 'Hotel Kanra Kyoto', area: 'Shimogyo', lat: 34.993, lng: 135.759 },
      { n: 'Nol Kyoto Sanjo', area: 'Nakagyo', lat: 35.009, lng: 135.767 },
      { n: 'Piece Hostel Sanjo', area: 'Nakagyo', lat: 35.008, lng: 135.764 }
    ],
    places: [
      { id: 'fushimi', n: 'Fushimi Inari Shrine', c: 'see', lat: 34.9671, lng: 135.7727, area: 'Fushimi', d: 'Ten thousand gates. Go at 7am or walk past the first 500 to lose the crowd.', t: ['icon', 'free'], star: 1 },
      { id: 'kiyomizu', n: 'Kiyomizu-dera', c: 'see', lat: 34.9949, lng: 135.785, area: 'Higashiyama', d: 'Wooden stage over the hillside, no nails in the whole frame.', p: 1, t: ['history', 'views'] },
      { id: 'bamboo', n: 'Arashiyama Bamboo Grove', c: 'see', lat: 35.017, lng: 135.671, area: 'Arashiyama', d: 'Fifteen minutes long and packed by 9am. First train or skip.', t: ['nature', 'free'] },
      { id: 'nishiki', n: 'Nishiki Market', c: 'eat', lat: 35.005, lng: 135.765, area: 'Nakagyo', d: 'Five blocks of pickles, tamago and skewers. No eating while walking.', p: 1, t: ['market'], star: 1 },
      { id: 'kinkakuji', n: 'Kinkaku-ji', c: 'see', lat: 35.0394, lng: 135.7292, area: 'Kita', d: 'Gold pavilion on a pond. One loop, twenty minutes, done.', p: 1, t: ['icon'] },
      { id: 'pontocho', n: 'Pontochō Alley', c: 'drink', lat: 35.006, lng: 135.771, area: 'Nakagyo', d: 'One lantern-lit lane between the river and Kawaramachi.', p: 2, t: ['evening', 'nightlife'] },
      { id: 'owariya', n: 'Honke Owariya', c: 'eat', lat: 35.012, lng: 135.76, area: 'Nakagyo', d: 'Soba makers since 1465. The five-tier hourai soba.', p: 2, t: ['foodie', 'history'] },
      { id: 'philosopher', n: "Philosopher's Path", c: 'outdoors', lat: 35.027, lng: 135.794, area: 'Sakyo', d: 'Two km of canal and cherry trees between Ginkaku-ji and Nanzen-ji.', t: ['nature', 'free'] }
    ]
  },

  {
    id: 'osaka', name: 'Osaka', country: 'Japan', region: 'asia',
    tz: 'Asia/Tokyo', cur: '¥', center: [34.6937, 135.5023],
    sk: 'modern', sky: 'neon-asia',
    tagline: 'Kyoto is for looking. Osaka is for eating.',
    districts: [
      { n: 'Namba', lat: 34.666, lng: 135.501 },
      { n: 'Umeda', lat: 34.705, lng: 135.498 },
      { n: 'Shinsekai', lat: 34.652, lng: 135.506 },
      { n: 'Tennoji', lat: 34.647, lng: 135.514 }
    ],
    hotels: [
      { n: 'Hotel Hankyu Respire', area: 'Umeda', lat: 34.705, lng: 135.494 },
      { n: 'Cross Hotel Osaka', area: 'Namba', lat: 34.669, lng: 135.501 },
      { n: 'The Blend Inn', area: 'Fukushima', lat: 34.686, lng: 135.52 }
    ],
    places: [
      { id: 'dotonbori', n: 'Dōtonbori', c: 'see', lat: 34.6687, lng: 135.5013, area: 'Namba', d: 'Neon canal, running man sign, unreasonable amounts of fried food.', t: ['icon', 'free'], star: 1 },
      { id: 'osakacastle', n: 'Osaka Castle', c: 'see', lat: 34.6873, lng: 135.5259, area: 'Chuo', d: 'Concrete rebuild inside, but the park and moat are the real thing.', p: 1, t: ['history'] },
      { id: 'kuromon', n: 'Kuromon Market', c: 'eat', lat: 34.665, lng: 135.506, area: 'Namba', d: 'Scallops, uni and wagyu skewers grilled in front of you.', p: 1, t: ['market', 'morning'] },
      { id: 'shinsekai', n: 'Shinsekai & Tsūtenkaku', c: 'see', lat: 34.6525, lng: 135.5063, area: 'Shinsekai', d: '1912 vision of the future, now deep-fried kushikatsu country.', p: 1, t: ['cheap', 'lively'] },
      { id: 'umedasky', n: 'Umeda Sky Building', c: 'see', lat: 34.7052, lng: 135.4897, area: 'Umeda', d: 'Floating escalator to an open-air roof ring.', p: 2, t: ['views', 'architecture'] },
      { id: 'wanaka', n: 'Takoyaki Wanaka', c: 'eat', lat: 34.664, lng: 135.503, area: 'Namba', d: 'Octopus balls done properly. Wait for them to cool. You won’t.', p: 1, t: ['cheap'] },
      { id: 'uranamba', n: 'Ura-Namba Izakaya Lanes', c: 'drink', lat: 34.664, lng: 135.504, area: 'Namba', d: 'Back-alley counters where Osaka actually drinks.', p: 2, t: ['nightlife'], star: 1 },
      { id: 'minoo', n: 'Minoo Falls', c: 'outdoors', lat: 34.853, lng: 135.472, area: 'Minoh', d: '30 min north, then a 3 km forest walk to a waterfall.', t: ['nature', 'free', 'daytrip'] }
    ]
  },

  {
    id: 'seoul', name: 'Seoul', country: 'South Korea', region: 'asia',
    tz: 'Asia/Seoul', cur: '₩', center: [37.5665, 126.978],
    sk: 'modern', sky: 'neon-asia',
    tagline: 'The city runs on a 24-hour clock. So can you, briefly.',
    districts: [
      { n: 'Myeongdong', lat: 37.56, lng: 126.986 },
      { n: 'Hongdae', lat: 37.556, lng: 126.923 },
      { n: 'Gangnam', lat: 37.498, lng: 127.028 },
      { n: 'Bukchon', lat: 37.582, lng: 126.983 }
    ],
    water: [
      { k: 'river', w: 12, pts: [[37.58, 126.82], [37.55, 126.9], [37.52, 126.96], [37.515, 127.02], [37.53, 127.09]] }
    ],
    hotels: [
      { n: 'L7 Myeongdong', area: 'Myeongdong', lat: 37.563, lng: 126.982 },
      { n: 'RYSE Autograph', area: 'Hongdae', lat: 37.556, lng: 126.924 },
      { n: 'Hotel Cappuccino', area: 'Gangnam', lat: 37.501, lng: 127.035 }
    ],
    places: [
      { id: 'gyeongbok', n: 'Gyeongbokgung Palace', c: 'see', lat: 37.5796, lng: 126.977, area: 'Jongno', d: 'Wear a rented hanbok and entry is free. Guard change at 10 and 2.', p: 1, t: ['history', 'icon'], star: 1 },
      { id: 'bukchon', n: 'Bukchon Hanok Village', c: 'see', lat: 37.5826, lng: 126.983, area: 'Jongno', d: 'People live here — quiet hours are enforced after 5pm.', t: ['free', 'quiet'] },
      { id: 'nseoul', n: 'N Seoul Tower', c: 'see', lat: 37.5512, lng: 126.9882, area: 'Namsan', d: 'Walk up through Namsan park rather than taking the cable car.', p: 2, t: ['views'] },
      { id: 'gwangjang', n: 'Gwangjang Market', c: 'eat', lat: 37.57, lng: 126.9997, area: 'Jongno', d: 'Bindaetteok and raw beef at century-old stalls. Cash.', p: 1, t: ['market', 'foodie'], star: 1 },
      { id: 'myeongdongfood', n: 'Myeongdong Street Food', c: 'eat', lat: 37.5636, lng: 126.985, area: 'Myeongdong', d: 'Carts from 4pm: egg bread, tornado potato, cheese lobster.', p: 1, t: ['cheap', 'late'] },
      { id: 'ikseon', n: 'Ikseon-dong', c: 'drink', lat: 37.574, lng: 126.99, area: 'Jongno', d: 'Hanok alleys converted into tiny bars and coffee rooms.', p: 2, t: ['nightlife', 'coffee'] },
      { id: 'bukhansan', n: 'Bukhansan National Park', c: 'outdoors', lat: 37.659, lng: 126.977, area: 'North Seoul', d: 'Granite peaks inside the city limits. Subway to the trailhead.', t: ['nature', 'free'] },
      { id: 'ddp', n: 'Dongdaemun Design Plaza', c: 'see', lat: 37.567, lng: 127.009, area: 'Dongdaemun', d: 'Zaha Hadid curves, lit up after dark, night market alongside.', t: ['architecture', 'free'] }
    ]
  },

  {
    id: 'singapore', name: 'Singapore', country: 'Singapore', region: 'asia',
    tz: 'Asia/Singapore', cur: 'S$', center: [1.3021, 103.8556],
    sk: 'modern', sky: 'tropic-dusk',
    tagline: 'Eat at hawker centres. The Michelin stars are in them anyway.',
    districts: [
      { n: 'Marina Bay', lat: 1.283, lng: 103.86 },
      { n: 'Chinatown', lat: 1.282, lng: 103.844 },
      { n: 'Kampong Glam', lat: 1.302, lng: 103.859 },
      { n: 'Tiong Bahru', lat: 1.286, lng: 103.832 }
    ],
    hotels: [
      { n: 'The Warehouse Hotel', area: 'Robertson Quay', lat: 1.288, lng: 103.841 },
      { n: "Lloyd's Inn", area: 'Orchard', lat: 1.3, lng: 103.838 },
      { n: 'Hotel Indigo Katong', area: 'Katong', lat: 1.305, lng: 103.903 }
    ],
    places: [
      { id: 'gardensbay', n: 'Gardens by the Bay', c: 'see', lat: 1.2816, lng: 103.8636, area: 'Marina Bay', d: 'Outdoor gardens free; the domes are ticketed. Light show at 7.45pm.', p: 2, t: ['icon', 'nature'], star: 1 },
      { id: 'skypark', n: 'Marina Bay Sands SkyPark', c: 'see', lat: 1.2834, lng: 103.8607, area: 'Marina Bay', d: 'The observation deck, unless you are staying and get the pool.', p: 3, t: ['views'] },
      { id: 'maxwell', n: 'Maxwell Food Centre', c: 'eat', lat: 1.2803, lng: 103.8447, area: 'Chinatown', d: 'Tian Tian chicken rice, stall 10. Go before the lunch rush.', p: 1, t: ['foodie', 'cheap'], star: 1 },
      { id: 'laupasat', n: 'Lau Pa Sat', c: 'eat', lat: 1.2807, lng: 103.8504, area: 'CBD', d: 'Victorian iron market; satay street opens on the road at 7pm.', p: 1, t: ['late', 'market'] },
      { id: 'buddhatooth', n: 'Buddha Tooth Relic Temple', c: 'see', lat: 1.2815, lng: 103.844, area: 'Chinatown', d: 'Five storeys, free, rooftop garden with a prayer wheel.', t: ['free', 'history'] },
      { id: 'botanic', n: 'Botanic Gardens', c: 'outdoors', lat: 1.3138, lng: 103.8159, area: 'Tanglin', d: 'UNESCO-listed and free; the orchid garden is the one paid bit.', t: ['nature', 'free'] },
      { id: 'hajilane', n: 'Haji Lane', c: 'shop', lat: 1.3009, lng: 103.859, area: 'Kampong Glam', d: 'Narrow lane of independents under the Sultan Mosque.', t: ['browse'] },
      { id: 'atlas', n: 'Atlas Bar', c: 'drink', lat: 1.302, lng: 103.858, area: 'Bugis', d: 'Art-deco tower of 1,300 gins. Dress code after 5pm.', p: 3, t: ['nightlife'] }
    ]
  },

  {
    id: 'bangkok', name: 'Bangkok', country: 'Thailand', region: 'asia',
    tz: 'Asia/Bangkok', cur: '฿', center: [13.7563, 100.5018],
    sk: 'asia-temple', sky: 'monsoon-gold',
    tagline: 'Boats beat taxis. Always.',
    districts: [
      { n: 'Rattanakosin', lat: 13.751, lng: 100.492 },
      { n: 'Sukhumvit', lat: 13.738, lng: 100.56 },
      { n: 'Silom', lat: 13.725, lng: 100.534 },
      { n: 'Yaowarat', lat: 13.74, lng: 100.51 }
    ],
    water: [
      { k: 'river', w: 10, pts: [[13.79, 100.5], [13.77, 100.495], [13.755, 100.49], [13.74, 100.495], [13.72, 100.505], [13.7, 100.5]] }
    ],
    hotels: [
      { n: 'Riva Surya', area: 'Riverside', lat: 13.76, lng: 100.496 },
      { n: 'Ad Lib Bangkok', area: 'Sukhumvit', lat: 13.744, lng: 100.554 },
      { n: 'The Siam Hotel', area: 'Dusit', lat: 13.776, lng: 100.509 }
    ],
    places: [
      { id: 'grandpalace', n: 'Grand Palace & Wat Phra Kaew', c: 'see', lat: 13.75, lng: 100.4913, area: 'Rattanakosin', d: 'Covered shoulders and knees, no exceptions. Go at opening.', p: 2, t: ['icon', 'history'], star: 1 },
      { id: 'watarun', n: 'Wat Arun', c: 'see', lat: 13.7437, lng: 100.4889, area: 'Thonburi', d: 'Cross on the 5-baht ferry; climb the steep porcelain steps.', p: 1, t: ['icon'] },
      { id: 'watpho', n: 'Wat Pho', c: 'see', lat: 13.7465, lng: 100.4927, area: 'Rattanakosin', d: '46 m reclining Buddha, plus the original Thai massage school.', p: 1, t: ['history'] },
      { id: 'chatuchak', n: 'Chatuchak Weekend Market', c: 'shop', lat: 13.7999, lng: 100.55, area: 'Chatuchak', d: '15,000 stalls, weekends only. Go early, bring water.', p: 1, t: ['market'], star: 1 },
      { id: 'yaowarat', n: 'Yaowarat Street Food', c: 'eat', lat: 13.74, lng: 100.51, area: 'Chinatown', d: 'Comes alive at 7pm. Grilled prawns, guay jub, mango sticky rice.', p: 1, t: ['foodie', 'late'], star: 1 },
      { id: 'jayfai', n: 'Jay Fai', c: 'eat', lat: 13.753, lng: 100.506, area: 'Phra Nakhon', d: 'Michelin-starred crab omelette cooked over charcoal in ski goggles.', p: 3, t: ['foodie'] },
      { id: 'chaophraya', n: 'Chao Phraya Express Boat', c: 'outdoors', lat: 13.745, lng: 100.498, area: 'Riverside', d: 'Orange flag boat, a few baht, beats any tuk-tuk.', p: 1, t: ['cheap', 'views'] },
      { id: 'skybar', n: 'Sky Bar at Lebua', c: 'drink', lat: 13.721, lng: 100.516, area: 'Silom', d: 'Open-air 63rd floor. Long trousers, closed shoes, high prices.', p: 3, t: ['views', 'nightlife'] }
    ]
  },

  {
    id: 'hongkong', name: 'Hong Kong', country: 'Hong Kong', region: 'asia',
    tz: 'Asia/Hong_Kong', cur: 'HK$', center: [22.2975, 114.1722],
    sk: 'modern', sky: 'neon-asia',
    tagline: 'Vertical city. The escalators are public transport.',
    districts: [
      { n: 'Central', lat: 22.282, lng: 114.158 },
      { n: 'Tsim Sha Tsui', lat: 22.298, lng: 114.172 },
      { n: 'Sheung Wan', lat: 22.287, lng: 114.15 },
      { n: 'Mong Kok', lat: 22.319, lng: 114.169 }
    ],
    water: [
      { k: 'river', w: 16, pts: [[22.29, 114.12], [22.292, 114.155], [22.293, 114.18], [22.29, 114.21]] }
    ],
    hotels: [
      { n: 'The Fleming', area: 'Wan Chai', lat: 22.279, lng: 114.172 },
      { n: 'Tuve', area: 'Tin Hau', lat: 22.283, lng: 114.192 },
      { n: 'Hotel Madera', area: 'Tsim Sha Tsui', lat: 22.304, lng: 114.171 }
    ],
    places: [
      { id: 'thepeak', n: 'Victoria Peak', c: 'see', lat: 22.2759, lng: 114.1455, area: 'The Peak', d: 'Take the tram up, walk the Lugard Road loop, bus back down.', p: 2, t: ['views', 'icon'], star: 1 },
      { id: 'starferry', n: 'Star Ferry', c: 'outdoors', lat: 22.294, lng: 114.169, area: 'Harbour', d: 'Since 1888, still under HK$5. Upper deck, harbour side.', p: 1, t: ['cheap', 'views'], star: 1 },
      { id: 'bigbuddha', n: 'Tian Tan Big Buddha', c: 'see', lat: 22.254, lng: 113.905, area: 'Lantau', d: 'Cable car over the hills, 268 steps at the end.', p: 2, t: ['history'] },
      { id: 'templest', n: 'Temple Street Night Market', c: 'shop', lat: 22.311, lng: 114.17, area: 'Yau Ma Tei', d: 'From 6pm: knock-offs, fortune tellers, clay pot rice.', p: 1, t: ['market', 'late'] },
      { id: 'timhowan', n: 'Tim Ho Wan', c: 'eat', lat: 22.316, lng: 114.169, area: 'Mong Kok', d: 'The cheapest Michelin star there has ever been. Baked pork buns.', p: 1, t: ['cheap', 'foodie'] },
      { id: 'ausdairy', n: 'Australia Dairy Company', c: 'eat', lat: 22.304, lng: 114.17, area: 'Jordan', d: 'Scrambled eggs, milk pudding, and waiters who want you gone.', p: 1, t: ['cheap', 'morning'] },
      { id: 'dragonsback', n: "Dragon's Back", c: 'outdoors', lat: 22.243, lng: 114.245, area: 'Shek O', d: 'Ridge hike with sea on both sides, then a beach at the end.', t: ['nature', 'free'], star: 1 },
      { id: 'pmq', n: 'PMQ & Sheung Wan', c: 'shop', lat: 22.284, lng: 114.151, area: 'Sheung Wan', d: 'Old police quarters full of designers; galleries down the hill.', t: ['browse'] }
    ]
  },

  {
    id: 'taipei', name: 'Taipei', country: 'Taiwan', region: 'asia',
    tz: 'Asia/Taipei', cur: 'NT$', center: [25.033, 121.5654],
    sk: 'modern', sky: 'monsoon-gold',
    tagline: 'Night markets are dinner, not a snack.',
    districts: [
      { n: 'Ximending', lat: 25.042, lng: 121.507 },
      { n: "Da'an", lat: 25.026, lng: 121.543 },
      { n: 'Zhongshan', lat: 25.052, lng: 121.521 },
      { n: 'Xinyi', lat: 25.033, lng: 121.567 }
    ],
    hotels: [
      { n: 'Kimpton Da An', area: "Da'an", lat: 25.033, lng: 121.546 },
      { n: 'Hotel Proverbs Taipei', area: "Da'an", lat: 25.041, lng: 121.543 },
      { n: 'Star Hostel', area: 'Zhongshan', lat: 25.05, lng: 121.517 }
    ],
    places: [
      { id: 'taipei101', n: 'Taipei 101', c: 'see', lat: 25.033, lng: 121.5654, area: 'Xinyi', d: 'The damper ball is more interesting than the view. Both are up there.', p: 2, t: ['icon', 'views'] },
      { id: 'shilin', n: 'Shilin Night Market', c: 'eat', lat: 25.088, lng: 121.524, area: 'Shilin', d: 'The big one. Oyster omelette, pepper buns, stinky tofu.', p: 1, t: ['market', 'late'], star: 1 },
      { id: 'longshan', n: 'Longshan Temple', c: 'see', lat: 25.037, lng: 121.4998, area: 'Wanhua', d: '1738 temple, busiest and best at evening prayers.', t: ['free', 'history'] },
      { id: 'elephant', n: 'Elephant Mountain', c: 'outdoors', lat: 25.027, lng: 121.576, area: 'Xinyi', d: '20 minutes of steps for the Taipei 101 postcard shot.', t: ['views', 'free'], star: 1 },
      { id: 'dintaifung', n: 'Din Tai Fung', c: 'eat', lat: 25.033, lng: 121.563, area: 'Xinyi', d: 'Where the xiao long bao chain started. Take a number.', p: 2, t: ['foodie'] },
      { id: 'jiufen', n: 'Jiufen', c: 'see', lat: 25.109, lng: 121.844, area: 'New Taipei', d: 'Hillside tea houses and lanterns, an hour out. Weekdays only.', t: ['daytrip', 'views'] },
      { id: 'beitou', n: 'Beitou Hot Springs', c: 'see', lat: 25.137, lng: 121.506, area: 'Beitou', d: 'Sulphur valley at the end of the red line. Public baths are cheap.', p: 1, t: ['cheap'] },
      { id: 'yongkang', n: 'Yongkang Street', c: 'eat', lat: 25.027, lng: 121.53, area: "Da'an", d: 'Beef noodles, mango ice, and tea shops down one lane.', p: 1, t: ['browse', 'foodie'] }
    ]
  },

  {
    id: 'hanoi', name: 'Hanoi', country: 'Vietnam', region: 'asia',
    tz: 'Asia/Ho_Chi_Minh', cur: '₫', center: [21.0278, 105.8342],
    sk: 'asia-temple', sky: 'monsoon-gold',
    tagline: 'Cross the road at a steady pace and never stop. They go around you.',
    districts: [
      { n: 'Old Quarter', lat: 21.034, lng: 105.85 },
      { n: 'French Quarter', lat: 21.024, lng: 105.853 },
      { n: 'Tây Hồ', lat: 21.07, lng: 105.82 },
      { n: 'Ba Đình', lat: 21.035, lng: 105.834 }
    ],
    hotels: [
      { n: 'Hanoi La Siesta Premium', area: 'Old Quarter', lat: 21.034, lng: 105.85 },
      { n: 'Peridot Grand', area: 'Old Quarter', lat: 21.033, lng: 105.848 },
      { n: "Hotel de l'Opera", area: 'French Quarter', lat: 21.024, lng: 105.857 }
    ],
    places: [
      { id: 'hoankiem', n: 'Hoàn Kiếm Lake', c: 'outdoors', lat: 21.0287, lng: 105.8524, area: 'Old Quarter', d: 'Roads close to traffic at weekends. Tai chi from 5.30am.', t: ['free', 'nature'], star: 1 },
      { id: 'oldquarter', n: 'Old Quarter 36 Streets', c: 'see', lat: 21.034, lng: 105.85, area: 'Old Quarter', d: 'Each lane once sold one trade. Some still do.', t: ['free'] },
      { id: 'literature', n: 'Temple of Literature', c: 'see', lat: 21.0277, lng: 105.8355, area: 'Ba Đình', d: "Vietnam's first university, 1070. Five walled courtyards.", p: 1, t: ['history'] },
      { id: 'buncha', n: 'Bún Chả Hương Liên', c: 'eat', lat: 21.014, lng: 105.849, area: 'Hai Bà Trưng', d: 'Grilled pork in broth with cold noodles. Obama ate here.', p: 1, t: ['cheap', 'foodie'] },
      { id: 'phogia', n: 'Phở Gia Truyền', c: 'eat', lat: 21.035, lng: 105.848, area: 'Old Quarter', d: 'Queue down Bát Đàn street. Beef pho, breakfast only.', p: 1, t: ['cheap', 'morning'], star: 1 },
      { id: 'eggcoffee', n: 'Cà Phê Giảng', c: 'drink', lat: 21.031, lng: 105.852, area: 'Old Quarter', d: 'Egg coffee invented here in 1946. Up the alley, first floor.', p: 1, t: ['coffee', 'cheap'], star: 1 },
      { id: 'trainst', n: 'Train Street', c: 'see', lat: 21.029, lng: 105.844, area: 'Old Quarter', d: 'Periodically closed by police — check before you go.', t: ['free'] },
      { id: 'dongxuan', n: 'Đồng Xuân Market', c: 'shop', lat: 21.038, lng: 105.849, area: 'Old Quarter', d: "Wholesale everything, and the city's oldest market hall.", p: 1, t: ['market'] }
    ]
  },

  {
    id: 'saigon', name: 'Ho Chi Minh City', country: 'Vietnam', region: 'asia',
    tz: 'Asia/Ho_Chi_Minh', cur: '₫', center: [10.7769, 106.7009],
    sk: 'modern', sky: 'tropic-dusk',
    tagline: 'Sit on a plastic stool. That is where the food is.',
    districts: [
      { n: 'District 1', lat: 10.777, lng: 106.701 },
      { n: 'Thảo Điền', lat: 10.804, lng: 106.734 },
      { n: 'District 3', lat: 10.784, lng: 106.687 },
      { n: 'Chợ Lớn', lat: 10.753, lng: 106.659 }
    ],
    hotels: [
      { n: 'The Myst Dong Khoi', area: 'District 1', lat: 10.775, lng: 106.705 },
      { n: 'Hotel des Arts Saigon', area: 'District 3', lat: 10.783, lng: 106.693 },
      { n: 'Fusion Suites Saigon', area: 'District 3', lat: 10.788, lng: 106.695 }
    ],
    places: [
      { id: 'warmuseum', n: 'War Remnants Museum', c: 'see', lat: 10.7797, lng: 106.6922, area: 'District 3', d: 'Unflinching and one-sided. Go anyway, and go early.', p: 1, t: ['history'], star: 1 },
      { id: 'benthanh', n: 'Bến Thành Market', c: 'shop', lat: 10.7724, lng: 106.698, area: 'District 1', d: 'Haggle to a third. The night market outside is cheaper.', p: 1, t: ['market'] },
      { id: 'postoffice', n: 'Central Post Office & Cathedral', c: 'see', lat: 10.7797, lng: 106.699, area: 'District 1', d: 'Working Eiffel-era post office. Cathedral is under restoration.', t: ['free', 'architecture'] },
      { id: 'banhmi', n: 'Bánh Mì Huỳnh Hoa', c: 'eat', lat: 10.769, lng: 106.689, area: 'District 1', d: 'Overstuffed pâté banh mi. Expect a queue at any hour.', p: 1, t: ['cheap'], star: 1 },
      { id: 'cuchi', n: 'Củ Chi Tunnels', c: 'see', lat: 11.143, lng: 106.46, area: 'Củ Chi', d: 'Two hours out. Claustrophobic, sobering, worth the day.', p: 2, t: ['history', 'daytrip'] },
      { id: 'buivien', n: 'Bùi Viện Walking Street', c: 'drink', lat: 10.767, lng: 106.693, area: 'District 1', d: 'Loud, cheap, relentless. One beer and a decision.', p: 1, t: ['nightlife', 'cheap'] },
      { id: 'comtam', n: 'Cơm Tấm Ba Ghiền', c: 'eat', lat: 10.788, lng: 106.676, area: 'Phú Nhuận', d: 'Broken rice with a pork chop bigger than the plate.', p: 1, t: ['cheap', 'foodie'] },
      { id: 'cafeapt', n: 'The Café Apartments', c: 'drink', lat: 10.774, lng: 106.704, area: 'District 1', d: 'Nine floors of tiny cafés in an old block. Pay the lift fee.', p: 1, t: ['coffee', 'views'] }
    ]
  },

  {
    id: 'kualalumpur', name: 'Kuala Lumpur', country: 'Malaysia', region: 'asia',
    tz: 'Asia/Kuala_Lumpur', cur: 'RM', center: [3.139, 101.6869],
    sk: 'modern', sky: 'tropic-dusk',
    tagline: 'Three cuisines, one city, no bad decisions.',
    districts: [
      { n: 'Bukit Bintang', lat: 3.146, lng: 101.711 },
      { n: 'KLCC', lat: 3.158, lng: 101.712 },
      { n: 'Chinatown', lat: 3.144, lng: 101.696 },
      { n: 'Bangsar', lat: 3.129, lng: 101.67 }
    ],
    hotels: [
      { n: 'Else Kuala Lumpur', area: 'Chinatown', lat: 3.144, lng: 101.696 },
      { n: 'Alila Bangsar', area: 'Bangsar', lat: 3.12, lng: 101.67 },
      { n: 'Hotel Stripes', area: 'Chow Kit', lat: 3.158, lng: 101.697 }
    ],
    places: [
      { id: 'petronas', n: 'Petronas Towers', c: 'see', lat: 3.1578, lng: 101.7117, area: 'KLCC', d: 'Skybridge tickets sell out by mid-morning. Park below is free.', p: 2, t: ['icon', 'views'], star: 1 },
      { id: 'batu', n: 'Batu Caves', c: 'see', lat: 3.2379, lng: 101.684, area: 'Gombak', d: '272 painted steps, monkeys with intent. Free, 30 min by train.', t: ['free', 'icon'], star: 1 },
      { id: 'jalanalor', n: 'Jalan Alor', c: 'eat', lat: 3.145, lng: 101.708, area: 'Bukit Bintang', d: 'Whole street of plastic chairs from 5pm. Grilled stingray.', p: 1, t: ['late', 'foodie'], star: 1 },
      { id: 'centralmkt', n: 'Central Market', c: 'shop', lat: 3.146, lng: 101.696, area: 'Chinatown', d: 'Art-deco hall of batik and crafts, air-conditioned.', p: 1, t: ['market', 'rainy'] },
      { id: 'villagepark', n: 'Village Park Restaurant', c: 'eat', lat: 3.156, lng: 101.632, area: 'Damansara', d: 'The nasi lemak benchmark. Get there before 10am.', p: 1, t: ['cheap', 'morning'] },
      { id: 'birdpark', n: 'KL Bird Park', c: 'outdoors', lat: 3.143, lng: 101.687, area: 'Lake Gardens', d: "World's largest walk-in aviary, inside a bigger park.", p: 2, t: ['family', 'nature'] },
      { id: 'helilounge', n: 'Heli Lounge Bar', c: 'drink', lat: 3.147, lng: 101.708, area: 'Bukit Bintang', d: 'A working helipad that becomes a bar at sunset.', p: 2, t: ['views', 'nightlife'] },
      { id: 'theanhou', n: 'Thean Hou Temple', c: 'see', lat: 3.121, lng: 101.687, area: 'Seputeh', d: 'Six-tier Chinese temple on a hill, lanterns year round.', t: ['free'] }
    ]
  },

  {
    id: 'bali', name: 'Bali', country: 'Indonesia', region: 'asia',
    tz: 'Asia/Makassar', cur: 'Rp', center: [-8.6, 115.18],
    sk: 'coastal', sky: 'tropic-dusk',
    tagline: 'Ubud and the beaches are an hour apart. Pick a base and stay put.',
    districts: [
      { n: 'Ubud', lat: -8.5069, lng: 115.2625 },
      { n: 'Canggu', lat: -8.6478, lng: 115.1385 },
      { n: 'Seminyak', lat: -8.69, lng: 115.168 },
      { n: 'Uluwatu', lat: -8.829, lng: 115.085 }
    ],
    hotels: [
      { n: 'Bisma Eight', area: 'Ubud', lat: -8.508, lng: 115.26 },
      { n: 'The Slow', area: 'Canggu', lat: -8.652, lng: 115.137 },
      { n: 'Katamama', area: 'Seminyak', lat: -8.693, lng: 115.162 }
    ],
    places: [
      { id: 'tegallalang', n: 'Tegallalang Rice Terraces', c: 'see', lat: -8.431, lng: 115.279, area: 'Tegallalang', d: 'Go at 7am before the swings and the coaches.', p: 1, t: ['nature', 'icon'], star: 1 },
      { id: 'uluwatutemple', n: 'Uluwatu Temple', c: 'see', lat: -8.8291, lng: 115.0849, area: 'Uluwatu', d: 'Clifftop temple, kecak fire dance at sunset. Mind the monkeys.', p: 1, t: ['views', 'history'] },
      { id: 'tirta', n: 'Tirta Empul', c: 'see', lat: -8.4157, lng: 115.315, area: 'Tampaksiring', d: 'Holy spring where people actually come to bathe. Sarong required.', p: 1, t: ['history'] },
      { id: 'campuhan', n: 'Campuhan Ridge Walk', c: 'outdoors', lat: -8.503, lng: 115.256, area: 'Ubud', d: 'Two km of grass ridge. Do it at dawn, it gets hot fast.', t: ['nature', 'free'] },
      { id: 'batur', n: 'Mount Batur Sunrise Trek', c: 'outdoors', lat: -8.242, lng: 115.375, area: 'Kintamani', d: '2am pickup, two-hour climb, breakfast cooked in steam vents.', p: 3, t: ['nature'], star: 1 },
      { id: 'locavore', n: 'Locavore', c: 'eat', lat: -8.509, lng: 115.262, area: 'Ubud', d: 'Indonesian tasting menus; book weeks out.', p: 3, t: ['foodie'] },
      { id: 'ibuoka', n: 'Warung Ibu Oka', c: 'eat', lat: -8.507, lng: 115.259, area: 'Ubud', d: 'Babi guling — suckling pig — served until it runs out at lunch.', p: 1, t: ['cheap', 'lunch'] },
      { id: 'singlefin', n: 'Single Fin', c: 'drink', lat: -8.814, lng: 115.088, area: 'Uluwatu', d: 'Cliff bar over the break. Sunday sunsets are a scene.', p: 2, t: ['views', 'nightlife'] }
    ]
  },

  {
    id: 'shanghai', name: 'Shanghai', country: 'China', region: 'asia',
    tz: 'Asia/Shanghai', cur: '¥', center: [31.2304, 121.4737],
    sk: 'modern', sky: 'neon-asia',
    tagline: 'The 1920s on one bank, the 2020s on the other.',
    districts: [
      { n: 'The Bund', lat: 31.24, lng: 121.49 },
      { n: 'French Concession', lat: 31.21, lng: 121.455 },
      { n: "Jing'an", lat: 31.229, lng: 121.445 },
      { n: 'Pudong', lat: 31.232, lng: 121.505 }
    ],
    water: [
      { k: 'river', w: 13, pts: [[31.27, 121.5], [31.25, 121.492], [31.235, 121.492], [31.22, 121.5], [31.2, 121.505]] }
    ],
    hotels: [
      { n: 'The Middle House', area: "Jing'an", lat: 31.224, lng: 121.45 },
      { n: 'Capella Shanghai', area: 'Xuhui', lat: 31.204, lng: 121.464 },
      { n: 'Magnolia Bed & Breakfast', area: 'French Concession', lat: 31.213, lng: 121.453 }
    ],
    places: [
      { id: 'bund', n: 'The Bund', c: 'see', lat: 31.2397, lng: 121.49, area: 'Huangpu', d: 'Colonial waterfront facing a science-fiction skyline. Free, always open.', t: ['icon', 'free'], star: 1 },
      { id: 'yugarden', n: 'Yu Garden', c: 'see', lat: 31.227, lng: 121.492, area: 'Huangpu', d: 'Ming-dynasty rockeries, surrounded by an aggressive bazaar.', p: 1, t: ['history'] },
      { id: 'shanghaitower', n: 'Shanghai Tower', c: 'see', lat: 31.2336, lng: 121.505, area: 'Pudong', d: '632 m, second tallest on earth, fastest lift on earth.', p: 2, t: ['views'] },
      { id: 'tianzifang', n: 'Tianzifang', c: 'shop', lat: 31.21, lng: 121.467, area: 'French Concession', d: 'Shikumen lanes packed with small shops and smaller bars.', t: ['browse'] },
      { id: 'jiajia', n: 'Jia Jia Tang Bao', c: 'eat', lat: 31.23, lng: 121.47, area: 'Huangpu', d: 'Soup dumplings from a hole in the wall. Cash, lunch, done by 2pm.', p: 1, t: ['cheap', 'foodie'], star: 1 },
      { id: 'concession', n: 'Former French Concession', c: 'outdoors', lat: 31.21, lng: 121.455, area: 'Xuhui', d: 'Plane trees and 1920s villas. Best explored with no plan.', t: ['free', 'quiet'] },
      { id: 'speaklow', n: 'Speak Low', c: 'drink', lat: 31.22, lng: 121.472, area: 'Huangpu', d: 'Four floors of speakeasy behind a bar-tools shop.', p: 3, t: ['nightlife'] },
      { id: 'psa', n: 'Power Station of Art', c: 'see', lat: 31.188, lng: 121.481, area: 'Huangpu', d: 'Power plant turned contemporary museum. Free entry.', t: ['art', 'free', 'rainy'] }
    ]
  }
);
