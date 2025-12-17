// === CEK STATUS LOGIN ===
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

// === BUTTON BELI SEKARANG ===
document.querySelector(".buy-now").addEventListener("click", function () {
  if (isLoggedIn) {
    alert("Produk berhasil dibeli!");
    window.location.href = "payment.html";
  } else {
    alert("Anda harus login terlebih dahulu!");
    window.location.href = "login.html";
  }
});

// === FITUR TAMBAH KE CART ===
document.querySelector(".add-to-cart").addEventListener("click", function () {
  if (!isLoggedIn) {
    alert("Silakan login terlebih dahulu!");
    window.location.href = "login.html";
    return;
  }

  const productName = document.querySelector(".product-details h2").textContent;
  const price = document.querySelector(".price").textContent;
  const quantity = document.querySelector(".quantity-selector input").value;

  const sizeInput = document.querySelector('input[name="size"]:checked');
  const size = sizeInput ? sizeInput.value : "Belum dipilih";

  const product = {
    name: productName,
    price: price,
    quantity: parseInt(quantity),
    size: size
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`🛒 ${productName} (Size: ${size}) berhasil ditambahkan ke keranjang!`);
});

// === FITUR QUANTITY ===
const qtyInput = document.querySelector(".quantity-selector input");
const btnPlus = document.querySelectorAll(".quantity-selector button")[1];
const btnMinus = document.querySelectorAll(".quantity-selector button")[0];

btnPlus.addEventListener("click", () => {
  qtyInput.value = parseInt(qtyInput.value) + 1;
});

btnMinus.addEventListener("click", () => {
  if (parseInt(qtyInput.value) > 1) {
    qtyInput.value = parseInt(qtyInput.value) - 1;
  }
});
