function identity<M>(value: M): M {
    return value;
}

const var1 = identity("HI");


console.log(var1.fixed());

const resuls = identity<string>("Hello");

const numberResults = identity<number>(100);

function firstElement<T>(items: T[]): T {
    return (items[0]);
}

const number = firstElement([10, 20, 30]);

console.log(number);
