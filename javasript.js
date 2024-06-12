// Button Qty page Detail
document.addEventListener("DOMContentLoaded", (event) => {
  const decreaseBtn = document.getElementById("decrease-btn");
  const increaseBtn = document.getElementById("increase-btn");
  const quantitySpan = document.getElementById("quantity");
  let quantity = 1;
  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantitySpan.textContent = quantity;
    }
    toggleButtonState();
  });

  increaseBtn.addEventListener("click", () => {
    quantity++;
    quantitySpan.textContent = quantity;
    toggleButtonState();
  });

  function toggleButtonState() {
    decreaseBtn.disabled = quantity === 1;
  }

  toggleButtonState();
});
// ===================================================
