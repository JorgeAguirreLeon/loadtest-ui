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
  res.render('index', { title: 'testload-ui', message: 'testload-ui'});
});

app.post('*', function(req, res) {
  var options = {
    url: req.body.url,
    concurrency: req.body.parallelism,
    maxRequests: req.body.requests,
    method: req.body.method
  };
  loadtest.loadTest(options, function(error, result) {
    if (error) {
      res.render('error', {});
    }
    else {
      errors = Object.keys(obj).length > 0
      res.render('results', {title: 'Test results', message: 'testload-ui results', result: result, errors: errors});
    }
  });
});

app.listen(config.PORT, function() {
  console.log("Service launched");
});
