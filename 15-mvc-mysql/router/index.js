const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor.js');

router.get('/', controller.output.index);
router.get('/visitors', controller.output.visitor);
router.get('*', controller.output.error);
module.exports = router;
