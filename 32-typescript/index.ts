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
type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
interface Student {
  name: string;
  [grade: number]: Score;
  isPassed: boolean;
}

interface BaseballClub extends Student {
  position: string;
  height: number;
  readonly backNumber?: number;
}

const Otani: BaseballClub = {
  name: 'otani',
  1: 'A+',
  isPassed: true,
  position: '투타겸업',
  height: 178,
};

console.log(Otani);

//type vs enum
type Bp1 = 500 | 700 | 100;
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}
const width1: Bp2 = Bp2.SM;
//타입은 정말 간단한 것만 enum은 관계가 있을 경우에 사용

// 실습 2
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

// interface Game2 {
//   title: string;
//   price: number;
//   category: string;
//   platform: string;
// }

enum Category {
  action = '액션',
  role = '롤플레잉',
}

// type Game = Game1 | Game2;

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: Category.action,
  platform: '모바일',
};

let heroGame_B: Game = {
  title: 'DC 언체인드',
  price: 50000,
  category: Category.role,
  platform: 'PC',
};

console.log(heroGame_A, heroGame_B);

// 교차 타입 : 두개이상의 타입을 합치는 것

interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: 'tayo',
  start() {
    console.log('출발~~');
  },
  color: 'blue',
  price: 5000,
};

console.log(toyCar);

//function 선언하는 방식

//1.파라미터와 리턴 타입을 선언하는 기본 형식

function sum100(a: number, b: number): number {
  return a + b;
}
// 화살표 함수로 타입을 선언
const sum101 = (a: number, b: number): number => {
  return a + b;
};
// 리턴 생략한 형태로도 선언
const sum102 = (a: number, b: number): number => a + b;

//선택적 매개변수(?)는 가장 뒤에 있어야함
function print(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

print(2, 4, 6);
print(2, 4);

//
function print2(a: number, b: number, c = 100): void {
  console.log(a);
  console.log(b);
  console.log(c);
}
print(2, 4);

//매개변수 없는 함수
function sayHello(): void {
  console.log('Hello~');
}
sayHello();

//매개변수
function concatString(x: string, y: string): string {
  return x + y;
}
console.log(concatString('안녕', '하세요'));

//원의 넓이를 구하는 공식

function circleArea(r: number): number {
  return r * r * Math.PI;
}

console.log(circleArea(4));

// 화살표 함수

const squareArea = (x: number, y: number): number => {
  return x * y;
};
console.log(squareArea(5, 6));

// interface 정의시 함수 타입 표현
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const Sessac: Greet = {
  name: 'sessac',
  hi() {
    return `여기는 ${this.name} 영등포 캠퍼스`;
  },
  bye(a: number) {
    return `작별인사를 ${a}번 했습니다`;
  },
};

console.log(Sessac.hi(), Sessac.bye(2));

// never
// : 함수의 끝에 절대 도달하지 않는 경우
// function goingOn(): never {
//   while (true) {
//     console.log('go!');
//   }
// }

// 오버라이딩 vs 오버로딩
//1. 오버라이딩
//class에서 "상속"할 때 > 하위 클래스가 상위 클래스의 메소드를 상속받을 때 같은 이름의 함수(메서드)를 재정의
//2. 오버로딩
// - 함수의 이름은 같지만, 매개변수 or 변환타입이 다른 여러 함수들을 가질 수 있음

//typescript 오버로딩
// -선언부 : 매개변수의 타입과 반환 타입만 지정
// -구현부 : 실제 함수의 구현 (function body)
// => '함수 이름 동일'

function sums105(a: string, b: string): string; //선언부
function sums105(a: number, b: number): number; //선언부
function sums105(a: any, b: any): any {
  return a + b;
} //구현부

console.log(sums105('가', '나'));
console.log(sums105(1, 2));
// console.log(sums105(1,'얏호'));//error

//실습3
function sum1(a: number, b: number): number {
  return a + b;
}

console.log(sum1(5, 11));

function sum2(...sum2: number[]): number {
  let sums = 0;
  for (let i = 0; i < sum2.length; i++) {
    sums += sum2[i];
  }
  return sums;
}

console.log(sum2(1, 2, 3, 4, 10));

//제네릭
//선언할 때 타입을 지정하기 어려운 케이스가 존재.
// = 데이터 타입을 외부에서 지정
// = 생성 시점에 타입을 명시
// => "재사용성 증가"
// ==> 타입을 변수처럼 사용한다!!

function arrLength2<T>(arr: T[]): number {
  return arr.length;
}

arrLength2<string>(['a']);
arrLength2<number>([1, 2, 3, 4]);
console.log('dd', arrLength2<string>(['a']));
console.log('ad', arrLength2<number>([1, 2, 3, 4, 10])); //인덱스 숫자만 나옴

//실습4
function arrElement<T>(arr: T[], index: number): any {
  return `${arr[index]}와 타입은 : ${typeof arr[index]}`;
}

console.log(arrElement<string>(['a'], 0));

function arrElement2<T>(arr: T[], index: number): any {
  if (index < arr.length) {
    return `${arr[index]}와 타입은 : ${typeof arr[index]}`;
  } else {
    return false;
  }
}

console.log(arrElement2<string>(['a'], 1));
