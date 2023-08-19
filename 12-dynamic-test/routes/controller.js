const output = {
  dynamic: function (req, res) {
    res.render('dynamic');
  },
};

const users = {
  id: 'lobster',
  password: '1234',
};

const input = {
  login: function (req, res) {
    console.log(req.body);
    const userId = req.body.id;
    const userPassword = req.body.password;
    if (users.id === userId && users.password === userPassword) {
      res.send({
        id: users.id,
        password: users.password,
      });
    } else {
      res.send({
        id: users.id,
        password: users.password,
      });
    }
  },
};
module.exports = { output, users, input };
