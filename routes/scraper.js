// Web Scraper using npm request and cherrio //

const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

module.exports = function(app) {

app.get("/scraper", function(req, res, next) {
    url = "http://www.imdb.com/title/tt1229340/";
  
          request(url, function(error, response, body) {
            if(!error && response.statusCode == 200) {
              let $ = cheerio.load(body);
      
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

                  console.log(json);
                })
            }
      
                // fs.writeFile("reviews.json", JSON.stringify(json, bull, 4), function(err) {
                //   console.log("File successfully written!");
                // })
      
                // res.send("path to http");
      
          });
      })
    }
































// const express = require("express");
// const request = require("request");
// const cheerio = require("cheerio");
// const fs = require("fs");

// app = express();




// app.get("/scraper", function(req, res) {
//     url = "http://www.imdb.com/title/tt1229340/";
  
//       request(url, function(error, response, body) {
//         if(!error && response.statusCode == 200) {
//           let $ = cheerio.load(html);
  
//           let title;
//           let release;
//           let rating;
  
//           let json = { title : "", release : "", rating : "" };

//           console.log(json);
  
//             $(".header").filter(function() {
//               let data = $(this);
  
//               title = data.children().first().text();
//               release = data.children().last().children().text();
  
//               json.title = title;
//               json.release = release;
//             })
//         }
  
//             // fs.writeFile("reviews.json", JSON.stringify(json, bull, 4), function(err) {
//             //   console.log("File successfully written!");
//             // })
  
//             // res.send("path to http");
  
//       });
//   })


//   request(url, function(error, response, body) {
//     if(!error && response.statusCode == 200) {
//       let $ = cheerio.load(html);

