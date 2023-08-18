const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.get('/', function (req, res) {
  res.render('dynamic');
});

router.get('/ajax', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

router.get('/getInfo', (req, res) => {
  res.render('getInfo');
});

router.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

router.get('/getAxios', (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

router.get('/axiosGet', (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

router.post('/axiosPost', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

router.get('/fetch', (req, res) => {
  res.send(req.query);
});

router.post('/fetch', (req, res) => {
  res.send(req.body);
});

module.exports = router;
