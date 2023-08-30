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
        <button type="button" onclick="updateVisitor('<%=d.id%>')">수정</button>
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

function updateVisitor(id) {
  axios({
    method: 'get',
    url: `/visitorId/${id}`,
  })
    .then((res) => {
      console.log(res);
      console.log(res.data);
      console.log('허허' + res.data.result.name);
      console.log('하하' + res.data.result.comment);
      const form = document.forms['visitor-form'];
      form.name.value = res.data.result.name;
      form.comment.value = res.data.result.comment;
    })
    .catch((err) => {
      console.error(err);
    });

  const btns = `<button type="button" onclick="editVisitor(${id})">변경</button>
     <button type="button" onclick="cancelVisitor()">취소</button>
    `;
  buttonGroup.innerHTML = btns;
}

function editVisitor(id) {
  const form = document.forms['visitor-form'];
  if (confirm('실제로 변경하시겠습니까?') === true) {
    axios({
      method: 'patch',
      url: `/visitor/edit`,
      data: {
        id,
        name: form.name.value,
        comment: form.comment.value,
      },
    }).then((res) => {
      console.log(res);
      console.log(res.data);
      const updated = res.data.isUpdated;

      if (updated) {
        alert('수정완료');
      }

      const tr = document.querySelector(`#tr_${id}`).children;
      tr[1].textContent = form.name.value;
      tr[2].textContent = form.comment.value;

      form.name.value = '';
      form.comment.value = '';
    });
  }
}

function cancelVisitor() {
  const form = document.forms['visitor-form'];
  form.name.value = '';
  form.comment.value = '';

  const btns = `
  <button type="button" onclick="createVisitor()">등록</button>
  `;

  buttonGroup.innerHTML = btns;
}
