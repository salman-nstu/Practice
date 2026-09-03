const users = new Map();

users.set(1, "Salman");
users.set(2, "Rahim");
users.set(3, "Karim");

console.log(users.get(1));
console.log(users.has(1));
console.log(users.size);

const user = {
    "1": "2"
};

console.log(typeof(user["1"]));

for (const entry of users) {
    console.log(entry);
}

for (const [key, value] of users) {
    console.log(value, key );
}

// console.log(users.keys());
// console.log(users.values());
// console.log(users.entries());
// console.log(typeof users);

