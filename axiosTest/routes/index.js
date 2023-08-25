const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/', controller.output.index);
router.get('/getInfo', controller.output.getInfo);
router.get('/getAxios', controller.input.getAxios);
router.get('/login', controller.output.login);
router.post('/login', controller.input.login);
router.get('*', controller.output.getError);
module.exports = router;
