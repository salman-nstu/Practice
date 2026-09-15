class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const box = new Box<number>(100);

console.log(box.getValue());


const box2 = new Box<string>("Hello");

console.log(box2.getValue());
