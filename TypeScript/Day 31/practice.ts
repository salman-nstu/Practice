class Store<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    clear(): void {
        this.items = [];
    }
}

const store = new Store<string>();

store.add("Apple");
store.add("Banana");
store.add("Orange");

console.log(store.getAll());

const numberStore = new Store<number>();

numberStore.add(10);
numberStore.add(20);
numberStore.add(30);