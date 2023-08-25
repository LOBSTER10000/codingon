document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#realForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const writer = document.querySelector('#writer').value;
    const header = document.querySelector('#header').value;
    const content = document.querySelector('#content').value;
    const result1 = document.querySelector('#writerResult');
    const result2 = document.querySelector('#headerResult');
    const result3 = document.querySelector('#contentResult');

    const req = {
      writer: writer,
      header: header,
      content: content,
    };

    axios({
      method: 'POST',
      url: '/post',
      data: req,
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.result);

        if (res.data.success) {
          alert('성공하셨습니다');
          result1.textContent = JSON.stringify(res.data.result.writer).replace(
            /"'/g,
            ''
          );
          result2.textContent = JSON.stringify(res.data.result.header).replace(
            /"'/g,
            ''
          );
          result3.textContent = JSON.stringify(res.data.result.content).replace(
            /"'/g,
            ''
          );
        } else {
          alert('실패했습니다');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });
});
