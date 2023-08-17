document.addEventListener('DOMContentLoaded', function () {
  const id = document.querySelector('#id');
  const pass = document.querySelector('#password');
  const form = document.querySelector('#loginForm');
  const content = document.querySelector('#content');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const req = {
      id: id.value,
      pass: pass.value,
    };

    fetch('/login', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(req),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        if (data.success) {
          alert('로그인에 성공했습니다');
          content.textContent = '로그인에 성공했습니다';
          content.style.color = 'blue';
        }
        else {
          alert('로그인에 실패했습니다');
          content.textContent = '로그인에 실패했습니다';
          content.style.color = 'red';
        }
      })
      .catch((err)=>{
        console.error(err);
      });
  });
});
