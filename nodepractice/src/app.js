let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

//기본 스태틱 미들웨어
app.use(express.static('public'));

//바디파서 정확한 내용 등록
app.use(
  bodyParser.urlencoded({ extended: true, inflate: true, limit: '10mb' })
);

//바디파서 미들웨어 등록
app.use(bodyParser.json());

//routes 미들웨어 등록
let home = require('./routes/home');
app.use('/', home);

app.listen(3000, () => {
  console.log('서버 연결 성공');
});
