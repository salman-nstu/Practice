User: {
    id: 1;
    name: "SK";
}

// console.log(User);

function add(a: number | string) {

    // console.log("Hello");
    if (typeof a === "number" && a > 3) return "A";
    else return a;
}

console.log(add(5));

