// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.login = function () {
//         console.log(`${this.name} logged in`);
//     };
// }

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    login() {
        return console.log(`${this.name} logged in`);
    }
}


const user1 = new User("Alice", 25);
console.log(user1.login());