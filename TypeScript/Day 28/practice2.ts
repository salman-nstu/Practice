enum OrderStatus {
    Pending = "pending",
    Paid = "paid",
    Shipped = "shipped",
    Delivered = "delivered"
}

type Order = [
    id: number,
    customerName: string,
    status: OrderStatus,
    trackingNumber?: string
];

interface Customer {
    name: string;
    email: string | null;
}

function getCustomerEmail(customer: Customer): string {
    if (customer.email === null) {
        return "No email available";
    }

    return customer.email;
}

function getTrackingMessage(order: Order): string {
    const trackingNumber = order[3];

    if (trackingNumber === undefined) {
        return "Tracking number not available";
    }

    return `Tracking number: ${trackingNumber}`;
}

const customer: Customer = {
    name: "Alice",
    email: null
};

const order: Order = [
    101,
    "Alice",
    OrderStatus.Shipped,
    "BD123456"
];

console.log(getCustomerEmail(customer));
console.log(getTrackingMessage(order));