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
    },

    result : (req,res)=>{

        const query = `SELECT * FROM mini ORDER BY identity DESC LIMIT 0, 10;`;

        connection.query(query, function(error,result,fields){
           if(error){
               console.error(error);
               return res.json({success: false, msg: 'DB 오류 발생'});
           }
           
           return res.render('result', {
               success: true, 
               data : result,
               msg : 'DB접속 성공',
           })
        })
   },

   content: (req, res) => {
    const identity = req.query.identity;

    const query = `SELECT * FROM mini WHERE identity = ${identity}`;

    connection.query(query, function(error, result, fields){
        if(error){
            console.error(error);
            return res.json({success: false, msg: 'DB 오류 발생'});
        }
        return res.render('content', {
            data: result[0], // Assuming only one row is expected
            success: true,
            msg: 'DB 접속 성공',
        });
    });
    },
}

const input = {
    board : (req,res)=>{
        
        let data = {
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
    },

    delete : (req,res)=>{
        const identity = req.query.identity;
        const query = `delete from mini where identity = ${identity}`;

        connection.query(query, function(error,result,fields){
            if(error){
                console.error(error);
                return res.json({success : false, msg: 'DB 오류 발생'});
            }
            return res.json({success: true, msg : '삭제에 성공하셨습니다'});
        });
    },

}
module.exports = {output, input};