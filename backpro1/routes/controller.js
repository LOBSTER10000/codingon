const mysql = require('mysql');

const conn = {
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    port: 3306,
    database: 'miniproject',
}
const connection = mysql.createConnection(conn);
connection.connect();



const output = {
    board: (req,res)=>{
        res.render('board');
    }
}

const input = {
    board : (req,res)=>{
        
        const data = {
           writer : connection.escape(req.body.writer),
           header :  connection.escape(req.body.header),
           content : connection.escape(req.body.content),
        }
        const query = `insert into mini (writer, header, content, time)
        values (${data.writer}, ${data.header}, ${data.content}, NOW())`;
        
        connection.query(query, function(error, result, fields){
            if(error){
                console.error(error);
                return res.json({ success: false, msg: 'DB 오류 발생' });
            }
            return res.json({ success: true, msg: '정상적으로 들어갔습니다', insertedId: result.insertId, result : data});
        })
    }
}
module.exports = {output, input};