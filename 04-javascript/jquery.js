// JQuery
// $(선택자).동작함수()
// $() : HTML 요소를 선택하는 함수
// 동작함수 : 동작수행

console.log($('#div1'));

function submitJs() {
  let div1 = document.querySelector('#div1');
  //div 내용을 변경
  div1.innerText = '반갑습니다';

  //div border style 추가
  div1.setAttribute('style', 'border: 2px solid red;');
}

function submitJQuery() {
  let div1 = $('#div1');
  //div 내용을 변경
  div1.text('변경했습니다');

  //div border style 추가
  div1.css('border', '2px dotted black');
}

let colorsJs = document.querySelectorAll('.color');

let colorsJQuery = $('.color');

//유사배열형태
console.log(colorsJs); //nodeList
console.log(colorsJQuery); // jQuery 객체

// js li 요소 클릭시 글씨 색상 빨간색
colorsJs.forEach((item) => {
  item.addEventListener('click', () => {
    item.style.color = 'red';
  });
});

// jQuery li 요소 클릭시 배경 색상 하늘색
// 제이쿼리는 카멜형이 아닌 css 형식 그대로 해야함
colorsJQuery.on('click', function () {
  $(this).css('background-color', 'skyblue');
});
