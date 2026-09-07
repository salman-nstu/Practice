"use strict";
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toString();
}
console.log(formatValue(22));
console.log(formatValue("Hello"));


let digit;
function process(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value * 2;
}
console.log(process("hello"));
console.log(process(10));
