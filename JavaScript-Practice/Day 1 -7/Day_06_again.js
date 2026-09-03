// const age = 20;

// console.log(`You are ${age >= 18 ? "an adult" : "a minor"}`);

// const user = {
//     name: "Salman",
//     age: 22,
//     city: "Dhaka"
// };

// console.log(`
// Name: ${user.name}
// Age: ${user.age}
// City: ${user.city}
// `);

// const user = {
//     name: "Salman",
//     age: undefined
// };

// const { name, age  } = user;

// console.log(name); // Salman
// console.log(age);  // 18

// const user = {
//     name: "Salman"
// };

// const {
//     address: {
//         city
//     } = {}
// } = user;

// console.log(city);


// const user = {
//     name: "Salman",
//     age: 22
// };

// const updatedUser = {
//     ...user,
//     age: 23
// };

// console.log(updatedUser);

// const obj = {
//     name: "SK",
//     age: 39
// }

// const { name, age, city = "DK" } = obj;

// console.log(name, age, city)

// const defaults = {
//     theme: "light",
//     language: "English"
// };

// const userSettings = {
//     theme: "dark"
// };

// const settings = {
//     ...defaults,
//     ...userSettings
// };

// console.log(settings);


// const str = `SAL"man"`;

// const age = 10;


// console.log(`${str} ${age}`);


// const a = [1, 2, [4, 5], 3];
// const [f, s, [t, fo], fi] = a;

// const b = [f, s, [1, fo]];



// console.log(a);
// console.log(b);


// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(10, 20, 30));

// const simpleMatrix = [[1, 2], [30, 40]];

// simpleMatrix[1][0] = 99;

// console.log(simpleMatrix); // [[10, 20], [30, 99]]


// const matrix = [[1, 2], [3, 4]];

// const [row1, row2] = matrix;

// const [item1, item2] = row2;
// const updatedRow2 = [item1, 99];

// const newMatrix = [row1, updatedRow2];

// console.log(newMatrix);
// console.log(matrix);


const st1 = {
    name: "SK",
    school: {
        scl: "A"
    }
}
const st2 = { ...st1 };

st2.school.scl = "Bl";

console.log(st1.school.scl);
console.log(st2.school.scl);

