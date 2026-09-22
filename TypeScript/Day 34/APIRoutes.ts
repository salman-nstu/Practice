type Resource = "users" | "products" | "orders";

type Method = "GET" | "POST" | "DELETE";

type APIAction = `${Method} /${Resource}`;

function request(action: APIAction) {
    console.log(action);
}

request("GET /users");
request("POST /orders");
request("PATCH /users"); 