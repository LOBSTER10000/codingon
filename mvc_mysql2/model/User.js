const mysql = require('mysql2');
const conn = {
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  port: 3306,
  database: 'sesac',
};

const connection = mysql.createConnection(conn);
class User {
  constructor(id, userid, name, pw) {
    this.id = id;
    this.userid = userid;
    this.name = name;
    this.pw = pw;
  }

  getBoard() {
    return new Promise((resolve, reject) => {
      connection.query(
        'select * from user order by id desc',
        (error, result) => {
          console.log(result);
          if (error) {
            console.error(error);
            return reject(result);
          }
          return resolve(result);
        }
      );
    });
  }

  postJoin() {
    return new Promise((resolve, reject) => {
      connection.query(
        'insert into user(name, userid, pw) values(?,?,?)',
        [this.name, this.userid, this.pw],
        (error, result) => {
          if (error) {
            console.error(error);
            return reject(result);
          }
          return resolve(result);
        }
      );
    });
  }

  postLogin(userid, pw) {
    return new Promise((resolve, reject) => {
      connection.query(
        'select * from user where userid = ? and pw = ?',
        [userid, pw],
        (error, result) => {
          if (error) {
            console.error(error);
            return reject(result);
          }
          if (result.length === 1) {
            console.log(result);
            return resolve(true);
          } else {
            return resolve(false);
          }
        }
      );
    });
  }

  deleteBoard(userid) {
    return new Promise((resolve, reject) => {
      connection.query(
        'delete from user where userid = ?',
        [userid],
        (error, result) => {
          if (error) {
            console.error(error);
            reject(result);
          }
          console.log(result);
          return resolve(result);
        }
      );
    });
  }

  async selectUser(userid) {
    return new Promise((resolve, reject) => {
      connection.query(
        'select * from user where userid = ?',
        [userid],
        (error, result) => {
          if (error) {
            console.error(err);
            return reject(result);
          }
          return resolve(result);
        }
      );
    });
  }
}

module.exports = User;
