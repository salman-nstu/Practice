let globalMessage = "Global";

function outer() {
    let outerMessage = "Outer";

    function inner() {
        let innerMessage = "Inner";

        console.log(globalMessage);
        console.log(outerMessage);
        console.log(innerMessage);
    }

    inner();
}

outer();