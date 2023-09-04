'use strict';

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const User = require('./User');
const sequelize = new Sequelize(
  config.database,
  config.password,
  config.username,
  config
);

db.User = User;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
