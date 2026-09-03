//fetch() does not automatically reject the Promise for HTTP errors such as 404 or 500.

async function functionName() {
    try {
        const result = await somePromise();

        return result;
    } catch (error) {
        console.log(error);
    }
}