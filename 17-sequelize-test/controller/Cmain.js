const { Visitor, Board } = require('../models');

const output = {
  index: async (req, res) => {
    const data = await Visitor.findAll({
      order: [['identity', 'desc']],
    });
    console.log(data);
    return res.render('index', {
      data: data,
    });
  },

  post: (req, res) => {
    res.render('post');
  },

  login: (req, res) => {
    res.render('login');
  },

  board: async (req, res) => {
    const data = await Board.findAll({
      order: [['boardNo', 'DESC']],
    });
    console.log(data);
    res.render('board', {
      data: data,
    });
  },
};

const input = {
  post: async (req, res) => {
    const result = await Visitor.create({
      userId: req.body.userId,
      userName: req.body.userName,
      userPass: req.body.userPass,
    });

    console.log(result);
    return res.send({
      data: result,
    });
  },

  selectOne: async (req, res) => {
    const result = await Visitor.findOne({
      where: {
        identity: req.params.identity,
      },
    });
    console.log(result);
    return res.render('postone', {
      data: result,
    });
  },

  delete: async (req, res) => {
    console.log(req.body.identity);
    const result = await Visitor.destroy({
      where: {
        identity: req.body.identity,
      },
    });
    console.log(result);
    if (result === 1) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  },

  login: async (req, res) => {
    const result = await Visitor.findOne({
      where: {
        userId: req.body.userId,
        userPass: req.body.userPass,
      },
    });

    const idResult = await Visitor.findOne({
      where: {
        userId: req.body.userId,
      },
    });

    const passResult = await Visitor.findOne({
      where: {
        userPass: req.body.userPass,
      },
    });
    console.log(result);
    console.log('아이디 정보값 ' + idResult);
    console.log('패스워드 정보값' + passResult);
    if (result) {
      console.log('정상적으로 정보값 있음');
      return res.send(result, {
        success: true,
      });
    } else {
      if (idResult === null && passResult === null) {
        return res.send({
          success: false,
          msg: '비밀번호와 아이디 둘 다 틀렸습니다',
        });
      } else if (idResult !== null) {
        return res.send({
          success: false,
          msg: '비밀번호가 틀렸습니다',
        });
      } else if (passResult !== null) {
        return res.send({
          success: false,
          msg: '아이디가 틀렸습니다',
        });
      }
    }
  },

  update: async (req, res) => {
    const { userPass, identity } = req.body;
    const result = await Visitor.update(
      {
        userPass,
      },
      {
        where: {
          identity,
        },
      }
    );
    console.log(result);
    res.send(result);
  },
};
module.exports = {
  output,
  input,
};
