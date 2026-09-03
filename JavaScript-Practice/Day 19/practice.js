class ValidationError extends Error {
    constructor(message, field) {
        super(message);

        this.name = "ValidationError";
        this.field = field;
    }
}


function validateUsername(username) {
    const pattern = /^[a-zA-Z0-9_]{3,16}$/;

    if (!pattern.test(username)) {
        throw new ValidationError(
            "Username must be 3-16 characters.",
            "username"
        );
    }

    return true;
}


function* fibonacci() {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;

        [a, b] = [b, a + b];
    }
}


try {
    validateUsername("ab!");

    console.log("Username is valid.");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Validation failed: ${error.message}`);
        console.log(`Field: ${error.field}`);
    } else {
        console.log("Unexpected error:", error);
    }
}


const fib = fibonacci();

for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}