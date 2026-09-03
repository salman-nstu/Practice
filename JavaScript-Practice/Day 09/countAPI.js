function createCounter(initialValue) {
    let count = initialValue;

    return {
        increment() {
            count++;
            return count;
        },

        decrement() {
            count--;
            return count;
        },

        getValue() {
            return count;
        },

        reset() {
            count = initialValue;
            return count;
        }
    };
}

const counter = createCounter(10);

console.log(counter.getValue());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());