// const compose = (f, g) => value => f(g(value));

const compose = (...functions) => value => {
    return functions.reduceRight((result, fn) => fn(result),value);
};

const double = x => x * 2;

const addTen = x => x + 10;

const process = compose(addTen, double);

console.log(process(5));