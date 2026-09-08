interface User {
    id: number;
    name: string;
};

const user: User = {
    id: 1,
    name: "John",
    age: 25
};

const data: User = user;

console.log(data);

