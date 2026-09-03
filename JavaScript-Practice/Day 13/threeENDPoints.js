async function fetchJSON(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(
            `Request failed: ${response.status}`
        );
    }

    return response.json();
}

async function loadData() {
    try {
        const [dogs, cats, ducks] = await Promise.all([
            fetchJSON("https://dog.ceo/api/breeds/image/random/3"),

            fetchJSON("https://api.thecatapi.com/v1/images/search?limit=3"),

            Promise.all([
                fetchJSON("https://random-d.uk/api/v2/random"),
                fetchJSON("https://random-d.uk/api/v2/random"),
                fetchJSON("https://random-d.uk/api/v2/random")
            ])
        ]);

        console.log(dogs);
        console.log(cats);
        console.log(ducks);
    } catch (error) {
        console.error("Failed:", error.message);
    }
}

loadData();