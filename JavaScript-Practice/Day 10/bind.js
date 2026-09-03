// function greet() {
//     console.log(`Hello ${this.name}`);
// }

// const user = {
//     name: "Salman"
// };

// const user2 = {
//     name: "SK"
// };

// const boundGreet = greet.bind(user);

// boundGreet();

const user = {
    name: "Salman",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

setTimeout(user.greet, 2000);

setTimeout(user.greet.bind(user), 4000);