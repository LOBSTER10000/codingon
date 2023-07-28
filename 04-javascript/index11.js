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
