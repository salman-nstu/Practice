const confirmOrderBtn = document.getElementById("confirm-order-btn");

confirmOrderBtn.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    printOrder();

});


function printOrder() {

    const now = new Date();

    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    let totalPrice = 0;

    let orderRows = "";

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        totalPrice += itemTotal;

        orderRows += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.title}</td>
                <td>@${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>TK-${itemTotal.toFixed(2)}</td>
            </tr>
        `;
    });


    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
        <!DOCTYPE html>

        <html>

        <head>

            <title>Order Confirmation</title>

            <style>

                body {
                    font-family: Arial, sans-serif;
                    margin: 40px;
                }

                h1 {
                    text-align: center;
                    margin-bottom: 30px;
                }

                .date-time {
                    margin-bottom: 25px;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                }

                th,
                td {
                    border: 1px solid #ccc;
                    padding: 10px;
                    text-align: left;
                }

                th {
                    background: #f5f5f5;
                }

                .total {
                    text-align: right;
                    font-size: 18px;
                    font-weight: bold;
                    margin-top: 20px;
                }

            </style>

        </head>


        <body>

            <h1>Order Confirmation</h1>

            <div class="date-time">

                <strong>Date:</strong> ${date}

                <br>

                <strong>Time:</strong> ${time}

            </div>


            <table>

                <thead>

                    <tr>
                        <th>SL</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>

                </thead>


                <tbody>

                    ${orderRows}

                </tbody>

            </table>


            <div class="total">

                Total Price: $${totalPrice.toFixed(2)}

            </div>

        </body>

        </html>
    `);


    printWindow.document.close();

    printWindow.focus();

    printWindow.print();

}