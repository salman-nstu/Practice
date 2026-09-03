function getUser() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const user = {
                id: 1,
                name: "Salman"
            };

            resolve(user);

        }, 1000);

    });
}

getUser()
    .then(user => {

        console.log("User:", user);

        return user.id;

    })
    .then(id => {

        console.log("ID:", id);

        return `User ID is ${id}`;

    })
    .then(message => {

        console.log(message);

    })
    .catch(error => {

        console.log("Error:", error);

    })
    .finally(() => {

        console.log("Finished");

    });
