class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        let current = this.start;

        return {
            next: () => {
                if (current <= this.end) {
                    return {
                        value: current++,
                        done: false
                    };
                }

                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
}

// const range = new Range(1, 5);

// for (const number of range) {
//     console.log(number);
// }

const range = new Range(10, 15);

const iterator = range[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const numbers = [...range]; //as Range class is iterable, we can use spread

console.log(numbers);
const [first, second, third] = range;

console.log(first);
console.log(second);
console.log(third);


const numbers2 = new Set(new Range(1, 5));
console.log(numbers2);
