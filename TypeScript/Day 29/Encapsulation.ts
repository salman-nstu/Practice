class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            return;
        }

        this.balance += amount;
    }

    withdraw(amount: number): boolean {
        if (amount <= 0 || amount > this.balance) {
            return false;
        }

        this.balance -= amount;
        return true;
    }

    getBalance(): number {
        return this.balance;
    }
}