function getUser() {
    return {
        id: 1,
        name: "Salman"
    };
}

type User0 = ReturnType<typeof getUser>;

// type MyReturnType<T> =
//     T extends (...args: any[]) => infer R
//     ? R
//     : never;