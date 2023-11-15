const express = require('express');
const router = express.Router();
const controller = require('../controller/viewController');

router.get('/', (req, res) => {
  res.render('chat');
});

router.get('/chat', (req, res) => {
  res.render('chatList');
});
module.exports = router;
