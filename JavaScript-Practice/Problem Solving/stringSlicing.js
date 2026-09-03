const str = "Build a basic calculator using functions with default parameters; trace a hoisting example on paper before running it. ";

function splitString(text, limit = 30) {
    const lines = [];
    let line = "";

    for (const word of text.split(" ")) {
        if ((line + " " + word).trim().length <= limit) {
            line = (line + " " + word).trim();
        } else {
            lines.push(line.padEnd(limit));
            line = word;
        }
    }

    if (line) lines.push(line.padEnd(limit));

    return lines;
}

const output = splitString(str);

output.forEach(line =>
    console.log(`"${line}"`)
);