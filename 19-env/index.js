// const ps = process.env;
// console.log(ps);

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); //

app.get('/', (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.NODE);
  console.log(process.env.PORT);
  res.send('Hello, world!');
});

app.listen(process.env.PORT, () => {
  console.log('3000 port is running');
});
