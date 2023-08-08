const mysql = require('mysql');
const conn = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'mysql',
  database: 'miniproject',
};

const connection = mysql.createConnection(conn);

connection.connect();

const sql = `select * from mini`;

connection.query(sql, function (err, result, field) {
  if (err) {
    console.error(err);
  }
  console.log(result);
});
