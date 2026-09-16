class Store<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return [...this.items];
    }

    get(index: number): T | undefined {
        return this.items[index];
    }

    remove(index: number): void {
        this.items.splice(index, 1);
    }

    clear(): void {
        this.items = [];
    }

    get size(): number {
        return this.items.length;
    }
}

interface Product {
    id: number;
    name: string;
    price: number;
}

const products = new Store<Product>();

products.add({
    id: 1,
    name: "Laptop",
    price: 80000
});

products.add({
    id: 2,
    name: "Mouse",
    price: 1500
});

console.log(products.getAll());