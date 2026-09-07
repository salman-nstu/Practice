function greetUser(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello ${name}, you are ${age} years old.`;
    }

    return `Hello ${name}.`;
}
console.log(greetUser("SK", 33));
console.log(greetUser("SK", undefined));

// function createAccount(
//     age?: number,
//     username: string
// ) { }

function example(
    a: number = 10,
    b: number
) {
    return a + b;
}

console.log(example(undefined, 10));
