const Visitor = require('../models/Visitor.js');

const output = {
  index: (req, res) => {
    res.render('index');
  },

  visitor: (req, res) => {
    Visitor.getVisitor((result) => {
      console.log(result);
      res.render('visitor', { data: result });
    });
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

const input = {
  visitor: (req, res) => {
    Visitor.postVisitor(req.body, (insertId) => {
      console.log('제대로 찍혔나요?' + insertId);
      return res.send({
        id: insertId,
        name: req.body.name,
        comment: req.body.comment,
      });
    });
  },

  delete: (req, res) => {
    Visitor.deleteVisitor(req.body.id, (result) => {
      console.log(result);
      return res.send({
        data: result,
      });
    });
  },

  update: (req, res) => {
    Visitor.updateVisitor(req.body, (result) => {
      console.log(result);

      return res.send({
        data: result,
        id: req.body.id,
        name: req.body.name,
        comment: req.body.comment,
      });
    });
  },
};

module.exports = { output, input };
