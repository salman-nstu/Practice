try {
    throw new Error("Database connection failed");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

try {
    console.log("Trying...");
} catch (error) {
    console.log("Error!");
} finally {
    console.log("Finished");
}

try {
    throw new Error("Oops");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Finished");
}

function withdraw(balance, amount) {
    if (amount > balance) {
        throw new Error("Insufficient balance");
    }

    return balance - amount;
}
try {
    const remaining = withdraw(1000, 5000);

    console.log(remaining);
} catch (error) {
    console.log(error.message);
}