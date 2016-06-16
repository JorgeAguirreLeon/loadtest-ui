var express = require('express');
var loadtest = require('loadtest');

var config = {
  "PORT": 3000
}

var app = express();

app.use('/public', express.static('public'));

app.set('views', './views');

app.set('view engine', 'pug');

app.get('*', function(req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(config.PORT, function() {
  console.log("Service launched");
});
