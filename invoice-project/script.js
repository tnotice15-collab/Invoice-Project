// script.js
function calculateTotal() {
  let qty = document.getElementById("qty").value;
  let price = document.getElementById("price").value;

  let subtotal = qty * price;
  let tax = subtotal * 0.08875;
  let grandTotal = subtotal + tax;

  document.getElementById("itemTotal").innerText = subtotal.toFixed(2);
  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("tax").innerText = tax.toFixed(2);
  document.getElementById("grandTotal").innerText = grandTotal.toFixed(2);
}