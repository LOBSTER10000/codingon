const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10; // 소금 생성 라운드 수
const salt = bcrypt.genSaltSync(saltRounds);

function hashPassword(password) {
  return bcrypt.hashSync(password, salt);
}
function comparePassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}
const output = {
  index: (req, res) => {
    const userid = req.session.userid;
    const name = req.session.name;

    res.render('index', {
      userid: userid,
      name: name,
    });
  },

  login: (req, res) => {
    res.render('login');
  },

  post: (req, res) => {
    res.render('post');
  },

  profile: async (req, res) => {
    const id = req.session.user.id;
    const result1 = await User.findOne({
      where: {
        id: id,
      },
    });
    console.log(result1);
    if (result1) {
      res.render('profile', {
        data: result1,
      });
    } else {
      res.redirect('/login');
    }
  },

  user: async (req, res) => {
    const data = await User.findAll();
    console.log(data);
    return res.render('users', {
      data: data,
    });
  },
};

const input = {
  post: async (req, res) => {
    const pw1 = hashPassword(req.body.pw);

    const result = await User.create({
      userid: req.body.userid,
      pw: pw1,
      name: req.body.name,
    });
    console.log(result);
    res.send(result);
  },

  login: async (req, res) => {
    const { userid, pw } = req.body;
    const user = await User.findOne({
      where: {
        userid: userid,
      },
    });

    if (!user) {
      return res.send({
        success: false,
        msg: '사용자를 찾을 수 없습니다',
      });
    }

    const passwordMatch = bcrypt.compareSync(pw, user.pw);

    if (!passwordMatch) {
      return res.send({
        success: false,
        msg: '비밀번호가 일치하지 않습니다',
      });
    }

    req.session.user = user;
    req.session.userid = user.userid;
    req.session.name = user.name;
    req.session.id = user.id;

    res.send({
      data: user,
      success: true,
    });
  },

  profile: async (req, res) => {
    const result2 = await User.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: req.session.id,
        },
      }
    );
    return res.send({
      data: result2,
    });
  },
  logout: async (req, res) => {
    req.session.destroy((error) => {
      if (error) {
        res.send('로그아웃 실패');
      } else {
        res.redirect('/');
      }
    });
  },
};
module.exports = { output, input };
