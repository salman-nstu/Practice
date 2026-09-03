// "use strict";

// const user = {
//     name: "Salman",

//     showThis: function () {
//         console.log(this);
//     }
// };

// user.showThis();

// const showUser = user.showThis;
// showUser();

// "use strict";

// function introduce() {
//     console.log(`Hello, I am ${this.name}`);
// }

// const person1 = {
//     name: "Salman"
// };

// const person2 = {
//     name: "Rahim"
// };

// introduce(person1);
// introduce(person2);


// "use strict";

// const person = {
//     name: "Salman",

//     regularFunction: function () {
//         console.log("Regular:", this);
//     },

//     arrowFunction: () => {
//         console.log("Arrow:", this);
//     }
// };

// // 1. Method call
// person.regularFunction();

// // 2. Standalone call
// const fn = person.regularFunction;
// fn();

// // 3. call()
// person.regularFunction.call(person);

// // 4. bind()
// const boundFn = person.regularFunction.bind(person);
// boundFn();

// // 5. Arrow function as method
// person.arrowFunction();

// Global variable attached to global object (Browser)
var age = 50;

const user = {
    age: 25,

    // Traditional Function Method
    getAgeRegular: function () {
        console.log("Regular:", this.age);
    },

    // Arrow Function Method
    getAgeArrow: () => {
        console.log("Arrow:", this.age);
    }
};

user.getAgeRegular(); // Output: Regular: 25
user.getAgeArrow();   // Output: Arrow: 50