let express = require('express');
let app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('home/index');
});

app.get('/login', function (req, res) {
  res.render('home/login');
});

app.listen(3000, () => {
  console.log('서버 연결 성공');
});
