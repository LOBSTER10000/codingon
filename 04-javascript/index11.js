// js에서 이벤트는 어떠한 사건을 의미함
// click, keyUp , mouseover 등등...

//이벤트에 함수를 등록하는 방법 2가지
// 1. -onXXX 속성으로 등록
function clickH1() {
  alert('제목 클릭!');
}

// 2. addEventListener를 사용하여 등록

const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--blue');
const btn4 = document.querySelector('.btn--red');
const container = document.querySelector('#container');

// 이벤트 , 이벤트가 일어났을때 사용할 콜백함수
btn1.addEventListener('click', function (e) {
  alert('버튼 1을 클릭하셨네영');
});

btn1.addEventListener('mouseover', function (e) {
  btn1.style.background = 'aqua';
});

btn1.addEventListener('mouseout', function (e) {
  btn1.style.background = 'black';
});

btn2.addEventListener('click', () => {
  const div = document.createElement('div');
  div.style.background = 'pink';
  div.innerHTML = 'HI!!!!';
  container.append(div);
});

btn3.addEventListener('click', changeColor);
function changeColor() {
  const divs = document.querySelectorAll('#container div');
  for (let div of divs) {
    div.style.background = 'skyblue';
  }
}

btn4.addEventListener('click', function (e) {
  this.style.background = 'gold'; // btn4로 접근
  this.style.color = '#000';
});

const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', function (e) {
  // 이벤트 객체
  console.log(e); //이벤트 객체에 대한 정보 출력
});

input.addEventListener('keydown', function (e) {
  console.log(e.code); // 눌러진 키의 고유 코드
  console.log(e.key); // input에 입력된 값
  if (e.code == 'ArrowUp') {
    console.log('업');
  } else if (e.code == 'ArrowDown') {
    console.log('다운');
  }
});

//폼 관련 이벤트
const todoForm = document.querySelector('#todo-form');
const todos = document.querySelector('.todos');

todoForm.addEventListener('submit', function (e) {
  console.log('submit');
  e.preventDefault(); // 폼 submit 이벤트가 새로 고침 되는 것을 막음
  // 폼 제출을 막음

  const todoInput = document.querySelector('input[name="todo"]');
  //   console.log(todoInput);
  //   console.dir(todoInput.value); // 인풋에 입력된 값을 의미함
  //   console.log(todoInput.value); // input에 입력된 값

  const newTodo = todoInput.value.trim();

  if (newTodo !== '') {
    const newTodoLi = document.createElement('li');
    newTodoLi.append(newTodo); //<li>input 입력값</li>
    todos.append(newTodoLi);
  }

  //input 창 초기화

  todoInput.value = '';
});

//change는 input요소에서 변경이 일어나고 다른 요소를 클릭했을때 일어나는 이벤트
const chgInput = document.querySelector('#change-input');
chgInput.addEventListener('change', function (e) {
  console.log('change!!!', e);
});

// input에 변화가 감지될 때마다 이벤트가 일어남
// 실시간 텍스트 동기화도 마찬가지로 사용가능
chgInput.addEventListener('input', function (e) {
  console.log('changing!!', e);
  const div = document.querySelector('.intro');
  div.textContent = this.value;
});
