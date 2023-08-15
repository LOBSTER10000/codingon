const id = document.querySelector('#text2');
const pass = document.querySelector('#pass2');
const submit2 = document.querySelector('#button2');

submit2.addEventListener('click', () => {
  const req = {
    id: id.value,
    pass: pass.value,
  };

  console.log(req);
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = '/';
      } else {
        alert('로그인에 실패하셨습니다');
      }
    })
    .catch((err) => console.error(err));
});
