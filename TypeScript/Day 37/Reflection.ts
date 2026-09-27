class User {
    sayHello() {
        console.log("Hello");
    }
}

const user = new User();

console.log(Object.getOwnPropertyNames(
    Object.getPrototypeOf(user)
));