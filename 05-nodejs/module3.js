const add = (a, b) => a * b;
const E = 2.718;
const PI = 3.141592;

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
exports.add = add;
exports.E = E;
exports.PI = PI;
