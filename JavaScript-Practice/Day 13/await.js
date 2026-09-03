//await is used to wait for a Promise to settle.
// async function getData() {
//     const result = await Promise.resolve("Hello");

//     console.log(result);
// }

// getData();

async function test() {
    console.log("A");
    await Promise.resolve;

    console.log("B");
}
console.log("Start");

test();


console.log("End");