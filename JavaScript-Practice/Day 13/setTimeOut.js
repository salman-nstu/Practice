console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

const timeoutId = setTimeout(() => {
    console.log("This won't run");
}, 5000);

clearTimeout(timeoutId);