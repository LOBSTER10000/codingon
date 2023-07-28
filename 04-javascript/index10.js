const div1 = document.querySelector('#div1');
console.log(div1);

//속성변경
const naver = document.getElementById('naver');
naver.setAttribute('href', 'http://www.google.com');

const pooh = document.getElementById('pooh');
// pooh.setAttribute('src', './img/temp.png');

// getAttribute(속성명) -> 속성 값 "얻기"
console.log(document.getElementById('pooh').getAttribute('src'));

// 참고! 속성 접근 (.) 연산자로도 가능
console.log(document.getElementById('pooh').id); // pooh.id
console.log(document.getElementById('naver').href); // naver.id

// 참고! . 연산자로 속성에 접근하고 = 할당 연산자로 속성 값 변경 가능
document.getElementById('naver').href = '#';

//css 지정

const h1 = document.querySelector('h1');
const list = document.querySelectorAll('ul > li'); // 유사배열

// style속성을 이용해 css 지정 가능
// style.XXX  (xxx: camelCase)
list[0].style.backgroundColor = 'purple';
list[0].style.fontSize = '20px';
list[0].style.color = 'yellow';

for (let li of list) {
  li.style.backgroundColor = 'purple';
  li.style.fontSize = '20px';
  li.style.color = 'yellow';
}

// css 지정 2. classList 활용
// xxx.classList.add
// xxx.classList.remove
// xxx.classList.contains: 있는지 없는지 확인(t/f)
// xxx.classList.toggle: 반복

// h1.classList.add('add-h1');
// h1.classList.remove('add-h1');

// h1.classList.add('p-2');
// if (h1.classList.contains('p-2')) {
//   h1.innerText = 'h1 클래스가 있으여';
// } else {
//   h1.innerText = 'h1 클래스가 없으여';
// }
// h1.classList.contains('p-2'); // 조건문과 많이 쓰임

h1.classList.toggle('add-h1');

//요소 찾기
// 계층 구조 (형제, 자식, 부모, 조상, 자손)
const friends = document.querySelector('#friends');
const tigger = document.querySelector('#tigger');

// 1. 자식 요소
console.log(friends.children);

// 2. 부모요소
console.log(tigger.parentNode);
console.log(tigger.parentNode.parentNode);

// 3.형제요소
console.log(tigger.previousSibling);
console.log(tigger.nextElementSibling);
console.log(tigger.nextElementSibling.nextElementSibling);

// 요소 생성, 추가, 삭제
const container = document.querySelector('.container');

// 요소 생성
const p = document.createElement('p'); //요소 생성
console.log(p);
p.innerText = '저는 새롭게 생성된 텍스트입니다.';
p.style.fontWeight = 700;
p.style.backgroundColor = 'red';

// 새로 만든 요소를 추가
// x.append(y) : x요소의 맨 마지막 자식으로 y요소가 추가됨
container.append(p);

const p2 = document.createElement('p');
const p3 = document.createElement('p');
p2.innerHTML = 'p2';
p3.innerHTML = 'p3';
p2.classList.add('p-2');
p3.classList.add('p-3');

container.append(p2, p3);

// x.prepend(y) : x 요소의 맨 처음 자식으로 y요소 추가
const li1 = document.createElement('li');
li1.textContent = '캉가';
friends.prepend(li1);
li1.style.background = 'red';

const li0 = document.createElement('li');
li0.innerHTML = '<b>친구들을 소개합니다</b>';
friends.prepend(li0);

// 요소 삭제
// x.remove() : x요소 삭제
const firstLi = document.querySelector('li');
console.log(firstLi);

const ul = firstLi.parentNode; // ul 태그가 선택됨
ul.removeChild(firstLi); // 자식 요소 삭제를 의미
// firstLi.remove();
