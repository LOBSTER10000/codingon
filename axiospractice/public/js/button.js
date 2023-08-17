document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#realForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const queryString = new URLSearchParams(data).toString();

    fetch('/getResult?' + queryString, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.gender);
      })
      .catch(function (err) {
        console.error(err);
      });
  });
});
