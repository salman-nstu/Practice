function introduce(age, city) {
    console.log(`${this.name}, ${age}, ${city}`);
}

function greet(message) {
    console.log(`${message}, ${this.name}`);
}

const user = {
    name: "Salman"
};

const user2 = {
    name: "SK"
};

introduce.call(user, 22, "Dhaka");

introduce.apply(user2, [22, "Dhaka"]);

greet.call(user2, "Hello");

const numbers = [10, 20, 30, 40];

console.log(Math.max.apply(null, numbers));
