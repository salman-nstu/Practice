class Shape {
    constructor(color) {
        this.color = color;
    }

    draw() {
        console.log("Drawing shape");
    }
    static createShape(radius, color) {

        return new this(radius, color);

    }
}


class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log(`Drawing circle ${this.radius}, ${this.color}`);
    }

}

class Rectangle extends Shape {
    constructor(width, color) {
        super(color);
        this.width = width;
    }

    draw() {
        console.log(`Drawing rectangle ${this.width} , ${this.color}`);
    }
}

const circle1 = Circle.createShape(5, 2);

circle1.draw();

const rectangle2 = Rectangle.createShape(10, 2);

rectangle2.draw();

//Static Factory- Uses parent class

// const circle = Circle.fromDiameter(20, "green");

// console.log(circle.radius);

//Polymorphism

// const shapes = [
//     new Circle(5),
//     new Rectangle(10, 20),
//     new Circle(3)
// ];

// for (const shape of shapes) {
//     console.log(shape.area);
// }