function login() {
    authenticate();
}

function authenticate() {
    fetchUser();
}

function fetchUser() {
    throw new Error("Database connection failed");
}

login();