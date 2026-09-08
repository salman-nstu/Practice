type Admin = {
    name: string;
    permissions: string[];
};

type Customer = {
    name: string;
    orders: number;
};

type User = Admin | Customer;

function showUser(user: User) {
    if ("permissions" in user) {
        console.log(user.permissions);
    } else {
        console.log(user.orders);
    }
}

const exp: User = {
    name: "SK",
    permissions: ["logo"],
}

showUser(exp)