let express = require('express');
let app = express();
let port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

//미들웨어 (요청과 응답의 중간에서 작업하는 코드)
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱하겠다
app.use(express.json()); //json형식의 데이터를 주고 받겠다라는 의미

// 라우팅(Routing)
// GET '/'

// app.get('/', (req, res) => {
//   res.render('index', { title: '폼을 전송해보자' });
// });

let home = require('./routes');
app.use('/', home);

app.listen(port, () => {
  console.log(`${port} server is running`);
});
