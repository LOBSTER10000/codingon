console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
// console.log(document.domain);

// document 객체를 이용해 HTML 요소 선택
// 1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// 2. getElementsByClassName
console.log(document.getElementsByClassName('pink')); // 유사배열
console.log(document.getElementsByClassName('pink')[1]);

// 3. getElementsByTagName
console.log(document.getElementsByTagName('div'));

// 4. getElementsByName
console.log(document.getElementsByName('id'));

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
// console.log(document.domain);

// document 객체를 이용해 HTML 요소 선택
// 1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// 2. getElementsByClassName
console.log(document.getElementsByClassName('pink')); // 유사배열
console.log(document.getElementsByClassName('pink')[1]);

// 3. getElementsByTagName
console.log(document.getElementsByTagName('div'));

// 4. getElementsByName
console.log(document.getElementsByName('id'));

// 유사 배열 (HTML collection, NodeList)
// []식으로 생긴 배열을 의미. 배열은 아님!!
// index, length는 가짐...
// 배열과 달리 사용 가능한 메서드가 제한

// NodeList -> forEach() 반복문 사용 가능

document.querySelector('.pink').forEach((e) => console.log(e));
