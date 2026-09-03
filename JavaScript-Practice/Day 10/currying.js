function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20));

// function calculatePrice(discount) {
//     return function (price) {
//         return price - price * discount;
//     };
// }

// const tenPercentOff = calculatePrice(0.10);

// console.log(tenPercentOff(1000));
// console.log(tenPercentOff(2000));
// console.log(tenPercentOff(5000));