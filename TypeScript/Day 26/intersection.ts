type User = {
    id: number;
};

type Employee = User & {
    department: string;
};

const E2: Employee = {
    id: 33,
    department: "SK"
}

console.log(E2);
