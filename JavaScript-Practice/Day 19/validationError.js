class ValidationError extends Error {
    constructor(message, field) {
        super(message);

        this.name = "ValidationError";
        this.field = field;
    }
}

function validateUsername(username) {
    if (username.trim().length < 3) {
        throw new ValidationError(
            "Username must be at least 3 characters.",
            "username"
        );
    }
    console.log("Valid username - " + username);

}

try {
    validateUsername("");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.field);
}

console.log(Error);
