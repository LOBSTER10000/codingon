let id = document.querySelector('#id'); // 수정
let pass = document.querySelector('#password'); // 수정
let button = document.querySelector('#buttons');

button.addEventListener('click', function (e) {
  e.preventDefault();
  const req = {
    id: id.value,
    password: pass.value,
  };
  console.log(req);

  fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert(res.msg);
        location.href = '/';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => console.error('여기는 에러메세지를 출력합니다 ' + err));
});
