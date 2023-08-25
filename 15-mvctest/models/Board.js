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
      mysql.connection.query(
        mysql.query.select,
        function (error, result, fields) {
          if (error) {
            console.error(error);
            reject(result);
          }
          return resolve(result);
        }
      );
    });
  }
}

module.exports = Board;
