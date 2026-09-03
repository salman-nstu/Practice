function processUser(callback) {
    callback();
}

processUser(function () { console.log("User processed"); });


function greet(name, callback) {
    console.log(`Hello ${name}`);

    callback();
}

greet("Salman", function () { console.log("Welcome!"); });

const numbers = [1, 2, 3, 4];

const result = numbers.map(function (number) {
    return number * 2;
});

console.log(result);


