type User8 = {
    name: string;
    age: number;
    email: string;
};

type UserKeys = keyof User8;

// type UserKeys = "name" | "age" | "email";

let key: UserKeys = "name";

function printkey(key: UserKeys) {
    console.log(key);
}

printkey("age")
printkey("ID")