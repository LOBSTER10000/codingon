document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#loginForm');

  const content = document.querySelector('#content');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.querySelector('#id').value;
    const password = document.querySelector('#password').value;
    const req = {
      id: id,
      password: password,
    };

    axios({
      url: '/login',
      method: 'POST',
      data: req,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          alert('로그인에 성공하셨습니다.');
          content.innerHTML = `<h1> 여기는 로그인 정보입니다</h1>
          축하합니다!! <span style='color : dodgerblue;;'>${res.data.result.id}님</span> 안녕하세요. <br> 
          로그인에 성공하셨습니다`;
          content.style.color = 'blue';
        } else {
          alert('로그인에 실패했습니다.');
          content.innerHTML = `<h1>여기는 로그인 정보입니다</h1>
          안타깝습니다 <br> 
          로그인에 실패하셨습니다 다른 정보들을 한번 확인해주세요`;
          content.style.color = 'red';
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });
});
