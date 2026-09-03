const nameInput = document.querySelector("#name");
const productInput = document.querySelector("#product");
const priceInput = document.querySelector("#price");
const quantityInput = document.querySelector("#quantity");
const orderTable = document.querySelector("#orderTable");
const vatInput = document.querySelector("#vat");
const message = document.querySelector("#message");
const invoice = document.querySelector("#invoice");
const showButton = document.querySelector("#show");

let orders = [];

document.querySelector("#add").addEventListener("click", () => {
  const product = productInput.value.trim();
  const price = Number(priceInput.value);
  const quantity = Number(quantityInput.value);

  if (!product || priceInput.value === "" || quantityInput.value === "") {
    message.textContent = "Fill in all order fields.";
    return;
  }

  if (Number.isNaN(price) || price < 0) {
    message.textContent = "Price must be a non-negative number.";
    return;
  }

  if (!Number.isInteger(quantity) || quantity < 0) {
    message.textContent = "Quantity must be a non-negative integer.";
    return;
  }

  orders.push({ product, price, quantity });

  renderTable();

  productInput.value = "";
  priceInput.value = "";
  quantityInput.value = "";

  message.textContent = "";
  productInput.focus();
});

function renderTable() {
  orderTable.innerHTML = orders.map((order, i) => `
    <tr>
      <td>${order.product}</td>
      <td>${order.price.toFixed(2)}</td>
      <td>${order.quantity}</td>
      <td>${(order.price * order.quantity).toFixed(2)}</td>
      <td>
        <button onclick="deleteOrder(${i})">Delete</button>
      </td>
    </tr>
  `).join("");
}

function deleteOrder(i) {
  orders.splice(i, 1);
  renderTable();
  showButton.disabled = orders.length === 0;
}

document.querySelector("#save").addEventListener("click", () => {
  if (!nameInput.value.trim()) {
    message.textContent = "Enter customer name.";
    return;
  }

  if (orders.length === 0) {
    message.textContent = "Add at least one order.";
    return;
  }

  message.textContent = "Order saved.";
  showButton.disabled = false;
});

showButton.addEventListener("click", () => {
  const subtotal = orders.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0
  );

  const vat = subtotal * Number(vatInput.value) / 100;
  const total = subtotal + vat;

  invoice.innerHTML = `
    <h2>Order for ${nameInput.value}</h2>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
        </tr>
      </thead>

      <tbody>
        ${orders.map((order, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${order.product}</td>
            <td>${order.quantity}</td>
            <td>${order.price.toFixed(2)}</td>
            <td>${(order.price * order.quantity).toFixed(2)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>

    <p>Subtotal: ${subtotal.toFixed(2)}</p>
    <p>VAT (${vatInput.value}%): ${vat.toFixed(2)}</p>
    <p><strong>Final Payable: ${total.toFixed(2)}</strong></p>

    <button id="printInvoice">Print Invoice</button>
  `;

  invoice.hidden = false;

  document.querySelector("#printInvoice").onclick = () => window.print();
});