"use strict";
class Store {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
    clear() {
        this.items = [];
    }
}
const store = new Store();
store.add("Apple");
store.add("Banana");
store.add("Orange");
console.log(store.getAll());
const numberStore = new Store();
numberStore.add(10);
numberStore.add(20);
numberStore.add(30);
