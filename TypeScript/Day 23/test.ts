function greet(name: string): string {
    return `Hello, ${name}!`;
}

const message: string = greet("World");
console.log(message);

function identify<T>(value: T): T {
    return value;
}

console.log(identify(3));
