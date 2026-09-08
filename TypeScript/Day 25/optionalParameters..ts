function greetUser(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello ${name}, you are ${age} years old.`;
    }

    return `Hello ${name}.`;
}
console.log(greetUser("SK", 33));
console.log(greetUser("SK"));

// function createAccount(
//     age?: number,
//     username: string
// ) { }

function example(
    a: number,
    b?: number
) {
    return b;
}

console.log(example(10));
