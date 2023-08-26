const Board = require('../models/Board.js');
const mysql = require('./mysql.js');

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

  async content(req, res) {
    const identity = req.params.identity;
    try {
      const data = await board.getFindOne(identity);
      if (!data) {
        return res.render('404');
      }
      console.log(data);
      return res.render('content', {
        success: true,
        msg: '가져왔습니다',
        data: data,
      });
    } catch (err) {
      return res.render('404');
    }
  },

  error(req, res) {
    res.render('404');
  },

  post(req, res) {
    res.render('post');
  },

  async update(req, res) {
    const identity = req.params.identity;
    try {
      const data = await board.getFindOne(identity);
      if (!data) {
        return res.render('404');
      }
      console.log(data);
      return res.render('update', {
        success: true,
        msg: '가져왔습니다',
        data: data,
      });
    } catch (err) {
      return res.render('404');
    }
  },
};

const input = {
  async post(req, res) {
    const { writer, header, content } = req.body;
    try {
      const board = new Board(null, writer, header, content, null);
      await board.postBoard();

      const updatedData = await board.getFindAll();

      return res.render('index', {
        success: true,
        msg: '게시글 추가 성공',
        result: updatedData,
      });
    } catch (err) {
      console.error(err);
      return res.render('404');
    }
  },

  async delete(req, res) {
    const identity = req.params.identity;
    try {
      await board.deleteBoard(identity);
      const result = await board.getFindAll();

      return res.render('index', {
        result: result,
        success: true,
        msg: '삭제 성공',
      });
    } catch (error) {
      console.error(error);
      return res.render('404');
    }
  },

  async update(req, res) {
    const identity = req.params.identity;
    const content = req.body.content; // 구조분해로 content 변수 추출
    try {
      const board = new Board(null, null, null, content, null); // 필요 없는 값들은 null로 생성자 호출 제거
      const data = await board.updateBoard(content, identity); // content 변수 추가해서 호출
      const result = await board.getFindAll();
      if (!data) {
        return res.render('404');
      }
      return res.render('index', {
        result: result,
        success: true,
        msg: '업데이트 성공',
      });
    } catch (error) {
      console.error(error);
      return res.render('404');
    }
  },
};

module.exports = { output, input };
