const path = require('path');

module.exports = function(app) {
<<<<<<< HEAD
    console.log('whatever')
    
}
=======
  // index route loads index.html
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
>>>>>>> 13a1e68d01a5e7e8c031d3fadbce92991cad9f50
