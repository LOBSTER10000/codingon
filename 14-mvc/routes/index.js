const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain.js');

router.get('/', controller.output.index);
router.get('/comments', controller.output.comments);
router.get('/comment/:id', controller.output.comment);

router.get('/test/:id/:name', controller.output.test);
//404에러 페이지
router.get('*', controller.output.error);
module.exports = router;
