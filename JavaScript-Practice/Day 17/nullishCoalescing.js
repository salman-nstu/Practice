//value ?? fallback

const username = undefined;
const name = username ?? "Guest";
console.log(name);


const user = {
    name: "Salman",
    age: 0
};

const city = user?.address?.city ?? "Unknown city";
console.log(city);
