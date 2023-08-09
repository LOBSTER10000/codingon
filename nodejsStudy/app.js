let http = require('http');
let fs = require('fs').promises;

http
  .createServer(async function (req, res) {
    let url = req.url;
    try {
      if (url === '/') {
        url = '/index.html';
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>안녕하세요 연습하고 있습니다</h1>');
      } else if (url === '/login') {
        url = '/login.html';
        res.writeHead(200);
        res.end(await fs.readFile(__dirname + url));
      }
    } catch (e) {
      console.error(e);
      console.log('여기에서 에러가 났습니다');
    }
  })
  .listen(3000, () => {
    console.log('서버 연결 성공');
  });
