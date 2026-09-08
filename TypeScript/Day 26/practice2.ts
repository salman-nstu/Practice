interface Payment {
    pay(amount: number): void;
}

class Bkash implements Payment {
    pay(amount: number): void {
        console.log(`Payment done via Bkash, amount ${amount}, Charge: ${amount * .10} `);
    }
}

class Nagad implements Payment {
    pay(amount: number): void {
        console.log(`Payment done via Nagad, amount: ${amount}, Charge: ${amount * .15}`);
    }
}

class Processor {
    private strategy: Payment;

    constructor(strategy: Payment) {
        this.strategy = strategy;
    }

    set(strategy: Payment): void {
        this.strategy = strategy;
    }

    order(amount: number): void {
        this.strategy.pay(amount);
    }
}
const payProcess = new Processor(new Bkash());
payProcess.order(300);

payProcess.set(new Nagad());
payProcess.order(100); 