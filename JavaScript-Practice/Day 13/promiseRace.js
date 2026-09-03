// const slow = new Promise(resolve => {
//     setTimeout(() => resolve("Slow"), 3000);
// });

// const fast = new Promise(resolve => {
//     setTimeout(() => resolve("Fast"), 1000);
// });

// const result = await Promise.race([
//     slow,
//     fast
// ]);

// console.log(result);

// const slow = new Promise(reject => {
//     setTimeout(() => reject("Slow"), 3000);
// });

// const fast = new Promise(reject => {
//     setTimeout(() => reject("Fast"), 1000);
// });

// const result = await Promise.race([
//     slow,
//     fast
// ]);

// console.log(result);

const fastFailure = new Promise((resolve, reject) => {
    setTimeout(() => reject("Failed"), 1000);
});

const slowSuccess = new Promise(resolve => {
    setTimeout(() => resolve("Success"), 3000);
});

const result2 = await Promise.race([
    fastFailure,
    slowSuccess
]);

console.log(result2);
