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
