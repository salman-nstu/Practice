let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}

function printValue(value: unknown): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }

    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}

printValue("hello");
printValue(42);
printValue(true);


let a: any = "hello";
console.log(a.toUpperCase());

let b: unknown = "hel";
console.log(b.toUpperCase()); 