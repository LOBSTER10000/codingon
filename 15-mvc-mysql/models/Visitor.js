const mysql = require('mysql2');
const conn = {
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'sesac',
  port: 3306,
};

const connection = mysql.createConnection(conn);

exports.getVisitor = (cb) => {
  connection.query(
    'select * from visitor order by id desc',
    (error, result) => {
      if (error) {
        console.error(error);
      }
      console.log(result);
      cb(result);
    }
  );
};

exports.postVisitor = (data, cb) => {
  connection.query(
    `insert into visitor(name, comment) values("${data.name}","${data.comment}")`,
    (error, result) => {
      if (error) {
        console.error(error);
      }
      console.log(result);
      return cb(result.insertId);
    }
  );
};

exports.readVisitor = (id, cb) => {
  connection.query(
    `select * from visitor where id = ${id}`,
    (error, result) => {
      if (error) {
        console.error(error);
      }

      return cb(result[0]);
    }
  );
};

exports.deleteVisitor = (id, cb) => {
  connection.query(`delete from visitor where id = ${id}`, (error, result) => {
    if (error) {
      console.error(error);
    }

    return cb(result);
  });
};

exports.updateVisitor = (data, cb) => {
  connection.query(
    `update visitor set name = '${data.name}', comment = '${data.comment}' where id = ${data.id}`,
    (error, result) => {
      if (error) {
        console.error(error);
      }
      console.log(result);
      return cb();
    }
  );
};

exports.selectVisitor = (id, cb) => {
  console.log('model id >> ', id);
  connection.query(
    `select * from visitor where id = ${id}`,
    (error, result) => {
      if (error) {
        console.error(error);
      }

      console.log(result);
      return cb(result);
    }
  );
};
