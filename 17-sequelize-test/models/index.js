'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Visitor = require('./Visitor')(sequelize, Sequelize);
const Board = require('./Board')(sequelize, Sequelize);

Visitor.hasMany(Board, {
  foreignKey: 'userId',
  sourceKey: 'userId',
});
Board.belongsTo(Visitor, {
  foreignKey: 'userId',
  sourceKey: 'userId',
});

db.Visitor = Visitor;
db.Board = Board;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
