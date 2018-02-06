//Connection to server
module.exports = function(sequelize, DataTypes) {
  //To create table
    const Products = sequelize.define("Products", {
        item_num: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }, 
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
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
        },
        video_link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image_link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        review_link: {
            type: DataTypes.STRING,
            allowNull: false
        },
     }, {
            timestamps: false
    });
    return Products;
}
