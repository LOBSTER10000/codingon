const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const home = require('./routes');
app.use('/', home);

app.listen(3000, () => {
  console.log('3000 is running');
});
