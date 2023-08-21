const output = {
  index: (req, res) => {
    res.render('index');
  },

  register: (req, res) => {
    res.render('register');
  },

  result: (req, res) => {
    res.render('result');
  },
};

module.exports = { output };
