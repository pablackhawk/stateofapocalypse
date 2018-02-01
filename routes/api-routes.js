const express = require("express");

const router = express.Router();

const db = require("../models/");

router.get("/", function(req, res) {
    res.redirect("/products");
});

router.get("/burgers", function(req, res) {
    db.products.findAll().then(function(dbProduct) {
        console.log
    })
})

//tutoring ^

const db = require("../models");

module.exports = function(app) {
    app.get("/api/survival/", function(req, res) {
        db.survival_db.findAll({})
        .then(function(dbSurvival) {
            res.json(dbSurvival);
        });
    });

    app.get("api/posts/:category", function(req,res) {
        db.survival_db.findAll({
            where: {
                category: req.params.category
            }
        })
        .then(function(dbSurvival) {
            res.json(dbSurvival);
        });
    });


};