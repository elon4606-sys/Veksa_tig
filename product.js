document.querySelector(".buy-now").addEventListener("click", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    window.location.href = "payment.html";
  } else {
    // SIMPAN TUJUAN
    localStorage.setItem("redirectAfterLogin", "payment.html");
    window.location.href = "login.html";
  }
});
