function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

console.log(createCounter);


const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2

console.log(counterB()); // 1
console.log(counterB()); // 2

console.log(counterA()); // 3