function getAxios() {
  const form = document.forms['realForm'];
  const result = document.querySelector('#result');
  const name = form.userName.checkValidity();
  console.log(name);
  const gender = form.gender[0].checkValidity();
  console.log(gender);
  const hobby = form.hobby[0].checkValidity();
  console.log(hobby);
  userData = {
    id: form.userName.value,
    gender: form.gender.value,
    birth: form.birth.value,
    month: form.month.value,
    days: form.days.value,
    hobby: form.hobby.value,
  };

  if (!name) {
    result.textContent = `이름에 대한 내용을 적지 않았습니다`;
  } else if (!gender) {
    result.textContent = `성별에 대한 내용을 적지 않았습니다`;
  } else if (!birth) {
    result.textContent = `연도를 고르지 않았습니다`;
  } else if (!hobby) {
    result.textContent = `취미를 선택하지 않았습니다`;
  } else {
    axios({
      url: '/getAxios',
      method: 'get',
      params: userData,
    }).then((res) => {
      console.log(res);
      console.log(res.data);
      result.textContent = `${res.data.id}, ${res.data.gender}, ${res.data.birth}, ${res.data.month}, ${res.data.days}`;
    });
  }
}
