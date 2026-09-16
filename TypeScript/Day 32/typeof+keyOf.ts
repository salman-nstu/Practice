const userv = {
    name: "Salman",
    age: 22,
    email: "salman@example.com"
};

type Userc = typeof userv;

type UserKeyss = keyof Userc;