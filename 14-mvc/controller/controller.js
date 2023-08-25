const comment = require('../models/Comment.js');

const output = {
  index: (req, res) => {
    res.render('index');
  },

  comment: (req, res) => {
    console.log('req.params', req.params);
    const cmtId = parseInt(req.params.id);

    if (!comment[cmtId - 1]) {
      res.render('404');
    }
    if (isNaN(cmtId)) {
      res.render('404');
    }
    return res.render('comment', { comment: comment[cmtId - 1] });
  },

  comments: (req, res) => {
    res.render('comments', { comments: comment });
  },

  error: (req, res) => {
    res.render('404');
  },

  test: (req, res) => {
    console.log(req.params);
    res.send('test res success!');
  },
};

module.exports = {
  output,
};
