function getFetch() {
  const form = document.forms['realForm'];
  const result = document.querySelector('#result');

  fetch(
    `/getFetch?userName=${form.userName.value}&gender=${form.gender.value}&birth=${form.birth.value}&month=${form.month.value}&days=${form.days.value}&hobby=${form.hobby.value}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.name);
      result.innerHTML = `
          <h1> 이곳은 결과창입니다!!! </h1>
          <ul>
            <li>
                        이름은 <span style="color: blue;">${data.userName}</span>
                        </li>
                        <li>
                        성별은 <span style="color: blue;">${data.gender}</span>이고
                        </li>
                        <li>
                        생년월일은 <span style="color: blue;">${data.birth}년 ${data.month}월 ${data.days}일</span>
                        </li>
                        <li>
                        취미는 <span style="color: blue;">${data.hobby}</span>이군요.
                        </li>
          </ul>`;
      result.style.color = 'dodgerblue';
    })
    .catch((err) => {
      console.error(err);
    });
}
