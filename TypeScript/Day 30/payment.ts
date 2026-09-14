abstract class Payment {
    abstract processPayment(amount: number): void;
}

class BkashPayment extends Payment {
    processPayment(amount: number): void {
        console.log(`Processing Bkash payment of ${amount}`);
    }
}

class CardPayment extends Payment {
    processPayment(amount: number): void {
        console.log(`Processing card payment of ${amount}`);
    }
}

