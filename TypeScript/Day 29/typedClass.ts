class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): string {
        return `I am ${this.name}, ${this.age} years old.`;
    }
}

const userr = new User("Salman", 22);

console.log(userr.name);
console.log(userr.introduce());