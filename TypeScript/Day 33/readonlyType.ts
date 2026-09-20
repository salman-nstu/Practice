type User = {
    id: number;
    name: string;
};

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
};

type ReadonlyUser = MyReadonly<User>;

const user: MyReadonly<User> = {
    id: 1,
    name: "Salman"
};

user.name = "Rahim";