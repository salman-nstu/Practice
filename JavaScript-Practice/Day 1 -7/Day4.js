//Function parameters, scoping and hoisting

// // An empty arrow function returns undefined
// const empty = () => { };

// (() => "foobar")();
// // Returns "foobar"
// // (this is an Immediately Invoked Function Expression)

// const simple = (a) => (a > 15 ? 15 : a);
// simple(16); // 15
// simple(10); // 10

// const max = (a, b) => (a > b ? a : b);

// // Easy array filtering, mapping, etc.
// const arr = [5, 6, 13, 0, 1, 18, 23];

// const sum = arr.reduce((a, b) => a + b);
// // 66

// const even = arr.filter((v) => v % 2 === 0);
// // [6, 0, 18]

// const double = arr.map((v) => v * 2);
// // [10, 12, 26, 0, 2, 36, 46]

// // More concise promise chains
// promise.then((a) => {
//     // …
// })
//     .then((b) => {
//         // …
//     });

// // Arrow functions without parameters
// setTimeout(() => {
//     console.log("I happen sooner");
//     setTimeout(() => {
//         // deeper code
//         console.log("I happen later");
//     }, 2000);
// }, 1);


// function sum(...marks) {

//     let total = 0;

//     for (let num of marks) {
//         total += num;
//     }
//     return total;
// }

// console.log(sum(2, 3, 4, 8))


