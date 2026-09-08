interface User2 {
    readonly id: number;
    name: string;
}

const user3: User2 = {
    id: 1,
    name: "John"
};

user3.name = "Sarah";

user3.id = 2;