// 구조 분해 할당
// 1. 배열구조 분해 할당
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [a, b, c, alpha] = arr2;
//순서대로 각각 매칭이됨
console.log(a, b, c, alpha);

let num1 = 1;
let num2 = 3;
console.log('swap 전 >', num1, num2);
[num2, num1] = [num1, num2];
console.log('swap 후>', num1, num2);

const lists = ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = lists;
// 바로 f3에 밸류값 할당 가능
console.log(f1, f2, f3);

////////////////////////////////////////////////////////
// 단축 평가
// &&, ||

// A && B : 두 개의 피연산자 모두 t면 t 반환
// A || B : 두 개의 피연산자 중에서 하나만 t여도 t반환

console.log(true && true); // true
console.log(false && true); // false

console.log(true || false); // true
console.log(false || true); // true

const xx = 5;
const yy = 7;

// 삼항연산자 예시
const result1 = xx > yy ? 'xx가 큼' : 'yy가 큼';
console.log(result1); // yy가 큼

// 단축평가 (&&, 논리곱)
const result2 = xx > yy && 'xx가 큼';
console.log(result2); // false
const result3 = xx < yy && 'yy가 큼';
console.log(result3); // yy가 큼

// 단축평가 (||, 논리합)
const result4 = xx || 100;
console.log(result4); // 5

const nameEx = '홍길동';
const nameEx2 = null;
console.log(nameEx || '이름없음');
console.log(nameEx2 || '이름없음');
