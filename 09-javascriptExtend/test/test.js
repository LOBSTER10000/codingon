const Shape = require('./shape.js');
const rec1 = new Shape(3, 4);
console.log('직사각형의 넓이 : ', rec1.getArea());

const Rectangle = require('./rectangle.js');
const rec2 = new Rectangle(3, 5);
console.log('직사각형(Rectangle)의 넓이 : ', rec2.getArea());
console.log('직사각형의 대각선의 길이 : ', rec2.getDiagonal());

const Triangle = require('./triangle.js');
const rec3 = new Triangle(5, 6);
console.log('삼각형의 넓이 : ', rec3.getArea());

const Circle = require('./circle.js');
const rec4 = new Circle();
rec4.width = 4;
rec4.radius = 200;
console.log('원의 넓이 : ', rec4.getArea());
