const me = {
    name: "Salman",
    age: 22
};

type me3 = typeof me;

console.log(me);


const config = {
    host: "localhost",
    port: 3000,
    secure: false
};

type Config = typeof config;