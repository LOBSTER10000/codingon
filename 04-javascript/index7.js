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
