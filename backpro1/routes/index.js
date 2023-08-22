const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.get('/', controller.output.board);
router.post('/post', controller.input.board);
router.get('/result', controller.output.result);
router.get('/content', controller.output.content);
module.exports = router;