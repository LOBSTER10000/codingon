// 1. 오버라이딩

class Car {
  constructor(year) {
    this.year = year;
  }

  getYear() {
    return this.year;
  }
}

class Truck extends Car {
  // 부모 클래스(car) getYear 메서드를 재정의 ==> 'overriding'
  getYear() {
    return this.year + 5;
  }
}

const car = new Car(2020);
const truck = new Car(2020);
