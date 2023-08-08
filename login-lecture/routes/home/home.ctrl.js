'use script';

const hello = function hello(req, res) {
  res.render('home/index');
};

const login = function login(req, res) {
  res.render('home/login');
};

module.exports = {
  hello,
  login,
};
