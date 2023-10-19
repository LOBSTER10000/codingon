let msg: string = '타입스크립트 배워보자';
let num: number = 100;
console.log(msg, num);
num = 200;
console.log(num);

//명시적으로
let b: undefined;
let e: null = null;

// 타입추론(암묵적으로)
let aa = 1;
let bb = 'hi';
let cc = false;
let dd;
let ee = null;
console.log(aa, bb, cc, dd, ee);

function sum(x: number, y: number): number {
  return x + y;
}

console.log(sum(1, 3));

function minus(x: number, y: string): string {
  return x + y;
}

console.log(minus(1, '아자'));

//배열
let numberArr: number[] = [1, 2, 3, 4, 5];
console.log(numberArr);
numberArr.push(3, 4, 5);
console.log(numberArr);

let strArr: Array<string> = ['안녕', '바나나', '멜론'];
console.log(strArr);

let tempArr: (number | boolean | string)[] = [1, true, 'string'];
console.log(tempArr);

let tempArr2: [number, boolean, string] = [1, false, '허허'];
tempArr2.push(true, '안녕', 3);
console.log(tempArr2);

let tempArr3: Array<boolean | null | number[]> = [true, false, null, [1, 2, 3]];

let arr: any[] = [1, 2, 3, 'wow', true, null];

//객체
let result: object = {
  name: '안녕하세요',
  number: 1,
  boolean: true,
};

console.log(result);

//tuple -> 튜플에서는 push를 쓰지 말것 왜냐면 기본적으로 타입을 한정지었기 때문
let drink: [string, number] = ['안녕', 1];
drink[0] = '코딩온';
drink[1] = 3;
console.log(drink);

//enum
enum list {
  admin = '안녕',
  user = 1,
  guest = 13,
}
console.log(list);

enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth.admin, Cafe.latte);

enum Cake {
  choco,
  vanilla,
  kiwi = '키위 케이크',
}
console.log(Cake.choco);

// 명시적 any
let val: any;
val = true;
val = '하이';
val = 10000;
val = { name: 'sessac' };

// 암묵적으로

let val2;
val2 = false;
val2 = '바이';

//실습1
let game: readonly [object, boolean] = [
  {
    name: '쇼트트랙',
    type: '혼성 계주',
  },
  true,
];

console.log(game);

//사용자 정의 type

type Gender = 'Female' | 'male';
const gender: Gender = 'Female';
const gender2: Gender = 'male';

// interface

interface Student {
  name: string;
  grade: number;
  isPassed: boolean;
}

const student1: Student = {
  name: 'dk',
  grade: 2,
  isPassed: true,
};

// 실습 2
interface Game1 {
  title: string;
  price: number;
  desc: string;
  category: string;
  platform: string;
}

interface Game2 {
  title: string;
  price: number;
  category: string;
  platform: string;
}

type Game = Game1 | Game2;

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};

let heroGame_B: Game = {
  title: 'DC 언체인드',
  price: 50000,
  category: '액션',
  platform: '모바일',
};

console.log(heroGame_A, heroGame_B);
