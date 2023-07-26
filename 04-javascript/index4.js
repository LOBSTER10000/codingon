let mathScore = prompt('수학 점수를 입력하세요');
let engScore = prompt('영어 점수를 입력하세요');

let avgScore = (Number(mathScore) + Number(engScore)) / 2;

console.log('영어 점수와 수학 점수의 평균은 ' + avgScore + '점 입니다');

//prompt는 기본적으로 문자형이라 바로 숫자로 계산이 어려움
// 1. String(): 문자로 형변환
// String(str); -> 형변환
// 1. value.toString() 자료 변환

// 2. Number(str) -> 숫자로 형변환
// 2. parseInt -> 정수형으로 형변환
// 3. parseFloat -> 실수형으로 형변환

let avgScore2 = (parseInt(mathScore) + parseInt(engScore)) / 2;

console.log(avgScore2);
let scores = document.querySelector('#score');
scores = document.write('<h1>' + avgScore + '</h1>');

// null, undefined를 숫자형으로 변환하면 null은 0으로 출력, undefined는 NAN으로 나온다
// NOT-A-NUMBER(숫자가 아님);

function multiFly(a, b) {
  let c = a * b;
  return c;
}

function square(d) {
  let e = d * d;
  return e;
}

console.log(multiFly(3, 4));
console.log(square(4));
