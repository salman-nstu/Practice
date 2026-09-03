// const promise = new Promise((resolve, reject) => {
//     resolve("Hello");
// });

// promise.then((value) => {
//     console.log(value);
// });

const promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Operation finished");
    });