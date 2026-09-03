class EventEmitter {
    constructor() {
        this.listeners = [];
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    notify(data) {
        for (const listener of this.listeners) {
            listener(data);
        }
    }
}

const event = new EventEmitter();

event.subscribe((message) => {
    console.log("User 1:", message);
});

event.subscribe((message) => {
    console.log("User 2:", message);
});

event.notify("New video uploaded!");