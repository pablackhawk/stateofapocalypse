// Web Scraper using npm request and cherrio //

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

module.exports = function(app) {
  app.get('/scraper', function(req, res) {
    url = 'https://www.rei.com/product/728652/leatherman-surge-multi-tool';

    request(url, function(error, response, body) {
  
      if (!error && response.statusCode == 200) {

        let $ = cheerio.load(response.body);
        $('tr').each(function(i, element) {

        })

        res.send(response.body);
      }
    })
  })
}