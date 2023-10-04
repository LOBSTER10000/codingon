const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.output.index);
router.get('/login', controller.output.login);
router.get('/post', controller.output.post);
router.get('/user', controller.output.user);
router.get('/profile', controller.output.profile);
router.get('/logout', controller.input.logout);
router.post('/post', controller.input.post);
router.post('/login', controller.input.login);
router.patch('/profiles', controller.input.profile);
module.exports = router;
