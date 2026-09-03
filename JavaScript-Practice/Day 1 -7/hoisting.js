console.log("=== Hoisting ===");
a = 10;
console.log(a); // ?
var a;

// console.log(b); // Uncomment to see ReferenceError
let b = 20;

// console.log(c); // Uncomment to see ReferenceError
const c = 30;

console.log("\n=== Function Hoisting ===");

sayHello();

function sayHello() {
    console.log("Hello from function declaration!");
}

// greet(); // Uncomment to see TypeError


var greet = function () {
    console.log("Hello from function expression!");
};

console.log("\n=== Scoping ===");

var x = "global var";
let y = "global let";

if (true) {
    var x = "modified global var";
    let y = "block let";
    const z = "block const";

    console.log(x); // ?
    console.log(y); // ?
    console.log(z); // ?
}

console.log(x); // ?
console.log(y); // ?
// console.log(z); // Uncomment to see ReferenceError

console.log("\n=== Function Scope ===");

function testScope() {
    var insideVar = "var inside";
    let insideLet = "let inside";

    if (true) {
        var anotherVar = "accessible";
        let anotherLet = "block only";
    }

    console.log(anotherVar); // ?
    // console.log(anotherLet); // Uncomment to see ReferenceError
}

testScope();

// console.log(insideVar); // Uncomment to see ReferenceError

console.log("\n=== Closures ===");

function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = outer();

counter(); // ?
counter(); // ?
counter(); // ?

console.log("\n=== Loop Scope ===");

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 0);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 0);
}