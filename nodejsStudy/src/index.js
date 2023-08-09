const http = require('http');
const app = http.createServer(function(req,res){
    let url = req.url;
    try{
        if(url === '/'){
            res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
            res.end('<h1>안녕하세요 노드 연습 중입니다<h1>');
            console.log('성공함');
        }
    }
    catch(e){
        console.error(e);
        res.writeHead(404);
        res.end('오류 났어요');
    }
})
.listen(3000);