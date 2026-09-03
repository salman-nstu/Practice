//Clear Object creation method
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     static createGuest() {
//         return new User("Guest", 0);
//     }
// }
// const guest = User.createGuest();

// console.log(guest);

// makes multiple object creation expressive.
class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    static createGuest(name) {
        return new User(name, "guest");
    }

    static createAdmin(name) {
        return new User(name, "admin");
    }
}

const guest = User.createGuest("Alice");
const admin = User.createAdmin("Bob");

console.log(guest);
console.log(admin);

