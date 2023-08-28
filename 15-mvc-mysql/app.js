const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const home = require('./router');
app.use('/', home);

app.listen(3000, () => {
  console.log('3000 port is running');
});
