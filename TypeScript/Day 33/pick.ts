type Userq = {
    id: number;
    name: string;
    email: string;
    age: number;
};

type U2 = Pick<Userq, "id" | "name">;


const u: U2 = {
    id: 33,
    name: "k"
};


console.log(u);


// type MyPick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };