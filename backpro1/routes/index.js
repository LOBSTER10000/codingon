const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/', controller.output.board);
router.post('/post', controller.input.board);
router.get('/result', controller.output.result);
router.get('/content', controller.output.content);
router.get('/update', controller.output.update);
router.delete('/delete', controller.input.delete);
module.exports = router;
