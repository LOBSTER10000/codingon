let express = require('express');
let app = express();
let fs = require('fs');

app.get('/', function(req,res){
    let url = req.url;
    url = '/index.html';
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.end(fs.readFileSync(__dirname + url));
});

app.get('/login', function(req,res){
    let url = req.url;
    url = '/login.html';
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.end(fs.readFileSync(__dirname +url));
});

app.listen(3000, ()=>{
    console.log('서버 연결 성공했습니다');
});