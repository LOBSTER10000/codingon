const output = {
  home: function (req, res) {
    res.render('home/index');
  },

  login: function (req, res) {
    res.render('home/login');
  },
};

const User = require('../../models/User.js');
const us = new User();

const input = {
  login: function (req, res) {
    const id = req.body.id;
    const pass = req.body.pass;

    console.log(us.getUsersId());
    const response = {};
    if (us.getUsersId().includes(id)) {
      const idx = us.getUsersId().indexOf(id);
      if (us.getUsersPass()[idx] === pass) {
        response.success = true;
        response.msg = '로그인에 성공했습니다';
        return res.json(response) + console.log(us.getUsersName()[idx]);
      }
    }
    response.success = false;
    response.msg = '로그인에 실패했습니다';
    return res.json(response) + console.log(us.getUsersName());
  },
};
module.exports = { output, User, input };
