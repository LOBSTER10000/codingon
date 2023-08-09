const add = (a, b) => a + b;
const E = 2.718;
const PI = 3.141592;

function minus(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
//case1
// module.exports = {
//   add,
//   E,
//   PI,
// };

//case2
// module.exports.add = add;
// module.exports.E = E;
// module.exports.PI = PI;

//case2 생략;
// exports.add = add;
// exports.E = E;
// exports.PI = PI;

//es방식
// export { add, PI, E, minus, multi, divide };

module.exports = {
  add,
  PI,
  E,
  minus,
  multi,
  divide,
};
