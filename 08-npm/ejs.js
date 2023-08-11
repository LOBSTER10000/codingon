const express = require('express');
const app = express();
const fs = require('fs');

app.set('views', './views');
app.set('view engine', 'ejs');

// 임시 db에서 가져온 데이터
const idFromDB = 'banana';
const pwFromDB = '1234qwer';

app.get('/', function (req, res) {
  res.render('index', {
    userId: idFromDB,
    userPw: pwFromDB,
    btns: ['키위', '사과', '모듬'],
    me: {
      name: '랍스터',
      msg: '저는 랍스터입니다',
    },
    isLogin: true,
  }); // 객체에 저장된 키값을 <%= %>로 가져오는것이 가능하다
});

app.get('/error', function (req, res) {
  res.render('error');
});

app.get('/login', function (req, res) {
  res.render('login');
});

app.get('/register', function (req, res) {
  res.render('register');
});

app.listen(3000, () => {
  console.log('서버 연동');
});
