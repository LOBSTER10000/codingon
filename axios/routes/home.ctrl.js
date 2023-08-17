const output = {
  login: function (req, res) {
    res.render('login');
  },
};

const user = {
  id: ['lobster', 'sean', 'sessac'],
  pass: ['1234', '1234', '1234'],
};

const input = {
  login: function (req, res) {
    const userId = req.body.userId;
    const userPassword = req.body.userPassword;

    console.log(req.body);

    if (user.id.includes(userId)) {
      const idx = user.id.indexOf(userId);
      if (user.pass[idx] === userPassword) {
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
  output,
  user,
  input,
};
