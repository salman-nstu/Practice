interface User {
    id: (number | string);
    name: string;
    email?: string;
    greet(a: number): any;
}

const user: User = {
    id: 88,
    // name: "Salman",
    // email: "salman@example.com"
    greet(a) {
        return a;
    }
};

console.log(user.email);
console.log(user.greet(3));

// const user3: User = {
//     name: "SK",

// }


let array: (number | string)[];

array = ['2', 3] 