function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);   //a=2

console.log(double(5));
console.log(double(10));