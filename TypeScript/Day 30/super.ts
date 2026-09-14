abstract class Shape {
    constructor(public name: string) { }

    abstract areaa(): number;
}

class Circle extends Shape {
    constructor(
        name: string,
        public radius: number
    ) {
        super(name);
    }

    areaa(): number {
        return Math.PI * this.radius ** 2;
    }
}

const cir = new Circle("Sk", 5);

console.log(cir.areaa());