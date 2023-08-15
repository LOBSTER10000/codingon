//spread in string

const c = [...'HELLO']; // ['H','E'.....];
const d = 'HELLO'.split(''); // ['H','E','L','L','o"]
console.log(c);
console.log(d);

const chip = {
  base: 'chip',
  company: 'lotte',
};

const potatoChip = {
  ...chip,
  flavor: 'potato',
};

const sweetPotatoChip = {
  ...chip,
  ...potatoChip,
  flavor2: 'sweet potato',
};

console.log(chip, potatoChip, sweetPotatoChip);
