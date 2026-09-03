function find(arr) {

    if (arr.length === 0) {
        return { min: undefined, max: undefined };
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    //return { min: min, max: max };
    return [min, max];
}

const numbers = [0, 0];
const result = find(numbers);

// console.log("Minimum Value:", result.min);
// console.log("Maximum Value:", result.max);

console.log("Minimum Value:", result[0]);
console.log("Maximum Value:", result[1]);