const express = require('express');
const controller = require('./controller.js');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname), ext) + Date.now() + ext;
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// storage : 저장할 공간에 대한 정보
// diskStorage : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
// destination : 저장할 경로
// filename : 파일명
// limits : 파일제한

router.get('/', controller.output.index);

//upload.single -> 하나의 파일을 업로드 ('input file의 name값')
// 요청이 들어오면 multer설정에 따라 파일을 업로드 한 후, req.file 객체를 생성
// single() 인자는 input 태그의 name 속성과 일치;

// {
//     fieldname: 'userfile',
//     originalname: 'moomin.png', 파일의 원래 이름
//     encoding: '7bit',
//     mimetype: 'image/png', 파일 타입
//     destination: 'uploads/', 저장 경로
//     filename: 'moomin.png', destination에 저장된 파일 이름
//     path: 'uploads\\moomin.png', 저장 경로
//     size: 432102 // 파일 크기
//   }

router.post('/upload', upload.single('userfile'), function (req, res) {
  console.log(req.file); //req.file : 파일 업로드 성공 결과(파일정보)
  console.log(req.body); // req.body : title 데이터 정보 확인 가능
  res.send('upload!');
});
module.exports = router;
