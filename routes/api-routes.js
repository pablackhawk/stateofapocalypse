const db = require("../models");

module.exports = function(app) {
    app.get("/api/survival/", function(req, res) {
        db.survival_db.findAll({})
        .then(function(dbSurvival) {
            res.json(dbSurvival);
        });
    });

    app.get("api/posts/category/:category", function(req,res) {
        db.survival_db.findAll({
            where: {
                category: req.params.category
            }
        })
    })


};