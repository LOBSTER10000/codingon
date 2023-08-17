// 1. XMLHttpRequest 객체 생성

const ajax = new XMLHttpRequest();

// 2. onreadyStateChange 등록
ajax.onreadystatechange = function () {
  //XMLHttpRequest 객체의 현재 상태와 서버 상의 문서 존재 유무를 확인
  if (ajax.readyState == ajax.DONE && ajax.status == 200) {
    console.log(ajax.responseText); // 서버에 요청하여 응답으로 받은 데이터를 문자열로 출력
  }
};

// 3. GET 방식으로 요청을 보내면서 데이터를 동시에 전달함
ajax.open('GET', '서버URL', true);
ajax.send();
