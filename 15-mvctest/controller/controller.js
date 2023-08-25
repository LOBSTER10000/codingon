const Board = require('../models/Board.js');
const mysql = require('./mysql.js');
mysql.connection.connect();

const board = new Board();

const output = {
  async index(req, res) {
    try {
      const result = await board.getFindAll();
      return res.render('index', {
        success: true,
        msg: '가져왔습니다',
        result: result,
      });
    } catch (error) {
      console.error(error);
      return res.json({
        success: false,
        msg: '가져오는데 실패했습니다',
      });
    }
  },
};

const input = {};
module.exports = { output, input };
