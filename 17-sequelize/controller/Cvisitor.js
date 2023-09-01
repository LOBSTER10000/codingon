// const Visitor = require('../models/Visitor.js');
const { Visitor } = require('../models/'); // models에 있는 index.js를 선택

const output = {
  index: (req, res) => {
    res.render('index');
  },

  visitor: async (req, res) => {
    // Visitor.getVisitor((result) => {
    //   console.log(result);
    //   res.render('visitor', { data: result });
    // });
    // [before 코드]

    //[after]
    const result = await Visitor.findAll({
      order: [['id', 'desc']],
    });
    console.log(result);
    res.render('visitor', { data: result });
  },

  readVisitor: (req, res) => {
    Visitor.readVisitor(req.params.id, (result) => {
      console.log(result);
      res.render('visitors', {
        data: result,
      });
    });
  },

  error: (req, res) => {
    res.render('404');
  },
};

//create
const input = {
  visitor: async (req, res) => {
    // Visitor.postVisitor(req.body, (insertId) => {
    //   console.log('제대로 찍혔나요?' + insertId);
    //   return res.send({
    //     id: insertId,
    //     name: req.body.name,
    //     comment: req.body.comment,
    //   });
    // });
    // [[before]]

    //[[after]]
    const { name, comment } = req.body;
    const result = await Visitor.create({
      name,
      comment,
    });
    console.log(result);
    res.send(result);
  },

  delete: async (req, res) => {
    // Visitor.deleteVisitor(req.body.id, (result) => {
    //   console.log(result);
    //   return res.send({
    //     data: result,
    //   });
    // });
    // [[before]]

    // [[after]]
    const { id } = req.body;
    const result = await Visitor.destroy({
      where: { id: id },
    });

    console.log(result);
    res.send(true);
  },

  update1: async (req, res) => {
    // console.log(req.params.id);
    // Visitor.selectVisitor(req.params.id, (result) => {
    //   console.log(result[0]);
    //   res.send({
    //     result: result[0],
    //   });
    // });
    //[[before]]

    //[after]
    const { id } = req.params;
    const result = await Visitor.findOne({
      where: { id: id },
    });
    console.log(result);
    res.send(result);
  },

  update2: async (req, res) => {
    // console.log(req.body);
    // Visitor.updateVisitor(req.body, () => {
    //   console.log('결과값 변경');
    //   res.send({ isUpdated: true });
    // });
    // [[before]]

    //[[after]]
    await Visitor.update(
      {
        name: req.body.name,
        comment: req.body.comment,
      },
      {
        where: { id: req.body.id },
      }
    );
    res.send({ isUpdated: true });
  },
};

module.exports = { output, input };
