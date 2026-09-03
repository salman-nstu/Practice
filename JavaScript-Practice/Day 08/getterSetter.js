//Getters are useful when something is conceptually a property, but its value needs computation.
class User {
    constructor(name) {
        this.name = name;
    }

    set username(value) {
        if (value.length < 3) {
            throw new Error("Username is too short");
        }

        this._username = value;
    }

    get username() {
        return this._username;
    }
}

const user = new User("Alice");

user.username = "bob";

console.log(user.username);

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10, 5);

console.log(rectangle.area);