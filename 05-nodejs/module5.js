// es방식으로 임포트
// import { add, PI, E, minus, multi, divide } from './module3.js';

//구조분해 방식
let { add, PI, E, minus, multi, divide } = require('./module3.js');

console.log(add(PI, E));
console.log(minus(4, 3));
console.log(multi(5, 3));
console.log(divide(6, 3));
