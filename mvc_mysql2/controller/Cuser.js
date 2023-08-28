const User = require('../model/User.js');
const user = new User();

const output = {
  index: (req, res) => {
    res.render('index');
  },

  login: (req, res) => {
    res.render('login');
  },

  join: (req, res) => {
    res.render('sign');
  },

  async profile(req, res) {
    const userid = req.params.id;
    const app = await user.selectUser(userid);
    console.log('빈값이 찍히는 구간' + userid);
    console.log('빈값으로 나오는 구간 ' + app);
    return res.render('profile', {
      data: app,
    });
  },

  error: (req, res) => {
    res.render('404');
  },
};

const input = {
  async join(req, res) {
    const data = {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    };
    const user = new User(null, data.userid, data.name, data.pw);
    await user.postJoin();
    return res.send({
      success: true,
      userid: data.userid,
      name: data.name,
      pw: data.pw,
    });
  },

  async login(req, res) {
    const data = {
      userid: req.body.userid,
      pw: req.body.pw,
    };

    const app = await user.postLogin(data.userid, data.pw);
    if (app === true) {
      console.log(data);
      console.log('성공했습니다');
      return res.send({
        success: true,
        userid: data.userid,
        pw: data.pw,
      });
    } else {
      console.log('실패했습니다');
      return res.send({
        success: false,
      });
    }
  },

  async delete(req, res) {
    const userid = req.body.id;
    await user.deleteBoard(userid);
    return res.json({
      success: true,
      userid: req.body.id,
      name: req.body.name,
      pw: req.body.pw,
    });
  },
};

module.exports = { output, input };
