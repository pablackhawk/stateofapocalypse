const db = require("./models");

//Push data into table
db.sequelize.sync({
    force: true
}).then(function() {
    db.Products.bulkCreate([
        {
            item_num: 1,
            product_name: "ATAX Multi-tool",
            category: "knivesandblades",
            score:3,
            buy_link: "https://www.topsknives.com/knives/survival/atax",
            video_link: "https://www.topsknives.com/knives/survival/atax"
        },
        {
            item_num: 2,
            product_name: "EL CHETE",
            category: "knivesandblades",
            score:7,
            buy_link: "https://www.topsknives.com/knives/survival/el-chete"
        },{
            item_num: 3,
            product_name: "Leatherman Surge Multitool",
            category: "knivesandblades",
            score:7,
            buy_link: "https://www.rei.com/product/728652/leatherman-surge-multi-tool"
        },{
            item_num: 4,
            product_name: "Ka-Bar Becker BK2 Campanion Fixed Blade Knife",
            category: "knivesandblades",
            score:8,
            buy_link: "https://www.amazon.com/gp/product/B001N1DPDE/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001N1DPDE&linkCode=as2&tag=wildernesstod-20&linkId=ZGT7E67D3ZPPWNRG",
        },{
            item_num: 5,
            product_name: "CRKT KANGEE T-Hawk with Spike Designed by Ryan Johnson",
            category: "knivesandblades",
            score:8,
            buy_link: "https://www.amazon.com/gp/product/B00BBOBXD2/ref=as_at/?imprToken=3OZ6HJRVJC.iBKBjhbj.9Q&slotNum=1&ie=UTF8&camp=1789&creative=390957&creativeASIN=B00BBOBXD2&linkCode=w61&tag=tbobg-20"
        },{
            item_num: 6,
            product_name: "SOG Entrenching Tool F08-N - Folding Shovel, High Carbon Steel Handle, Nylon Carry Case, Powder Coat Finish",
            category: "knivesandblades",
            score:8,
            buy_link: "https://www.amazon.com/SOG-Entrenching-Tool-F08-N-Folding/dp/B0038A05X6/ref=sr_1_9?s=hi&ie=UTF8&qid=1517170215&sr=1-9&keywords=Canteen"
        },{
            item_num: 7,
            product_name: "LifeStraw Personal Water Filter for Hiking, Camping, Travel, and Emergency Preparedness",
            category: "foodandhydration",
            score:8,
            buy_link: "https://www.amazon.com/LifeStraw-Personal-Camping-Emergency-Preparedness/dp/B006QF3TW4/ref=sr_1_4?ie=UTF8&qid=1517165177&sr=8-4&keywords=survival+gear"
        },{
            item_num: 8,
            product_name: "ER Emergency Ration 1AQK-4P 2400 Calorie Emergency Food Bar for Survival Kits and Disaster Preparedness (Pack of 4)",
            category: "foodandhydration",
            score:8,
            buy_link: "https://www.amazon.com/ER-Emergency-Ration-1AQK-4P-Preparedness/dp/B008DEYAZ6/ref=sr_1_3?s=sporting-goods&ie=UTF8&qid=1517169008&sr=1-3&keywords=Survival+Rations"
        },{
            item_num: 9,
            product_name: "Potable Aqua Water Purification Treatment (50 Tablets) - Portable Drinking Water Treatment Ideal for Emergencies, Survival, Travel, and Camping",
            category: "foodandhydration",
            score:8,
            buy_link: "https://www.amazon.com/Potable-Aqua-Purification-Treatment-Tablets/dp/B001949TKS/ref=sr_1_4?s=hi&ie=UTF8&qid=1517170094&sr=1-4&keywords=Water+Purification+Tablets"
        },{
            item_num: 10,
            product_name: "Rothco Vintage Canteen Carry",
            category: "foodandhydration",
            score:8,
            buy_link: "https://www.amazon.com/Rothco-ROT110-11-Vintage-Canteen-Carry/dp/B00664SPG0/ref=pd_sbs_200_5?_encoding=UTF8&pd_rd_i=B00664SPG0&pd_rd_r=108W6CANKCXBX6EF1GTE&pd_rd_w=dFTut&pd_rd_wg=dwgfm&refRID=108W6CANKCXBX6EF1GTE"
        },{
            item_num: 11,
            product_name: "12/16 Pcs Camping Cookware Stove Carabiner Canister Stand Tripod Folding Spork Set Bisgear Outdoor Camping Hiking Backpacking Non-stick Cooking Picnic Knife Spoon Wine Opener",
            category: "cooking",
            score:8,
            buy_link: "https://www.amazon.com/Cookware-Carabiner-Bisgear-Backpacking-Non-stick/dp/B01KUFNXZ8/ref=sr_1_2?ie=UTF8&qid=1517167162&sr=8-2&keywords=survival+gear+cooking "
        },{
            item_num: 12,
            product_name: "Flash Personal Cooking System",
            category: "cooking",
            score:8,
            buy_link: "https://www.amazon.com/Jetboil-Flash-Personal-Cooking-System/dp/B0093UA45Y/ref=as_li_ss_tl?s=sporting-goods&ie=UTF8&qid=1498662697&sr=1-3&keywords=jetboil+stove+kit&linkCode=sl1&tag=outdoorlife03-20&linkId=291c587d3a72568f0f25f5874130e8a0"
        },{
            item_num: 13,
            product_name: "TACT Bivvy Emergency Survival Sleeping Bag - Lightweight, Waterproof Bivy Sack Emergency Blanket with HeatEcho Thermal Blanket Material & Nylon Bag, Use in Survival Kit, Camping Gear & Survival Gear",
            category: "shelter",
            score:8,
            buy_link: "https://www.amazon.com/TACT-Bivvy-Emergency-Survival-Sleeping/dp/B01M9CBOP3/ref=sr_1_7?ie=UTF8&qid=1517165177&sr=8-7&keywords=survival+gear"
        },{
            item_num: 14,
            product_name: "Survival Shack Emergency Survival Shelter Tent | 2 Person Mylar Thermal Shelter | 8' X 5' All Weather Tube Tent | Reflective Material Conserves Heat | Lightweight | Waterproof | Best Survival Gear",
            category: "shelter",
            score:8,
            buy_link: "https://www.amazon.com/Emergency-Reflective-Conserves-Lightweight-Waterproof/dp/B01GOL67YG/ref=sr_1_13?ie=UTF8&qid=1517165177&sr=8-13&keywords=survival+gear"
        },{
            item_num: 15,
            product_name: "UST WetFire Tinder",
            category: "firestarters",
            score:8,
            buy_link: "https://www.amazon.com/UST-20-1WG0412-WetFire-Tinder-8-Pack/dp/B001H9N8BQ/ref=sr_1_25?ie=UTF8&qid=1517165861&sr=8-25&keywords=survival+gear"
        },{
            item_num: 16,
            product_name: "X-Plore Gear Firestarter - 3-In-1 Survival Multifunction Tool - Magnesium Fire Starter Rod, Magnetic Compass & Emergency Whistle - Ideal For Outdoor Camping & Disaster Supply Kits",
            category: "firestarters",
            score:8,
            buy_link: "https://www.amazon.com/X-Plore-Gear-Firestarter-Multifunction-Magnesium/dp/B01M68RGRI/ref=sr_1_10?ie=UTF8&qid=1517166551&sr=8-10&keywords=survival+gear"
        },{
            item_num: 17,
            product_name: "Patagonia Men's Storm Racer Jacket",
            category: "clothing",
            score:8,
            buy_link: "http://www.patagonia.com/product/mens-storm-racer-running-jacket/24110.html"
        },{
            item_num: 18,
            product_name: "Ellsworth & Company Men's Ellsworth Hike/Pack Socks Featuring Patented VChannel Technology",
            category: "clothing",
            score:8,
            buy_link: "https://www.amazon.com/Ellsworth-Company-Featuring-Patented-Technology/dp/B072L6PS55"
        },{
            item_num: 19,
            product_name: "Vgo… Goatskin Leather Waterproof Winter Work Gloves(Size M/L/XL/XXL/XXXL, Grey)",
            category: "clothing",
            score:8,
            buy_link: "https://www.amazon.com/Vgo-Goatskin-Leather-Waterproof-Winter/dp/B07216T7TY/ref=sr_1_9?s=hi&ie=UTF8&qid=1517169866&sr=1-9&keywords=Work+Gloves"
        },{
            item_num: 20,
            product_name: "X-Plore Gear Emergency Paracord Bracelets | Set Of 2| The ULTIMATE Tactical Survival Gear| Flint Fire Starter, Whistle, Compass & Scraper/Knife| BEST Wilderness Survival-Kit For Camping/Fishing & More",
            category: "ropescordsaccessories",
            score:8,
            buy_link: "https://www.amazon.com/X-Plore-Gear-Emergency-Wilderness-Survival-Kit/dp/B06XZ9SMZ9/ref=sr_1_3?ie=UTF8&qid=1517167162&sr=8-3&keywords=survival+gear+cooking"
        },{
            item_num: 21,
            product_name: 'Gorilla 6035180 Tape, Black Duct Tape, 1.88" x 35 yd, Black, (Pack of 1)',
            category: "ropescordsaccessories",
            score:8,
            buy_link: "https://www.amazon.com/Gorilla-6035180-Black-Tape-1-88/dp/B000CSS8UE/ref=sr_1_1_sspa?s=sporting-goods&ie=UTF8&qid=1517169651&sr=1-1-spons&keywords=gorilla+tape&psc=1"
        },{
            item_num: 22,
            product_name: "Big Wall Traverse - UIAA Certified 25kn Aluminum Carabiners - Screw Lock, Straight Gate or Bent Gate",
            category: "ropescordsaccessories",
            score:8,
            buy_link: "https://www.amazon.com/Big-Wall-Traverse-Certified-Carabiners/dp/B0175B8ME2/ref=sr_1_1_sspa?s=sporting-goods&ie=UTF8&qid=1517169691&sr=1-1-spons&keywords=carabiner&psc=1"
        },{
            item_num: 23,
            product_name: "CVLIFE Outdoor Tactical Backpack Military Rucksacks for Camping Hiking and Trekking Waterproof 30L",
            category: "bagsandpacks",
            score:8,
            buy_link: "https://www.amazon.com/CVLIFE-Tactical-Backpack-Rucksacks-Waterproof/dp/B00Z5F2LQG/ref=sr_1_16?ie=UTF8&qid=1517165177&sr=8-16&keywords=survival%2Bgear&th=1"
        },{
            item_num: 24,
            product_name: "Nathan HyperBrite Strobe",
            category: "signaling",
            score:8,
            buy_link: "https://www.rei.com/product/874404/nathan-hyperbright-strobe"
        },{
            item_num: 25,
            product_name: "First Aid Only All-Purpose First Aid Essentials Kit, 299 Pieces, Fabric Case",
            category: "firstaid",
            score:8,
            buy_link: "https://www.amazon.com/gp/product/B000069EYA/ref=as_li_tl?ie=UTF8&tag=biipgf_100917_best-first-aid-kits-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B000069EYA&linkId=ad0e174a1a558aa470a3d6581c840c00"
        },{
            item_num: 26,
            product_name: "Recon Medical BLK-1PAK-FBA Tourniquet - (Black) Gen 3 Mil-Spec Kevlar Metal Windlass Aluminum First Aid Tactical Swat Medic Pre-Hospital Life Saving Hemorrhage Control Registration Card 1 Pack",
            category: "firstaid",
            score:8,
            buy_link: "https://www.amazon.com/Recon-Medical-BLK-1PAK-FBA-Tourniquet-Pre-Hospital/dp/B01ETMVQOI/ref=sr_1_2_sspa?ie=UTF8&qid=1517170421&sr=8-2-spons&keywords=Tourniquet&psc=1"
        },{
            item_num: 26,
            product_name: "Recon Medical BLK-1PAK-FBA Tourniquet - (Black) Gen 3 Mil-Spec Kevlar Metal Windlass Aluminum First Aid Tactical Swat Medic Pre-Hospital Life Saving Hemorrhage Control Registration Card 1 Pack",
            category: "firstaid",
            score:8,
            buy_link: "https://www.amazon.com/Recon-Medical-BLK-1PAK-FBA-Tourniquet-Pre-Hospital/dp/B01ETMVQOI/ref=sr_1_2_sspa?ie=UTF8&qid=1517170421&sr=8-2-spons&keywords=Tourniquet&psc=1"
        },{
            item_num: 27,
            product_name: 'SAM Rolled Splint 36", Orange/Blue',
            category: "firstaid",
            score:8,
            buy_link: "https://www.amazon.com/SAM-Rolled-Splint-Orange-Blue/dp/B001J5H92C/ref=sr_1_5_a_it?ie=UTF8&qid=1517170476&sr=8-5&keywords=Sam+Splint"
        },{
            item_num: 28,
            product_name: "Fenix PD35 TAC 1000 Lumen CREE XP-L LED Tactical Flashlight with Two EdisonBright CR123A Lithium Batteries",
            category: "lighting",
            score:8,
            buy_link: "https://www.amazon.com/Tactical-Flashlight-EdisonBright-Lithium-Batteries/dp/B00DR9GWX0/ref=sr_1_2_sspa?ie=UTF8&qid=1517168426&sr=8-2-spons&keywords=Fenix+PD35+Tactical+Flashlight&psc=1"
        },{
            item_num: 29,
            product_name: "Fenix PD35 TAC 1000 Lumen CREE XP-L LED Tactical Flashlight with Two EdisonBright CR123A Lithium Batteries",
            category: "lighting",
            score:8,
            buy_link: "https://www.amazon.com/Tactical-Flashlight-EdisonBright-Lithium-Batteries/dp/B00DR9GWX0/ref=sr_1_2_sspa?ie=UTF8&qid=1517168426&sr=8-2-spons&keywords=Fenix+PD35+Tactical+Flashlight&psc=1"
        },{
            item_num: 30,
            product_name: "Olympia EX550 Lightweight Water Resistant LED Headlamp, 550 Lumens",
            category: "lighting",
            score:8,
            buy_link: "https://www.amazon.com/Olympia-EX550-Lightweight-Resistant-Headlamp/dp/B00K5FFU50/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=outdoorlife03-20&linkId=60f77c2d92df8e735137e60361e1475e"
        },{
            item_num: 31,
            product_name: "Garmin GPSMAP 64 Worldwide with High-Sensitivity GPS and GLONASS Receiver",
            category: "gpsandcompass",
            score:8,
            buy_link: "https://www.amazon.com/dp/B00HWL9AR4/ref=sr_ob_1?s=sports-and-fitness&ie=UTF8&qid=1517168503&sr=1-1"
        },{
            item_num: 32,
            product_name: "Suunto MC-2 Compass",
            category: "gpsandcompass",
            score:8,
            buy_link: "https://www.amazon.com/Suunto-SS004252010-MC-2G-Global-Compass/dp/B000FEUCRW/ref=sr_1_cc_1?s=aps&ie=UTF8&qid=1517169450&sr=1-1-catcorr&keywords=suunto+compass"
        },{
            item_num: 33,
            product_name: "Nikon 7576 MONARCH 5 8x42 Binocular (Black)",
            category: "optics",
            score:8,
            buy_link: "https://www.amazon.com/Nikon-7576-MONARCH-Binocular-Black/dp/B00C66C950/ref=sr_1_fkmr0_1?s=sporting-goods&ie=UTF8&qid=1517168687&sr=1-1-fkmr0&keywords=Nikon+Monarch+ATB+8%C3%9742."
        },{
            item_num: 34,
            product_name: "CenterPoint Sniper 370- Crossbow Package",
            category: "defense",
            score:8,
            buy_link: "https://www.amazon.com/CenterPoint-Sniper-370-Crossbow-Package/dp/B01H7KULFO/ref=sr_1_4?s=hunting-fishing&ie=UTF8&qid=1517170937&sr=1-4&keywords=crossbow"
        },{
            item_num: 35,
            product_name: "Bushcraft 101: A Field Guide to the Art of Wilderness Survival",
            category: "emergencyandsurvival",
            score:8,
            buy_link: "https://www.amazon.com/Bushcraft-101-Field-Wilderness-Survival/dp/1440579776/ref=sr_1_3?ie=UTF8&qid=1517165177&sr=8-3&keywords=survival+gear"
        },{
            item_num: 36,
            product_name: "Banana Boat Sport Performance Lotion Sunscreens with PowerStay Technology SPF 30, 8 Ounces",
            category: "sunandprotection",
            score:8,
            buy_link: "https://www.amazon.com/Banana-Boat-Performance-Sunscreens-Technology/dp/B0030ZEGDY/ref=sr_1_6_s_it?s=hpc&ie=UTF8&qid=1517170562&sr=1-6&keywords=sunscreen"
        },{
            item_num: 37,
            product_name: "Teva Arrowood Riva Mid WP Boots",
            category: "shoes",
            score:8,
            buy_link: "https://www.rei.com/product/120664/teva-arrowood-riva-mid-wp-boots-mens"
        },{
            item_num: 38,
            product_name: "The North Face Hedgehog Fastpack Mid Gore-Tex Hiking Boots",
            category: "shoes",
            score:8,
            buy_link: "https://www.rei.com/product/114091/the-north-face-hedgehog-fastpack-mid-gore-tex-hiking-boots-mens"
        },{
            item_num: 39,
            product_name: "Lowa Zephyr GTX Hi TF Hiking Boots",
            category: "shoes",
            score:8,
            buy_link: "https://www.rei.com/product/114091/the-north-face-hedgehog-fastpack-mid-gore-tex-hiking-boots-mens"
        },{
            item_num: 40,
            product_name: "Merrell Moab 2 Mid WP Hiking Boots",
            category: "shoes",
            score:8,
            buy_link: "https://www.rei.com/product/113731/merrell-moab-2-mid-wp-hiking-boots-womens"
        },{
            item_num: 41,
            product_name: "The North Face Endurus Mid GTX Hiking Boots ",
            category: "shoes",
            score:8,
            buy_link: "https://www.rei.com/product/113998/the-north-face-endurus-mid-gtx-hiking-boots-womens"
        },{
            item_num: 42,
            product_name: "REI Co-op Flash 45 Pack",
            category: "backpacks",
            score:8,
            buy_link: "https://www.rei.com/product/111161/rei-co-op-flash-45-pack-mens"
        },{
            item_num: 43,
            product_name: "Mammut Trion Pro 50 + 7 Pack",
            category: "backpacks",
            score:8,
            buy_link: "https://www.rei.com/product/125250/mammut-trion-pro-50-7-pack"
        },{
            item_num: 44,
            product_name: "Osprey Aether AG 85 Pack",
            category: "backpacks",
            score:8,
            buy_link: "https://www.rei.com/product/111286/osprey-aether-ag-85-pack-mens"
        },{
            item_num: 45,
            product_name: "Kelty Trekker 65 Pack",
            category: "backpacks",
            score:8,
            buy_link: "https://www.rei.com/product/895713/kelty-trekker-65-pack"
        },{
            item_num: 46,
            product_name: "LA Police Gear Atlas 72 Hour Tactical Backpack",
            category: "backpacks",
            score:8,
            buy_link: "https://www.rei.com/search.html?q=LA+Police+Gear+Atlas+72+Hour+Tactical+Backpack&origin=web&ir=q%3ALA+Police+Gear+Atlas+72+Hour+Tactical+Backpack&page=1"
        },{
            item_num: 46,
            product_name: "",
            category: "sunandprotection",
            score:8,
            buy_link: "https://www.amazon.com/Banana-Boat-Performance-Sunscreens-Technology/dp/B0030ZEGDY/ref=sr_1_6_s_it?s=hpc&ie=UTF8&qid=1517170562&sr=1-6&keywords=sunscreen"
        },{
            item_num: 36,
            product_name: "Banana Boat Sport Performance Lotion Sunscreens with PowerStay Technology SPF 30, 8 Ounces",
            category: "sunandprotection",
            score:8,
            buy_link: "https://www.amazon.com/Banana-Boat-Performance-Sunscreens-Technology/dp/B0030ZEGDY/ref=sr_1_6_s_it?s=hpc&ie=UTF8&qid=1517170562&sr=1-6&keywords=sunscreen"
        },{
            item_num: 36,
            product_name: "Banana Boat Sport Performance Lotion Sunscreens with PowerStay Technology SPF 30, 8 Ounces",
            category: "sunandprotection",
            score:8,
            buy_link: "https://www.amazon.com/Banana-Boat-Performance-Sunscreens-Technology/dp/B0030ZEGDY/ref=sr_1_6_s_it?s=hpc&ie=UTF8&qid=1517170562&sr=1-6&keywords=sunscreen"
        },{
            item_num: 36,
            product_name: "Banana Boat Sport Performance Lotion Sunscreens with PowerStay Technology SPF 30, 8 Ounces",
            category: "sunandprotection",
            score:8,
            buy_link: "https://www.amazon.com/Banana-Boat-Performance-Sunscreens-Technology/dp/B0030ZEGDY/ref=sr_1_6_s_it?s=hpc&ie=UTF8&qid=1517170562&sr=1-6&keywords=sunscreen"
        },{
            item_num: 36,
            product_name: "Banana Boat Sport Performance Lotion Sunscreens with PowerStay Technology SPF 30, 8 Ounces",
            category: "sunandprotection",
            score:8,
            buy_link: "https://www.amazon.com/Banana-Boat-Performance-Sunscreens-Technology/dp/B0030ZEGDY/ref=sr_1_6_s_it?s=hpc&ie=UTF8&qid=1517170562&sr=1-6&keywords=sunscreen"
        }
    ],
     {
        ignoreDuplicates: true,
    }
    ).then(function(tableProducts) {
        console.log(tableProducts);
    });
});