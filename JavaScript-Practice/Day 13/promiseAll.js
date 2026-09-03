const promise1 = Promise.resolve("A");
const promise2 = Promise.resolve("B");
const promise3 = Promise.resolve("C");

const result = await Promise.all([
    promise1,
    promise2,
    promise3
]);

console.log(result);