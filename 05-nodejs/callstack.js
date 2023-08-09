function first() {
  second();
  return console.log(1);
}

function second() {
  third();
  return console.log(2);
}

function third() {
  return console.log(3);
}
first();
