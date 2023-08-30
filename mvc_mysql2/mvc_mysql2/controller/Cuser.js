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
    const id = req.body.id;
    const app = await user.deleteBoard(id);
    console.log('여기에 첫번째' + id);
    console.log('여기에 두번째' + app);
    return res.json({
      success: true,
    });
  },

  async profile(req,res){
    const userid = req.body.userid;
    const app = await user.selectUser(userid);
    console.log(userid);
    console.log(app[0]);
    return res.render('profile', {
      success : true,
      userid : userid,
      data : app[0],
    })
  },

  async update(req,res){
    const data ={
      id : req.body.id,
      name : req.body.name,
      pw : req.body.pw,
    }
    const app = await user.updateUser(data);
    console.log("업데이트 값" + app[0]);
    return res.json({
      data : app[0],
    })
  }
};

module.exports = { output, input };
