class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(5000);

account.deposit(1000);

console.log(account.getBalance()); 