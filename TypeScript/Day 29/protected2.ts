class UserAccount {
    constructor(
        public readonly id: number,
        public name: string,
        protected role: string
    ) { }
}
class Adminn extends UserAccount {
    constructor(
        id: number,
        name: string
    ) {
        super(id, name, "admin");
    }

    showRole(): string {
        return this.role;
    }
}
const admin = new Adminn(1, "Salman");

console.log(admin.showRole());

console.log(admin.role);