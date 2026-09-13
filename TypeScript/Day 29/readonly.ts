class Usera {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        // Object.freeze(this);
    }
}
const userrr = new Usera(101, "Salman");

userrr.name = "Ahmed";

userrr.id = 20011;

console.log(userrr);
