let id = document.querySelector('#userId');
let pass = document.querySelector('#userPass');
let submit = document.querySelector('#submit2');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const req = {
    id: id.value,
    pass: pass.value,
  };

  console.log(JSON.stringify(req));
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
