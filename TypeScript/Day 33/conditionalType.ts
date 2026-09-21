//T extends U ? X : Y

interface Animal {
    live(): void;
}
interface Dog extends Animal {
    woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
//   ^?

type Example2 = RegExp extends Animal ? number : string;
//   ^?



type IsString<T> =
    T extends string
    ? true
    : false;

type AB = IsString<string>;

type BC = IsString<number>;


type Message<T> =
    T extends string
    ? "String value"
    : "Not a string";

type AC = Message<string>;

type BD = Message<number>;