interface Useraa {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive: boolean;
}

const useraa: Useraa = {
    id: 101,
    name: "Salman",
    email: "salman@example.com",
    age: 22,
    isActive: true
};

type CC = keyof Useraa;

function getProperty<T, K extends keyof T>(
    obj: T,
    key: K
): T[K] {
    return obj[key];
}

const namej = getProperty(useraa, "name");
const aged = getProperty(useraa, "age");
const email = getProperty(useraa, "email");
const active = getProperty(useraa, "isActive");
const salary = getProperty(useraa, "salary");

console.log(namej, aged, email, active, salary);
