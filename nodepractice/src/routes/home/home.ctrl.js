const output = {
  home: function (req, res) {
    res.render('home/index');
  },

  login: function (req, res) {
    res.render('home/login');
  },

  register: function (req, res) {
    res.render('home/register');
  },
};

const UserStorage = require('../../models/UserStorage.js');
const User = require('../../models/User.js');
const input = {
  login: function (req, res) {
    // 클래스 자체에 대해 함수 호출

    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
    // 기존에 리팩토링 하기 전 코드
    // const id = req.body.id;
    // const pass = req.body.pass;

    // const user = users.getUsers('id', 'pass');
    // const response = {};
    // if (user.id.includes(id)) {
    //   const idx = user.id.indexOf(id);
    //   if (user.pass[idx] === pass) {
    //     response.success = true;
    //     response.msg = '로그인에 성공하셨습니다';
    //     return res.json(response);
    //   }
    // }
    // response.success = false;
    // response.msg = '로그인에 실패했습니다';
    // return res.json(response);
  },
};
module.exports = { input, output };
