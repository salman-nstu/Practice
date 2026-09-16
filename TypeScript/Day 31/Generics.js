"use strict";
function identity(value) {
    return value;
}
const var1 = identity("HI");
console.log(var1.fixed());
const resuls = identity("Hello");
const numberResults = identity(100);
function firstElement(items) {
    return (items[0]);
}
const number = firstElement([10, 20, 30]);
console.log(number);
