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
module.exports = router;
