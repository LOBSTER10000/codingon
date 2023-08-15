const House = require('./index6.js');

class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}이며, 창문의 개수는 ${this.window}입니다.`;
  }

  getWindowMaker() {
    return `여기의 경고는 ${this.windowMaker}입니다`;
  }

  //오버라이딩 : 부모클래스에 정의되어있는 메서드를 동일하게 쓰되, 내용은 다르게 사용하는 것
  getWindow() {
    return `${this.name} 아파트의 ${this.window} 개의 창문은 ${this.windowMaker} 회사에서 생산되었습니다`;
  }
}

const apart = new Apartment(2007, '레미안', 10, 3, 'KCC');
console.log(apart);
console.log(apart.getAge());
console.log(apart.getWindow());
console.log(apart.getAptInfo());
