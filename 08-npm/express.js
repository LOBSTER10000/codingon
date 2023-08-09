const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function (req, res) {
  let url = req.url;
  url = '/index.html';
  res.writeHead(200);
  res.end(fs.readFileSync(__dirname + url));
});

app.get('/error', function (req, res) {
  let url = req.url;
  url = '/error.html';
  res.writeHead(404);
  res.end(fs.readFileSync(__dirname + url));
});

app.listen(3000, () => {
  console.log('서버 연동');
});
