// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

// Express App
let app = express();
const PORT = process.env.PORT || 5150

// Models
let db = require('./models')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(methodOverride('_method'))

// Web Scraper using npm request and cherrio //
app.get("/scraper", function(req, res) {
  url = "http://www.imdb.com/title/tt1229340/";

    request(url, function(error, response, html) {
      if(!error) {
        let $ = cheerio.load(html);

        let title;
        let release;
        let rating;

        let json = { title : "", release : "", rating : "" };

          $(".header").filter(function() {
            let data = $(this);

            title = data.children().first().text();
            release = data.children().last().children().text();

            json.title = title;
            json.release = release;
          })
      }

          fs.writeFile("reviews.json", JSON.stringify(json, bull, 4), function(err) {
            console.log("File successfully written!");
          })

          res.send("path to http");
    });
})

// Routes
require('./routes/html-routes.js')(app)
require('./routes/api-routes.js')(app)

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT)
  })
})

exports = module.exports = app;
