const user = {
  id: ['lobster', 'lob', 'cob'],
  password: ['1234', '1234', '1234'],
};

const input = {
  login: function (req, res) {
    const id = req.body.id;
    const password = req.body.password;

    if (user.id.includes(id)) {
      const idx = user.id.indexOf(id);
      if (user.password[idx] === password) {
        return res.json({
          success: true,
          msg: '로그인이 되셨습니다',
          id: id,
          password: password,
        });
      }
    }
    return res.json({
      success: false,
      msg: '로그인에 실패했습니다',
    });
  },
};

module.exports = { input, user };
