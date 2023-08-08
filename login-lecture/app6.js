// 라우터 없이 익스프레스 render로 불러오기

const express = require('express');
const app = express();

//앱세팅
app.set('views', './views');
app.set('view engine', 'ejs');

//렌더형으로 구축
app.get('/', function (req, res) {
  res.render('home/index');
});

app.get('/login', function (req, res) {
  res.render('home/login');
});

app.listen(3000, () => {
  console.log('서버 시작되었습니다');
});
