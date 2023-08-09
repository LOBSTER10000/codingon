function add() {
  console.log('안녕하세요');
}

function hello() {
  console.log('안녕하십니까');
}
setImmediate(hello);
console.log('1');
setTimeout(add, 2000);
console.log('2');
setInterval(add, 5000);
