class DB {
    static #instance = null;
    constructor(name) {
        console.log("FKJ");

        if (DB.#instance) {
            return DB.#instance;
        }
        this.name = name;
        DB.#instance = this;
    }
    static getInstance(name) {
        if (!DB.#instance) {
            new DB(name);
        }
        return DB.#instance;
    }
}
const db2 = DB.getInstance("B");

// const db4 = DB.getInstance("D");
// const db1 = new DB("A");
// const db3 = new DB("C");
// console.log(db1 === db2 && db2 === db3 && db3 === db4);
// console.log(db4.name);
