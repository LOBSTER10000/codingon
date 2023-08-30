const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/', controller.output.index);
router.get('/login', controller.output.login);
router.get('/join', controller.output.join);

router.get('/favicon.ico', (req, res) => res.status(204));
router.post('/user/profile', controller.input.profile);

router.patch('/update', controller.input.update);
router.delete('/delete', controller.input.delete);
router.post('/login', controller.input.login);
router.post('/join', controller.input.join);
router.get('*', controller.output.error);

module.exports = router;
