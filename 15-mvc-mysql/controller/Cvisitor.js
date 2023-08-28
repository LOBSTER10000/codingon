const Visitor = require('../models/Visitor.js');

const output = {
  index: (req, res) => {
    res.render('index');
  },

  visitor: (req, res) => {
    console.log(Visitor.getVisitor());
    res.render('visitor', { data: Visitor.getVisitor() });
  },

  error: (req, res) => {
    res.render('404');
  },
};

module.exports = { output };
