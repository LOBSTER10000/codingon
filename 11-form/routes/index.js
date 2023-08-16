let express = require('express');
let routes = express.Router();

routes.get('/', (req, res) => {
  res.render('index', { title: '여기는 폼 연습중입니다' });
});

routes.get('/getForm', (req, res) => {
  console.log(req.query); // get은 req.query로
  res.render('result', {
    title: 'GET 요청 폼 결과 확인하기',
    userInfo: req.query,
  });
});

routes.post('/postForm', (req, res) => {
  console.log(req.body); // post는 req.body로 찍는다
  res.render('result', {
    title: 'POST 요청 폼 결과 확인하기',
    userInfo: req.body,
  });
});

routes.get('/getinfo', (req, res) => {
  res.render('getinfo');
});

routes.get('/getTest', (req, res) => {
  res.render('result2', {
    info: req.query,
  });
});

routes.get('/postInfo', (req, res) => {
  res.render('postInfo');
});

routes.post('/postResult', (req, res) => {
  res.render('postResult', {
    info: req.body,
  });
});

module.exports = routes;
