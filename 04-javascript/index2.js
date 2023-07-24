

// 변수 이름 규칙 (=> 식별자 규칙)
// 식별자 : 이름을 붙일 때 사용하는 단어 (변수명, 함수명, 클래스명,...)
// - 키워드(예약어) 사용 불가능
// -키워드란? 특별한 역할을 이미 하고 있는 단어
// - ex, let, var, const 이런 것들 불가능
// - 숫자시작 x
// - 특수문자: _, $만 허용
// - 공백문자(space bar) x

// (관례) 식별자에 두개 이상의 단어를 작성하고 싶은 경우
// camelCase -> js 관례 (redApple)
// snake_case (red_apple)

////////////////////////////
// 자료형 (data types)
// : 데이터(변수)의 종류가 무엇인가?
// -primitive 원시타입 : string, number, boolean, undefined, null ...
// -object(객체 타입) : primitive 타입이 아닌 나머지

// 1.string (문자열)
// : 텍스트 정보, 따옴표 감싸 안아야함
// : 숫자, 특수문자도 따옴표 안에 포함? 문자열
let text = "안녕하세요";
let text2 = "하이";
let gender = "남자";
console.log(text); 
console.log(text2); 
console.log(gender + text2);
// 템플릿 리터럴 (es6)  백틱과, 달러, 중괄호 조합으로 사용
// 문자열 내에서 변수와, 상수를 간결히 표현
console.log(`${text} 저는 누구입니다. 저의 성별은 ${gender}입니다`); 

// 2. number (숫자형)
// 연산이 가능



// 3. boolean(불리언)
// true, false;
let isWater = true;
let isApple = false;
console.log(isWater);

// 4. null (빈 값) -> 부재값
// 값이 없음을 의도적으로 명시
let temp = null;
console.log(temp);
temp = "Hello";
console.log(temp);

// 5. undefined 
// 값도 없고 타입도 지정되지 않음
let x; // -> undefined 초기값
