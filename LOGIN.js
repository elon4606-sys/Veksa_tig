document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("form-login");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("login_username").value.trim();
        const password = document.getElementById("login_password").value.trim();

        // Ambil database user lokal
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Cek kecocokan
        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            alert("Username atau password salah!");
            return;
        }

        // Simpan sebagai user aktif
        localStorage.setItem("user_aktif", JSON.stringify(user));

        alert("Login berhasil!");

        // Redirect dashboard
        window.location.href = "index.html";
    });
});
