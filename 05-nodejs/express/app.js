const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
  let url = req.url;
  url = '/index.html';
  res.sendFile(path.join(__dirname + url));
});

app.listen(3000, (e) => {
  console.error(e);
  console.log(e + '3000');
});
