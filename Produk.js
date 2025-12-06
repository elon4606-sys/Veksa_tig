let isLoggedIn = false;  
// Nanti ini bisa kamu ganti dari backend / localStorage

document.querySelector(".buy-now").addEventListener("click", function () {
    if (isLoggedIn) {
        alert("Produk berhasil dibeli!");
        // lakukan proses pembelian lainnya di sini
    } else {
        alert("Anda harus login terlebih dahulu!");
        // arahkan ke halaman login
        window.location.href = "login.html";  
        // ubah sesuai halaman login kamu
    }
});
  // === Fitur Simpan ke Cart ===
  document.querySelector(".add-to-cart").addEventListener("click", function() {
    const productName = document.querySelector(".product-details h2").textContent;
    const price = document.querySelector(".price").textContent;
    const quantity = document.querySelector(".quantity-selector input").value;
    const size = document.querySelector('input[name="size"]:checked')
      ? document.querySelector('input[name="size"]:checked").value')
      : "Belum dipilih";

    // Data produk
    const product = {
      name: productName,
      price: price,
      quantity: parseInt(quantity),
      size: size,
    };

    // Ambil data keranjang sebelumnya
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`🛒 ${productName} (Size: ${size}) berhasil ditambahkan ke keranjang!`);
  });

  // === Fitur Quantity (+ dan -) ===
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