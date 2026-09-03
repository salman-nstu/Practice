const response = {
    data: {
        user: {
            profile: {
                name: "Salman",
                address: {
                    city: "Dhaka"
                }
            }
        }
    }
};

const city =
    response?.data?.user?.profile?.address?.city
    ?? "Unknown city";

console.log(city);

const response2 = {
    products: [
        {
            id: 1,
            title: "Laptop",
            price: 75000,
            category: "laptops"
        }
    ]
};
const firstProduct =
    response2?.products?.[0]?.title
    ?? "No product available";

console.log(firstProduct);
