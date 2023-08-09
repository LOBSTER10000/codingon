const express = require('express');
const app = express();
const fs = require('fs');

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/error', function (req, res) {
  res.render('error');
});

app.listen(3000, () => {
  console.log('서버 연동');
});
