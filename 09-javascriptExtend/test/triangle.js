const Shape = require('./shape.js');

class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}

module.exports = Triangle;
