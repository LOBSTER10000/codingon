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

const users = {
  id: ['lobster100', 'abc100', 'kim100'],
  pass: ['1234', '1234', '1234'],
};

const process = {
  login: function (req, res) {
    const id = req.body.id;
    const pass = req.body.pass;

    console.log(req.body);

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pass[idx] === pass) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: '로그인에 실패하였습니다',
    });
  },
};
module.exports = {
  users,
  output,
  process,
};
