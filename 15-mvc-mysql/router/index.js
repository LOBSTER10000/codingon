const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor.js');

router.get('/', controller.output.index);
router.get('/visitors', controller.output.visitor);
router.get('/visitor/:id', controller.output.readVisitor);
router.delete('/delete', controller.input.delete);
router.patch('/update/:id', controller.input.update);
router.post('/visitor', controller.input.visitor);
router.get('*', controller.output.error);
module.exports = router;
