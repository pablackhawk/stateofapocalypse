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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          product_name: 'Jetboil Flash Personal Cooking System',
          category: 'cooking',
          itemDescription:
            'The Jetboil Flash cooking system utilizes the same efficient design as the now classic Personal Cooking System (PCS) but adds the additional convenience feature of an external temperature indicator. Designed to capture and focus heat more efficiently than traditional cooking systems, the Flash brings two cups of water to a boil in only two minutes. ',
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription: 'Sam Splint',
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription:
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
          itemDescription: '',
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
          itemDescription:
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
          itemDescription:
            'Carrying on a tradition of indestructible construction and plenty of pockets, the Kelty Trekker 65 pack offers a simple, comfortable, lightweight design that makes it a favorite on the trail.',
          score: 8,
          buy_link: 'https://www.rei.com/product/895713/kelty-trekker-65-pack',
          image_link:
            'https://www.rei.com/media/d1e67716-0af1-453a-a773-e44ca77cf38d?size=1020x510',
          review_link:
            'https://www.rei.com/product/895713/kelty-trekker-65-pack',
        },
        {
          item_num: 45,
          product_name: "Teva Arrowood Riva Mid WP Boots - Men's",
          category: 'clothing',
          itemDescription:
            'Leather uppers with eVent® waterproof and breathable membranes seal out the elements to keep your feet dry. EVA foam midsoles with high-rebound heel pads add lightweight cushioning. Responsive polyurethane footbeds put a spring in your step. Nylon shanks stabilize and support your feet on uneven ground. Rubberized toe caps protect against toe stubs. Durable Vibram® rubber outsoles stand up to the demands of rugged terrain.',
          score: 8,
          buy_link:
            'https://www.rei.com/product/120664/teva-arrowood-riva-mid-wp-boots-mens',
          image_link:
            'https://www.rei.com/media/b9579e53-a9a7-4b38-bd3e-068877d74c9c?size=1020x510',
          review_link:
            'https://www.rei.com/product/120664/teva-arrowood-riva-mid-wp-boots-mens',
        },
        {
          product_name: 'Danner Instigator GTX Hiking Boots',
          category: 'clothing',
          itemDescription:
            'The Instigator GTX boot combines athletic performance with traditional Danner toughness. The full grain leather upper offers comfort and rugged durability while the GORE-TEX lining provides waterproof, breathable protection. Danner?s patented TERRA FORCE support system, with the Approach TFX outsole provides lightweight, durable traction, heel-to-toe energy transfer, side support to enhance maneuverability, and protection from foot fatigue.',
          score: '7',
          buy_link:
            'https://www.amazon.com/Danner-Mens-Instigator-Inch-Outdoor/dp/B00JKI50KI',
          image_link:
            'https://images.yswcdn.com/1409189516423803459-ql-85/505/436/ay/policestuff/danner-instigator-gtx-hiking-boots-28.gif',
          review_link:
            'https://www.amazon.com/Danner-Mens-Instigator-Inch-Outdoor/dp/B00JKI50KI#customerReviews',
        },
        {
          product_name: "Merrell Moab 2 Mid WP Hiking Boots - Women's",
          category: 'clothing',
          itemDescription:
            "Performance suede leather and mesh uppers have protective rubber toe caps. M-Select Dry membranes seal out water and let moisture escape so you stay dry when you're on the move. Bellowed, closed-cell foam tongues keep moisture and debris out. Merrell M Select Fit.Eco + blended - EVA, contoured footbeds with zonal arch and heel support. Merrell air cushion in the heels absorbs shock and adds stability. EVA midsoles for stability and comfort. Molded nylon arch shank adds stability. Vibram TC5 + outsoles have a 5mm lug depth for grip.",
          score: '9',
          buy_link:
            'https://www.rei.com/product/113731/merrell-moab-2-mid-wp-hiking-boots-womens',
          image_link:
            'https://www.rei.com/media/4e6ff51e-fe62-48e8-88a3-f0ceb22b4bde?size=1020x510',
          review_link:
            'https://www.rei.com/product/113731/merrell-moab-2-mid-wp-hiking-boots-womens',
        },
        {
          product_name: "Danner Light II Women's Hiking Boots",
          category: 'clothing',
          itemDescription:
            "The Danner Light II is USA made, classically designed, and packed with features. A nubuck leather and 1000 Denier nylon upper combined with Danner's stitchdown construction, offer unparalleled durability and stability.The waterproof, breathable GORE - TEX lining keeps feet dry, and the Vibram Kletterlift outsole provides lightweight comfort, superb shock absorption, and great traction and stability on both wet and dry surfaces.",
          score: '6',
          buy_link:
            'https://www.lapolicegear.com/danner-hiking-boots-33000.html',
          image_link:
            'https://images.yswcdn.com/1409189516423803459-ql-85/505/475/ay/policestuff/danner-light-ii-women-s-hiking-boots-42.gif',
          review_link:
            'https://www.amazon.com/Danner-Womens-Light-II-Outdoor/dp/B002OSY0DE#customerReviews',
        },
        {
          product_name: "North Face Endurus Mid GTX Hiking Boots - Women's",
          category: 'clothing',
          itemDescription:
            'Waterproof, breathable Gore-Tex® membranes deliver weather protection. Seamless, welded thermoplastic polyurethane(TPU) geometric quarter panels lock down feet to support and provide optimal breathability. TPU welded over synthetic toe caps delivers rugged toe protection. FlashDry® collar lining keeps your feet cool and dry. Industry-leading OrthoLite footbeds supply long - lasting comfort. Proprietary XtraFoam midsoles have a soft-density foam underfoot for superior comfort and a firm - density EVA around the perimeter for inherent stability on the trail. ESS Snake Plate forefoot to midfoot provides torsional rigidity and protection from stone bruising. Vibram XS Trek rubber outsoles employ 4mm outsole lugs with biting edges for durable multi-terrain traction.',
          score: '8',
          buy_link:
            'https://www.rei.com/product/113998/the-north-face-endurus-mid-gtx-hiking-boots-womens',
          image_link:
            'https://www.rei.com/media/8ea8628d-26db-4dea-a926-df3a7df4fd57?size=1020x510',
          review_link:
            'https://www.rei.com/product/113998/the-north-face-endurus-mid-gtx-hiking-boots-womens',
        },
        {
          product_name: "REI Co-op Flash 45 Pack - Men's",
          category: 'bagsandpacks',
          itemDescription:
            "REI UpLift™ Compression technology pulls the pack load up and in, closer to your center of gravity, to improve your balance and stability. A 3D contoured hipbelt provides all-day comfort and stability. An REI Packnit™ back panel with triangle foam increases airflow and breathability. Water bottle pockets have secure snap closures and are positioned forward on the hipbelt so you don't have to remove the pack to grab your drink. Removable top lid offers customizable pack volume. Large mesh pocket in the front provides easy access to frequently needed items. Attachment loops on the front allow ice axes, tools and more to be lashed on. Hydration - compatible design.",
          score: '10',
          buy_link:
            'https://www.rei.com/product/111161/rei-co-op-flash-45-pack-mens',
          image_link:
            'https://www.rei.com/media/a5c2fec1-69c1-478a-b569-1c398b9f9b7f?size=1020x510',
          review_link:
            'https://www.rei.com/product/111161/rei-co-op-flash-45-pack-mens',
        },
        {
          product_name: 'Mammut Trion Pro 50 + 7 Pack',
          category: 'bagsandpacks',
          itemDescription:
            'Extremely durable nylon shell provides nearly waterproof protection, supporting a 5000mm water column. Removable hipbelt with gear loops allows unobstructed access to your climbing harness and a streamlined profile for air travel. Removable floating top lid with 7 - liter powder skirt allows extra weather-protected space for winter expeditions. Huge, zippered back panel allows fast and easy access to the entire main compartment. Reinforced front zip pocket provides easy access to crampons, shovel, probe, or an extra layer. Side-compression straps buckle across the front of the pack for additional carrying options. Reinforced A - frame ski-carry straps; ice tool holder; rope carry strap under lid; multiple lash points. Hydration port and sleeve(reservoir not included).',
          score: '7',
          buy_link:
            'https://www.rei.com/product/878787/mammut-trion-pro-50-7-pack',
          image_link:
            'https://www.rei.com/media/5cb57818-a2a5-4000-8631-005b9c4859aa?size=1020x510',
          review_link:
            'https://www.rei.com/product/878787/mammut-trion-pro-50-7-pack',
        },
        {
          product_name: 'LA Police Gear Atlas 72 Hour Tactical Backpack',
          category: 'bagsandpacks',
          itemDescription:
            "LA Police Gear's Atlas line of Tactical Backpacks are so packed with features, we're truly besides ourselves. Just like all LAPG products, these backpacks are a tremendous value, but don't sacrifice on quality or materials. We've upped the ante even more with the Atlas Backpacks, as they are made from ultra-tough 900D Polyester with a PVC Coating. So as to not scream \"tactical\" so much, we've utilized laser cut molle on all areas of the packs. Last but definitely not least, we have added a new feature to the straps of the Atlas line that allows you to buckle in our LAPG Tactical Chest Pack Attachment directly to the backpack.The Chest Pack is a versatile carrying system that basically gives the storage of another backpack.Great for CCW, small items, or anything you can think of! We spent a long time on the drawing board and on the trail with the Atlas backpacks and know that it shows.You won't be disappointed.",
          score: '9',
          buy_link: 'https://www.lapolicegear.com/lapg-bg-72h-pack-atlas.html',
          image_link:
            'https://images.yswcdn.com/1409189516423803459-ql-85/369/490/ay/policestuff/la-police-gear-atlas-72-hour-tactical-backpack-5.gif',
          review_link:
            'https://www.lapolicegear.com/lapg-bg-72h-pack-atlas.html',
        },
        {
          product_name: '5.11 Tactical RUSH 24 Bag 58601',
          category: 'bagsandpacks',
          itemDescription:
            'Our most popular tactical backpack, the RUSH24™ is designed to provide superior storage capacity and organization without slowing you down. The roomy main compartment offers three interior mesh organizer pockets to keep small accessories organized, a padded hydration pocket keeps you moving, and a fleece-lined sunglass pocket keeps your eyewear within easy reach. Dual side storage compartments offer double-zip access, a large stuff-it pocket with an integrated draw cord provides expandable storage when you need it, and contoured compression straps ensure a stable, comfortable carry. A wrap-around web platform is MOLLE/5.11 SlickStick® System compatible, allowing you to customize your storage options as you see fit. Easily the best tactical backpack choice for a wide range of applications, the RUSH24 combines superior mobility and enhanced storage with customizable functionality that excels in any environment.',
          score: '9',
          buy_link:
            'https://www.lapolicegear.com/511-tactical-rush-24-bag.html',
          image_link:
            'https://images.yswcdn.com/1409189516423803459-ql-85/437/490/ay/policestuff/5-11-tactical-rush-24-bag-58601-9.gif',
          review_link:
            'https://www.lapolicegear.com/511-tactical-rush-24-bag.html',
        },
        {
          product_name: 'Rothco Top Load Canvas Duffle Bag',
          category: 'bagsandpacks',
          itemDescription:
            "Rothco's Heavyweight Top Load Cotton Canvas Duffle Bag is made from a durable cotton canvas designed to carry heavy loads of gear.Rothco is the foremost supplier of military, tactical, outdoor, survival clothing and gear.",
          score: '8',
          buy_link:
            'https://www.amazon.com/Rothco-Load-Canvas-Duffle-Olive/dp/B001FC8AFY/ref=sr_1_3?s=sporting-goods&ie=UTF8&qid=1517903012&sr=1-3&keywords=military+duffle+bag',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/31%2B323JPvfL.jpg',
          review_link:
            'https://www.amazon.com/Rothco-Load-Canvas-Duffle-Olive/dp/B001FC8AFY/ref=sr_1_3?s=sporting-goods&ie=UTF8&qid=1517903012&sr=1-3&keywords=military+duffle+bag#customerReviews',
        },
        {
          product_name: 'LA Police Gear Zombie Hunter Bag',
          category: 'bagsandpacks',
          itemDescription:
            'So we know what you\'re thinking. A "Zombie Hunter" Bag? Really LAPG? Well, this bag is no joke. This thing is packed with features in a compact size. It is great for range use, to keep in your car, office or home as a bug out bag, or of course as a zombie apocalypse survival bag.',
          score: '10',
          buy_link: 'https://www.lapolicegear.com/lapg-zombie-hunter-bag.html',
          image_link:
            'https://images.yswcdn.com/1409189516423803459-ql-85/505/447/ay/policestuff/la-police-gear-zombie-hunter-bag-65.gif',
          review_link:
            'https://www.lapolicegear.com/lapg-zombie-hunter-bag.html',
        },
        {
          product_name: 'Streamlight Bandit Headlamp',
          category: 'lighting',
          itemDescription:
            'Going for a run or need a hands-free light for up-close tasks? Reach for the Bandit - a lightweight, low-profile headlamp designed just for you. It is USB rechargeable and provides 180 lumens of bright, even light.',
          score: '6',
          buy_link: 'https://www.lapolicegear.com/st-bandit-headlamp.html',
          image_link:
            'https://images.yswcdn.com/1409189516423803459-ql-85/358/134/ay/policestuff/streamlight-bandit-headlamp-1.gif',
          review_link:
            'https://www.amazon.com/Streamlight-61700-Bandit-headstrap-Yellow/dp/B06W2HTGFL#customerReviews',
        },
        {
          product_name:
            'Streamlight 61400 Enduro Impact Resistant Headlamp with Elastic Strap, Black',
          category: 'lighting',
          itemDescription:
            "The Enduro is the most compact, lightweight, high performance, ergonomically developed LED headlamp on the market today. At only 2.75 ounces (with batteries), this headlamp uses two 1.5-volt AAA batteries for a combined performance at the top of the sub-compact headlamp category. The Enduro has been specifically engineered to minimize weight and maximize run time. The lights optimized center of gravity provides maximum wearer comfort and stability during use and the integral hat clip allows the light to be attached to the brim of a hat or on the wearer's shirt or jacket without the need for a head strap.This headlamp offers High and Low lighting modes, and is packaged with Rubber / Elastic Combo head strap.",
          score: '6',
          buy_link:
            'https://www.amazon.com/Streamlight-61400-Resistant-Headlamp-Elastic/dp/B000JWD114',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/71LKkTu1xgL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/Streamlight-61400-Resistant-Headlamp-Elastic/dp/B000JWD114#customerReviews',
        },
        {
          product_name: 'Princeton Tec Remix Pro NOD Kit Headlamp',
          category: 'lighting',
          itemDescription:
            'When the US Military makes a request, Princeton Tec takes action. The Remix Pro is powered by a single CR123 battery providing excelled performance in cold weather, light weight and compact size. While having multiple output modes to meet various requirements, the light always starts in low mode. Combining these features with a large on/off button, an easy access battery door and a reliable asymmetrical bracket, The Remix Pro is equipped to endure the rigors of your next adventure.',
          score: '9',
          buy_link: 'https://www.lapolicegear.com/pri-hyb123-headlamp.html',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/61HMvNBO8sL._SL1200_.jpg',
          review_link:
            'https://www.amazon.com/Princeton-Tec-Remix-Pro-Headlamp/dp/B01H8FI34E#customerReviews',
        },
        {
          product_name:
            'SureFire G2X Series LED Flashlights with tough Nitrolon body',
          category: 'lighting',
          itemDescription:
            'Virtually indestructible LED emitter regulated to maximize light output and runtime. Two output levels - high of 400 lumens for maximum light, and low of 15 lumens for extended runtime. Dual - output tailcap switch meets needs of LE - press for momentary - on high, click for constant - on high; return to off and press or click again for low. Precision micro - textured reflector creates smooth, optimized beam. Tough Nitrolon body, anodized aluminum bezel.',
          score: '9',
          buy_link:
            'https://www.amazon.com/SureFire-Flashlight-leading-click-switch-Enforcement/dp/B00U855UPM/ref=sr_1_3?s=sporting-goods&ie=UTF8&qid=1517279071&sr=1-3&keywords=Surefire',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/81ZNx184gZL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/SureFire-Flashlight-leading-click-switch-Enforcement/dp/B00U855UPM/ref=sr_1_3?s=sporting-goods&ie=UTF8&qid=1517279071&sr=1-3&keywords=Surefire#customerReviews',
        },
        {
          product_name: 'SureFire 6PX Series LED Flashlights',
          category: 'lighting',
          itemDescription:
            'Virtually indestructible LED emitter regulated to maximize light output and runtime. Two output levels - high of 320 lumens for maximum light, and low of 15 lumens for extended runtime. Dual - output tailcap click switch--press for momentary - on low, click for constant - on low, return to off then press or click again for high. Precision micro - textured reflector creates smooth, optimized beam. High-strength aerospace aluminum body, Mil-Spec hard-anodized for extreme durability.',
          score: '10',
          buy_link:
            'https://www.amazon.com/SureFire-6PX-Series-LED-Flashlights/dp/B01JGT9Y3Y/ref=pd_sbs_200_3?_encoding=UTF8&pd_rd_i=B01JGT9Y3Y&pd_rd_r=PTADYJKVR0XTSX5YVW4D&pd_rd_w=nUMwT&pd_rd_wg=693gB&refRID=PTADYJKVR0XTSX5YVW4D',
          image_link:
            'http://cdn.surefire.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/p/6px-tactical-angle.png',
          review_link:
            'https://www.amazon.com/SureFire-6PX-Series-LED-Flashlights/dp/B01JGT9Y3Y/ref=pd_sbs_200_3?_encoding=UTF8&pd_rd_i=B01JGT9Y3Y&pd_rd_r=PTADYJKVR0XTSX5YVW4D&pd_rd_w=nUMwT&pd_rd_wg=693gB&refRID=PTADYJKVR0XTSX5YVW4D#customerReviews',
        },
        {
          product_name:
            'SureFire E1B-MV Backup Flashlights with Dual Output LED with MaxVision Beam Technology',
          category: 'lighting',
          itemDescription:
            "The sleek, compact E1B-MV has the broad max vision beam that is optimized for your field of vision with plenty of peripheral illumination. It is designed as an outstanding everyday-carry light for most any application. Click-type switch - partially press tail cap pushbutton for momentary-on high output; press further to click constant-on high. Return to off and press or click again within two seconds for low output. The brilliant 400-lumen high output beam provides a broad max vision beam that is optimized for your field of vision with plenty of peripheral illumination. The lumen low output is perfect for reading a map, checking an ID, or navigating in low light with minimal degradation to your dark-adapted vision. The backup can run at this level for 50 hours, a valuable feature for outdoor or emergency situations. A tough, lightweight mil-spec hard-anodized aluminum body protects the E1B-MV backup's sophisticated electronics, and its smooth contours minimize clothing snag and pressure points. A two-way clip allows head-up or head - down carry.",
          score: '7',
          buy_link:
            'https://www.amazon.com/SureFire-E1B-MV-Flashlights-MaxVision-Technology/dp/B06XY5F5FQ',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/71ItpWlHpuL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/SureFire-E1B-MV-Flashlights-MaxVision-Technology/dp/B06XY5F5FQ#customerReviews',
        },
        {
          product_name: 'Marmot Limestone 4P Tent',
          category: 'shelter',
          itemDescription:
            'Zone Pre-Bend construction creates vertical interior walls, providing a big sleeping area and extra head room. One super- size double door and one rear D - shaped door with a large front vestibule allow you to easily get all of your gear inside for dry storage. Seam - taped, full-coverage fly with vents keeps out water but lets air in to keep conditions as comfortable as possible. Color-coded Easy Pitch clips and poles with pole sleeve-clip combination make pitching quick and simple. Lampshade pocket securely holds your headlamp, so you can use it to light up your living space. Catenary - cut floor with straight edges at the perimeter increases floor space and is seam - taped to help prevent leaks. Interior pockets keep small essentials neatly organized and within easy reach.',
          score: '8',
          buy_link:
            'https://www.rei.com/product/110892/marmot-limestone-4p-tent',
          image_link:
            'https://www.rei.com/media/8bda87e5-b334-4c38-bf34-86bbacc87c04?size=1020x510',
          review_link:
            'https://www.rei.com/product/110892/marmot-limestone-4p-tent',
        },
        {
          product_name: 'REI Co-op Kingdom 4 Tent',
          category: 'shelter',
          itemDescription:
            'Vertical walls and rectangular floor plan maximize livable space. Stable, freestanding 4 - person design; 2 hubbed pole assemblies, pole clips and sleeves. 2 huge doors with 4 zipper sliders. Bug-proof mesh paneling and doors. 1 vestibule / 1 weather-protective awning. Multiple interior storage options. Seam - sealed waterproof polyester fly. Seam - sealed, cut-in floor. Connect Tech zipper attachment lets you add more living space or storage with add - on accessories, sold separately. Includes backpack carry bag with pockets for poles and stakes, along with 8 stakes, 6 guylines with tighteners and a pole repair tube. Footprint and garage sold separately.',
          score: '8',
          buy_link:
            'https://www.rei.com/product/894015/rei-co-op-kingdom-4-tent',
          image_link:
            'https://www.rei.com/media/bdabe369-bb27-4007-b805-38fb3040fe37?size=1020x510',
          review_link:
            'https://www.rei.com/product/894015/rei-co-op-kingdom-4-tent',
        },
        {
          product_name: 'REI Co-op Half Dome 2 Plus Tent',
          category: 'shelter',
          itemDescription:
            'Improved pole architecture boosts liveable space; vertical side walls provide generous head and shoulder room. Mesh panels in upper portion of tent improve ventilation and views; ripstop panels in lower portion of tent provide privacy, reduce drafts and exposure to blowing dust/dirt. REI Exclusive tension-truss architecture creates stable vertical sidewalls for generous space and plenty of headroom. 2 large doors and 2 vestibules offer easy access and additional covered storage. Hubbed, color-coded pole assembly simplifies setup. Pockets and hang loops help organize the interior. When zipped open, doors stash out of the way in pockets just inside the door opening. Fly design allows sides and ends to be rolled up to maximize views and airflow; everything also rolls down quickly if a storm blows in. Fly has 4 ceiling vents that provide airflow to prevent condensation buildup. Includes guylines with tighteners, pole-repair tube, pole bag 8 stakes and stake bag. Fly/footprint minimalist pitch option lets you leave the tent at home and use the fly, poles and footprint(sold separately) as a lightweight shelter.',
          score: '8',
          buy_link:
            'https://www.rei.com/product/128692/rei-co-op-half-dome-2-plus-tent',
          image_link:
            'https://www.rei.com/media/987133a9-eb2a-4453-b507-27b2b7e2fe02?size=1020x510',
          review_link:
            'https://www.switchbacktravel.com/reviews/rei-half-dome-2-tent',
        },
        {
          product_name: 'SOL Emergency Shelter Kit',
          category: 'shelter',
          itemDescription:
            'The SOL Emergency Shelter contains everything you need to rig a lean-to shelter or tarp canopy to protect you from of the elements. Heavy-duty heat-reflective blanket reflects 90% of your body heat back to you to keep you warm. Measures 96 in.x 60 in.and is 2.5 - times thicker than the SOL Survival Blanket. Lightweight anodized aluminum stakes are just what you need to keep the shelter staked down. Includes four 96 in.lengths of reflective 2.5mm cord with glow -in -the - dark micro cord tensioners for setting up. Detailed emergency shelter rigging instructions are included.',
          score: '7',
          buy_link:
            'https://www.rei.com/product/100134/sol-emergency-shelter-kit',
          image_link:
            'https://www.rei.com/media/0f1a5d91-bb87-4010-a00e-53743c181fc4?size=1020x510',
          review_link:
            'https://www.amazon.com/S-Survive-Outdoors-Longer-Emergency/dp/B00EVGD1IW#customerReviews',
        },
        {
          product_name: 'Kelty TraiLogic TN2 Tent',
          category: 'shelter',
          itemDescription:
            "Stargazing Fly rolls back for unobstructed nighttime views and deploys easily for coverage—without exiting the tent—if the weather changes. Freestanding tent body features 2 doors, a color - coded clip design, taped floor seams, mesh wall panels, internal storage pockets and DAC Jake's Foot mini pole attachments. Rainfly features 2 vestibules, taped seams, DAC Jake's Foot attachments, airflow vents, welded clear windows, noiseless zipper pulls and guyout points. Includes aluminum DAC® Pressfit poles that feature a securely fixed, pressed-in ferrule, ensuring the poles will remain strong and reliable.",
          score: '9',
          buy_link:
            'https://www.rei.com/product/865452/kelty-trailogic-tn2-tent',
          image_link:
            'https://www.rei.com/media/9dfed588-027a-4428-8a72-2c76f83df6fd?size=1020x510',
          review_link:
            'https://www.amazon.com/Kelty-TN-2-Person-Tent/dp/B00G6KURDI#customerReviews',
        },
        {
          product_name: 'Mountain House Chili Mac with Beef',
          category: 'foodandhydration',
          itemDescription:
            'Mountain House Chili Mac is the best way to enjoy real chili flavor with beef, beans and macaroni in a compact, vacuum packed, just-add-water pouch. Perfect for climbers, mountaineers and for those where space is a premium.',
          score: '10',
          buy_link:
            'https://www.amazon.com/Mountain-House-Chili-Beef-Pro-Pak/dp/B000KDH4XS/ref=sr_1_3?s=sporting-goods&ie=UTF8&qid=1517905878&sr=1-3&keywords=mountain+house',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/61Vr2xGq7mL._SL1200_.jpg',
          review_link:
            'https://www.amazon.com/Mountain-House-Chili-Beef-Pro-Pak/dp/B000KDH4XS/ref=sr_1_3?s=sporting-goods&ie=UTF8&qid=1517905878&sr=1-3&keywords=mountain+house#customerReviews',
        },
        {
          product_name: 'Mountain House Lasagna with Meat Sauce',
          category: 'foodandhydration',
          itemDescription:
            'Imagine sitting at the summit of your next climb eating a hot, flavorful meal of Lasagna with Meat sauce while gazing on the landscape below. Made with pasta, cheese and a rich meat sauce, you can enjoy real Italian style flavor anywhere your adventures take you. Packed into a compact, vacuum sealed pouch, simply add hot water to the pouch and in about 8-10 minutes you’ll have a delicious meal.',
          score: '9',
          buy_link:
            'https://www.amazon.com/Mountain-House-Lasagna-Sauce-Pro-Pak/dp/B000FXVBUK/ref=sr_1_5?s=sporting-goods&ie=UTF8&qid=1517905878&sr=1-5&keywords=mountain+house',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/61C6JTu4KYL._SL1200_.jpg',
          review_link:
            'https://www.amazon.com/Mountain-House-Lasagna-Sauce-Pro-Pak/dp/B000FXVBUK/ref=sr_1_5?s=sporting-goods&ie=UTF8&qid=1517905878&sr=1-5&keywords=mountain+house#customerReviews',
        },
        {
          product_name: 'ULTIMATE MRE, Meals Ready-to-Eat',
          category: 'cooking',
          itemDescription:
            'Made to sustain US Military troops in combat, these are hands-down the best MREs available anywhere. Approximately 1250 calories per meal. Meals include a variety of tasty Asian, Mexican, Italian, traditional, and vegetarian cuisine. Includes a large assortment of snacks, deserts, coffee, cappuccino, milk shakes, and hot chocolate. Only Military MREs include an accessory pack with flavor enhancing seasonings, matches, toilet paper, and other survival essentials.',
          score: '6',
          buy_link:
            'https://www.amazon.com/ULTIMATE-Inspection-Western-Frontiers-Guarantee/dp/B01EDB3H2Y/ref=sr_1_3?s=sporting-goods&ie=UTF8&qid=1517906407&sr=1-3&keywords=mre',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/91b87k7xpML._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/ULTIMATE-Inspection-Western-Frontiers-Guarantee/dp/B01EDB3H2Y/ref=sr_1_3?s=sporting-goods&ie=UTF8&qid=1517906407&sr=1-3&keywords=mre#customerReviews',
        },
        {
          product_name: 'Mountain House Just In Case...Essential Bucket',
          category: 'foodandhydration',
          itemDescription:
            'Convenient and easy-to-prepare, The Mountain House Essential assortment offers four pouches each of 3 entrees for backpacking, camping, emergency kits, and your long-term food storage. The clear, reusable bucket is an incredible solution to allowing these meals to be efficiently stored and organized for future times of need. From the Manufacturer Mountain House Just In Case long term buckets are easy to store buckets filled with our top selling items. These are perfect for emergency preparedness, camping, backpacking or at-home use.',
          score: '9',
          buy_link:
            'https://www.amazon.com/Mountain-House-Just-Essential-Bucket/dp/B00955337I/ref=sr_1_9?s=sporting-goods&ie=UTF8&qid=1517905878&sr=1-9&keywords=mountain+house',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/61882-xFPcL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/Mountain-House-Just-Essential-Bucket/dp/B00955337I/ref=sr_1_9?s=sporting-goods&ie=UTF8&qid=1517905878&sr=1-9&keywords=mountain+house#customerReviews',
        },
        {
          product_name: 'Sea to Summit Delta Long-handled Spoon',
          category: 'cooking',
          itemDescription:
            "For 2017, Sea to Summit's Delta Spoon has been stretched to a longer version.No more sticky knuckles as you stretch and scrape for the last morsels of food at the bottom of your food pack.",
          score: '9',
          buy_link:
            'https://www.amazon.com/Sea-Summit-Delta-Handled-Spoon/dp/B01LYZ0TQ1/ref=sr_1_12?s=sporting-goods&ie=UTF8&qid=1517906723&sr=1-12&keywords=long+handle+spoon',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/41s4d09bDsL._SL1000_.jpg',
          review_link:
            'https://www.amazon.com/Sea-Summit-Delta-Handled-Spoon/dp/B01LYZ0TQ1/ref=sr_1_12?s=sporting-goods&ie=UTF8&qid=1517906723&sr=1-12&keywords=long+handle+spoon#customerReviews',
        },
        {
          product_name: 'VICBAY 4 Pieces Stainless Steel Flatware Set',
          category: 'cooking',
          itemDescription:
            "Always be ready for a meal on the go with this 4 piece stainless steel travel cutlery set featuring a spoon, fork, knife and chopsticks. The material is 304 ASTM standard food used stainless steel, no harm to human body. Whether you're traipsing around a city, hiking in the mountains, enjoying a picnic in the local park or on your lunch break at work, you can rely on these top-quality utensils wherever and whenever it's time to eat. Plus, having this durable cutlery set on standby ensures you won't have to settle for one of those flimsy plastic forks ever again. Presented in a stylish neoprene pouch, your cutlery will be kept clean and compactly stored throughout the day - so it won't rattle around in your bag. This cutlery is part of a unique new range of innovative travel kitchenware that's specially designed to be multi-purpose, lightweight, compact, durable and eco-friendly. No plastic knife, No plastic fork, No plastic chopsticks in your travel life anymore when you carry this 4pcs set, an effective way to save our earth.",
          score: '8',
          buy_link:
            'https://www.amazon.com/Cookware-Backpacking-Carrying-Lightweight-Aluminum/dp/B01MU938P5/ref=sr_1_5?s=sporting-goods&ie=UTF8&qid=1517906989&sr=1-5&keywords=camping+cutlery',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/61WXeXf%2B3uL._SL1001_.jpg',
          review_link:
            'https://www.amazon.com/Cookware-Backpacking-Carrying-Lightweight-Aluminum/dp/B01MU938P5/ref=sr_1_5?s=sporting-goods&ie=UTF8&qid=1517906989&sr=1-5&keywords=camping+cutlery#customerReviews',
        },
        {
          product_name:
            'GM CLIMBING 8mm (5/16in) Accessory Cord Rope 19kN CE / UIAA',
          category: 'ropescordsaccessories',
          itemDescription:
            'GM CLIMBING Double Braid Accessory Cord is in particular designated for outdoor recreation activities, like making prusik loop, lanyard, ice threads for climbing, arborist, mountaineering, caving, and etc. Supple in handling, flexible and easy to tie knots. High Abrasion Resistance!Double braid, braided core with braided cover, well elaborated rope construction to make the cord super firm, and this "sturdy sheath" gives it great abrasion resistance which guarantees long-life utilization. High resistance to moisture, low stretch and high strength!All is due to its all high tenacity polyester material.One more advantage adds to its excellent outdoor environment adaption. Light weight and compact, takes almost no space in your backpack and easy to carry on.Acts as a great helper for you in outdoor environment.You can find so many creative applications out of this versatile cord.',
          score: '7',
          buy_link:
            'https://www.amazon.com/gp/product/B01H5CY7SQ/ref=s9_acsd_topr_hd_bw_bEHEh_c_x_2_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-4&pf_rd_r=CXBN28CVGZDFYRD8M53E&pf_rd_t=101&pf_rd_p=bdd267f5-d9d4-572e-b519-4acabdeb02bc&pf_rd_i=3402851',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/71Of%2BT7WUBL._SL1001_.jpg',
          review_link:
            'https://www.amazon.com/gp/product/B01H5CY7SQ/ref=s9_acsd_topr_hd_bw_bEHEh_c_x_2_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-4&pf_rd_r=CXBN28CVGZDFYRD8M53E&pf_rd_t=101&pf_rd_p=bdd267f5-d9d4-572e-b519-4acabdeb02bc&pf_rd_i=3402851#crewReviews',
        },
        {
          product_name: 'TricornE-Spool Tool-Multifunctional Paracord Device',
          category: 'ropescordsaccessories',
          itemDescription:
            'The Spool Tool is the most efficient, versatile, and compact way to keep your paracord ready for immediate use. While others are still fumbling with a rat’s nest of tangled cord you will have addressed the issue and neatly stored your Paracord; ready for the next emergency.',
          score: '8',
          buy_link:
            'https://www.amazon.com/Spool-Tool-Coyote-Ultimate-Paracord/dp/B00S8Q1JQC/ref=sr_1_1?s=sporting-goods&ie=UTF8&qid=1517907851&sr=1-1&keywords=paracord+cutter',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/719LiUR%2BP-L._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/Spool-Tool-Coyote-Ultimate-Paracord/dp/B00S8Q1JQC/ref=sr_1_1?s=sporting-goods&ie=UTF8&qid=1517907851&sr=1-1&keywords=paracord+cutter#customerReviews',
        },
        {
          product_name: 'BladeMate Survival Hatchet: Hand Held Camping Axe',
          category: 'knivesandblades',
          itemDescription:
            'BladeMate: A Better Blade, By Your Side. BLADEMATE GUARANTEE – Lifetime satisfaction guaranteed or your money back, no questions asked. At BladeMate we value quality, dependability, and you, our customer. Our signature survival knife was crafted with these values in mind. No frills, no gimmicks, just an honest blade you can depend on. We take pride in our craft and we stand by our customers. This knife, just like all our products, comes equipped with a lifetime warranty. If you find any fault with our product, simply return it for a full refund or free replacement. No questions asked. Just like our knives, we at BladeMate are by your side. A great gift for a handyman, firefighter, police officer, first responder, camper, hiker, hunter, SOG enthusiast, or soldier…or for yourself, to keep close by in your glove compartment. BladeMate is a veteran owned company. Proud to have served our country. Proud to serve you.',
          score: '6',
          buy_link:
            'https://www.amazon.com/BladeMate-Survival-Camping-Hatchet-Tactical/dp/B073VD1TKT/ref=sr_1_15?ie=UTF8&qid=1517272809&sr=8-15&keywords=hatchet',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/71Mw6QVJBLL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/BladeMate-Survival-Camping-Hatchet-Tactical/dp/B073VD1TKT/ref=sr_1_15?ie=UTF8&qid=1517272809&sr=8-15&keywords=hatchet#customerReviews',
        },
        {
          product_name: 'Husqvarna 13" Wooden Hatchet',
          category: 'knivesandblades',
          itemDescription:
            "Husqvarna provides a wide range of wooden axes for different kinds of work. These axes are forged in Sweden from Swedish axe steel with a consistently high quality. With good maintenance, your axe will last for a long time. Don't store in too warm conditions, since the handle might shrink.Always dry of dirt and moisten before putting the axe cover on. If the axe is put away for a longer time, grease it to prevent rust.",
          score: '5',
          buy_link:
            'https://www.amazon.com/Husqvarna-576926301-13-Wooden-Hatchet/dp/B00HC077GQ/ref=sr_1_10?ie=UTF8&qid=1517272809&sr=8-10&keywords=hatchet',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/51UxImI-1pL._SL1024_.jpg',
          review_link:
            'https://www.amazon.com/Husqvarna-576926301-13-Wooden-Hatchet/dp/B00HC077GQ/ref=sr_1_10?ie=UTF8&qid=1517272809&sr=8-10&keywords=hatchet#customerReviews',
        },
        {
          product_name: '24" TACTICAL SURVIVAL ZOMBIE MACHETE',
          category: 'knivesandblades',
          itemDescription:
            '24" Green Katana Samurai Sword Machete Steel Blade A very fine katana samurai sword machete. It has black stainless steel with blue tone blade, half serrated teeth back. This is full tang with black cord wrapped. It has black biohazard back carry sheath. Overall Length : 24.00 inches Blade Lenght : 16.75 Inches Handle Material : Black cord wrap Blade Material : Sharp stainless steel Black carrying sheath Comes in a Z-Hunter case Brand New',
          score: '10',
          buy_link:
            'https://www.amazon.com/TACTICAL-SURVIVAL-Fixed-Blade-MACHETE/dp/B01AD3D1FO/ref=sr_1_35?s=hunting-fishing&ie=UTF8&qid=1517277236&sr=1-35&keywords=hatchet',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/61LJb6lav-L._SL1000_.jpg',
          review_link:
            'https://www.amazon.com/TACTICAL-SURVIVAL-Fixed-Blade-MACHETE/dp/B01AD3D1FO/ref=sr_1_35?s=hunting-fishing&ie=UTF8&qid=1517277236&sr=1-35&keywords=hatchet#customerReviews',
        },
        {
          product_name: 'Helenbac Signal Mirror',
          category: 'signaling',
          itemDescription:
            'Heliography is the use of the sun’s light to transmit messages dating back to ancient Greek & Roman times. This mirror is made of ¼” laminated glass, and instructions are printed on the back. The sighting hole features a special reflectorized screen that directs a beam of sunlight onto the target. Reflect sunlight from mirror onto a nearby surface (raft, hand etc.) Slowly bring mirror up to eye level and look through sighting hole. You will see a bright spot: this is the aim indicator. Hold mirror close to the eye and slowly turn and manipulate it so that the bright light spot is on the target. Even if no potential rescuers are in sight, continue sweeping the horizon or other possible rescuer locations, as mirror flashes can be seen for distances up to 20 miles.',
          score: '8',
          buy_link:
            'https://www.amazon.com/Helenbac-Signal-Mirror/dp/B001MZ2EHO/ref=sr_1_1?s=sporting-goods&ie=UTF8&qid=1517279022&sr=1-1&keywords=signal+mirror',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/419N82CSRiL.jpg',
          review_link:
            'https://www.amazon.com/Helenbac-Signal-Mirror/dp/B001MZ2EHO/ref=sr_1_1?s=sporting-goods&ie=UTF8&qid=1517279022&sr=1-1&keywords=signal+mirror#customerReviews',
        },
        {
          product_name: 'Glock 17 Ameriglo Night Sights',
          category: 'defense',
          itemDescription:
            'Designed for professionals, the GLOCK 17, in 9x19, is the most widely used law enforcement pistol worldwide. Because of its unsurpassed reliability, above-average magazine capacity of 10 rounds in the standard magazine, and its low weight, it is trusted by law enforcement officers around the globe. With our revolutionary "Safe Action" trigger system, the G17 9x19 pistol is safe, easy, and quick - just what you need in high-pressure situations.',
          score: '9',
          buy_link:
            'https://www.turners.com/glock/glock-17-rtf-9mm-45-barrel-ame-475794',
          image_link:
            'http://cdn0.thetruthaboutguns.com/wp-content/uploads/2012/10/P1180828-900x601.jpg',
          review_link:
            'http://www.thefirearmblog.com/blog/2016/04/29/glock-17-gen-3-long-term-review/',
        },
        {
          product_name: 'Kimber Custom II .45ACP 5" Barrel',
          category: 'defense',
          itemDescription:
            'Kimber Custom Two-Tone  II 1911 Pistols combine precision craftsmanship with hair-splitting accuracy. Stainless steel match-grade barrels and bushings are held to exacting tolerances for superior consistency, and the crisp aluminum match-grade triggers ship from the factory at 4-5 lbs. High-grade internal parts deliver a lifetime of flawless performance. Full-size eye-catching grips, intricate slide serrations and a super-smooth finish make these pistols look just as good as they shoot. Kimber Firing Pin Safety™ adds an extra margin of confidence. Chamber Indicator Port® allows you to see the shell casing through the slot at the rear end of the barrel when a round is chambered. High-ride beavertail grip safety, extended thumb safety, checkered side release and Commander-style hammer. Brushed polished carbon slide, stainless frame and rosewood grips.',
          score: '10',
          buy_link:
            'https://www.turners.com/kimber/kimber-custom-ii-45acp-5-barre-273956',
          image_link:
            'http://thetruthaboutguns.com/wp-content/uploads/2011/06/Kimber_Custom_II_Left_Blog.jpg',
          review_link:
            'http://www.guns.com/review/gun-review-kimber-custom-ii-45-acp-1911-pistol/',
        },
        {
          product_name:
            'Ruger 10/22 Blued/Synthetic .22LR 18.5" Barrel Scope Combo',
          category: 'defense',
          itemDescription:
            'Weaver™ 3-9x40 scope featuring a Dual-X reticle. Patented, detachable 10 - round rotary magazine features a unique rotor to separate cartridges and provide reliable feeding. Legendary action, a tried and true Ruger design, ensures consistent, reliable performance. Cold hammer - forged barrel is locked into the receiver by a unique, two-screw, V-block system.                 Positive, push-button, cross-bolt manual safety. Combination scope base adapter for both Weaver-style and .22 tip-off scope mounts included. Easy - to - use extended magazine release provides smooth, no-fuss removal of flush-mounted magazine. Heat - stabilized, glass-filled, polymer trigger housing assembly is precision made of high-tech material for improved manufacturing tolerances, impact and abrasion-resistance and an unmatched ability to withstand the elements.',
          score: '10',
          buy_link:
            'https://www.turners.com/ruger/ruger-10/22-blued/synthetic-22-658879',
          image_link:
            'https://www.ruger.com/products/1022Carbine/images/top.jpg',
          review_link: 'http://www.gunsandammo.com/reviews/ruger-1022-review/',
        },
        {
          product_name: 'Remington 700 Magpul 5-R 308Win Threaded 22" Barrel',
          category: 'defense',
          itemDescription:
            'Remington rifles built on the Model 700 action have made their mark from the front lines of combat to the firing lines of local shooting ranges. Adding to that reputation of tactical superiority in 2017, we proudly introduce the Remington Model 700 Magpul.',
          score: '9',
          buy_link:
            'https://www.turners.com/remington/remington-700-magpul-5-r-308wi-462075',
          image_link:
            'https://i0.wp.com/rifleshooter.com/wp-content/uploads/2017/02/Remington-Model-700-MAGPUL-review-260-6.jpg?w=2000&ssl=1',
          review_link:
            'https://rifleshooter.com/2017/02/remington-model-700-magpul-review/',
        },
        {
          product_name: 'The Zombie Survival Guide',
          category: 'emergencyandsurvival',
          itemDescription:
            'The Zombie Survival Guide is your key to survival against the hordes of undead who may be stalking you right now. Fully illustrated and exhaustively comprehensive, this book covers everything you need to know, including how to understand zombie physiology and behavior, the most effective defense tactics and weaponry, ways to outfit your home for a long siege, and how to survive and adapt in any territory or terrain.',
          score: '10',
          buy_link:
            'https://www.amazon.com/Zombie-Survival-Guide-Complete-Protection/dp/1400049628',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/51P-197df6L.jpg',
          review_link:
            'https://www.amazon.com/Zombie-Survival-Guide-Complete-Protection/dp/1400049628#customerReviews',
        },
        {
          product_name: 'MSR Strike Igniter',
          category: 'firestarters',
          itemDescription:
            "More reliable than a lighter because moisture and pressure don't affect performance. Produces 5, 500°F sparks that light stoves quickly. Lasts for 3, 000 to 12, 000 strikes—far more than average lighters. Like many MSR Stove accessories, it has a built-in bottle opener.",
          score: '8',
          buy_link: 'https://www.rei.com/product/101108/msr-strike-igniter',
          image_link:
            'https://www.rei.com/media/d31deaf0-e63d-4e01-9609-83c1bb71c994?size=1020x510',
          review_link: 'http://www.trailspace.com/gear/msr/strike-igniter/',
        },
        {
          product_name: 'Marmot Limelight 3P Tent with Footprint',
          category: 'shelter',
          itemDescription:
            'Large double door and rear D-shaped door lead to 2 vestibules to keep your gear dry in wet weather. DAC Press - Fit poles and Velocity aluminum 7000 ridge pole are simple to set up; Body Zone pre-bends create vertical walls for a more spacious living area. Color-coded Easy Pitch clips and poles; strategic clip placement enhances interior volume. Seam-taped, full-coverage fly with vents. Seam-taped, catenary cut floor. Interior pockets for small - gear organization; Lamp Shade pocket securely holds your headlamp to provide ambient light. Jingle - free nylon zipper pulls. Footprint included.',
          score: '9',
          buy_link:
            'https://www.rei.com/product/895812/marmot-limelight-3p-tent-with-footprint',
          image_link:
            'https://www.rei.com/media/80c49bb0-4bf1-46fe-8ad9-99a0dfa27611?size=1020x510',
          review_link:
            'https://www.amazon.com/Marmot-Unisex-Limelight-Cinder-Rusted/dp/B0176X87CQ#customerReviews',
        },
        {
          product_name: 'Smith & Wesson M+P15 Sport II 5.56MM 16" Barrel',
          category: 'defense',
          itemDescription:
            'Built to perform multiple uses under various conditions, M&P15 Rifles are as versatile as they are reliable. Engineered for a wide variety of recreational, sport shooting and professional applications, M&P15 Rifles are easy to accessorize, but hard to put down. M&P15 Rifles are lightweight and rugged embodying the best combination of function and form.',
          score: '9',
          buy_link:
            'https://www.turners.com/smith-and-wesson/smith--wesson-mp15-sport-ii-55-472441',
          image_link:
            'https://www.tombstonetactical.com/images/smith-wesson/10202-LE-1-large.jpg',
          review_link:
            'http://www.thetruthaboutguns.com/2011/06/benjamin-t-shotzberger/%EF%BB%BF-gun-review-smith-and-wesson-mp15-sport/',
        },
        {
          product_name: 'Magellan Triton 1500 Waterproof Hiking GPS',
          category: 'gpsandcompass',
          itemDescription:
            'An Interactive Experience: 2.7" (6.9 cm) full-color display and the worlds first handheld GPS touch-screen. Entertainment Must - Haves: Triton 1500 customers can view photos and listen to MP3 files and audio books at night. Record and Remember: Embedded speaker and microphone make it easy to record audio files. Light a Clear Path: An embedded LED flashlight provides added safety and convenience at night. Memory Boost: Storing data, including additional maps, MP3 files, photos, terrain.',
          score: '5',
          buy_link:
            'https://www.amazon.com/Magellan-Triton-1500-Waterproof-Hiking/dp/B000V4S6Y2/ref=sr_1_9?s=electronics&ie=UTF8&qid=1517911332&sr=1-9&keywords=handheld+gps',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/8169oUe7DKL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/Magellan-Triton-1500-Waterproof-Hiking/dp/B000V4S6Y2/ref=sr_1_9?s=electronics&ie=UTF8&qid=1517911332&sr=1-9&keywords=handheld+gps#customerReviews',
        },
        {
          product_name: 'CMMG Official US Military Tritium Lensatic Compass',
          category: 'gpsandcompass',
          itemDescription:
            'The Tritium Lensatic Compass is built to the demanding specification MIL-PRF-10436N. Battle tested through rigorous shock, water, sand proof, and functional from -50o F to +150o F. Seven Tritium Micro Lights allow for navigation in low-light conditions, without the need for a flashlight or any other light source. Tritium Micro Lights remain luminous for over twelve years, maintenance-free. Equipped with a magnifying lens, sight wire, and dial graduations in both degrees and mils to ensure accurate readings. The Copper Induction Damping System slow the rotation of the magnet without the use of liquids. Built to last with an aluminum frame and waterproof housing. The Cammenga compass is depended on by fighting forces, government agencies, and adventurous outdoor enthusiasts around the world.',
          score: '9',
          buy_link:
            'https://www.amazon.com/Official-Military-Tritium-Lensatic-Compass/dp/B001W2CJX6',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/91Tb82SyIcL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/Official-Military-Tritium-Lensatic-Compass/dp/B001W2CJX6#customerReviews',
        },
        {
          product_name:
            'Eyeskey Multifunctional Military Army Aluminum Alloy Compass',
          category: 'gpsandnavigation',
          itemDescription:
            'Thermo-elastic liquid-filled capsule with floating dial. Rotating bezel ring. Built -in bubble level. Tripod screw hole on base. Adjustable diopter sighting lens. Sighting lines on cover. Conversion chart for angle, gradient & distance on back plate. Heavy - duty and sturdy.',
          score: '7',
          buy_link:
            'https://www.amazon.com/Eyeskey-Multifunctional-Military-Waterproof-Activities/dp/B00QR3LOO0/ref=lp_10208058011_1_13?s=outdoor-recreation&ie=UTF8&qid=1517911608&sr=1-13',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/61tPCeAI%2BzL._SL1000_.jpg',
          review_link:
            'https://www.amazon.com/Eyeskey-Multifunctional-Military-Waterproof-Activities/dp/B00QR3LOO0/ref=lp_10208058011_1_13?s=outdoor-recreation&ie=UTF8&qid=1517911608&sr=1-13#customerReviews',
        },
        {
          product_name:
            'Uniden BC125AT: Public Safety, Military Aircraft, Racing Scanner',
          category: 'emergencyandsurvival',
          itemDescription:
            'Listen in and stay informed with the Uniden BC125AT Compact Bearcat Handheld Scanner. This sophisticated scanner with 500 alpha-tagged channels boasts a convenient compact design and loads of features. Close Call RF capture technology instantly tunes to signals from nearby transmitters and the Do Not Disturb Mode prevents Close Call checks during a transmission. With this Bearcat scanner, you can listen to military and civilian air bands. You can also get important weather and safety alerts.',
          score: '8',
          buy_link:
            'https://www.amazon.com/Uniden-BC125AT-Military-Aircraft-Channels/dp/B00772MR0K/ref=sr_1_56?s=outdoor-recreation&ie=UTF8&qid=1517911917&sr=1-56',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/71r%2BkDAK2BL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/Uniden-BC125AT-Military-Aircraft-Channels/dp/B00772MR0K/ref=sr_1_56?s=outdoor-recreation&ie=UTF8&qid=1517911917&sr=1-56#customerReviews',
        },
        {
          product_name: 'Garmin eTrex 20x',
          category: 'gpsandnavigation',
          itemDescription:
            'Greater resolution with 240 x 320 display pixels for improved readability. Internal memory expanded to hold more maps. High - sensitivity, WAAS-enabled GPS receiver with HotFix and GLONASS support. 2.2 - inch color display. Worldwide basemap with shaded relief.',
          score: '7',
          buy_link:
            'https://www.amazon.com/Garmin-010-01508-00-eTrex-20x/dp/B00XQE6ZFG/ref=sr_1_85?s=outdoor-recreation&ie=UTF8&qid=1517912016&sr=1-85',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/81Dg74xfbOL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/Garmin-010-01508-00-eTrex-20x/dp/B00XQE6ZFG/ref=sr_1_85?s=outdoor-recreation&ie=UTF8&qid=1517912016&sr=1-85#customerReviews',
        },
        {
          product_name: 'Kershaw Brawler (1990) Folding Pocket Knife',
          category: 'knivesandblades',
          itemDescription:
            'The Brawler starts with a modified tanto blade—a shape often found in tactical and rescue knives that may be required to punch through tough materials. The tanto is an ideal shape for these piercing tasks because there is plenty of metal to support the point, making it stronger than many other blade shapes. You’ll notice that the top of the Brawler’s blade has a grind, too. This is called a swedge; it helps narrow the blade, adding to its piercing power.',
          score: '7',
          buy_link:
            'https://www.amazon.com/Kershaw-Back-Oxide-High-Performance-Glass-Filled-Reversible/dp/B005UE6GRC/ref=sr_1_4?ie=UTF8&qid=1517272476&sr=8-4&keywords=kershaw',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/41ylWXC-ZSL.jpg',
          review_link:
            'https://www.amazon.com/Kershaw-Back-Oxide-High-Performance-Glass-Filled-Reversible/dp/B005UE6GRC/ref=sr_1_4?ie=UTF8&qid=1517272476&sr=8-4&keywords=kershaw#customerReviews',
        },
        {
          product_name: 'Mountain House Beef Stroganoff with Noodles',
          category: 'foodandhydration',
          itemDescription:
            'Mountain House Beef Stroganoff is hands down one of the most popular meals we make. Made with real pieces of tender beef, savory mushrooms and onions in a creamy sauce, one bite will make you a believer. No longer do you need to waste time cleaning pots and pans after a meal. Simply add hot water to the pouch and in about 8-10 minutes you’ll have a delicious meal you can eat anywhere! Vacuum Sealed for compactness and so it won’t expand at altitude, our Pro-Paks are perfect for climbing and high altitude adventures',
          score: '8',
          buy_link:
            'https://www.amazon.com/Mountain-House-Stroganoff-Noodles-Pro-Pak/dp/B000RHEMDM/ref=sr_1_6?ie=UTF8&qid=1517912893&sr=8-6&keywords=camping+food',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/714Zh53UFrL._SL1200_.jpg',
          review_link:
            'https://www.amazon.com/Mountain-House-Stroganoff-Noodles-Pro-Pak/dp/B000RHEMDM/ref=sr_1_6?ie=UTF8&qid=1517912893&sr=8-6&keywords=camping+food#customerReviews',
        },
        {
          product_name: 'InstaFire Granulated Fire Starter',
          category: 'firestarters',
          itemDescription:
            'Naturally insulated to burn directly on top of water, sleet, snow, ice or anywhere else. Once lit, will sustain winds up to 30 mph and burns up to 1000 degrees Fahrenheit. Long burn time, 25 minutes per pouch. Unlike cubes or fuel-based lighters, this lighter is made from recycled wood, volcanic rock, and a new, patented blend of food-grade paraffin wax. Leftover ash serves as a natural fertilizer. No lighter fluids or starters needed. No risk of unexpected fires or flare-ups. 30 year shelf life and stores safely near food, pets and children. One of the top emergency preparedness accessories to keep on hand.',
          score: '9',
          buy_link:
            'https://www.amazon.com/InstaFire-Granulated-Starter-Natural-Eco-Friendly/dp/B008Y5AAKS/ref=sr_1_8_acs_twc_TWC1046_1?s=sporting-goods&ie=UTF8&qid=1517913053&sr=1-8-acs&keywords=fire+starter&tag=ospsearch-20&ascsubtag=TWC1046',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/71c4E8zhN3L._SL1001_.jpg',
          review_link:
            'https://www.amazon.com/InstaFire-Granulated-Starter-Natural-Eco-Friendly/dp/B008Y5AAKS/ref=sr_1_8_acs_twc_TWC1046_1?s=sporting-goods&ie=UTF8&qid=1517913053&sr=1-8-acs&keywords=fire+starter&tag=ospsearch-20&ascsubtag=TWC1046#customerReviews',
        },
        {
          product_name:
            'Lodge Cast Iron Skillet with Red Silicone Hot Handle Holder',
          category: 'cooking',
          itemDescription:
            "Hailed as an essential kitchen tool by the country's leading chefs and publications, the Lodge cast iron skillet is crafted to cook memorable meals for generations. As the only full line of American-made cast iron cookware, Lodge boasts quality that has been unmatched for over a century.Home cooks love Lodge for the even heating and natural, easy-release finish.Outdoorsmen love the versatility and durability.Everyone loves the value of cookware that performs for decades.At Lodge, we don’t just make cast iron; we make heirlooms that bring people together for generations.",
          score: '10',
          buy_link:
            'https://www.amazon.com/Lodge-Skillet-Silicone-Handle-12-inch/dp/B00G2XGC88/ref=sr_1_3_acs_twc_TWC11688_1?s=sporting-goods&ie=UTF8&qid=1517914518&sr=1-3-acs&keywords=cast+iron+skillet&tag=ospsearch-20&ascsubtag=TWC11688',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/61arCbDITZL._SL1500_.jpg',
          review_link:
            'https://www.amazon.com/Lodge-Skillet-Silicone-Handle-12-inch/dp/B00G2XGC88/ref=sr_1_3_acs_twc_TWC11688_1?s=sporting-goods&ie=UTF8&qid=1517914518&sr=1-3-acs&keywords=cast+iron+skillet&tag=ospsearch-20&ascsubtag=TWC11688#customerReviews',
        },
      ],
      {
        ignoreDuplicates: true,
      }
    ).then(function(tableProducts) {
      console.log(tableProducts);
    });
  });
