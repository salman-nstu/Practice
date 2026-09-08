interface Entity {
    readonly id: number;
}

interface User extends Entity {
    name: string;
    email: string;
}

interface Product extends Entity {
    name: string;
    price: number;
    stock: number;
}

interface OrderItem {
    product: Product;
    quantity: number;
}

type OrderStatus =
    | "pending"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled";

interface Order extends Entity {
    user: User;
    items: OrderItem[];
    status: OrderStatus;
}

const user: User = {
    id: 1,
    name: "Salman",
    email: "salman@example.com"
};

const product: Product = {
    id: 101,
    name: "Mechanical Keyboard",
    price: 5000,
    stock: 20
};

const order: Order = {
    id: 5001,

    user,

    items: [
        {
            product,
            quantity: 2
        }
    ],

    status: "pending"
};

console.log(order);