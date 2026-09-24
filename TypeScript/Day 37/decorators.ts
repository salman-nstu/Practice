function Log(
    originalMethod: Function,
    context: ClassMethodDecoratorContext
) {
    return function (this: unknown, ...args: unknown[]) {
        console.log(`Calling ${String(context.name)}`);
        console.log("Arguments:", args);

        return originalMethod.apply(this, args);
    };
};


class Calculatorr {
    @Log
    add(a: number, b: number) {
        return a + b;
    }
}

const calculator = new Calculatorr();


console.log(calculator.add(10, 20));
