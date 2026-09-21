type Usern = {
    id: number;
    name: string;
    email: string;
    password: string;
};

type SafeUser = Omit<User, "password">;

type MyOmit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
};

