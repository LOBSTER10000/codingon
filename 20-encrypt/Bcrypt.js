// bcrypt
// : 비밀번호를 암호화하는 알고리즘 중 하나
// : 주로 강력한 보안 필요할 때 사용
// : blowfish 암호를 기반으로 설계된 단방향 암호화 함수
// (보안 강화하기 위해 해쉬화 하는 것으로 원본 데이터를 복원하는 기능은 없음)

const Bcrypt = require('bcrypt');

const originalPassword = '1234'; // 원본 비번
const saltRounds = 10; // 솔트 라운드 수를 정의

// 1. 비밀번호 해싱 함수
// 노드에서 sync라는 것이 붙을 경우에는 동기처리를 하는 경우
function hashPassword(password) {
  return Bcrypt.hashSync(password, saltRounds);
}

// 2. 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수
function comparePassword(password, hashedPassword) {
  return Bcrypt.compareSync(password, hashedPassword);
}

// 사용 예시
// 원본 비밀번호를 알고리즘(해싱)한 결과
const hashedPassword = hashPassword(originalPassword);
console.log(`Hashed password : ${hashedPassword}`);

//원본 비밀번호와 알고리즘화된 비밀번호가 일치하는지 확인
const isMatch = comparePassword(originalPassword, hashedPassword); // 같다면 true, 아니라면 false
console.log(`comparePassword : ${isMatch}`);

const isMatch2 = comparePassword('12345', hashedPassword); // 같다면 true, 아니라면 false
console.log(`comparePassword2 : ${isMatch2}`);
