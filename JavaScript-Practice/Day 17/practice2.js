async function loadUser() {
    const response = await fetch(
        "https://dummyjson.com/users/1"
    );

    const data = await response.json();

    const name =
        data?.firstName
        ?? "Anonymous";

    const email =
        data?.user?.contact?.email
        ?? "No email available";

    const city =
        data?.user?.address?.city
        ?? "Unknown city";

    console.log(name);
    console.log(email);
    console.log(city);
}

loadUser();
