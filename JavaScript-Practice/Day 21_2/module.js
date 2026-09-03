const counter = (() => {

    let count = 0;

    function increment() {
        count++;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        getCount
    };

})();

counter.increment();
counter.increment();

console.log(counter.getCount());

console.log(counter.count);
