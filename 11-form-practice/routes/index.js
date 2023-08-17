const express = require('express');
const router = express.Router();

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
  res.render('result', {
    title: '여기는 GET의 결과값입니다',
    info: req.query,
  });
});

router.post('/postResult', (req, res) => {
  res.render('result', {
    title: '여기는 POST의 결과값입니다',
    info: req.body,
  });
});

module.exports = router;
