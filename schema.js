const db = require('./models');

//Push data into table
db.sequelize
  .sync({
    force: true,
  })
  .then(function() {
    db.Products.bulkCreate(
      [
        {
          item_num: 1,
          product_name: 'ATAX Multi-tool',
          category: 'knivesandblades',
          description:
            "It's an Ax, a knife, a skinner, a wire cutter, a range finder, a compass, an inclinometer, a clock, a wrench, a hammer, a rescue tool, a survival kit holder, a bow-drill holder, an arrow launcher, and a field level.",
          score: 3,
          buy_link: 'https://www.topsknives.com/knives/survival/atax',
          video_link: 'https://www.topsknives.com/knives/survival/atax',
          image_link:
            'https://s-media-cache-ak0.pinimg.com/originals/72/27/8d/72278d1fb155e8083c657271fcaeda7a.jpg',
          review_link:
            'https://www.amazon.com/Tops-Knives-Atax-Hand-Axe/dp/B00B81X2AU/ref=sr_1_1?ie=UTF8&qid=1517885076&sr=8-1&keywords=ATAX#customerReviews',
        },
        {
          item_num: 2,
          product_name: 'EL CHETE',
          category: 'knivesandblades',
          description:
            "El Chete is the first TOPS knife to be released with our wicked new finish called Acid Rain. Because of the process we use, the finish varies slightly from knife to knife so that each person gets something unique. We wanted the handles to be thick enough to fill each user's hand like a hatchet or small ax handle would, so we decided to use sandwiched Micarta. It's well rounded for comfort and the black canvas Micarta underneath the green canvas Micarta adds even more to the aesthetics of this piece.",
          score: 7,
          buy_link: 'https://www.topsknives.com/knives/survival/el-chete',
          image_link:
            'https://media.midwayusa.com/productimages/880x660/alt3/172/172795.jpg',
          review_link:
            'https://www.amazon.com/Tops-Knives-El-Chete-Knife/dp/B072C2P7QM/ref=sr_1_1?ie=UTF8&qid=1517885136&sr=8-1&keywords=EL+CHETE#customerReviews',
        },
        {
          item_num: 3,
          product_name: 'Leatherman Surge Multitool',
          category: 'knivesandblades',
          description:
            'A work-site juggernaut, Surge features easy-to-unlock blades, two bit-drivers with bits, plus a unique blade exchanger for added versatility.',
          score: 7,
          buy_link:
            'https://www.rei.com/product/728652/leatherman-surge-multi-tool',
          image_link:
            'https://www.rei.com/media/e2228d98-beb0-4e0c-b78e-7f93013dd13e?size=1020x510',
          review_link:
            'https://www.amazon.com/Leatherman-Surge-Multitool-Stainless-Sheath/dp/B001AC4JMC/ref=sr_1_2_sspa?s=sporting-goods&ie=UTF8&qid=1517885506&sr=1-2-spons&keywords=Leatherman+Surge+Multi-tool&psc=1#customerReviews',
        },
        {
          item_num: 4,
          product_name: 'Ka-Bar Becker BK2',
          category: 'knivesandblades',
          description:
            'Bring the KA-BAR Becker Companion Knife and Tool along on your next hunting or camping trip. This lightweight knife features a durable, 1095 cro-van steel blade, perfect for splitting kindling, skinning game, or chopping onions for the campfire grill.',
          score: 8,
          buy_link:
            'https://www.amazon.com/gp/product/B001N1DPDE/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001N1DPDE&linkCode=as2&tag=wildernesstod-20&linkId=ZGT7E67D3ZPPWNRG',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/41adQlsnb6L.jpg',
          review_link:
            'https://www.amazon.com/gp/product/B001N1DPDE/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001N1DPDE&linkCode=as2&tag=wildernesstod-20&linkId=ZGT7E67D3ZPPWNRG#customerReviews',
        },
        {
          item_num: 5,
          product_name: 'CRKT KANGEE T-Hawk',
          category: 'knivesandblades',
          description:
            'Crafted from a single slab of high carbon steel, it’s robust enough to handle most anything you can dish out. The blade geometry has tapered cutting edges for efficient splitting, chopping or shaving and overall toughness. Meanwhile, a spike on the other end ensures victory over whatever you may come up against in the line of duty. This tomahawk does more than cut. It carves out a unique place in your tactical gear bag.',
          score: 8,
          buy_link:
            'https://www.amazon.com/gp/product/B00BBOBXD2/ref=as_at/?imprToken=3OZ6HJRVJC.iBKBjhbj.9Q&slotNum=1&ie=UTF8&camp=1789&creative=390957&creativeASIN=B00BBOBXD2&linkCode=w61&tag=tbobg-20',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/41pnyUtsb8L.jpg',
          review_link:
            'https://www.amazon.com/gp/product/B00BBOBXD2/ref=as_at/?imprToken=3OZ6HJRVJC.iBKBjhbj.9Q&slotNum=1&ie=UTF8&camp=1789&creative=390957&creativeASIN=B00BBOBXD2&linkCode=w61&tag=tbobg-20#customerReviews',
        },
        {
          item_num: 6,
          product_name: 'SOG Entrenching Tool',
          category: 'knivesandblades',
          description:
            "A folding shovel can be an indispensable tool in today's constantly changing environment. When you need to move sand, dirt or snow you wish you had that shovel close at hand. The all-steel construction entrenching tool features a tempered-steel blade with teeth cut into it for cutting and slashing. The triangular handle is strong and fits the hand well.",
          score: 8,
          buy_link:
            'https://www.amazon.com/SOG-Entrenching-Tool-F08-N-Folding/dp/B0038A05X6/ref=sr_1_9?s=hi&ie=UTF8&qid=1517170215&sr=1-9&keywords=Canteen',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/31MSWzjwW9L.jpg',
          review_link:
            'https://www.amazon.com/SOG-Entrenching-Tool-F08-N-Folding/dp/B0038A05X6/ref=sr_1_9?s=hi&ie=UTF8&qid=1517170215&sr=1-9&keywords=Canteen#customerReviews',
        },
        {
          item_num: 7,
          product_name: 'LifeStraw Personal Water Filter',
          category: 'foodandhydration',
          description:
            'The ultimate survival tool for hiking, camping, ultralight backpacking, hunting, travel, scouting, and emergency preparedness, its straw design is ideal for purifying water from streams, lakes, ponds and other contaminated sources. No disaster kit or bugout bag is complete without a LifeStraw, an essential component of any prepper gear lineup. Unlike many similar filters on the market today, LifeStraw has met EPA standards for water filtration in independent testing and removes a minimum 99.9999% of waterborne bacteria (>LOG 6 reduction) and 99.9% of waterborne protozoan parasites (>LOG 3 reduction), filtering to an amazing 0.2 microns and surpassing EPA standards for water filters.',
          score: 8,
          buy_link:
            'https://www.amazon.com/LifeStraw-Personal-Camping-Emergency-Preparedness/dp/B006QF3TW4/ref=sr_1_4?ie=UTF8&qid=1517165177&sr=8-4&keywords=survival+gear',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/51KfGqD5pqL._SL1325_.jpg',
          review_link:
            'https://www.amazon.com/LifeStraw-Personal-Camping-Emergency-Preparedness/dp/B006QF3TW4/ref=sr_1_4?ie=UTF8&qid=1517165177&sr=8-4&keywords=survival+gear#customerReviews',
        },
        {
          item_num: 8,
          product_name: 'ER Emergency Ration',
          category: 'foodandhydration',
          description:
            'The 2,400 calorie ER Bar is a 72-hour emergency ration formulated specifically for disaster victims. Each packet contains six individual 410 calorie rations that are ready-to-eat with no preparation. The ER bar is formulated with an optimum balance of salt, carbohydrates, protein, fat and enriched with the recommended daily allowance of vitamins and minerals.',
          score: 8,
          buy_link:
            'https://www.amazon.com/ER-Emergency-Ration-1AQK-4P-Preparedness/dp/B008DEYAZ6/ref=sr_1_3?s=sporting-goods&ie=UTF8&qid=1517169008&sr=1-3&keywords=Survival+Rations',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/81yxMJO0seL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/ER-Emergency-Ration-1AQK-4P-Preparedness/dp/B008DEYAZ6/ref=sr_1_3?s=sporting-goods&ie=UTF8&qid=1517169008&sr=1-3&keywords=Survival+Rations#customerReviews',
        },
        {
          item_num: 9,
          product_name: 'Potable Aqua Water Purification Treatment',
          category: 'foodandhydration',
          description:
            'Used worldwide by campers, hikers, militaries, emergency organizations, and anyone else who needs to drink water of questionable quality, these Portable Aqua iodine tablets will disinfect contaminated drinking water in a pinch. The tablets--which are intended for short-term or limited emergency use only--make most water bacteriologically suitable for drinking, proving effective against Giardia lamblia when used as directed.',
          score: 8,
          buy_link:
            'https://www.amazon.com/Potable-Aqua-Purification-Treatment-Tablets/dp/B001949TKS/ref=sr_1_4?s=hi&ie=UTF8&qid=1517170094&sr=1-4&keywords=Water+Purification+Tablets',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/91ACC7JPo5L._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/Potable-Aqua-Purification-Treatment-Tablets/dp/B001949TKS/ref=sr_1_4?s=hi&ie=UTF8&qid=1517170094&sr=1-4&keywords=Water+Purification+Tablets#customerReviews',
        },
        {
          item_num: 10,
          product_name: 'Rothco Vintage Canteen Carry',
          category: 'foodandhydration',
          description:
            'The Rothco 614 Vintage Canteen Carry-All with Shoulder Strap is constructed of fleece lined washed canvas. It has a large front pocket for a cell phone or similarly sized object. It holds a 1 quart canteen (not included).',
          score: 8,
          buy_link:
            'https://www.amazon.com/Rothco-ROT110-11-Vintage-Canteen-Carry/dp/B00664SPG0/ref=pd_sbs_200_5?_encoding=UTF8&pd_rd_i=B00664SPG0&pd_rd_r=108W6CANKCXBX6EF1GTE&pd_rd_w=dFTut&pd_rd_wg=dwgfm&refRID=108W6CANKCXBX6EF1GTE',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/710XbZOL2OL._SL1200_.jpg',
          review_link:
            'https://www.amazon.com/Rothco-ROT110-11-Vintage-Canteen-Carry/dp/B00664SPG0/ref=pd_sbs_200_5?_encoding=UTF8&pd_rd_i=B00664SPG0&pd_rd_r=108W6CANKCXBX6EF1GTE&pd_rd_w=dFTut&pd_rd_wg=dwgfm&refRID=108W6CANKCXBX6EF1GTE#customerReviews',
        },
        {
          item_num: 11,
          product_name: '12/16 Pcs Camping Cookware Stove Carabiner Canister',
          category: 'cooking',
          description:
            'Aluminum oxide material selected, internal surface material non-toxic and wear-resistant, the pots are fast in heat conduction, and most of the purchasers commented that to boil a full pot of water took less than 4 minutes.',
          score: 8,
          buy_link:
            'https://www.amazon.com/Cookware-Carabiner-Bisgear-Backpacking-Non-stick/dp/B01KUFNXZ8/ref=sr_1_2?ie=UTF8&qid=1517167162&sr=8-2&keywords=survival+gear+cooking',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/71TYfpbb75L._SL1200_.jpg',
          review_link:
            'https://www.amazon.com/Cookware-Carabiner-Bisgear-Backpacking-Non-stick/dp/B01KUFNXZ8/ref=sr_1_2?ie=UTF8&qid=1517167162&sr=8-2&keywords=survival+gear+cooking#customerReviews',
        },
        {
          item_num: 12,
          product_name: 'Flash Personal Cooking System',
          category: 'cooking',
          description:
            'he Jetboil Flash cooking system utilizes the same efficient design as the now classic Personal Cooking System (PCS) but adds the additional convenience feature of an external temperature indicator. Designed to capture and focus heat more efficiently than traditional cooking systems, the Flash brings two cups of water to a boil in only two minutes. ',
          score: 8,
          buy_link:
            'https://www.amazon.com/Jetboil-Flash-Personal-Cooking-System/dp/B0093UA45Y/ref=as_li_ss_tl?s=sporting-goods&ie=UTF8&qid=1498662697&sr=1-3&keywords=jetboil+stove+kit&linkCode=sl1&tag=outdoorlife03-20&linkId=291c587d3a72568f0f25f5874130e8a0',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/61aT9sixetL._SL1200_.jpg',
          review_link:
            'https://www.amazon.com/Jetboil-Flash-Personal-Cooking-System/dp/B0093UA45Y/ref=as_li_ss_tl?s=sporting-goods&ie=UTF8&qid=1498662697&sr=1-3&keywords=jetboil+stove+kit&linkCode=sl1&tag=outdoorlife03-20&linkId=291c587d3a72568f0f25f5874130e8a0#customerReviews',
        },
        {
          item_num: 13,
          product_name: 'TACT Bivvy Emergency Survival Sleeping Bag',
          category: 'shelter',
          description:
            'he TACT Bivvy Emergency Sleeping Bag is an amazing survival tool to add to your survival kit or camping gear. This light weight sleeping bag can be used by itself, or act as a sleeping bag liner to keep you sound asleep. The TACT Bivvy is made from our HeatEcho™ thermal reflective material for heat retention and is also waterproof, windproof, and reinforced at the seams for added strength and durability. It also packs inside a tiny durable nylon stuff sack, keeping it compact for your bug out bag or camping gear.',
          score: 8,
          buy_link:
            'https://www.amazon.com/TACT-Bivvy-Emergency-Survival-Sleeping/dp/B01M9CBOP3/ref=sr_1_7?ie=UTF8&qid=1517165177&sr=8-7&keywords=survival+gear',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/71AlJ%2BuxxCL._SL1000_.jpg',
          review_link:
            'https://www.amazon.com/TACT-Bivvy-Emergency-Survival-Sleeping/dp/B01M9CBOP3/ref=sr_1_7?ie=UTF8&qid=1517165177&sr=8-7&keywords=survival+gear#customerReviews',
        },
        {
          item_num: 14,
          product_name: 'Survival Shack Emergency Survival Shelter Tent',
          category: 'shelter',
          description:
            'The Survival Shackl® is an essential for any outdoor adventure or emergency kit. The Survival Shack is made from mylar thermal material designed by NASA to reflect 90% of body heat and keep you warm in any weather. The shelter is compact and lightweight, making it easy to carry with you on any camping, hiking, hunting, boating, backpacking or survival adventures, and is large enough (8’ X 5’) to accommodate two adults.',
          score: 8,
          buy_link:
            'https://www.amazon.com/Emergency-Reflective-Conserves-Lightweight-Waterproof/dp/B01GOL67YG/ref=sr_1_13?ie=UTF8&qid=1517165177&sr=8-13&keywords=survival+gear',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/61tpCYOnAsL._SL1000_.jpg',
          review_link:
            'https://www.amazon.com/Emergency-Reflective-Conserves-Lightweight-Waterproof/dp/B01GOL67YG/ref=sr_1_13?ie=UTF8&qid=1517165177&sr=8-13&keywords=survival+gear#customerReviews',
        },
        {
          item_num: 15,
          product_name: 'UST WetFire Tinder',
          category: 'firestarters',
          description:
            "Lightweight, safe, and easy-to-carry, UST's WetFire Tinder is guaranteed to light in windy or wet conditions. Requiring just a small amount of tinder to build a fire, you can shave off a small piece or use the entire cube depending on the level of wind or moisture. WetFire tinder burns up to 5 minutes and can be extinguished instantly.",
          score: 8,
          buy_link:
            'https://www.amazon.com/UST-20-1WG0412-WetFire-Tinder-8-Pack/dp/B001H9N8BQ/ref=sr_1_25?ie=UTF8&qid=1517165861&sr=8-25&keywords=survival+gear',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/71XHBSwMBlL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/UST-20-1WG0412-WetFire-Tinder-8-Pack/dp/B001H9N8BQ/ref=sr_1_25?ie=UTF8&qid=1517165861&sr=8-25&keywords=survival+gear#customerReviews',
        },
        {
          item_num: 16,
          product_name: 'X-Plore Gear Firestarter',
          category: 'firestarters',
          description:
            "Whether you're gathering the essentials to build a distress and emergency kit, or you're an outdoorsman and are looking for something extra for your camping gear, this tool is ideal for you! Not only it provides a trusty way to build up a fire under any circumstances, it also features a built-in compass and a special emergency whistle!",
          score: 8,
          buy_link:
            'https://www.amazon.com/X-Plore-Gear-Firestarter-Multifunction-Magnesium/dp/B01M68RGRI/ref=sr_1_10?ie=UTF8&qid=1517166551&sr=8-10&keywords=survival+gear',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/810Hu2r1PQL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/X-Plore-Gear-Firestarter-Multifunction-Magnesium/dp/B01M68RGRI/ref=sr_1_10?ie=UTF8&qid=1517166551&sr=8-10&keywords=survival+gear#customerReviews',
        },
        {
          item_num: 17,
          product_name: "Patagonia Men's Storm Racer Jacket",
          category: 'clothing',
          description:
            'Featherweight H2No® Performance Standard 100% nylon ripstop keeps you dry, while a tricot backer wears soft and comfortable next to your skin Zippered chest pocket converts to stuffsack with a reinforced carabiner clip-in loop',
          score: 8,
          buy_link:
            'http://www.patagonia.com/product/mens-storm-racer-running-jacket/24110.html',
          image_link:
            'http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw8801063f/images/hi-res/24110_BLK.jpg?sw=750&sh=750&sm=fit&sfrm=png',
          review_link:
            'https://www.amazon.com/Patagonia-Mens-Houdini-Jacket-Large/dp/B075FSQXZ9/ref=sr_1_30_mc?s=apparel&ie=UTF8&qid=1517887265&sr=1-30&keywords=patagonia#customerReviews',
        },
        {
          item_num: 18,
          product_name: "Ellsworth & Company Men's Ellsworth Hike/Pack Socks",
          category: 'clothing',
          description:
            'Ellsworth implements patented VChannel technology that gives sweat a path to escape and evaporate. Partnering with Merino wool our VChannels move vapor off your feet unlike any other sock by using 3 Dimensional DESIGN. This keeps your feet drier - our test conclude 45% drier than the leading competition! The signature on our seamless toe represents a standard of excellence, innovation and craftsmanship while proudly being knit in America. Hike confidently in a sock that will stand behind you with a lifetime guarantee. Our passion is socks. Step in and experience our passion. Feel the difference.',
          score: 8,
          buy_link:
            'https://www.amazon.com/Ellsworth-Company-Featuring-Patented-Technology/dp/B072L6PS55',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/41qdhcMf7mL._UX385_.jpg',
          review_link:
            'https://www.amazon.com/Patagonia-Mens-Houdini-Jacket-Large/dp/B075FSQXZ9/ref=sr_1_30_mc?s=apparel&ie=UTF8&qid=1517887265&sr=1-30&keywords=patagonia#customerReviews',
        },
        {
          item_num: 19,
          product_name: 'Vgo… Goatskin Leather Waterproof Gloves',
          category: 'clothing',
          description:
            'Vgo... goatskin leather palm winter Work gloves have genuine goatskin leather boasts all day comfort with excellent smoothness and gentleness, Thinsulate lining for cold proof and breathable waterproof bag.',
          score: 8,
          buy_link:
            'https://www.amazon.com/Vgo-Goatskin-Leather-Waterproof-Winter/dp/B07216T7TY/ref=sr_1_9?s=hi&ie=UTF8&qid=1517169866&sr=1-9&keywords=Work+Gloves',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/51AfcWAinlL.01_SL500_.jpg',
          review_link:
            'https://www.amazon.com/Vgo-Goatskin-Leather-Waterproof-Winter/dp/B07216T7TY/ref=sr_1_9?s=hi&ie=UTF8&qid=1517169866&sr=1-9&keywords=Work+Gloves',
        },
        {
          item_num: 20,
          product_name: 'X-Plore Gear Emergency Paracord Bracelets',
          category: 'ropescordsaccessories',
          description:
            'THE ULTIMATE SURVIVAL GEAR: The SA01 emergency paracord bracelet is a compact and tactical survival bracelet that comes packed with all the necessary features you need, in order to survive in the wilderness. Our paracord bracelet is the ideal choice for every camping, hiking, hunting, fishing enthusiast or simply anyone who likes going in the Great Outdoors and be prepared!',
          score: 8,
          buy_link:
            'https://www.amazon.com/X-Plore-Gear-Emergency-Wilderness-Survival-Kit/dp/B06XZ9SMZ9/ref=sr_1_3?ie=UTF8&qid=1517167162&sr=8-3&keywords=survival+gear+cooking',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/91YkEX6NBPL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/X-Plore-Gear-Emergency-Wilderness-Survival-Kit/dp/B06XZ9SMZ9/ref=sr_1_3?ie=UTF8&qid=1517167162&sr=8-3&keywords=survival+gear+cooking#customerReviews',
        },
        {
          item_num: 21,
          product_name: 'Gorilla 6035180 Tape',
          category: 'ropescordsaccessories',
          description:
            'Made with double thick adhesive, strong reinforced backing, and a tough all-weather shell, it’s the biggest, strongest, toughest thing ever to happen to duct tape. To us, it’s made the way tape should be: The toughest on planet earth.',
          score: 8,
          buy_link:
            'https://www.amazon.com/Gorilla-6035180-Black-Tape-1-88/dp/B000CSS8UE/ref=sr_1_1_sspa?s=sporting-goods&ie=UTF8&qid=1517169651&sr=1-1-spons&keywords=gorilla+tape&psc=1',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/819H6kLerFL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/Gorilla-6035180-Black-Tape-1-88/dp/B000CSS8UE/ref=sr_1_1_sspa?s=sporting-goods&ie=UTF8&qid=1517169651&sr=1-1-spons&keywords=gorilla+tape&psc=1#customerReviews',
        },
        {
          item_num: 22,
          product_name: 'Big Wall Traverse Aluminum Carabiners',
          category: 'ropescordsaccessories',
          description:
            "These UIAA CERTIFIED carabiners are perfect setting up a complex anchor system, hooking up your hammock at camp, or just for having on your rack for whatever pops up. At just under 50g, you'll be able to carry several of these without being weighed down. If you are looking to add a small locking carabiner to your rack this is the perfect Key Lock Screw-Lock Carabiner. It is compact, lightweight, and has a great neutral color.",
          score: 8,
          buy_link:
            'https://www.amazon.com/Big-Wall-Traverse-Certified-Carabiners/dp/B0175B8ME2/ref=sr_1_1_sspa?s=sporting-goods&ie=UTF8&qid=1517169691&sr=1-1-spons&keywords=carabiner&psc=1',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/81LvKRo%2BT0L._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/Big-Wall-Traverse-Certified-Carabiners/dp/B0175B8ME2/ref=sr_1_1_sspa?s=sporting-goods&ie=UTF8&qid=1517169691&sr=1-1-spons&keywords=carabiner&psc=1#customerReviews',
        },
        {
          item_num: 23,
          product_name: 'CVLIFE Outdoor Tactical Backpack',
          category: 'bagsandpacks',
          description:
            '1.5 Inch Waist Belt and 1 Inch Sternum Strap Padded back of the backpack provides a comfortable feel. The inside pouches are made by waterproof material, wearable and durable. Equipped with durable zipper closure, all pounces are easy to open and close. ',
          score: 8,
          buy_link:
            'https://www.amazon.com/CVLIFE-Tactical-Backpack-Rucksacks-Waterproof/dp/B00Z5F2LQG/ref=sr_1_16?ie=UTF8&qid=1517165177&sr=8-16&keywords=survival%2Bgear&th=1',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/612krG1BhWL._SL1200_.jpg',
          review_link:
            'https://www.amazon.com/CVLIFE-Tactical-Backpack-Rucksacks-Waterproof/dp/B00Z5F2LQG/ref=sr_1_16?ie=UTF8&qid=1517165177&sr=8-16&keywords=survival%2Bgear&th=1#customerReviews',
        },
        {
          item_num: 24,
          product_name: 'Nathan HyperBrite Strobe',
          category: 'signaling',
          description:
            'Small but powerful, the HyperBrite strobe easily clips to your pack, clothing or even a shoe to keep you visible after the sun goes down.',
          score: 8,
          buy_link:
            'https://www.rei.com/product/874404/nathan-hyperbright-strobe',
          image_link:
            'https://www.rei.com/media/1ed98e06-3a09-453d-8083-508b0976bfb3?size=1020x510',
          review_link:
            'https://www.amazon.com/product-reviews/B00LZQE9AK/ref=acr_search_see_all?ie=UTF8&showViewpoints=1',
        },
        {
          item_num: 25,
          product_name: 'First Aid Only All-Purpose First Aid',
          category: 'firstaid',
          description:
            'Be ready for all potential emergencies at home, in the car, outdoors or on the water. Developed to save time and frustration in the midst of emergency situations. Supplies are easy to find in our patent pending, clear-pocket pages.',
          score: 8,
          buy_link:
            'https://www.amazon.com/gp/product/B000069EYA/ref=as_li_tl?ie=UTF8&tag=biipgf_100917_best-first-aid-kits-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B000069EYA&linkId=ad0e174a1a558aa470a3d6581c840c00',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/61LRlkpFrOL.jpg',
          review_link:
            'https://www.amazon.com/gp/product/B000069EYA/ref=as_li_tl?ie=UTF8&tag=biipgf_100917_best-first-aid-kits-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B000069EYA&linkId=ad0e174a1a558aa470a3d6581c840c00#customerReviews',
        },
        {
          item_num: 26,
          product_name: 'Recon Medical BLK-1PAK-FBA Tourniquet',
          category: 'firstaid',
          description:
            'Life saving equipment - hemorrhaging is the leading cause of preventable death in tactical and non-tactical trauma situations. Patent pending finger hole design for better grip in mud, blood, or wet weather - easily add one or more to home emergency kits, cars, backpacks, motorcycles, range bag, construction belt or carried on person for immediate use. - easy simple design - one handed design for self-application',
          score: 8,
          buy_link:
            'https://www.amazon.com/Recon-Medical-BLK-1PAK-FBA-Tourniquet-Pre-Hospital/dp/B01ETMVQOI/ref=sr_1_2_sspa?ie=UTF8&qid=1517170421&sr=8-2-spons&keywords=Tourniquet&psc=1',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/41ufPZsR8AL.jpg',
          review_link:
            'https://www.amazon.com/Recon-Medical-BLK-1PAK-FBA-Tourniquet-Pre-Hospital/dp/B01ETMVQOI/ref=sr_1_2_sspa?ie=UTF8&qid=1517170421&sr=8-2-spons&keywords=Tourniquet&psc=1#customerReviews',
        },
        {
          item_num: 27,
          product_name: 'SAM Rolled Splint 36", Orange/Blue',
          category: 'firstaid',
          description: 'Sam Splint',
          score: 8,
          buy_link:
            'https://www.amazon.com/SAM-Rolled-Splint-Orange-Blue/dp/B001J5H92C/ref=sr_1_5_a_it?ie=UTF8&qid=1517170476&sr=8-5&keywords=Sam+Splint',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/71GKEmqp3XL._SX522_.jpg',
          review_link:
            'https://www.amazon.com/SAM-Rolled-Splint-Orange-Blue/dp/B001J5H92C/ref=sr_1_5_a_it?ie=UTF8&qid=1517170476&sr=8-5&keywords=Sam+Splint#customerReviews',
        },
        {
          item_num: 28,
          product_name: 'Fenix PD35 TAC 1000 Lumen',
          category: 'lighting',
          description:
            'The PD35 TAC (Tactical Edition) remains a pocket size but has a higher performance and focuses on tactcial employment. Measured at less than 5.51 inches, it features up to a 1000-lumen output and has a beam distance of up to 656 feet. In the Outdoor Mode, the PD35 TAC delivers 6 output modes. However, the Tactical Mode strengthens the PD35 TAC with simplified and fast operation. From outdoor use to law enforcement, you can resort to it.',
          score: 8,
          buy_link:
            'https://www.amazon.com/Tactical-Flashlight-EdisonBright-Lithium-Batteries/dp/B00DR9GWX0/ref=sr_1_2_sspa?ie=UTF8&qid=1517168426&sr=8-2-spons&keywords=Fenix+PD35+Tactical+Flashlight&psc=1',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/51SSVg3AZhL._SY450_.jpg',
          review_link:
            'https://www.amazon.com/Tactical-Flashlight-EdisonBright-Lithium-Batteries/dp/B00DR9GWX0/ref=sr_1_2_sspa?ie=UTF8&qid=1517168426&sr=8-2-spons&keywords=Fenix+PD35+Tactical+Flashlight&psc=1#customerReviews',
        },
        {
          item_num: 29,
          product_name: 'Olympia EX550 LED Headlamp',
          category: 'lighting',
          description:
            'The Olympia EX550 headlamp is durable and powerful at 550 lumens. This headlamp is made from lightweight aluminum making it a great solution for rigorous activities such as trail running, caving, skiing and more. It is powered by a Cree XM-L LED bulb, has five lighting modes and is waterproof to IPX-7 up to one meter. With the lock-out function that prevents battery drain and accidental on/off, this headlamp will travel with you anywhere.',
          score: 8,
          buy_link:
            'https://www.amazon.com/Olympia-EX550-Lightweight-Resistant-Headlamp/dp/B00K5FFU50/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=outdoorlife03-20&linkId=60f77c2d92df8e735137e60361e1475e',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/61tCMqZ6dhL._SL1000_.jpg',
          review_link:
            'https://www.amazon.com/Olympia-EX550-Lightweight-Resistant-Headlamp/dp/B00K5FFU50/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=outdoorlife03-20&linkId=60f77c2d92df8e735137e60361e1475e#customerReviews',
        },
        {
          item_num: 30,
          product_name: 'Garmin GPSMAP 64 GPS',
          category: 'gpsandcompass',
          description:
            'With its quad helix antenna and high-sensitivity, GPS and GLONASS, receiver, GPSMAP 64 locates your position quickly and precisely and maintains its location even in heavy cover and deep canyons. The advantage is clear — whether you’re in deep woods or just near tall buildings and trees, you can count on GPSMAP 64 to help you find your way when you need it the most.',
          score: 8,
          buy_link:
            'https://www.amazon.com/dp/B00HWL9AR4/ref=sr_ob_1?s=sports-and-fitness&ie=UTF8&qid=1517168503&sr=1-1',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/41Y6NEME1BL.jpg',
          review_link:
            'https://www.amazon.com/dp/B00HWL9AR4/ref=sr_ob_1?s=sports-and-fitness&ie=UTF8&qid=1517168503&sr=1-1#customerReviews',
        },
        {
          item_num: 31,
          product_name: 'Suunto MC-2 Compass',
          category: 'gpsandcompass',
          description:
            'THE SIGHTING COMPASS FOR GLOBAL MOUNTAINEERS Suunto MC-2/360/G/D/L Compass SS004252010 The advanced navigation compass. When venturing out into new territory, these sighting compasses offer precision navigation with a variety of carefully engineered and dependable features for challenging conditions.',
          score: 8,
          buy_link:
            'https://www.amazon.com/Suunto-SS004252010-MC-2G-Global-Compass/dp/B000FEUCRW/ref=sr_1_cc_1?s=aps&ie=UTF8&qid=1517169450&sr=1-1-catcorr&keywords=suunto+compass',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/815sCDB8CzL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/Suunto-SS004252010-MC-2G-Global-Compass/dp/B000FEUCRW/ref=sr_1_cc_1?s=aps&ie=UTF8&qid=1517169450&sr=1-1-catcorr&keywords=suunto+compass#customerReviews',
        },
        {
          item_num: 32,
          product_name: 'Nikon 7576 MONARCH 5 Binocular',
          category: 'optics',
          description:
            'Even with an uncontested heritage of all-conditions optical performance, the all-new MONARCH 5 further elevates its game with improved agility and advanced low light brilliance. ',
          score: 8,
          buy_link:
            'https://www.amazon.com/Nikon-7576-MONARCH-Binocular-Black/dp/B00C66C950/ref=sr_1_fkmr0_1?s=sporting-goods&ie=UTF8&qid=1517168687&sr=1-1-fkmr0&keywords=Nikon+Monarch+ATB+8%C3%9742.',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/715axw23PxL._SL1200_.jpg',
          review_link:
            'https://www.amazon.com/Nikon-7576-MONARCH-Binocular-Black/dp/B00C66C950/ref=sr_1_fkmr0_1?s=sporting-goods&ie=UTF8&qid=1517168687&sr=1-1-fkmr0&keywords=Nikon+Monarch+ATB+8%C3%9742.#customerReviews',
        },
        {
          item_num: 33,
          product_name: 'CenterPoint Sniper 370 Crossbow',
          category: 'defense',
          description:
            'Big game performance in a package that begs to hit the mountain. A fully adjustable stock and pass-through foregrip accommodate your shooting style to ensure exceptional accuracy and quad limbs fitted with a precision CNC-machined cam system delivers mind-blowing speeds up to 370 FPS. ',
          score: 8,
          buy_link:
            'https://www.amazon.com/CenterPoint-Sniper-370-Crossbow-Package/dp/B01H7KULFO/ref=sr_1_4?s=hunting-fishing&ie=UTF8&qid=1517170937&sr=1-4&keywords=crossbow',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/8115akJ-XHL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/CenterPoint-Sniper-370-Crossbow-Package/dp/B01H7KULFO/ref=sr_1_4?s=hunting-fishing&ie=UTF8&qid=1517170937&sr=1-4&keywords=crossbow#customerReviews',
        },
        {
          item_num: 34,
          product_name: 'Bushcraft 101: A Field Guide',
          category: 'emergencyandsurvival',
          description:
            'The ultimate resource for experiencing the backcountry!',
          score: 8,
          buy_link:
            'https://www.amazon.com/Bushcraft-101-Field-Wilderness-Survival/dp/1440579776/ref=sr_1_3?ie=UTF8&qid=1517165177&sr=8-3&keywords=survival+gear',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/51RCbtm%2BvTL._SX323_BO1,204,203,200_.jpg',
          review_link:
            'https://www.amazon.com/Bushcraft-101-Field-Wilderness-Survival/dp/1440579776/ref=sr_1_3?ie=UTF8&qid=1517165177&sr=8-3&keywords=survival+gear#customerReviews',
        },
        {
          item_num: 35,
          product_name: 'Banana Boat Sport Lotion Sunscreens',
          category: 'sunandprotection',
          description:
            'Sport performance sunscreen SPF 30 lotion provides sweat and water resistant protection.',
          score: 8,
          buy_link:
            'https://www.amazon.com/Banana-Boat-Performance-Sunscreens-Technology/dp/B0030ZEGDY/ref=sr_1_6_s_it?s=hpc&ie=UTF8&qid=1517170562&sr=1-6&keywords=sunscreen',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/41vgFtU1EPL.jpg',
          review_link:
            'https://www.amazon.com/Banana-Boat-Performance-Sunscreens-Technology/dp/B0030ZEGDY/ref=sr_1_6_s_it?s=hpc&ie=UTF8&qid=1517170562&sr=1-6&keywords=sunscreen#customerReviews',
        },
        {
          item_num: 36,
          product_name: 'Teva Arrowood Riva Mid WP Boots',
          category: 'shoes',
          description:
            'Take a stroll in comfort, no matter the conditions. The Teva Arrowood Riva Mid WP boots have highly breathable eVent® membranes for waterproof protection when the weather is poor.',
          score: 8,
          buy_link:
            'https://www.rei.com/product/120664/teva-arrowood-riva-mid-wp-boots-mens',
          image_link:
            'https://www.rei.com/media/b9579e53-a9a7-4b38-bd3e-068877d74c9c?size=1020x510',
          review_link:
            'https://www.amazon.com/Teva-Arrowood-Riva-Mid-Men/dp/B01N4FRKDM/ref=sr_1_fkmr1_3?ie=UTF8&qid=1517888570&sr=8-3-fkmr1&keywords=Teva+Arrowood+Riva+Mid+WP+Boots#customerReviews',
        },
        {
          item_num: 37,
          product_name: 'The North Face Hedgehog Mid Gore-Tex Hiking Boots',
          category: 'shoes',
          description:
            "With waterproof breathable protection, Cradle Guide midsole support and durable Vibram® outsoles, The North Face Hedgehog Fastpack Mid Gore-Tex® men's hiking boots travel fast.",
          score: 8,
          buy_link:
            'https://www.rei.com/product/114091/the-north-face-hedgehog-fastpack-mid-gore-tex-hiking-boots-mens',
          image_link:
            'https://www.rei.com/media/9616f0f1-6568-454b-a0ee-14b977ed0590?size=1020x510',
          review_link:
            'https://www.amazon.com/Mens-Hedgehog-Gore-Tex-Hiking-Graph/dp/B01MT0TDQF/ref=sr_1_1?s=apparel&ie=UTF8&qid=1517888633&sr=1-1&nodeID=7141123011&psd=1&keywords=The+North+Face+Hedgehog+Fastpack+Mid+Gore-Tex+Hiking+Boots#customerReviews',
        },
        {
          item_num: 38,
          product_name: 'Lowa Zephyr GTX Hi TF Hiking Boots',
          category: 'shoes',
          description:
            'Designed to be faster, lighter boots that can tackle punishing conditions, the tall-shafted Lowa Zephyr GTX Hi TF hiking boots offer great support and rebound with a waterproof lining.',
          score: 8,
          buy_link:
            'https://www.rei.com/product/105339/lowa-zephyr-gtx-hi-tf-hiking-boots-mens',
          image_link:
            'https://www.rei.com/media/4ed4b226-738a-4d11-ae51-ae76463dbe9b?size=1020x510',
          review_link:
            'https://www.amazon.com/product-reviews/B002MPPVCI/ref=acr_search_see_all?ie=UTF8&showViewpoints=1',
        },
        {
          item_num: 39,
          product_name: 'Merrell Moab 2 Mid WP Hiking Boots',
          category: 'shoes',
          description:
            "Waterproof Merrell Moab 2 WP Mid hikers deliver out-of-the-box comfort with durable leather, supportive footbeds and Vibram traction. Wear them and you'll know why Moab stands for Mother-Of-All-Boots.",
          score: 8,
          buy_link:
            'https://www.rei.com/product/113731/merrell-moab-2-mid-wp-hiking-boots-womens',
          image_link:
            'https://www.rei.com/media/4e6ff51e-fe62-48e8-88a3-f0ceb22b4bde?size=1020x510',
          review_link:
            'https://www.amazon.com/Merrell-Womens-Waterproof-Hiking-Bungee/dp/B01HFL99EY/ref=ice_ac_b_dpb?ie=UTF8&qid=1517888834&sr=8-1&keywords=Merrell+Moab+2+Mid+WP+Hiking+Boots+-+Women%27s#customerReviews',
        },
        {
          item_num: 40,
          product_name: 'The North Face Endurus Mid GTX Hiking Boots ',
          category: 'shoes',
          description:
            "Waterproof, breathable and incredibly comfortable, The North Face Endurus Mid GTX women's hiking boots offer XtraFoam cushioning for a soft ride with dependable stability.",
          score: 8,
          buy_link:
            'https://www.rei.com/product/113998/the-north-face-endurus-mid-gtx-hiking-boots-womens',
          image_link:
            'https://www.rei.com/media/8ea8628d-26db-4dea-a926-df3a7df4fd57?size=1020x510',
          review_link:
            'https://www.rei.com/product/113998/the-north-face-endurus-mid-gtx-hiking-boots-womens',
        },
        {
          item_num: 41,
          product_name: 'REI Co-op Flash 45 Pack',
          category: 'backpacks',
          description:
            "Make your weekend trip a walk in the park with the men's REI Co-op Flash 45 pack. It has load-stabilizing tech, a contoured hipbelt, a breathable back panel and attachment points for all your gear.",
          score: 8,
          buy_link:
            'https://www.rei.com/product/111161/rei-co-op-flash-45-pack-mens',
          image_link:
            'https://www.rei.com/media/a5c2fec1-69c1-478a-b569-1c398b9f9b7f?size=1020x510',
          review_link:
            'https://www.rei.com/product/111161/rei-co-op-flash-45-pack-mens',
        },
        {
          item_num: 42,
          product_name: 'Mammut Trion Pro 50',
          category: 'backpacks',
          description: '',
          score: 8,
          buy_link:
            'https://www.rei.com/product/125250/mammut-trion-pro-50-7-pack',
          image_link:
            'https://www.rei.com/media/cf8334bc-8823-4256-aeac-45de4a6b784c?size=1020x510',
          review_link: '',
        },
        {
          item_num: 43,
          product_name: 'Osprey Aether AG 85 Pack',
          category: 'backpacks',
          description:
            'The Mammut Trion Pro 50 + 7 alpine pack sports an extra-durable, nearly waterproof shell with plenty of ski and snow-tool straps for winter expeditions and all-season climbing adventures.',
          score: 8,
          buy_link:
            'https://www.rei.com/product/111286/osprey-aether-ag-85-pack-mens',
          image_link:
            'https://www.rei.com/media/9188cae4-5c27-4179-85a7-175aa5ed2830?size=1020x510',
          review_link:
            'https://www.rei.com/product/111286/osprey-aether-ag-85-pack-mens',
        },
        {
          item_num: 44,
          product_name: 'Kelty Trekker 65 Pack',
          category: 'backpacks',
          description:
            'Carrying on a tradition of indestructible construction and plenty of pockets, the Kelty Trekker 65 pack offers a simple, comfortable, lightweight design that makes it a favorite on the trail.',
          score: 8,
          buy_link: 'https://www.rei.com/product/895713/kelty-trekker-65-pack',
          image_link:
            'https://www.rei.com/media/d1e67716-0af1-453a-a773-e44ca77cf38d?size=1020x510',
          review_link:
            'https://www.rei.com/product/895713/kelty-trekker-65-pack',
        },
      ],
      {
        ignoreDuplicates: true,
      }
    ).then(function(tableProducts) {
      console.log(tableProducts);
    });
  });
