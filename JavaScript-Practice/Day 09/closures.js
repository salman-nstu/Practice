function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const fn = outer();

fn();

function createGreeting(name) {

    return function () {
        console.log(`Hello, ${name}`);
    };
}

const greetSalman = createGreeting("Salman");
const greetRahim = createGreeting("Rahim");

greetSalman();
greetRahim();

//TO achieve encapsulation 
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        deposit(amount) {
            if (amount <= 0) throw new Error('Invalid deposit amount');
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount > balance) throw new Error('Insufficient funds');
            balance -= amount;
            return balance;
        },
        getBalance() {
            return console.log(balance);
        }
    };
}



const account = createBankAccount(100);
console.log(account);
account.deposit(50);
account.getBalance();
console.log(account.balance);


// Closure as a Function Factory
function createMultiplier(multiplier) {

    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(55)); // 10
console.log(triple(5)); // 15