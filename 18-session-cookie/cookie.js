const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;
const env = require('dotenv');
env.config();
app.set('view engine', 'ejs');
app.set('views', './views');

// 미들웨어 등록
// app.use(cookieParser()); //일반쿠키
const COOKIE_SECRET_KEY = process.env.SECRET_KEY; // 쿠키에 대한 비밀  키
app.use(cookieParser(COOKIE_SECRET_KEY)); //암호화 쿠키
const myCookieConf = {
  httpOnly: true, // 웹서버를 통해서만 접근 가능 (프론트에서 document.cookie로 접근하는 것을 차단)
  maxAge: 24 * 60 * 60 * 1000, // 쿠키 수명 (밀리초 단위)
  signed: true,
  // expire : 만료 날짜를 기준으로 시간설정
  // path : 해당 디렉토리에서 하위 디렉토리만 경로가 활성화
  // domain : 쿠키가 전송될 도메인을 특정가능
  // secure : 웹브라우저와 웹서버가 https로 통신하는 경우 쿠키를 서버에 전송
  // signed : 쿠키의 암호화 결정(req.signedCookies객체에 들어있음);
};

app.get('/', (req, res) => {
  res.render('cookie');
});

app.get('/setCookie', (req, res) => {
  //res.cookie(쿠키이름,  쿠키 값, 쿠키 옵션);
  res.cookie('myCookie', uuid, myCookieConf); // 응답 객체 아님
  res.send('Cookie 설정 완료');
});

app.get('/getCookie', (req, res) => {
  //res.send(req.cookies) // 일반 쿠키
  res.send(req.signedCookies); // 암호화 쿠키
});

app.get('/cookie', (req, res) => {
  res.render('cookietest');
});

app.get('/clearCookie', (req, res) => {
  res.clearCookie('myCookie', 'myValue', myCookieConf);
  res.send('삭제되면 빈값');
});

app.listen(PORT, () => {
  console.log('300port is running');
});
