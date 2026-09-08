interface User {
    id: (number | string);
    name: string;
    email: string;
}

const user: User = {
    id: 88,
    name: "Salman",
    email: "salman@example.com"
};

console.log(user);

// const user3: User = {
//     name: "SK",

// }


let array: (number | string)[];

array = ['2', 3] 