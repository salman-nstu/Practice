function getProperty<T, K extends keyof T>(
    obj: T,
    key: K
): T[K] {
    return obj[key];
}

const user6 = {
    name3: "Salman",
    age: 22,
    isAdmin: false
};

const namew = getProperty(user6, "name3");

console.log(namew);

const adminn = getProperty(user6, "isAdmin");

console.log(adminn);




