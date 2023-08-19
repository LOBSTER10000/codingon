// function add(n1, n2, cb) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     cb(result);
//   }, 1000);
// }

// function mul(n, cb) {
//   setTimeout(function () {
//     let result = n * 2;
//     cb(result);
//   }, 1000);
// }

// function sub(n, cb) {
//   setTimeout(function () {
//     let result = n - 1;
//     cb(result);
//   }, 1000);
// }

// 프로미스 체이닝 사용 x
// add(4, 3, function (x) {
//   console.log(x);
//   mul(x, function (y) {
//     console.log(y);
//     sub(y, function (z) {
//       console.log(z);
//     });
//   });
// });

function add(n1, n2) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      let result = n1 + n2;
      res(result);
    }, 1000);
  });
}

function mul(x1) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      let result = x1 * 2;
      res(result);
    }, 1000);
  });
}

function sub(y1) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      let result = y1 - 1;
      res(result);
    }, 1000);
  });
}

add(4, 3)
  .then((x) => {
    console.log(x);
    return mul(x);
  })
  .then((y) => {
    console.log(y);
    return sub(y);
  })
  .then((z) => {
    console.log(z);
  })
  .catch((err) => {
    console.error(err);
  });
