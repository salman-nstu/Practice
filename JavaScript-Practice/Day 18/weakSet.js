const processed = new WeakSet();

function processObject(obj) {
    if (processed.has(obj)) {
        console.log("Already has been processed");
        
        return ;
    }

    processed.add(obj);

    console.log("Processing...");
}

const data = {};

processObject(data);
processObject(data);