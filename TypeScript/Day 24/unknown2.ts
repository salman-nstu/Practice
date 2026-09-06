async function getData(): Promise<unknown> {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
}

const data = await getData();

if (
    typeof data === "object" &&
    data !== null &&
    "name" in data
) {
    console.log(data.name);
}