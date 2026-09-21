
function processValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 2;
    } else if (typeof value === "boolean") {
        return !value;
    } else {
        throw new Error("Unsupported type");
    }
}

// Usage examples
const stringResult = processValue("hello");
console.log("Processing string 'hello':", stringResult);

const numberResult = processValue(10);
console.log("Processing number 10:", numberResult);

const boolResult = processValue(true);
console.log("Processing boolean true:", boolResult);

// In TypeScript, the function guarantees type safety
console.log("In TypeScript, calling processValue with a string returns a string");
console.log("In TypeScript, calling processValue with a number returns a number");
console.log("In TypeScript, calling processValue with a boolean returns a boolean");