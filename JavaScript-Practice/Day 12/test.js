function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();



console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");