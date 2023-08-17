document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#realForm');
  const content = document.querySelector('#content');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
      userId: form.userId.value, // 폼의 입력 필드 이름에 맞춰서 데이터를 가져옴
      userPass: form.userPassword.value,
    };

    axios({
      method: 'POST',
      url: '/login',
      data: data,
    })
      .then((res) => {
        console.log(JSON.stringify(res));
        console.log(JSON.stringify(res.data));
        if (res.data.success) {
          alert('로그인에 성공했습니다');
          content.textContent = '로그인 되셨습니다';
          content.style.color = 'blue';
        } else {
          alert('로그인에 실패했습니다');
          content.textContent = '로그인에 실패했습니다';
          content.style.color = 'red';
        }
      })
      .catch((err) => {
        console.error('에러가 생겼습니다' + err);
      });
  });
});
