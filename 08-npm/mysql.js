let mysql = require('mysql');
let conn = {
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  port: 3306,
  database: 'miniproject',
};

let connection = mysql.createConnection(conn);
let query = `select * from mini`;

connection.connect();

connection.query(query, function (err, result, field) {
  if (err) {
    console.error(err);
  }
  console.log(result);
});
