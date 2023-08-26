const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/', controller.output.index);
router.get('/content/:identity', controller.output.content);
router.get('/post', controller.output.post);
router.get('/update/:identity', controller.output.update);

router.post('/post', controller.input.post);
router.post('/delete/:identity', controller.input.delete);
router.post('/update/:identity', controller.input.update);

router.get('*', controller.output.error);
module.exports = router;
