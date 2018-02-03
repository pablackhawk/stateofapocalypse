const express = require("express");

const router = express.Router();

const db = require("../models");
//Connection to the server
module.exports = function(app) {

app.get("/", function(req, res) {
    res.redirect("/products");
});

//Homepage route
app.get("/products", function(req, res) {
    db.Products.findAll({})
        .then(function(dbSurvival) {
            res.json(dbSurvival);
        });
});


// Recommendation products route
app.get("/products/recommend", function(req, res) {
    db.Products.findOne({
            where: {
                category: "knivesandblades", //insert "random" category
                item_num: Math.floor((Math.random() * 3) + 1) //hard-code based off of "random catgegory"
                
            }   
    })
    .then(function(dbSurvival) {
            console.log(dbSurvival);
            res.json(dbSurvival)
    });         
});


//Specific category route
app.get("/products/:category", function(req, res) {
    console.log(req.params.category);
    db.Products.findAll({
        where: {
                category: req.params.category
        }
    })
    .then(function(dbSurvival) {
            res.json(dbSurvival);
    });
});

};