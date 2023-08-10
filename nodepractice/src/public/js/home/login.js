const id = document.querySelector('#text2');
const pass = document.querySelector('#pass2');
const submit2 = document.querySelector('#button2');

submit2.addEventListener('click', (e) => {
  e.preventDefault();
  const req = {
    id: id.value,
    pass: pass.value,
  };

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
        alert(res.msg);
        location.href = '/';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => console.error(err));
});
