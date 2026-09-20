interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

type NewType<T> = {
    [K in keyof T]: T[K];
};

type stringuser = NewType<User>;

type partialU = Partial<User>;