const http = require('http');
const fs = require('fs').promises;

http.createServer(async function(req,res){
    let url = req.url;
    try{
        if(url === '/'){
            url = '/index.html';
            res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
            res.end(await fs.readFile(__dirname + url));
            console.log('root 서버 열람');
        } else if(url === '/login'){
            url = '/login.html';
            res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
            res.end(await fs.readFile(__dirname + url));
            console.log('login서버 열람');
        }
    }
    catch(e){
        console.error(e);
        res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'});
        res.end(e);
    }
   
}).listen(3000, ()=>{
    console.log('서버 연결에 성공했습니다');
});


// const express = require('express');
// const app = express();

// app.get('/', function(req,res){
//     res.send('여기는 루트입니다');
// });

// app.get('/login', function(req,res){
//     res.send('여기는 로그인 화면입니다');
// });

// app.listen(3000, ()=>{
//     console.log('서버가동');
// });