// Day 25: Typed Functions & Overloads

// 1. Basic typed function
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));


// 2. Optional parameter
function greet(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello ${name}, you are ${age} years old.`;
    }

    return `Hello ${name}.`;
}

console.log(greet("Salman"));
console.log(greet("Salman", 21));


// 3. Default parameter
function welcome(
    name: string,
    message: string = "Welcome"
): string {
    return `${message}, ${name}!`;
}

console.log(welcome("Salman"));
console.log(welcome("Salman", "Good morning"));


// 4. Function overload
function transform(value: string): string;
function transform(value: number): number;

function transform(value: string | number): string | number {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return value * 2;
}


// 5. Test overloads
const stringResult = transform("typescript");
const numberResult = transform(25);

console.log(stringResult);
// TYPESCRIPT

console.log(numberResult);
// 50