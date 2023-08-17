const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.get('/', controller.output.board);
router.post('/post', controller.input.board);

module.exports = router;