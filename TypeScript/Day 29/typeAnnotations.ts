class Product {
    id: number;
    name: string;
    price: number;
    available: boolean;

    constructor(
        id: number,
        name: string,
        price: number,
        available: boolean
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.available = available;
    }
}
const product = new Product(
    101,
    "Keyboard",
    2500,
    true
);