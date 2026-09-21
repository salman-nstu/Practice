type MyExclude<T, U> =
    T extends U ? never : T;

type Colors =
    "red" |
    "green" |
    "blue" | 40;

type WithoutRed =
    Exclude<Colors, "red">;

type z = Exclude<Colors, string>;

