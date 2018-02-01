const db = require("./models");


//To push data into table
db.sequelize.sync({
    force: true
}).then(function() {
    db.Products.bulkCreate([
        {
            item_num: 1,
            product_name: "ATAX Multi-tool",
            category: "knivesandblades",
            score:3,
            buy_link: "https://www.topsknives.com/knives/survival/atax"
        },
        {
            item_num: 2,
            product_name: "EL CHETE",
            category: "knivesandblades",
            score:7,
            buy_link: "https://www.topsknives.com/knives/survival/el-chete"
        },{
            item_num: 1,
            product_name: "ATAX Multi-tool",
            category: "knivesandblades",
            score:7,
            buy_link: "https://www.topsknives.com/knives/survival/atax"
        },{
            item_num: 1,
            product_name: "ATAX Multi-tool",
            category: "knivesandblades",
            score:8,
            buy_link: "https://www.topsknives.com/knives/survival/atax"
        },{
            item_num: 1,
            product_name: "ATAX Multi-tool",
            category: "knivesandblades",
            score:8,
            buy_link: "https://www.topsknives.com/knives/survival/atax"
        }
    
    ],
     {
        ignoreDuplicates: true
    }
    ).then(function(tableProducts) {
        console.log(tableProducts);
    });
});