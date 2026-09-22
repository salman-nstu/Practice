type AP = Uppercase<"hello">;
// "HELLO"

type BP = Lowercase<"HELLO">;
// "hello"

type CP = Capitalize<"hello">;
// "Hello"

type DP = Uncapitalize<"Hello">;
// "hello"