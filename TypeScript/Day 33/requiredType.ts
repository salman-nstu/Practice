type MyRequired<T> = {
    [K in keyof T]-?: T[K];
};

type User = {
    id: number;
    name?: string;
};

type RequiredUser = MyRequired<User>;

