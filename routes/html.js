const path = require('path');

module.exports = function(app) {
<<<<<<< HEAD:routes/html-routes.js
  
=======
>>>>>>> 6031a8b2575b5abb1d5cad8d3178cf5d39400b83:routes/html.js
  // index route loads index.html
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/form', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/form.html'));
  });
};
