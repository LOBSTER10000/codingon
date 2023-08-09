let mysql = require('mysql');
let conn = {
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  port: 3306,
  database: 'miniproject',
};

let connection = mysql.createConnection(conn);

connection.connect();
let sql = `select * from mini`;

connection.query(sql, function (err, result, field) {
  if (err) {
    console.error(e);
  }
  console.log(result);
});

connection.end();
