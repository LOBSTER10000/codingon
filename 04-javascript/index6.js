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
