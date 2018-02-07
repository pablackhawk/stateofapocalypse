// Web Scraper using npm request and cherrio //

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

module.exports = function(app) {
  app.get('/scraper', function(req, res) {
    url = 'https://www.basspro.com';

    request(url, function(error, response, body) {
  
      if (!error && response.statusCode == 200) {

        let $ = cheerio.load(response.body);

        let reviews = []
        let reivewCount = {}
        $('tr').each(function(i, element) {
          let className = element.attribs.class

          if (className == 'bv-inline-histogram-ratings-star-container') {
            console.log('class = ' + className);
            let td = element.children[0];
            let reviewValue = td.children[0].data
            let content = element.children[1];
            let reviewTotals = content.children[0].data
            console.log('DATA: ' + content.data)

            reviewCount[reviewTotals] = reviews
            if (Object.keys(reviewCount).length == 2) {
              reviews.push(reviewCount)
              reviewCount = {}
            }
            

          }
        })
      
        res.send(response.body);
      }
    })
  })
}
