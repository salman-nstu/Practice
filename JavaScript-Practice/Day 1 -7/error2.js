function third() {
    let person = {
        name: "SALMAN",
        zero: 20,
        SALMAN: 20,
        1: "sk"
    }
    let zero = person["1"];
    console.log(zero);
}

function second() {
    third();
}

function first() {
    second();
}

first();

// const person = {
//     name: "SK",

//     age: 20
// }

// const { name: first, age: second } = person;

// console.log(first, second)