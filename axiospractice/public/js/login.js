document.addEventListener('DOMContentLoaded', function () {
  const id = document.querySelector('#id');
  const password = document.querySelector('#password');
  const form = document.querySelector('#loginForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const req = {
      id: id.value,
      pass: pass.value,
    };

    fetch('/login', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.parse(req),
    })
      .then((res) => {
        console.log(res);
      })
      .then((res) => {
        if (res.success === true) {
        }
      });
  });
});
