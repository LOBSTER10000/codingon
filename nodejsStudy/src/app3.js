let express = require('express');
let app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

//미들웨어 등록
let home = require('./routes/home');
app.use('/', home);

module.exports = app;
