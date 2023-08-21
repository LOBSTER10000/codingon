const UserStorage = require('./UserStorage.js');

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, password } = UserStorage.getUserInfo(body.id);
    console.log(id, password);

    if (id) {
      if (id === body.id && password === body.password) {
        return { success: true, msg: '로그인에 성공했습니다' };
      }
      return { success: false, msg: '비밀번호가 틀렸습니다' };
    }
    return { success: false, msg: `존재하지 않는 값잆니다` };
  }
}

module.exports = User;
