// pass by value
// : 원시 타입은 값(value)이 복사되어 전달
let num = 1;
let num2 = num;
console.log(num, num2); // 1 1
console.log(num === num2); // true

num = 5; // 1 -> 5
console.log(num, num2); // 5 1
console.log(num === num2); // false

// pass by reference
const obj = { one: 1, two: 2 };
const obj2 = obj;
console.log(obj, obj2); // { one: 1, two: 2 }
console.log(obj === obj2); // true

obj.five = 5;
console.log(obj, obj2); // { one: 1, two: 2, five: 5 }
console.log(obj === obj2); // true
// obj와 obj2는 현재 같은 데이터르 같고 참조값(address, 주소)도 같다

//////
const obj3 = { one: 1, two: 2 };
const obj4 = { one: 1, two: 2 };
console.log(obj3, obj4);
console.log(obj3 === obj4); // false
// why? obj3와 obj4는 현재 같은 데이터를 같지만, 서로 다른 별도의 객체
// 즉, 참조값(address, 주소)가 다르다

// js 표준 내장 객체
// 1. Date 객체 : 시간, 날짜
let now = new Date(); // 현재 일시
let now2 = new Date().getDay();
console.log(now);
console.log(now2);

// 타임스탬프 (timestamp)
// 1970/1/1일을 기준으로 흘러간 밀리초(ms)를 나타낸 경우
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);
let jan_02_1970 = new Date(24 * 3600 * 1000);
console.log(jan_02_1970);

//연월일
let date1 = new Date('2023', '07', '17');

//관련 메소드
console.table(date1.getFullYear());
console.table(date1.getMonth()); // 0 ~ 11주의
console.table(date1.getDate());
console.table(date1.getHours());
console.table(date1.getMinutes());
console.table(date1.getMilliseconds());
console.table(date1.getDay()); //0(일) ~ 6(토);

// 퀴즈
// getDay() 메서드를 이용하여
// Date 객체를 이용해 오늘 요일을 얻고, if or switch 구문을 이용해 평일인지/주말인지 콘솔창에 출력하는 코드 작성

let date3 = new Date();
switch (date3.getDay()) {
  case 0:
    console.log('일');
    break;
  case 1:
    console.log('월');
    break;
  case 2:
    console.log('화');
    break;
  case 3:
    console.log('수');
    break;
  case 4:
    console.log('목');
    break;
  case 5:
    console.log('금');
    break;
  case 6:
    console.log('토');
    break;
}

if (date3.getDay() == '0' || date3.getDay() == '6') {
  console.log('주말');
} else {
  console.log('평일');
}

//Math 객체
//수학적인 상수와 함수

//속성
console.log(Math.E); //자연로그
console.log(Math.Pi); // 파이
console.log(Math.SQRT2); // 2의 제곱근

//메서드
console.log(Math.min(100, -2, 0, 5)); // 최소값
console.log(Math.max(100, -2, 5, 0)); // 최대값
console.log(parseInt(Math.random() * 45) + 1); // 0~1까지의 랜덤한수
console.log(Math.round(1.5)); //반올림
console.log(Math.ceil(1.3)); //올림
console.log(Math.floor(1.7)); //내림

//로또 만들기
for (let i = 0; i < 6; i++) {
  console.log(parseInt(Math.random() * 45) + 1);
}

// 퀴즈
// 1~100
console.log(parseInt(Math.random() * 100) + 1);

//20 ~22
console.log(parseInt(Math.random() * 3) + 20);
