class Storagee<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    get(): T {
        return this.value;
    }

    set(value: T): void {
        this.value = value;
    }
}

const storage = new Storagee<string>("Hello");

storage.set("World");

console.log(storage.get());

storage.set(100);