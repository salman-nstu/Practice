// function* generateNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const generator = generateNumbers();


// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

function* demo() {
    console.log("A");

    yield 10;

    console.log("B");

    yield 20;

    console.log("C");
}

const generator2 = demo();
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());

function* generateNumbers() {
    yield 10;
    yield 20;
    yield 30;
}

for (const number of generateNumbers()) {
    console.log(number);
}