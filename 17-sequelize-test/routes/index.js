const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');
router.get('/', controller.output.index);
router.get('/post', controller.output.post);
router.get('/post/:identity', controller.input.selectOne);
router.get('/login', controller.output.login);
router.get('/board', controller.output.board);

router.patch('/update', controller.input.update);

router.post('/login', controller.input.login);
router.post('/post', controller.input.post);
router.delete('/delete', controller.input.delete);
module.exports = router;
