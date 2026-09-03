// function forr(obj, func) {
//     const iterator = obj[Symbol.iterator]();

//     while (true) {
//         const result = iterator.next();
//         if (result.done) {
//             break;
//         }
//         func(result.value)
//     }
// }

// const arr = [2, 3, 4];

// const f2 = function (value) {
//     console.log(value);
// }

// forr(arr, f2);


async function* fib() {
    let a = 0;
    let b = 1;
    let count = 0;
    while (count < 10) {
        yield a;
        if (count > 5)
            return a;
        [a, b] = [b, a + b];
        count++;
        // if (count == 10) {
        //     break;
        // }
    }
}

let A = fib();


let result = [];


for await (const val of A) {
    result.push(val);
}

console.log(result);

// console.log(A.next().value);

