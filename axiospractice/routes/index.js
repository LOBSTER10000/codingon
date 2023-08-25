const express = require('express');
const router = express.Router();
const controller = require('../controller/userController.js');
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/getInfo', (req, res) => {
  res.render('getInfo');
});

router.get('/postInfo', (req, res) => {
  res.render('postInfo');
});

router.get('/getResult', (req, res) => {
  const responseData = {
    data: req.query,
  };

  res.send(responseData);
});

router.post('/postResult', (req, res) => {
  res.render('result', {
    title: '여기는 POST의 결과값입니다',
    info: req.body,
  });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', controller.input.login);

module.exports = router;
