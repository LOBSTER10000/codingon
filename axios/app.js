const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let home = require('./routes');
app.use('/', home);

app.listen(3000, () => {
  console.log('3000 port is running');
});
