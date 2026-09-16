function getProperty1(
    obj: User22,
    key: string
) {
    return obj[key];
}

const user6: User22 = {
    name: "Salman",
    age: 22,
    isAdmin: false
};

interface User22 {
    name: string,
    age: number,
    isAdmin: boolean
};

const namew = getProperty(user6, "name");

console.log(namew);

const adminn = getProperty(user6, "isAdmin");

console.log(adminn);

console.log(getProperty1(user6, "ID"));



