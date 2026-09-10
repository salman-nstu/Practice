enum OrderStatus {
    Pending = 2,
    Shipped = 4,
    Delivered,
    Cancelled
}

let statuss: OrderStatus = OrderStatus.Pending;

console.log(statuss);

function updateStatus(status: OrderStatus): void {
    console.log(`Status: ${status}`);
}

updateStatus(OrderStatus.Shipped);

console.log(OrderStatus.Pending)
console.log(OrderStatus.Delivered)
console.log(OrderStatus.Shipped)
console.log(OrderStatus.Cancelled)
