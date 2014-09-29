var Application = require('billy');
var HttpService = require('billy-http-express');
var path        = require('path');

var app = new Application();

app.service(HttpService);

app.config('http', {
  webroot: path.join(__dirname, './gen/billy')
});

// Redirect to current version
app.service(function redirect(http) {
  http.get('/', function(req, res) {
    res.redirect('/1.5/');
  });
});

app.start();
