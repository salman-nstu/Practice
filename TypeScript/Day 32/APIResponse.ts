interface Userll {
    id: number;
    name: string;
    email: string;
}

interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

// type UserllResponse = ApiResponse<Userll>;

function getData<T>(
    response: ApiResponse<T>
): T {
    return response.data;
}

const response2: ApiResponse<Userll> = {
    data: {
        id: 1,
        name: "Salman",
        email: "salman@example.com"
    },
    status: 200,
    message: "Success"
};

const userData = getData(response2);

console.log(userData);
