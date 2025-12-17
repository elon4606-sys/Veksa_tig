if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Silakan login terlebih dahulu!");
  window.location.href = "login.html";
}
