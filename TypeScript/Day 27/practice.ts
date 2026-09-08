type PendingOrder = {
    status: "pending";
    orderId: number;
};

type ProcessingOrder = {
    status: "processing";
    orderId: number;
};

type ShippedOrder = {
    status: "shipped";
    orderId: number;
    trackingNumber: string;
};

type DeliveredOrder = {
    status: "delivered";
    orderId: number;
    deliveredAt: Date;
};

type CancelledOrder = {
    status: "cancelled";
    orderId: number;
    reason: string;
};

type Order =
    | PendingOrder
    | ProcessingOrder
    | ShippedOrder
    | DeliveredOrder
    | CancelledOrder;

function describeOrder(order: Order): string {
    switch (order.status) {
        case "pending":
            return `Order ${order.orderId} is waiting for processing.`;

        case "processing":
            return `Order ${order.orderId} is being prepared.`;

        case "shipped":
            return `Order ${order.orderId} shipped with tracking ${order.trackingNumber}.`;

        case "delivered":
            return `Order ${order.orderId} was delivered at ${order.deliveredAt}.`;

        case "cancelled":
            return `Order ${order.orderId} was cancelled: ${order.reason}`;
    }
}

const order: Order = {
    status: "processing",
    orderId: 444
}

console.log(describeOrder(order));