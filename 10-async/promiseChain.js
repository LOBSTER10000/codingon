function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      //   resolve(result);
      reject(new Error('의도적으로 발생시킨 에러'));
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log('1 :', result);
    return mul(result);
  })
  .then(function (result) {
    console.log('2 :', result);
    return sub(result);
  })
  .then(function (result) {
    console.log('3 : ', result);
  })
  .catch(function (err) {
    console.log('실패!');
    console.error(err);
  });
