// function isString(value: unknown): value is string {
//     return typeof value === "string";
// }

// console.log(isString("s"));


function isString(x: unknown): x is string {
    return typeof x === "string";
}

function processValue(value: unknown) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
}


processValue(5);

processValue("SK");
