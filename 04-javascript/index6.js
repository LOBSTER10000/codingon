//입력 -> 함수 -> 리턴 -> 출력
// 동일 반복작업 줄임
// 코드 재사용성 높임
// 코드 유지보수성 높임

// 내장함수 alert(), confirm(), prompt()

// 함수는 특정 작업을 수행하기 위해서 독립적으로 설계된 코드 집합
// 함수 정의 : 함수를 생성
// 함수를 호출 : 함수를 사용

// 1. 명시적 함수 선언
function helloWorld() {
  console.log('hello, world');
}

function helloWorld2() {
  return 'hello, world';
}
// 리턴은 반환값, 결과값
// return 키워드를 만나면 함수 실행 중단함

// 2. 함수 표현식(function Expression)
// 함수를 변수에 저장하는 형태
const helloWorld3 = function () {};
//이런 방식으로 변수에 할당 가능

// 함수는 여러번 호출 가능

// 매개변수가 있는 함수?!

function hello2(text, name) {
  return `${text} ${name}`;
}

// 3. 화살표 함수(arrow function)
// 함수 선언 더 간단;
const myFunc1 = (x) => x;
//

//람다식은 대신에 내부에 return값만 있을 경우 바로 {}없이 사용가능
// 식이 길어지면 {}로 return도 같이 식을 사용해야함
const multiFly = (a, b) => a * b;
console.log(multiFly(5, 6));

const square = (a) => a ** 2;
console.log(square(11));

//hoisting(호이스팅)
// : "끌어올리다"는 사전적 의미
// 함수에서는 "함수 선언문"이 호이스팅 대상이 됨
// 코드가 실행되기 전에 변수/함수 선언을 최상단으로 끌어올리는 현상
// 참고) 변수에서는 var 키워드가 호이스팅의 대상임 (let, const는 호이스팅이 되지 않음);

myHello(); // 함수 호출을 정의보다 먼저했는데도 이상이 없는것을 호이스팅이라고 함.
function myHello() {
  console.log('hello~~');
}

//함수 표현식
// - 호이스팅의 대상이 될 수 없음
// - 함수 선언부보다 호출부가 먼저 나올 수 없음
// myHello2();
const myHello2 = function () {
  console.log('hello~~~2');
};

// const age = parseInt(prompt('나이를 입력하세요'));

// if (age >= 20) {
//   console.log('성인');
// } else if (age >= 17) {
//   console.log('고등학생');
// } else if (age >= 14) {
//   console.log('중학생');
// } else if (age >= 8) {
//   console.log('초등학생');
// } else if (age >= 0) {
//   console.log('유아');
// }

// const number = parseInt(prompt('숫자의 범위를 입력하세요'));
// if (number > 100 || number < 0) {
//   console.log('입력값이 잘못되었습니다. 숫자의 범위는 0~100');
// } else if (number >= 90) {
//   console.log('A');
// } else if (number >= 80) {
//   console.log('B');
// } else if (number >= 70) {
//   console.log('C');
// } else if (number >= 60) {
//   console.log('D');
// } else if (number >= 50) {
//   console.log('F');
// }

// //중첩 if문
// let userId = 'user01';
// let userPw = '1234';

// function loginUser() {
//   let inputId = prompt('아이디 입력');
//   let inputPw = prompt('비밀번호 입력');
//   if (inputId === userId) {
//     if (inputPw === userPw) {
//       return '로그인 성공';
//     } else {
//       return '비번 오류! 로그인 실패';
//     }
//   } else if (inputId === '') {
//     return '아이디 입력 안했음';
//   } else {
//     alert('아이디 오류! 로그인 실패!');
//     return '아이디 오류! 로그인 실패!';
//   }
// }

// console.log(loginUser());

//switch문
let score = parseInt(prompt('총점을 입력하세요'));
switch (score / 10) {
  case 10:
    console.log('A+');
    break;
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}

console.log(score);

let now = new Date().getHours();

now >= 12 ? console.log('오후') : console.log('오전');

// 반복문

// for문
for (let i = 0; i < 10; i++) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// i += 2 // i = i + 2
for (let i = 0; i < 10; i += 2) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('--------');

// 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log('--------');

//배열 ,for문

const fruits = ['사과', '배', '포도', '망고'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//-------------------------

// 1~20중에서 짝수일때의 합을 구하기
let sum3 = 0;
for (let i = 1; i < 21; i++) {
  if (i % 2 == 0) {
    sum3 += i;
  }
}
console.log(sum3);

// while 문

let run = 0;
while (run < 10) {
  console.log('안녕', run);
  run++;
}

//

let sum = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0 || i % 5 == 0) {
    sum += i;
  }
}
console.log(sum);

//
for (let i = 0; i < 10001; i++) {
  if (i % 13 == 0 && i % 2 == 1) {
    console.log(i);
  }
}

for (let i = 0; i < 10001; i++) {
  if (i % 13 == 0 && i % 2 == 1) {
    console.log(i);
  }
}

//
let numbers = parseInt(prompt('숫자를 입력하세요'));

for (let i = 0; i < numbers; i++) {
  if (i % 13 == 0 && i % 2 == 1) {
    console.log(i);
  }
}

//
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i + ' x ' + j + ' = ' + i * j);
  }
}
