function createLogger(prefix) {

    return function (message) {
        console.log(`[${prefix}] ${message}`);
    };
}

const userLogger = createLogger("USER");
const paymentLogger = createLogger("PAYMENT");

userLogger("User logged in");
paymentLogger("Payment successful");
