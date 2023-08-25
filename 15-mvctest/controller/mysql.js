const mysql = require('mysql');
const conn = {
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'miniproject',
  port: 3306,
};
const connection = mysql.createConnection(conn);

const query = {
  select: `select * from mini order by identity limit 10`,
  // insert: `insert into mini value(${writer}, ${header}, ${content})`,
};
module.exports = { connection, query };
