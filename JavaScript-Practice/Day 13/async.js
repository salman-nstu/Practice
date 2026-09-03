async function getData() {
    return "Hello";
}

console.log(getData());


async function getNumber() {
    return 100;
}

getNumber().then(value => {
    console.log(value);
});