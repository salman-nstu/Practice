const url = "https://jsonplaceholder.typicode.com/todos/1";
async function loadData() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Request finished");
    }
}
loadData();