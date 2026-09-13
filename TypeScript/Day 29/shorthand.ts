class User {
    constructor(
        public name: string,
        public age: number
    ) { }
}

class BankAccount {
    constructor(
        private accountNumber: string,
        private balance: number
    ) { }
}

class Employee {
    constructor(
        public name: string,
        protected department: string,
        private salary: number
    ) { }
}