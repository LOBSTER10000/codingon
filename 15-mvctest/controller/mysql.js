const mysql = require('mysql2');
const conn = {
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'miniproject',
  port: 3306,
};
const connection = mysql.createConnection(conn);

module.exports = connection;
