user = {
    name: "Salman",
    greet: function () {
        console.log(this);
    }
};


user.greet();


// const property = "name";

// console.log(user[property]);

// const user = {
//     name: "Salman",
//     key: "Something else"
// };

// const key = "name";

// console.log(user[key]);
// console.log(user.key);

// const data = {
//     "user-id": 123
// };

// console.log(data["user-id"]);

// const user = {
//     name: "Salman",
//     age: 22,
//     city: "Dhaka"
// };

// console.log(Object.entries(user));

// const keys = Object.keys(user);

// for (const key of keys) {
//     console.log(key);
// }

// const prices = {
//     laptop: 80000,
//     "lap top": 19,
//     mouse: 1000,
//     keyboard: 3000
// };

// let o2 = prices;

// prices.laptop = 4;


// console.log(prices);
// console.log(o2);

// Object.freeze(prices);

// prices.laptop = 4000;

// console.log(prices.laptop);


// const total = Object.values(prices)
//     .reduce((sum, price) => sum + price, 0);

// console.log(total);

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const count = fruits.reduce((accumulator, fruit) => {

//     accumulator[fruit] = (accumulator[fruit] || 0) + 1;

//     return accumulator;
// }, {});

// console.log(count);



// const arr = [2, 3, 4, 5, 6];

// let arr2 = arr.map((value, index) => index % 2 == 0 ? value * 2 : value);
// console.log(arr2);


// const user = {
//     name: "Salman",

//     normal: function () {
//         console.log(this.name);
//     },

//     arrow: () => {
//         console.log(this.name);
//     }
// };

// user.normal();
// user.arrow();

// function introduce(age, city) {
//     console.log(`${this.name}, ${age}, ${city}`);
// }

// const user = {
//     name: "Salman"
// };

// introduce.call(user, 22, "Dhaka");

// introduce.apply(user, [22, "Dhaka"]);





