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
};

const users = {
  id: ['lobster', 'sean', 'sessac'],
  password: ['1234', 'abcd', 'pokemon'],
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

module.exports = { output, input, users };
