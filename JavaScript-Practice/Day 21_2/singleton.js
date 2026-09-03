class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }

        Logger.instance = this;
    }

    log(message) {
        console.log(message);
    }
}

const logger1 = new Logger();
const logger2 = new Logger();

console.log(logger1 === logger2);