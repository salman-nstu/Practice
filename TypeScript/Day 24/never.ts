// function throwError(): never {
//     throw new Error("Something went wrong");
// }

// throwError();


function infiniteLoop(): never {
    while (true) {
        console.log("Running...");
    }
}
infiniteLoop();
