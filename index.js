// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Express App
let app = express();
const PORT = process.env.PORT || 5150;

// Models
let db = require('./models');

// Routes
require('./routes/html.js')(app);
require('./routes/api.js')(app);
require('./routes/scraper.js')(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
  });
});

exports = module.exports = app;
