"use strict";
class AbstractShape {
    name;
    static totalShapes = 0;
    constructor(name) {
        this.name = name;
        AbstractShape.totalShapes++;
    }
    describe() {
        return `This is a ${this.name}`;
    }
}
class Circle extends AbstractShape {
    radius;
    constructor(radius) {
        super("circle");
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
    static create(radius) {
        return new Circle(radius);
    }
}
class Rectangle extends AbstractShape {
    width;
    height;
    constructor(width, height) {
        super("rectangle");
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = Circle.create(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.describe());
console.log(circle.area());
console.log(circle.perimeter());
console.log(rectangle.describe());
console.log(rectangle.area());
console.log(rectangle.perimeter());
console.log(`Total shapes: ${AbstractShape.totalShapes}`);
