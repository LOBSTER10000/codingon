function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, recject) {
    resolve('callback hell');
  }, 1000);
}

// promise - then - catch로 출력
call('kim')
  .then((result) => {
    console.log(result + '반가워');
    return back(result);
  })
  .then((result) => {
    console.log(result + '을 실행했구나');
    return hell(result);
  })
  .then((result) => {
    console.log('여기는' + result);
  })
  .catch((err) => {
    console.err(err);
  });
