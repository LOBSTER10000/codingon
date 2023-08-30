const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor.js');

router.get('/', controller.output.index);
router.get('/visitors', controller.output.visitor);
router.get('/visitor/:id', controller.output.readVisitor);
router.get('/visitorId/:id', controller.input.update1);
router.delete('/delete', controller.input.delete);
router.patch('/visitor/edit', controller.input.update2);
router.post('/visitor', controller.input.visitor);

router.get('*', controller.output.error);
module.exports = router;
