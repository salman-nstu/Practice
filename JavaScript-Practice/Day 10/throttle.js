function throttle(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;

            fn.apply(this, args);
        }
    };
}

const log = throttle(() => {
    console.log("Function executed");
}, 1000);

setInterval(() => {
    log();
}, 1000);