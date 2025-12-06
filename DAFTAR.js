document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // cegah submit ke server

        const nama = document.getElementById("nama_lengkap").value.trim();
        const email = document.getElementById("email").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const konfirmasi = document.getElementById("konfirmasi_password").value.trim();

        // Validasi kosong
        if (!nama || !email || !username || !password || !konfirmasi) {
            alert("Semua field wajib diisi!");
            return;
        }

        // Validasi email
        if (!email.includes("@") || !email.includes(".")) {
            alert("Format email tidak valid!");
            return;
        }

        // Validasi panjang password
        if (password.length < 6) {
            alert("Password minimal 6 karakter!");
            return;
        }

        // Cek apakah password cocok
        if (password !== konfirmasi) {
            alert("Konfirmasi password tidak cocok!");
            return;
        }

        // Ambil daftar user dari localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Cek apakah email sudah terdaftar
        const cekEmail = users.find(u => u.email === email);
        if (cekEmail) {
            alert("Email sudah terdaftar!");
            return;
        }

        // Cek apakah username sudah dipakai
        const cekUsername = users.find(u => u.username === username);
        if (cekUsername) {
            alert("Username sudah digunakan!");
            return;
        }

        // Membuat objek user baru
        const userBaru = {
            nama: nama,
            email: email,
            username: username,
            password: password
        };

        // Simpan user ke database lokal
        users.push(userBaru);
        localStorage.setItem("users", JSON.stringify(users));

        // Simpan user aktif untuk diakses pada halaman lain
        localStorage.setItem("user_aktif", JSON.stringify(userBaru));

        alert("Pendaftaran berhasil!");

        // Reset form
        form.reset();

        // Arahkan ke halaman lain (opsional)
        // window.location.href = "dashboard.html";
    });
});
