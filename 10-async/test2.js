function login(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function getVideo() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('back');
      resolve('back을 실행했구나');
    }, 1000);
  });
}

function getDetail() {
  return new Promise(function (resolve, reject) {
    resolve('여기는 callback hell');
  }, 1000);
}

//async - await로 출력
async function exec() {
  let user = await login('kim');
  console.log(user + '반가워');
  let videos = await getVideo(user);
  console.log(videos);
  let title = await getDetail(videos[0]);
  console.log(title);
}

exec();
