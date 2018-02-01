import { truncate } from "fs";


module.export = function (sequelize, DataTypes){
  //To create table
    const Products = sequelize.define("products", {
        item_num: {
            type: DataTypes.INTEGRER,
            autoIncrement: true,
            allowNull: false
        }, 
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            allowNull: false
        }, 
        buy_link: {
            type: DataTypes.STRING,
            allowNull: false
        };
    });
    return Products;
}

//To push data into table
sequelize.sync({
    force: true
}).then(function() {
    Products.bulkCreate([
        {
            item_num: 1,
            product_name: "ATAX Multi-tool",
            category: "Knives and Blades",
            score:,
            buy_link: "https://www.topsknives.com/knives/survival/atax"
        },{
            item_num: 1,
            product_name: "ATAX Multi-tool",
            category: "Knives and Blades",
            score:,
            buy_link: "https://www.topsknives.com/knives/survival/atax"
        },{
            item_num: 1,
            product_name: "ATAX Multi-tool",
            category: "Knives and Blades",
            score:,
            buy_link: "https://www.topsknives.com/knives/survival/atax"
        },{
            item_num: 1,
            product_name: "ATAX Multi-tool",
            category: "Knives and Blades",
            score:,
            buy_link: "https://www.topsknives.com/knives/survival/atax"
        },{
            item_num: 1,
            product_name: "ATAX Multi-tool",
            category: "Knives and Blades",
            score:,
            buy_link: "https://www.topsknives.com/knives/survival/atax"
        }
    
    ], {
        ignoreDuplicates: true
    }).then(function() {
        // 
    });
});