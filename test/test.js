<<<<<<< HEAD
var Nightmare = require('nightmare');
var expect = require('chai').expect;

describe('State of Apocalypse', function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages

  this.timeout(30000);
  it('should send user to the home page, then the form page', function(done) {
    // ID for the login button.
    new Nightmare({ show: true })
      .goto('http://stateofapocalypse.herokuapp.com/')
      // Click the form “Get Started” link
      .click('#download-button')
      //Wait 10 seconds
      .wait(10000)
      .then(function() {
        done();
      });
  });
=======
var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("State of Apocalypse", function () {
    // The default tests in mocha is 2 seconds.
    // Extending it to 30 seconds to have time to load the pages

    this.timeout(30000);
    it("should send user to the home page, then the form page", function (done) {
        // ID for the login button.
        new Nightmare({ show: true })
            .goto("http://stateofapocalypse.herokuapp.com/")
            // Click the form "Get Started" link
            .click("#download-button")
            //Wait 10 seconds
            .wait(10000)
            .then(function () {
                done();
            });

    })
>>>>>>> 1297e5943545b0aedaa4486c8e84743c1bf5f5ac
});
