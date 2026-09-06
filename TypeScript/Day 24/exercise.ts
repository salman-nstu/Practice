const name = "Salman";
const age = 22;

function introduce(name: string, age: number): string {
    return `My name is ${name} and I am ${age} years old.`;
}

console.log(introduce(name, age));