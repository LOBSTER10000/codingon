class House {
  //생성자 함수, 객체의 속성(내부에서 사용할 변수) 부여
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  //메서드 1. 집의 나이를 출력
  getAge() {
    return `집의 나이는 ${this.year}다`;
  }

  //메서드 집의 창문 개수를 출력
  getWindow() {
    return `현재 집의 창문의 개수는 ${this.window}다`;
  }
}

let app = new House(1992, '랍스타', 34);

module.exports = House;
