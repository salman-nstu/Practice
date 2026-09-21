type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

type ProductSummary = MyPick<
    Product,
    "name" | "price"
>;

const productz: ProductSummary = {
    name: "Laptop",
    price: 80000
};