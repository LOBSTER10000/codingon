'use strict';
// use strict를 쓰는 경우 좀 더 엄격하게 자바스크립트 파일을 관리한다

// sequelize 모듈을 호출
const Sequelize = require('sequelize');

// config.json 파일을 불러와서 development 환경의 db설정
// config : db접근 가능한 설정 값
const config = require(__dirname + '/../config/config.json')['development'];

// 빈 db 객체 생성
const db = {};

// sequelize의 변수에 담아놓은 값들을 다시 저장
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// db = {sequelize, Sequelize}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// !! models/ 폴더에 정의되는 model(테이블)은 db객체에 저장
// db = {sequelize, Sequelize, Visitor: 모델(테이블)}
db.User = require('./User')(sequelize, Sequelize);

// db 객체 내보냄(모듈화 내보냄, 다른 곳에서 db객체 사용)
module.exports = db;
