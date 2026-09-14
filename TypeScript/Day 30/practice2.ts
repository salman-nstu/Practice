interface Shape {
    area(): number;
    perimeter(): number;
}

abstract class AbstractShape implements Shape {
    constructor(public name: string) { }

    abstract area(): number;
    abstract perimeter(): number;

    describe(): string {
        return `This is a ${this.name}`;
    }
}

class Circle extends AbstractShape {
    constructor(
        public radius: number
    ) {
        super("circle");
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends AbstractShape {
    constructor(
        public width: number,
        public height: number
    ) {
        super("rectangle");
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle(5);

console.log(circle.describe());
console.log(circle.area());
console.log(circle.perimeter());


const rectangle = new Rectangle(10, 5);

console.log(rectangle.describe());
console.log(rectangle.area());
console.log(rectangle.perimeter());