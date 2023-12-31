console.log('connected!')

// 변수 선언: 변수 정의
// 변수 할당: = 연산자를 이용해 값을 넣음 

// ### var
// - 선언 단계와 초기화 할당 단계가 동시에 진행이 되며, 초기화에는 undefined 값이 들어간다.
// - 중복 선언이 가능하며, 예기치 못한 값을 반환할 수 있음
// - 선언 이전에 참조하면 언제나 undefined를 반환한다.

// ### const
// - 재선언이 불가능하고, 재할당이 불가능하다.
// - 초반에 선언을 할 때 반드시 **초기화**를 동시에 진행해야 한다.

// ### let
// - let 키워드로는 변수 중복 선언이 불가능하지만, 재할당이 가능하다.

// 변수 선언 키워드 1. var
var a;
console.log(a);
a = 2;
console.log(a);
var a2 = 4; // 변수 선언 & 할당;
console.log(a2);
var a = 4;
console.log(a);
//var 변수는 변수를 선언하기 전에 값을 할당하기에 장점같아 보일 수 있으나 유지보수시에 최악이다
aa = 123;
console.log(aa);


// 변수 선언 키워드 2. let 
// 중복 선언이 가능하지만 재할당은 불가능하다

let b; //변수
console.log(b); // undefined로 변수만 선언하고 값을 할당하지 않아 초기값 출력
b = 7;
console.log(b); // 변수 값 출력

let b2 = 77; // 변수 선언 & 할당 // b2라고 선언을 한번만 가능하다.
b2 = 78; // 변수 값 재할당

// 변수 선언 키워드 3. const
// -> 변수 선언과 할당이 동시에(반드시)
// -> 변하지 않는 값을 변수에 저장을 할 때 사용 (상수);

const c = 3;
console.log(c);
// c = 4; 
console.log(c); //재할당이 불가능(상수)

let q1 = 3;
q1 - 2;

console.log('q1'+q1);

const q3 = 1;
q3 = q3 + 1;
console.log(q3);



