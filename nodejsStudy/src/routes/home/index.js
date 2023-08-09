let express = require('express');
let router = express.Router();

let ctrl = require('./home.ctrl.js');

router.get('/', ctrl.output.home);

router.get('/login', ctrl.output.login);

router.post('/login', ctrl.process.login);

router.get('/register', ctrl.output.register);

module.exports = router;
