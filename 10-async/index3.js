async function f1() {
  return 1;
}

async function f2() {
  return Promise.resolve(1);
}

console.log(f1());
// f1 함수는 async 키워드가 붙어 있으므로 프로미스를 반환! => Promise{1}

f1().then(function (result) {
  console.log(result);
});

console.log(f2()); // Promise { <pending> }
f2().then(function (result) {
  console.log(result);
});

//function에 async가 붙으면 반환이 프로미스 형태로 반환된다.
