var express = require('express');
var app = express();
const exphbs = require('express-handlebars');

// Register Handlebars view engine
app.engine('handlebars', exphbs());
// Use Handlebars view engine
app.set('view engine', 'handlebars');

app.get('/tos', function (req, res) {
  res.render('tos.handlebars');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
