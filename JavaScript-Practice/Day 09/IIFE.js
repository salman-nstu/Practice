//Immediately Invoked Function Expression

(function () { console.log("Hello"); })();


(function (name) {
    console.log(`Hello ${name}`);
})("Salman");

const counter = (function () {

    let count = 0;

    return function () {
        count++;
        return count;
    };

})();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
