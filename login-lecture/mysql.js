const mysql = require('mysql');
const conn = {
    host : 'localhost',
    port : 3306,
    user: 'root',
    password: 'mysql',
    database: 'miniproject',
};

let connection = mysql.createConnection(conn);
connection.connect();

let sql = `select * from mini`;

connection.query(sql, function(err, result, fields){
    if(err){
        console.error(err);
    }
    console.log(result);
});

connection.end();