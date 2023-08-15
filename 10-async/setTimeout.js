// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000); // delay동안 기다리다가 code 함수를 실행
// console.log(3);

//편의점에 들어가서 음료수를 사고 나오는 상황
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다');
}

function pickDrink(callback) {
  setTimeout(function () {
    console.log('고민 끝');
    product = '제로콜라';
    price = 2000;
    callback(product, price); // 매개변수로 넘긴 콜백함수 실행
  }, 3000);
}
// callback을 이용하지 않으면 product와 price에 대한 내용을 확인할 수 없음
// 비동기적 처리때문에 후순위로 product가 나타나기에 pay에서 undefined로 나타남
// 따라서 callback을 이용할 경우 아래에 있는 함수 값들을 가져올 수 있음
// 대신에 callback에 들어갈 인자값은 아래에 정의가 되어있어야함

function pay(product, price) {
  console.log(`상품명 : ${product}, 가격 ${price}`);
}

let product;
let price;
goMart();
pickDrink(pay);
