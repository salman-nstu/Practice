class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark(): string {
        return `${this.name} says Woof!`;
    }
}

const dog = new Dog("Buddy");

console.log(dog.bark());

console.log(dog.name);