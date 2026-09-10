interface User {
    name: string;
    email: string;
}

// function getUserName(user: User | null): string {
//     return user.name;
// }

function getUserName(user: User | null): string {
    if (user === null) {
        return "Unknown User";
    }

    return user.name;
}

function getEmail(user: User): string {
    return user.email;
}

// let username: string = null;
let username: string | null = null;


// function greet(name?: string): string {
//     return name.toUpperCase();
// }

function greet(name?: string): string {
    return `Hello, ${name?.toUpperCase() ?? "Guest"}`;
}
