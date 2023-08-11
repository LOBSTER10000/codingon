//2. 객체에서 rest
const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor); // choco
console.log(rest); // {company: 'lotte', price: 1000}

//3. 배열에서 rest
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number;

console.log(one1); //1
console.log(two1); //2
console.log(rest2); // [3,4,5,6,7,8];
