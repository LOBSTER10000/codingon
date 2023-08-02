console.log(document);
console.log($(document));

// 1. Load Event
// in js
document.addEventListener('DOMContentLoaded', function () {
  console.log('문서의 dom 트리가 완성되면 실행되는 이벤트');
});

// in jquery
$(document).ready(function (e) {
  console.log('ready -> 제이쿼리식 dom 트리 실행');
});

//
$(function () {
  console.log('안녕');
});

// 2. Mouse Event
// click in jquery
$('.p-msg').click(function () {
  $('.p-msg').css('color', 'red');
});

// $('.num').click(function () {
//   //   $('.num').css('color', 'blue');
//   $(this).css('color', 'blue');
//   // $(this): 자기 자신 = 이벤트가 적용된 요소
// });

// $('.num').on('click', function () {
//   $(this).css('color', 'blue');
// });

// click in js
const nums = document.querySelectorAll('.num');
// console.log('nums', nums);
for (let num of nums) {
  //   console.log('num', num);
  num.addEventListener('click', function () {
    console.log(this); // 자기 자신 = 현재 클릭된 요소
    this.style.color = 'blue';
  });
}

// click in js

// mouseover(): 요소에 마우스를 올렸을 때
// $('.numbers').mouseover(function () {
//   $(this).css('background-color', 'skyblue');
//   $(this).append('<div>handler for .on() called!!</div>');
// });

// $('.numbers').on('mouseover', function () {
//   $(this).css('background-color', 'skyblue');
//   $(this).append('<div>handler for .on() called!!</div>');
// });

// hover(): 마우스를 올리고 / 땠을 때
// $('.div-hover').hover(
//   function () {
//     $(this).addClass('hover');
//   },
//   function () {
//     $(this).removeClass('hover');
//   }
// );

//hover는 mouseover()와 mouseout()을 합친형태
$('.div-hover').hover(function () {
  $(this).toggleClass('hover');
});

//scroll 이벤트
// 윈도우 창을 스크롤 할때 나타남
// $(window).scroll(function () {
//   console.log('scroll!!');
// });

//in js
// window.addEventListener('scroll', function () {
//   console.log('scrolling!!!!');
// });

//in jquery
$(window).on('scroll', function () {
  console.log('scroll!');
});

//3. Key Event

// 3. Key Event
$('.input-key').on('keydown', function (e) {
  // e: 이벤트 객체
  console.log(e);
  console.log(e.code); // 눌려진 키의 고유 코드
  console.log(e.key); // input에 입력된 값

  if (e.code === 'ArrowUp') {
    console.log('⬆');
  } else if (e.code === 'ArrowDown') {
    console.log('⬇');
  } else {
    console.log('others');
  }
});

// 4. form Event

$('#todo-form').on('submit', function (e) {
  console.log(e);
  e.preventDefault(); // 이벤트의 기본 동작을 막음
  // 지금 발생한 이벤트가 "submit"이라서 submit의 기본동작인 새로고침을 막는것임

  // 퀴즈
  // 1. name 속성값이 todo인 요소를 선택하고 해당 요소의 value를 todo 변수에 저장

  let todo = $('input[name=todo]').val();
  console.log(todo);
  // 2. todos 클래스를 갖는 요소를 선택
  //    -> li 요소에 todo 변수의 값을 텍스트로 갖게 한 후 todos 클래스 요소에 추가

  $('.todos').append(`<li>${todo}</li>`);
  // 3. name 속성값이 todo인 요소의 value 초기화
  $('input[name=todo').val('');
});
