const obj = {
  title: '제목',
  content: '내용',
  num: 0,
};

const { title, content, num } = obj;

console.log(obj);

const word1 = 'abc';
const word2 = 'xyz';

const word3 = [...word1, ...word2];
console.log(word3);
