// const results = await Promise.allSettled([
//     Promise.resolve("A"),
//     Promise.reject("B failed"),
//     Promise.resolve("C")
// ]);

// console.log(results);

async function loadDashboard() {
    const results = await Promise.allSettled([
        fetchJSON("/profile"),
        fetchJSON("/notifications"),
        fetchJSON("/recommendations")
    ]);

    results.forEach(result => {
        if (result.status === "fulfilled") {
            console.log("Success:", result.value);
        } else {
            console.log("Failed:", result.reason);
        }
    });
}