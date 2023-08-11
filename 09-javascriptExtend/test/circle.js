let Shape = require('./shape.js');

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return (this.radius / 360) * 3.14 * ((this.width / 2) * (this.width / 2));
  }
}

module.exports = Circle;
