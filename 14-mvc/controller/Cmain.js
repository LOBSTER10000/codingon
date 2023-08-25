const Comment = require('../models/Comment.js');

const output = {
  index: (req, res) => {
    res.render('index');
  },

  comment: (req, res) => {
    console.log('req.params', req.params);
    const cmtId = parseInt(req.params.id);
    const comment = Comment.getCommentAll()[cmtId - 1];
    if (!comment[cmtId - 1]) {
      res.render('404');
    }
    if (typeof cmtId != 'number') {
      res.render('404');
    }
    return res.render('comment', { comment: comment });
  },

  comments: (req, res) => {
    res.render('comments', { comments: Comment.getCommentAll() }); //댓글목록 배열
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
