var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/news', function(req, res) {
  res.send('This is home');
});

app.get('/news/:id', function(req, res) {
  res.send('This is ' + req.params.id);
});


app.listen(3000);
