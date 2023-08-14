const output = {
  home: function (req, res) {
    res.render('home/index');
  },

  login: function (req, res) {
    res.render('home/login');
  },
};

const users = require('../../models/User.js');
users.getUsers();

const input = {
  login: function (req, res) {
    const id = req.body.id;
    const pass = req.body.pass;

    const user = users.getUsers('id', 'pass');
    const response = {};
    if (user.id.includes(id)) {
      const idx = user.id.indexOf(id);
      if (user.pass[idx] === pass) {
        response.success = true;
        response.msg = '로그인에 성공하셨습니다';
        return res.json(response);
      }
    }
    response.success = false;
    response.msg = '로그인에 실패했습니다';
    return res.json(response);
  },
};
module.exports = { output, users, input };
