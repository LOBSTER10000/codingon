function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('callback hell');
    }, 1000);
  });
}

// call('kim')
//   .then((res) => {
//     console.log(res + ' 반가워');
//     return back();
//   })
//   .then((res) => {
//     console.log(res + '을 실행했구나');
//     return hell();
//   })
//   .then((res) => {
//     console.log('여기는 ' + res);
//   });

async function go() {
  let user = await call('kim');
  console.log(user + '님 환영합니다');
  let vidoes = await back();
  console.log(vidoes + '을 실행했구나');
  let title = await hell();
  console.log('여기는 ' + title);
}

go();
