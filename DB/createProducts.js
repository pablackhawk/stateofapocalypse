var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "root",
    password: "root",
    database: "survival_db",
});

connection.connect(function(err) {
    if (err) throw err;
    // console.log("Connected as id: " + connection.threadId);
    displayProducts();
});

function displayProducts() {
    console.log("\n**** STATE OF APOCALYPSE - All Products ****")
    connection.query("SELECT * FROM Products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("\n -----------------------------------------------------------------------------")
            console.log(
                        "| Item Number: " +
                        res[i].item_num +
                        " | Product Name: " +
                        res[i].product_name +
                        " | Category: " +
                        res[i].category +
                        " | Score: " +
                        res[i].score +
                        " | Buy Link: " +
                        res[i].buy_link)+
                        " | Video Link: " +
                        res[i].video_link;
            console.log("\n -----------------------------------------------------------------------------");
        }
        initialize();
    });
};

function initialize() {
    inquirer.prompt([{
        name: "addItem",
        type: "rawlist",
        message: "Would you like to add a product to 'survival_db' database?",
        choices: ["YES", "NO"]        
    }
    ]).then(function(answer) {
        if (answer.addItem.toUpperCase() === "YES") {
            addItem();
        } else {
            console.log("*** Ok, Goodbye!");
            connection.end();
        }
    });
}
function addItem() {
    inquirer.prompt([{
            name: "itemNumber",
            type: "input",
            message: "Please enter the 'item_number' of the new product."
        },{
            name: "productName",
            type: "input",
            message: "Please enter the name of the product you would like to add to the database."
        },{
            name: "category",
            type: "input",
            message: "What category would you like to place this item in?",
        },{
            name: "score",
            type: "input",
            message: "What is the editor's score for this product?"
            //  validate: function(value) {
            //     if (isNaN(value) === false) {
            //     return true;
            //     }
            //     return false;
            //     }
        },{
            name: "buyLink",
            type: "input",
            message: "What is the 'buy_link' you would like to store with this item?"
        },{
            name: "videoLink",
            type: "input",
            message: "What is the 'video_link' you would like to store with this item?"
        }
    ]).then(function(answer) {
        connection.query("UPDATE products SET ? WHERE ?",
        [
          {
            product_name: answer.productName
          },
          {
            category: answer.category
          },
          {
            score: answer.score
          },
          {
            buy_link: answer.buyLink
          },
          {
            video_link: answer.videoLink
          }
        ], function(err, res) {
            if (err) throw err;
            console.log("Your product has been successfully added to 'surviva;_db'!");
            console.log("===================================================================");
            displayProducts();
        })
    })
 }
