const user = {
    name: "Salman",
    address: {
        city: "Dhaka"
    }
};

const copy = {
    ...user
};

copy.address.city = "Chittagong";

console.log(user.address.city);


const users = [
    {
        name: "Salman"
    }
];

const copy2 = [...users];

copy2[0].name = "John";

console.log(users[0].name);