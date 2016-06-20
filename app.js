var express = require('express');
var loadtest = require('loadtest');
var bodyParser = require('body-parser');

var config = {
  "PORT": 3000
}

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/public', express.static('public'));

app.set('views', './views');

app.set('view engine', 'pug');

app.get('*', function(req, res) {
  res.render('index', { title: 'testload-ui', message: 'Hello there!'});
});

app.post('*', function(req, res) {
  console.log(req.body);
  res.render('index', { title: 'Test results', message: 'Hello there!'});
});

app.listen(config.PORT, function() {
  console.log("Service launched");
});
