const express = require('express');
const controller = require('./controller.js');
const router = express.Router();
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장모듈
const upload = multer({
  dest: 'uploads/',
});

const uploadDetail = multer({
  //multer 세부 설정
  // storage 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    // destination은 req, file, done(콜백함수) 세가지 인자를 가진다
    destination(req, file, done) {
      done(null, 'uploads/');
      // 파일을 업로드 할 경로를 설정
    },

    //filename 파일명 지정
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일의 확장자를 추출
      done(null, path.basename(file.originalname), ext) + Date.now() + ext;
      // 원본 파일에서 확장자를 제외한 파일 이름만 추출
      // 파일 이름 + 날짜 + 확장자
    },
  }),
  // limits : 파일 제한!!
  limits: { fileSize: 5 * 1024 * 1024 },
});

const uploadTest = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
      //done(null, xx) -> 여기서 null은 에러를 의미하는 매개변수
      // 에러가 없으니 'null'이라고 전달하여 콜백함수를 호출;
    },

    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(req.body.id + ext), ext) + Date.now() + ext;
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
router.get('/register', controller.output.register);
router.get('/result', controller.output.result);
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

router.post('/upload', uploadDetail.single('userfile'), function (req, res) {
  console.log(req.file); //req.file : 파일 업로드 성공 결과(파일정보)
  console.log(req.body); // req.body : title 데이터 정보 확인 가능
  res.send('upload!');
});

// 2. array() : 여러파일 한번에 업로드
// multer
router.post(
  '/upload/array',
  uploadDetail.array('userFiles'),
  function (req, res) {
    console.log(req.file);
    console.log(req.body);
    res.send(`하나의 인풋에 여러 파일 업로드 완료!`);
  }
);

//3. field() : ㅇ러개 파일을 각각 업로드
router.post(
  '/upload/fields',
  uploadDetail.fields([{ name: 'userFiles1' }, { name: 'userFiles2' }]),
  function (req, res) {
    console.log(req.files);
    console.log(req.body);
    res.send('여러개의 인풋에 여러 파일 업로드 ');
  }
);

//동적 폼 전송
router.post(
  '/dynamicFile',
  uploadDetail.single('dynamicUserFile'),
  function (req, res) {
    console.log(req.file);
    res.send(req.file);
  }
);

// 마지막 파일
router.post('/upload3', uploadTest.single('userFiles'), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.send(`
    <div style="margin: 0 auto; text-align: center">
      <h1>여기는 결과창</h1>
      <div>
        <img src="/${req.file.filename}" alt="${req.file.filename}" width="200"/>
        <div>
          <h2>${req.body.id}님 회원가입을 축하합니다</h2>
          <p>비밀번호 : ${req.body.password}</p>
          <p>이름 : ${req.body.name}</p>
          <p>나이 : ${req.body.age}</p>
        </div>
      </div>
    </div>`);
});
module.exports = router;
