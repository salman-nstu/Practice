interface Animal {
    name: string;
    move(): void;
}
class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log("Dog is running");
    }
}

const dog = new Dog("KK");
dog.move();