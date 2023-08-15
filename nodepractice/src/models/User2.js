'use strict';

const User = require('./User.js');

class User2 {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, pass } = User.getUserInfo(this.body.id);

    if (id) {
      if (id === this.body.id && pass === this.body.pass) {
        return { success: true, msg: '로그인 되셨습니다' };
      }
      return { success: false, msg: '비밀번호가 틀렸습니다' };
    }
    return { success: false, msg: '존재하지 않는 아이디 입니다' };
  }
}

module.exports = User2;
