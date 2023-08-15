// async - await

// async : 함수 앞에 붙이는 키워드
// 함수만 보고도 비동기 함수임을 유추
// 프로미스를 반환

// await : 기다리다
// 성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
// await 뒤에는 프로미스가 오게 됨
// - ** async 키워드를 사용한 함수 안에서만 await 키워드를 사용 가능

// async/await는 세트

// 1초 뒤에 과일 배열을 출력하는 코드

function fetchFruits() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      const fruits = ['사과', '수박', '레몬'];
      res(fruits);
    }, 1000);
  });
}

// 1) promise then() 메서드 사용
fetchFruits()
  .then(function (f) {
    console.log(f);
  })
  .catch((err) => {
    console.error(err);
  });

//2) async-await 키워드 사용시
async function printItems() {
  const fruits = await fetchFruits();
  console.log(fruits);
}
