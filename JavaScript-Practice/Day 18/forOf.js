const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}

const iterator = numbers[Symbol.iterator]();

while (true) {
    const result = iterator.next();

    if (result.done) {
        break;
    }

    const number = result.value;

    console.log(number);
}