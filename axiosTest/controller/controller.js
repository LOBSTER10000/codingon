const user = require('../models/User.js');
const user1 = user.split('//');
const users = {
  id: [user1[0], user1[3], user1[6]],
  password: [user1[1], user1[4], user1[7]],
  name: [user1[2], user1[5], user1[8]],
};

const output = {
  index: (req, res) => {
    res.render('index');
  },

  login: (req, res) => {
    res.render('login');
  },

  getInfo: (req, res) => {
    res.render('getInfo');
  },

  getError: (req, res) => {
    res.render('404');
  },
};

const input = {
  getAxios: (req, res) => {
    res.json(req.query);
  },

  login: (req, res) => {
    console.log(req.body);
    const userId = req.body.id;
    const userPass = req.body.password;

    if (users.id.includes(userId)) {
      const idx = users.id.indexOf(userId);
      if (users.password[idx] === userPass) {
        return res.json({
          success: true,
          msg: '로그인에 성공하셨습니다',
          result: {
            id: userId,
            password: userPass,
          },
        });
      }
    }
    return res.json({
      success: false,
      msg: '로그인에 실패하셨습니다',
    });
  },
};

module.exports = { output, input };
