const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

// 등록 폼에 [등록] 버튼 클릭시 테이블에 방문 데이터 추가
function createVisitor() {
  const form = document.forms['visitor-form'];
  axios({
    method: 'post',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log('post visitor 요청' + res);
      console.log(res.data.id);
      console.log(res.data.comment);
      console.log(res.data.name);

      const newVisitor = `
      <tr id="tr_${res.data.id}">
      <td>${res.data.id}</td>
      <td><a href="/visitor/25">${res.data.name}</a></td>
      <td>${res.data.comment}</td>
      <td>
        <button type="button">수정</button>
      </td>
      <td>
        <button type="button" onclick="deleteVisitor(this, '<%=d.id%>')">삭제</button>
      </td>
        </tr>
      `;

      tbody.insertAdjacentHTML('beforebegin', newVisitor);
    })
    .catch((err) => {
      console.error(err);
    });
}

function deleteVisitor(obj, id) {
  console.log(obj, id);

  if (confirm('정말 삭제하시겠습니까?') === true) {
    axios({
      method: 'delete',
      url: `/delete`,
      data: {
        id: id,
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert('삭제 되셨습니다');
        obj.parentElement.parentElement.remove();
      })
      .catch((err) => {
        console.error('에러났습니다' + err);
      });
  }
}

function updateVisitor(obj, id) {
  const name = document.querySelector('#name').value;
  const comment = document.querySelector('#comment').value;

  axios({
    method: 'get',
    url: `/visitor/${id}`,
    data: id,
  })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
