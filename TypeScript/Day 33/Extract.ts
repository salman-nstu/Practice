// type MyExtract<T, U> =
//     T extends U ? T : never;


type Values =
    string | number | boolean;

type OnlyStrings =
    Extract<Values, string>;

type Am = "cat" | "dog" | 42;

type Bn = Extract<Am, string>;

