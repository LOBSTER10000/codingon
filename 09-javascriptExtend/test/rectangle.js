const Shape = require('./shape.js');

class Rectangle extends Shape {
  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}

module.exports = Rectangle;
