//라우터로 서버 구현하기

//모듈
let express = require('express');
let app = express();
let fs = require('fs');

//앱세팅
app.set('views', './views');
app.set('view engine', 'ejs');

//라우팅
const home = require('./routes/home');
app.use('/', home); //use -> 미들웨어를 등록해주는 메서드

app.listen(3000, () => {
  console.log('서버 연결 성공했습니다');
});
