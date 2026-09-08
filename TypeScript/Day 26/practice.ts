interface Payment {
    pay(amount: number): void;
}

class Bkash implements Payment {
    pay(amount: number): void {
        console.log(`Payment done via Bkash, amount ${amount}`);
    }
}

class Nagad implements Payment {
    pay(amount: number): void {
        console.log(`Payment done via Nagad, amount ${amount}`);
    }
}


const bkash = new Bkash();
bkash.pay(300);

const nagad = new Nagad();
nagad.pay(100);