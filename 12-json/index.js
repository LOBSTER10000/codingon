// JSON

const car = `{
    "model": "IONIQ 5",
    "company": "HYUNDAI",
    "price": 50000000,
    "year": 2023,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam" ]
}`;
console.log(car); // format : json

const obj = JSON.parse(car);
console.log(obj);
console.log(obj.model);
console.log(obj.company);
console.log(obj.wow);

//JSON.parse(); json to jsObj(객체) 형태로 변환
// obj는 js object이므로, []연산자를 이용해서 키 값에 접근 가능

const json = JSON.stringify(obj);
console.log(json, typeof json);
console.log(json.model);

//JSON.stringify(); jsObj(객체)를 json형태로 변환
//JSON 변수는 JSON 형태의 문자열이므로, []연산자를 이용해서 키 값 접근 불가능

//parse()가 역직렬화, stringify()가 직렬화
//직렬화 : 통신하기 쉬운 포맷으로 변환하는 과정  (stringify());
//역직렬화 : 통신하여 받은 데이터를 객체로 변환하는 과정 (parse());
