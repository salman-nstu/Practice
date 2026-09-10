function greet(name: string | null): string {
    if (name === null) {
        return "Hello, guest!";
    }

    return `Hello, ${name}!`;
}

console.log(greet("Salman"));
console.log(greet(null));