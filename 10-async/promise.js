function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다');
}

// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     setImmediate(function () {
//       console.log('고민끝');
//       product = '제로콜라';
//       price = 2000;

//       if (price <= 2000) {
//         resolve();
//       } else {
//         reject();
//       }
//     });
//   });
// }

function pickDrink() {
  setImmediate(function (callback) {
    console.log('고민끝');
    product = '제로콜라';
    price = 2000;
    callback(product, price);
  });
}

function nopay() {
  console.log('금액 부족 ㅠㅠ');
}
function pay() {
  console.log(`상품명 : ${product}, 가격 ${price}`);
}

let product;
let price;
goMart();
pickDrink(pay);
// pickDrink().then(pay) == then(function(){
// pay();
//});
