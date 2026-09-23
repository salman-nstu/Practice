const confirmOrderBtn = document.getElementById("confirm-order-btn");

confirmOrderBtn.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    generateOrderPDF();

});


function generateOrderPDF() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const now = new Date();

    const dateTime = now.toLocaleString();

    doc.setFontSize(20);
    doc.text("Order Confirmation", 20, 20);

    doc.setFontSize(11);
    doc.text(`Date & Time: ${dateTime}`, 20, 30);

    let y = 50;

    doc.setFontSize(12);

    doc.text("SL", 20, y);
    doc.text("Product Name", 35, y);
    doc.text("Price", 130, y);
    doc.text("Quantity", 155, y);
    doc.text("Total", 180, y);

    y += 8;

    doc.line(20, y, 195, y);

    y += 10;

    let grandTotal = 0;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        grandTotal += itemTotal;

        doc.text(`${index + 1}`, 20, y);

        doc.text(item.title.substring(0, 45), 35, y);

        doc.text(`$${item.price.toFixed(2)}`, 130, y);

        doc.text(`${item.quantity}`, 158, y);

        doc.text(`$${itemTotal.toFixed(2)}`, 180, y);

        y += 10;

        if (y > 270) {
            doc.addPage();
            y = 20;
        }

    });

    doc.line(20, y, 195, y);

    y += 10;

    doc.setFontSize(14);
    doc.text(
        `Total Price: $${grandTotal.toFixed(2)}`,
        130,
        y
    );

    doc.save("order-confirmation.pdf");

}