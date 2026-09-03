// const arr = [2, 4, 6, 6, 8, 8, 34, 2, 4, 6, 6];

// const sorted = [... new Set(arr)].sort((a, b) => b - a);

// const second = sorted[1];
// const third = sorted[2];

// console.log(`Second largerst is ${second}, and Third largest is ${third}`);


// function find(arr) {
//     let first = 0;
//     let second = 0;
//     let third = 0 ;


function find(arr) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (let num of arr) {
        if (num === first || num === second || num === third)
            continue;

        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        }
    }

    return {
        second: second === -Infinity ? null : second,
        third: third === -Infinity ? null : third
    };
}

const numbers = [10, 4, 3, 50, 23, 90, 90, 50];
const result = find(numbers);

console.log(`Second Largest: ${result.second}`);
console.log(`Third Largest: ${result.third}`);
