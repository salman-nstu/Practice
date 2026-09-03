const user = {
    name: "Salman",

    search(query) {
        console.log(`${this.name} searched for "${query}"`);
    }
};

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

user.search = debounce(user.search, 1000);

user.search("JavaScript");
user.search("JavaScript closures");
user.search("JavaScript debounce");