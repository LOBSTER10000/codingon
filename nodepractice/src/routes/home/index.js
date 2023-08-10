const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl.js');

router.get('/', ctrl.output.home);

router.get('/login', ctrl.output.login);

router.post('/login', ctrl.input.login);

module.exports = router;
