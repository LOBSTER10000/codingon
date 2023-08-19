const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.output.dynamic);

router.get('/getFetch', function (req, res) {
  console.log(req.query);
  res.json(req.query);
});

router.get('/getAxios', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

router.get('/getAjax', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

router.get('/getInfo', function (req, res) {
  res.render('getInfo');
});

router.get('/changeAjax', function (req, res) {
  res.send(req.query);
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.post('/loginAjax', controller.input.login);
module.exports = router;
