const http = require('http');
const fs = require('fs');
const port = 3000;
http
  .createServer(function (req, res) {
    try {
      let url = req.url;
      if (url === '/') {
        url = '/index2.html';
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); //응답헤더
        // header: 요청이나 응답에 대한 대표정보
        // body : 요청/응답에 대한 내용
        res.end(fs.readFileSync(__dirname + url)); //응답종료
      }
    } catch (e) {
      url = '/error.html';
      console.error(e);
      res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
      res.end(fs.readFileSync(__dirname + url));
    }
  })
  .listen(port, () => {
    console.log('서버 실행 완료');
  });
