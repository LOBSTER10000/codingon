const express = require('express');
const app = express();
const db = require('./models');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const home = require('./router');
app.use('/', home);

db.sequelize.sync({ force: false }).then(() => {
  // force : false -> 테이블이 실제 데이터베이스에 존재하지 않을 경우에는
  //모델에 정의한대로 생성
  // force : true는 무조건 데이터베이스에 테이블있어도 무조건 생성
});
app.listen(3000, () => {
  console.log('3000 port is running');
});
