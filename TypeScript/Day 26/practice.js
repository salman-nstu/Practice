"use strict";
class Bkash {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    pay() {
        console.log(`Payment done, amount ${this.amount}`);
    }
}
const bkash = new Bkash(500);
bkash.pay();
