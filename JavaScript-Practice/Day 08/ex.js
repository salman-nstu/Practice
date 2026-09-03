class Shape {
    constructor(color) {
        this.color = color;
    }

    get description() {
        return `A ${this.color} shape`;
    }

    get area() {
        throw new Error("Area must be implemented by subclasses");
    }

    draw() {
        console.log("Drawing shape");
    }

    static createDefault() {
        return new Shape("black");
    }
}

class Circle extends Shape {
    constructor(radius, color = "black") {
        super(color);

        if (radius <= 0) {
            throw new RangeError("Radius must be greater than zero");
        }

        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }

    get description() {
        return `A ${this.color} circle with radius ${this.radius}`;
    }

    draw() {
        console.log("Drawing circle");
    }

    static fromDiameter(diameter, color = "black") {
        if (diameter <= 0) {
            throw new RangeError("Diameter must be greater than zero");
        }

        return new Circle(diameter / 2, color);
    }
}
class Rectangle extends Shape {
    constructor(width, height, color = "black") {
        super(color);

        if (width <= 0 || height <= 0) {
            throw new RangeError(
                "Width and height must be greater than zero"
            );
        }

        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    get description() {
        return `A ${this.color} rectangle`;
    }

    draw() {
        console.log("Drawing rectangle");
    }
}

const circle = Circle.fromDiameter(20, "green");

console.log(circle.radius);


const rectangle = new Rectangle(10, 20, "blue");

console.log(rectangle.area);
console.log(rectangle.description);

rectangle.draw();

