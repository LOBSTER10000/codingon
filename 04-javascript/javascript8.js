var relationship1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function () {
    var that = this;
    this.friends.forEach(function (friend) {
      console.log(that.name, friend);
    });
  },
};
relationship1.logFriends();

const relationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends() {
    this.friends.forEach((friend) => {
      console.log(this.name, friend);
    });
  },
};
relationship2.logFriends();

const example = { a: 123, b: { c: 135, d: 146 } };
const {
  a,
  b: { d },
} = example;
console.log(a);
console.log(d);

const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  },
};
const candy = candyMachine.getCandy();

const {
  getCandy,
  status: { count },
} = candyMachine;
console.log(candy);
console.log(getCandy());

//this를 사용 중인건 구조분해를 사용하면 답이 출력이 되지 않는다

const c = 0;
const b = c || 3;
console.log(b);
// || 연산자는 뒤로 넘긴다는 개념으로 falsy값이 있을 경우 뒤의 값을 출력한다.

const y = null;
const z = y ?? 3;
console.log(z);

// ?? 널 병합 연산자는 falsy값에서 null과 undefined만 뒤로 넘겨준다

const chrome1 = null;
try {
  chrome1.d;
} catch (e) {
  console.log(e);
}
console.log(chrome1?.d);

// axios 사용시에는 formData를 이용해서 데이터값들을 주고 받아야한다

const formData = new FormData();

formData.append('name', 'lee');
formData.append('item', ['hi', 'zero']);
console.log(formData.has('name'));
console.log(formData.get('item'));
formData.set('name', 'kyu');
console.log(formData.get('name'));
console.log(formData.getAll('item'));
