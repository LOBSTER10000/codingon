// 6. array (배열)
// 배열의 원소 이름
// 배열의 원소(아이템) : 배열 안에 있는 데이터 하나하나
// 배열의 위치(index) : 0부터 시작
//  배열의 크기(길이) : 배열의 개수와 동일
const fruits = ['orange', 'pineapple', 'grape', 'apple'];

console.log(fruits[0]);

let hobby = new Array();
hobby.push('run');
hobby.push('camping');

console.log(hobby[1]);

//js에서는 배열 원소의 자료형이 달라도 상관없음
const data = [1, null, 'trunks'];

const data2 = [
  ['orange', 'watermelon', 'grape'],
  ['run', 'movie', 'tv'],
];
// js는 다중 배열도 가능하다
console.log(data2[1][2] + data2[0][0]);

const korean = [
  ['가', '나', '다'],
  ['라', '마', '바'],
  ['사', '아', '자'],
];

// 퀴즈 3차원 배열에서 숫자 8 출력
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(nums[1][0][1]);

// 7. object(key:value)
const cat = {
  name: '나비',
  age: 1,
  isCute: true,
  mew: function () {
    return '나옹';
  },
};

//object의 속성(key)에 접근하는 방법
// (1) 점표기법 (cat.name);
// (2) 대괄호 표기법 cat['name'];  -> 점 표기법으로 사용하기 힘든 경우에 사용
// KEY가 변수에 저장되어 있을 때 주로 사용
console.log(cat.name);
console.log(cat.mew());
console.log(cat['name']);

const tempVal = 'name';
console.log(cat[tempVal]); // cat.name 과 동일

// typeof : 자료형 확인
// typeof x
// typeof(x)

console.log(typeof cat);
console.log(typeof 1);
console.log(typeof '사람');
console.log(typeof null); // null은 object로 나타나는데 그 이유는 그냥 언어 자체의 오류로 인해서 object로 나타남
console.log(typeof true);
console.log(typeof 3.14);
console.log(typeof undefined);
