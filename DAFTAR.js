document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama_lengkap").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const konfirmasi = document.getElementById("konfirmasi_password").value.trim();

    // VALIDASI KOSONG
    if (!nama || !email || !username || !password || !konfirmasi) {
      alert("Semua field wajib diisi!");
      return;
    }

    // VALIDASI EMAIL
    if (!email.includes("@") || !email.includes(".")) {
      alert("Format email tidak valid!");
      return;
    }

    // VALIDASI PASSWORD
    if (password.length < 6) {
      alert("Password minimal 6 karakter!");
      return;
    }

    if (password !== konfirmasi) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }

    // AMBIL DATA USERS
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // CEK EMAIL
    if (users.some(u => u.email === email)) {
      alert("Email sudah terdaftar!");
      return;
    }

    // CEK USERNAME
    if (users.some(u => u.username === username)) {
      alert("Username sudah digunakan!");
      return;
    }

    // USER BARU
    const userBaru = {
      nama,
      email,
      username,
      password
    };

    // SIMPAN KE USERS
    users.push(userBaru);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Pendaftaran berhasil! Silakan login.");

    form.reset();

    // PINDAH KE LOGIN
    window.location.href = "login.html";
  });
});
