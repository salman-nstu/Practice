class User {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        // Object.freeze(this);
    }
}
const userrr = new User(101, "Salman");

userrr.name = "Ahmed";

userrr.id = 200;

console.log(userrr);
