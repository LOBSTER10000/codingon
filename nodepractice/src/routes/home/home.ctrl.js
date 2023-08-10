const output = {
  home: function (req, res) {
    res.render('home/index');
  },

  login: function (req, res) {
    res.render('home/login');
  },
};

const users = {
  id: ['lobster100', 'lobster', 'lee'],
  pass: ['1', '1', '1'],
};

const input = {
  login: function (req, res) {
    const id = req.body.id;
    const pass = req.body.pass;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pass[idx] === pass) {
        return res.json({
          success: true,
          msg: '로그인에 성공했습니다',
        });
      }
    }
    return res.json({
      success: false,
      msg: '로그인에 실패했습니다',
    });
  },
};

module.exports = {
  users,
  output,
  input,
};
