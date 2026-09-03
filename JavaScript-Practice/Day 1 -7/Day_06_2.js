//Practice

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// let results = nums.map(num => num * num);
// console.log(results);


// let even = nums.filter(num => num % 2 === 0);
// console.log(`${nums}`);
// console.log(even);


// let str = " I Hate Dhaka City.    ";
// let count = str.trim().split(" ").length;
// console.log(count);

// Refactored using destructuring, spread, rest and string interpolation. 
const nums = [1, 2, 3, 4, 5, 6, 7, 8];


const nums2 = nums;

// const [first, ...others] = nums;

// const squares = others.map(num => num ** 2);

// const newArray = [first, ...squares];

// console.log(`Original : ${nums}`);
// console.log(`First    : ${first}`);
// console.log(`Squares  : ${squares}`);
// console.log(`New Array: ${newArray}`);



// let str = `My name is Salman
// and i am 22 Years old.`

// console.log(str);

// const fruits = ["Apple", "Banana", "Orange", "Mango"];

// const [first, second, ...rest] = fruits;
// console.log(first, second, ...rest);


// const person = {
//     name: "John",
//     age: 30,
//     city: "London"
// };

// const { name: fullname } = person;
// console.log(fullname);


// const a = [1, 2];
// const b = [3, 4];
// console.log(c = [...a, ...b]);

// function multiply(...nums) {
//     let total = 1;
//     for (const num of nums) {
//         total = total * num;
//     }
//     return total;
// }

// console.log(multiply(1, 2, 3, 4));