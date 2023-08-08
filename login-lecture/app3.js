//모듈로 서버 구현하기

const http = require('http');
const fs = require('fs');

function serverStart() {
  http
    .createServer((req, res) => {
      let url = req.url;
      try {
        if (url === '/') {
          url = '/index.html';
          res.writeHead(200);
          res.end(fs.readFileSync(__dirname + url));
        }
      } catch (e) {
        console.error(e);
      }
    })
    .listen(3000);
}

exports.start = serverStart;
