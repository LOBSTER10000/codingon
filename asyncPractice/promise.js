function promise1(flag) {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve(`fulfilled`);
    } else {
      reject('rejected');
    }
  });
}

promise1(false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(`에러 메세지 출력` + err);
  });

//resolve()는 then 메서드 실행
//reject()는 catch 메서드 실행
