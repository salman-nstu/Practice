// type MyRecord<K extends PropertyKey, T> = {
//     [P in K]: T;
// };

type Role = "admin" | "user" | "guest";

type Permissions = Record<Role, boolean>;

const permissions: Permissions = {
    admin: true,
    user: true,
    guest: false
};

type Status = "pending" | "success" | "error";

type StatusMessage = Record<Status, string>;

const messages: StatusMessage = {
    pending: "Loading...",
    success: "Completed!",
    error: "Something went wrong"
};