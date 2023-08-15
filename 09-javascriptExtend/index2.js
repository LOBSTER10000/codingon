const obj = {
  title: '엘리멘탈',
  content: '재밌어요',
  num: 5,
};

console.log(obj.title, obj.content, obj.num);
console.log(obj['title'], obj['content'], obj['num']);
//구조 분해 쓰기 전

const { num, content, title } = obj;
console.log(num, title, content);
//구조 분해 사용

const { n1, t1, c1 } = obj;
console.log(n1, t1, c1);
//구조 분해를 사용할때는 키값을 맞춰줘야만 한다

const { title: t2, num: n2, content: c2 } = obj;
console.log(t2, n2, c2);
//구조 분해 이용할때 변수 이름을 변경하여 저장하고 싶을 시에 사용하는 방법

//연산자 사용시에 연산자를 이용하면 default값 할당 가능
