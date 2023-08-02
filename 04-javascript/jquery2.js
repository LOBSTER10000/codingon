// val() - value
function getValue() {
  //js
  // let inputVal = document.querySelector('input').value;
  // alert(inputVal);

  //jQuery
  let value = $('input').val();
  alert(value);
}

function setValue() {
  // js
  // document.querySelector('input).val = '하이하이';

  $('input').val('하이하이');
}

// css()
function changeCssJS() {
  let span = document.querySelector('span');
  span.style = 'font-size: 20px; color: red';
}
function changeCssJquery() {
  //   $('span').css('font-size', '40px');
  //   $('span').css('color', 'blue');

  $('span').css({
    fontSize: '40px',
    color: 'blue',
  });
}
function getCssJquery() {
  console.log($('span').css('color'));
}

// attr()
function changeAttrJS() {
  // 퀴즈 : a 태그를 선택하고, href 속성값을 네이버 주소값으로 변경
  let abc = document.querySelector('a');
  abc.setAttribute('href', 'http://www.naver.com');
}

function changeAttrJquery() {
  let abc = $('a');
  abc.attr('href', 'http://www.naver.com');
}
//text()

function changeTextJS() {
  // 퀴즈 : p-text 클래스를 갖는 요소를 선택하고, 요소의 텍스트를 임의값으로 변경
  let pText = document.querySelector('.p-text');
  pText.innerText = '안녕하세요!!!!!!!!!!!!!!!!';
}

function changeTextJquery() {
  let pText = $('.p-text');
  pText.text('안녕');
}

//html()
function changeHtmlJS() {
  let pHTML = document.querySelector('.p-html');
  pHTML.innerHTML = '<h3>javaScript<h3>';
}

function changeHtmlJquery() {
  let pHTML = $('.p-html');
  pHTML.html('<h3>javaScript</h3>');
}

// 요소 추가하기
// append()
function appendJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append

  let color = document.querySelector('.colors');
  let li = document.createElement('li');
  li.innerText = '마지막으로 추가된 js';
  color.append(li);
}

function appendJquery() {
  let color = $('.colors');
  color.append('<li>마지막으로 추가된 제이쿼리</li>');
}

// prepend()
function prependJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend

  let color = document.querySelector('.colors');
  let list = document.createElement('li');
  list.innerText = '첫자식으로 추가된 js';
  color.prepend(list);
}

function prependJquery() {
  let color = $('.colors');
  color.prepend('<li>첫번째로 추가된 제이쿼리</li>');
}

// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before

  let green = document.querySelector('.green');
  let list = document.createElement('li');
  list.innerText = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
  green.before(list);
}

function beforeJquery() {
  let green = $('.green');
  green.before(
    '<li>green 클래스를 갖는 요소의 이전 형제 요소로 추가(제이쿼리)</li>'
  );
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after

  let green = document.querySelector('.green');
  let list = document.createElement('li');
  list.innerText = 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)';
  green.after(list);
}

function afterJquery() {
  let green = $('.green');
  green.after(
    '<li>green 클래스를 갖는 요소의 다음 형제 요소로 추가(제이쿼리)</li>'
  );
}

function removeJS() {
  let li2 = document.querySelector('#li2');
  li2.remove();
}

function removeJquery() {
  let li2 = $('#li2');
  li2.remove();
}

function emptyJS() {
  let num = document.querySelector('.nums');
  num.innerHTML = '';
}

function emptyJquery() {
  let num = $('.nums');
  num.html('');
}
