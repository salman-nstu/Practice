enum OrderStatus {
    Pending = "pending",
    Processing = "processing",
    Shipped = "shipped",
    Delivered = "delivered"
}


console.log(OrderStatus.Pending);

enum AppointmentStatus {
    Scheduled = "scheduled",
    Completed = "completed",
    Cancelled = "cancelled"
}


enum AppointmentStatus {
    hi = "Hello"
}


console.log(AppointmentStatus);


type StatusType = "Admin" | "User";
let myStatus: StatusType = "Admin";

enum StatusEnum {
    Admin = "Admin2",
    User = "User2"
}
let yourStatus: StatusEnum = StatusEnum.Admin;


console.log(yourStatus);
