//promise 체이닝 없이 콜백으로만 작성해보기

function add(n1, n2, cb) {
  setTimeout(function () {
    let result = n1 + n2;
    cb(result);
  }, 1000);
}

function mul(n, cb) {
  setTimeout(function () {
    let result = n * 2;
    cb(result);
  }, 700);
}

function sub(n, cb) {
  setTimeout(function () {
    let result = n - 1;
    cb(result);
  }, 500);
}

add(4, 3, function (x) {
  console.log(`1 : ${x}`);
  mul(x, function (y) {
    console.log(`2 : ${y}`);
    sub(y, function (z) {
      console.log(`3 : ${z}`);
    });
  });
});
