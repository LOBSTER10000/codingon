// promise (프로미스)
// 비동기 함수를 동기처리 하기 위해 만든 객체
// 미래에 실패/성공에 대한 결과값을 '약속'한다는 의미를 지님
// 성공, 실패를 분리해서 반환
//   - 성공과 실패에 대한 결과는 then, catch 메서드로 이어받아서 사용 가능

// => 성공이든 실패이든 무엇인가의 "최종 결과"를 나타내는 객체
// resolved : 성공
// rejected : 실패

// 1. promise를 생성하는 코드
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        'promise 상태는 fulfilled!!! then으로 연결됩니다. \n 이떄의 flag가 true입니다.'
      );
    } else {
      reject(
        'promise의 상태는 rejected!!! catch로 연결됩니다. \n 이떄의 flag는 false입니다. '
      );
    }
  });
}

// 2. promise를 사용(소비)하는 코드

promise1(true)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

promise1(false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

//화살표 함수로도 가능!
promise1(5 > 3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
