//파일로 익스프레스 구현하기

let express = require('express');
let app = express();
let fs = require('fs');

app.get('/', function (req, res) {
  let url = req.url;
  url = '/index.html';
  res.writeHead(200);
  res.end(fs.readFileSync(__dirname + url));
});

app.get('/login', function (req, res) {
  let url = req.url;
  url = '/login.html';
  res.writeHead(200);
  res.end(fs.readFileSync(__dirname + url));
});

app.listen(3000, () => {
  console.log('서버 연결 했습니다');
});
