const express = require('express');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
// 현재 세션 아이디(req.sessionID);
// express-session 미들웨어에 의해 암호화된 쿠키내용(개발자 도구 application 탭에서 %3A 뒷 부분 ~)
app.use(
  session({
    secret: 'secretKey', // 안전하게 쿠키를 전송하기 위한 쿠키 서명 값
    resave: false, // 세션에 수정사항이 생기지 않더라도 다시 저장할 것인가?
    saveUninitialized: true, // 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
    cookie: {
      httpOnly: true, // http프로토콜에서도 세션 사용 가능
      maxAge: 60 * 1000, // 세션의 수명 (ms)
    }, // 1m
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('session');
});

app.get('/set', (req, res) => {
  req.session.name = '홍길동';
  return res.send('세션 설정 완료');
});

app.get('/name', (req, res) => {
  return res.send({ id: req.sessionID, name: req.session.name });
});

app.get('/destroy', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.send('세션 삭제 실패');
    } else {
      return res.redirect('/name'); //세션 확인 //res.redirect(주소) : 주소로 이동(리다이렉트);
    }
  });
});

app.listen(3000, () => {
  console.log('3000port is running');
});

//세션 정리
// 1. 세션 설정
// req.session.키 = 값

// 2. 세션 사용
// req.session.키;

// 3. 세션 삭제
// req.session.destroy(콜백);
