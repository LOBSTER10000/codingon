const { User } = require('../model');

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
    // const data = {
    //   userid: req.body.userid,
    //   name: req.body.name,
    //   pw: req.body.pw,
    // };
    // const user = new User(null, data.userid, data.name, data.pw);
    // await user.postJoin();
    // return res.send({
    //   success: true,
    //   userid: data.userid,
    //   name: data.name,
    //   pw: data.pw,
    // });
    const { userid, name, pw } = req.body;
    const result = await User.create({
      userid,
      name,
      pw,
    });
    console.log(result);
    res.send({
      userid: result.userid,
      name: result.name,
      pw: result.pw,
    });
  },

  async login(req, res) {
    // const data = {
    //   userid: req.body.userid,
    //   pw: req.body.pw,
    // };

    // const app = await user.postLogin(data.userid, data.pw);
    // if (app === true) {
    //   console.log(data);
    //   console.log('성공했습니다');
    //   return res.send({
    //     success: true,
    //     userid: data.userid,
    //     pw: data.pw,
    //   });
    // } else {
    //   console.log('실패했습니다');
    //   return res.send({
    //     success: false,
    //   });
    // }

    const { userid, pw } = req.body;
    const result = await User.findOne({
      where: { userid, pw },
    });
    console.log(result._options.raw);
    if (result._options.raw == true) {
      return res.send({
        success: true,
        userid: userid,
        pw: pw,
      });
    } else {
      return res.send({
        success: false,
      });
    }
  },

  async delete(req, res) {
    // const id = req.body.id;
    // const app = await user.deleteBoard(id);
    // console.log('여기에 첫번째' + id);
    // console.log('여기에 두번째' + app);
    // return res.json({
    //   success: true,
    // });
    const { id } = req.body;
    const result = await User.destroy({
      where: { id },
    });
    console.log(result);
    return res.json({
      success: true,
    });
  },

  async profile(req, res) {
    // const userid = req.body.userid;
    // const app = await user.selectUser(userid);
    // console.log(userid);
    // console.log(app[0]);
    // return res.render('profile', {
    //   success: true,
    //   userid: userid,
    //   data: app[0],
    // });

    const { userid } = req.body;
    const result = await User.findOne({
      where: { userid },
    });
    console.log(result);
    return res.render('profile', {
      success: true,
      userid: userid,
      data: result,
    });
  },

  async update(req, res) {
    // const data = {
    //   id: req.body.id,
    //   name: req.body.name,
    //   pw: req.body.pw,
    // };
    // const app = await user.updateUser(data);
    // console.log('업데이트 값' + app[0]);
    // return res.json({
    //   data: app[0],
    // });

    const { id, name, pw } = req.body;
    const result = await User.update(
      {
        name,
        pw,
      },
      {
        where: { id },
      }
    );
    console.log(result);
    return res.json({
      data: result,
    });
  },
};

module.exports = { output, input };
