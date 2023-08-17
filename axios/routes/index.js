const express = require('express');
const routes = express.Router();
const controller = require('./home.ctrl.js');

routes.get('/', controller.output.login);
routes.post('/login', controller.input.login);

module.exports = routes;
