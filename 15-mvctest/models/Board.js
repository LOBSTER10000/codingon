class Board {
  constructor(identity, writer, header, content, time) {
    this.identity = identity;
    this.writer = writer;
    this.header = header;
    this.content = content;
    this.time = time;
  }

  getIdentity() {
    return this.identity;
  }

  getWriter() {
    return this.writer;
  }

  getHeader() {
    return this.header;
  }

  getContent() {
    return this.content;
  }

  getTime() {
    return this.time;
  }

  setIdentity(identity) {
    this.identity = identity;
  }

  setWriter(writer) {
    this.writer = writer;
  }

  setHeader(header) {
    this.header = header;
  }

  setContent(content) {
    this.content = content;
  }

  setTime(time) {
    this.time = time;
  }

  async getFindAll() {
    const mysql = require('../controller/mysql.js');

    return new Promise(function (resolve, reject) {
      mysql.query(
        'select * from mini order by identity desc limit 10',
        function (error, result, fields) {
          if (error) {
            console.error(error);
            return reject(result);
          }
          return resolve(result);
        }
      );
    });
  }

  async getFindOne(identity) {
    const mysql = require('../controller/mysql.js');

    return new Promise(function (resolve, reject) {
      mysql.query(
        'select * from mini where identity = ?',
        [identity],
        function (error, result, fields) {
          if (error) {
            console.error(error);
            return reject(result);
          }
          return resolve(result[0]);
        }
      );
    });
  }

  async postBoard() {
    try {
      const mysql = require('../controller/mysql.js');
      mysql.connect();
      return new Promise((resolve, reject) => {
        mysql.query(
          `INSERT INTO mini (writer, header, content, time) VALUES (?, ?, ?, NOW())`,
          [this.writer, this.header, this.content],
          (error, result, fields) => {
            if (error) {
              console.error(error);
              return reject(error);
            }
            return resolve(result);
          }
        );
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteBoard(identity) {
    try {
      const mysql = require('../controller/mysql.js');
      mysql.connect();
      return new Promise((resolve, reject) => {
        mysql.query(
          'delete from mini where identity = ?',
          [identity],
          (error, result, fields) => {
            if (error) {
              console.error(error);
              return reject(result);
            }
            return resolve(result[0]);
          }
        );
      });
    } catch (error) {
      console.error(error);
    }
  }

  async updateBoard(newContent, identity) {
    try {
      const mysql = require('../controller/mysql.js');
      mysql.connect();
      return new Promise((resolve, reject) => {
        mysql.query(
          'update mini set content = ? where identity = ?',
          [newContent, identity],
          (error, result, fields) => {
            if (error) {
              console.error(error);
              return reject(error); // error로 변경
            }
            return resolve(result);
          }
        );
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Board;
