type User = {
    id: number;
    name: string;
    email: string;
};

type MyPartial<T> = {
    [K in keyof T]?: T[K];
};

type UserUpdate = MyPartial<User>;

const update: UserUpdate = {
    name: "Salman"
};



// function updateUser(
//     id: number,
//     changes: Partial<User>
// ) {

// }

// updateUser(10, {
//     name: "Rahim"
// });