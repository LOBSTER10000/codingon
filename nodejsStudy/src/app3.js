let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

// 스태틱 미들웨어 등록
app.use(express.static('public'));

//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(
  bodyParser.urlencoded({ extended: true, inflate: true, limit: '10mb' })
);
//json형태로 넘겨받은 값을 바로 로그에 출력
app.use(bodyParser.json());

//미들웨어 등록
let home = require('./routes/home');
app.use('/', home);

app.listen(3000, () => {
  console.log('서버연결에 성공했습니다');
});
