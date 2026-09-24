function Log(prefix: string) {
    return function (
        originalMethod: Function,
        context: ClassMethodDecoratorContext
    ) {
        return function (this: unknown, ...args: unknown[]) {
            console.log(`[${prefix}] Calling ${String(context.name)}`);
            console.log("Arguments:", args);

            return originalMethod.apply(this, args);
        };
    };
}

class Calculator {

    @Log("CALCULATOR")
    add(a: number, b: number) {
        return a + b;
    }
}

const calculator = new Calculator();

calculator.add(10, 20);