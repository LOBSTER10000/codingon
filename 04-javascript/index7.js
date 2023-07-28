// 문자열에서 자주 이용하는 내장 메소드

let str1 = 'Strawberry Moon';
let str2 = '    Strawberry Moon    ';

//문자열 인덱싱
console.log(str1[0]);
console.log(str2[0]);

//length 문자열 길이

console.log(str1.length);
console.log(str2.length);

// 소문자, 대문자 변환

console.log(str1.toUpperCase()); // 대문자
console.log(str1.toLowerCase()); //소문자

// 양끝 공백 제거
console.log(str2.trim());
console.log(str2.trim().length); //str1의 length를 구한것과 동일

// indexOf() 글자 위치 찾기
// 위치(index): 0부터 시작
console.log(str1.indexOf('w'));
console.log(str1.indexOf('r')); // 같은 글자가 있다면 가장 첫번째 인덱스를 반환한다
console.log(str1.indexOf('x')); // 찾는 글자가 없다면 -1이 반환된다

// slice() 문자열 자르기
console.log(str1.slice(11)); // 11부터 문자열을 출력
console.log(str1.slice(1, 5)); // 1부터 4까지의 문자열을 자르고 출력

//replace() 문자열 바꾸기(겹친다면 앞에 있는 문자열을 변경)
console.log(str1.replace('a', 'x'));
console.log(str1.replace('r', 'x'));

//replaceAll() 모든 겹치는 문자열 변경하기

console.log(str1.replaceAll('r', '*'));

// split() 문자열 쪼개기 (배열로 변환)
let date = '23.03.10';
console.log(date.split('.')); // split(값)을 기준으로 배열로 자르기

//------------------------------------
//배열 내장 메소드

//push() (배열에 값 추가)
let strike = new Array();
strike.push('한번');
strike.push('두번');
strike.push('세번');

console.log(strike);

// pop() 가장 마지막 값을 없앰
strike.pop();

//shift() 맨 앞에 있는 요소를 제거
strike.shift();

strike.push('한번');
// includes() 해당하는 값이 있는지 확인
console.log(strike.includes('한번'));

console.log(strike);

// reverse() 배열 순서 변경

console.log(strike.reverse());

// join() 배열을 합침
console.log(strike);
console.log(strike.join(''));
console.log(strike.join('-'));

//----------------- 메소드 체이닝

//메서드 체이닝
//여러 메서드 들을 연결해서 사용 가능
console.log('hello'.split(''));
console.log('hello'.split('').reverse());
console.log('hello'.split('').reverse().join(''));

//

let numbers = [1, 2, 3, 4, 5, 6];
let fruits = ['사과', '바나나', '수박', '포도', '파인애플'];

numbers.forEach(function (number, index, array) {
  console.log(number, index, array);
});

for (let a = 0; a < numbers.length; a++) {
  console.log(a);
}

for (let alpha of fruits) {
  console.log(alpha);
}

fruits.forEach(function (alpha) {
  console.log(alpha);
});

numbers.forEach((number, index, array) => {
  console.log(number, index, array);
});

fruits.forEach(function (fruits, i, arr) {
  console.log(fruits, i, arr);
});

fruits.forEach((fruits, i, arr) => {
  console.log(fruits, i, arr);
});

//자바스크립트에서 함수안에 함수가 또 들어갈때 콜백함수라고 표현한다
// currentValue 반복하고 있는 형제요소
// index 처리할 인덱스
// arr : forEach를 호출한 배열

/////////////////////// 배열의 합

let numbers2 = [1, 2, 3, 4, 5, 6];
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;

for (let i = 0; i < numbers2.length; i++) {
  sum1 += numbers[i];
}

for (let num of numbers2) {
  sum2 += num;
}

numbers.forEach((num) => {
  sum3 += num;
});

console.log(sum1, sum2, sum3);

//******배열에서의 기타 메소드 */

const arr = [1, 2, 3, 4, 5];

let arr_filter = arr.filter(function (e) {
  return e > 3;
});

console.log(arr_filter);

let val_find = arr.find(function (a) {
  return a > 2;
});

console.log(val_find);

let arr_map = arr.map(function (e) {
  return e + 3;
});

console.log(arr_map);

//** filter는 해당하는 return값의 정의된 값들을 찾아줌 그 다음 새로운 배열을 반환*/
//** find는 해당하는 return값의 정의된 값 가장 첫번째 요소를 찾아줌 */
//** map은 해당하는 value값을 모두 다 적용해줌 그런 다음 새로운 배열을 반환 */
//** 이것들은 공통점으로 익명함수에서만 사용이 가능하다 */

hobby = ['런닝', '티비보기', '영화', '운동하기', '헬스'];

hobby.forEach((hobby2, index, arr) => console.log(arr[index]));

//퀴즈
const words = ['dog', 'cat', 'rabbit', 'apple', 'wow'];

//1 .글자수가 3개 초과인 단어만 필터링
let filter3 = words.filter(function (e) {
  return e.length > 3;
});

console.log(filter3);
//2. 글자가 'a'문자가 포함되어 있는 단어만 필터링
let filter4 = words.filter(function (e) {
  return e.includes('a');
});

console.log(filter4);
