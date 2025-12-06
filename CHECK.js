document.addEventListener("DOMContentLoaded", function () {

    const userAktif = JSON.parse(localStorage.getItem("user_aktif"));

    const loginButton = document.getElementById("loginButton");
    const userDropdown = document.getElementById("userDropdown");
    const userName = document.getElementById("userName");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const logoutBtn = document.getElementById("logoutBtn");

    // Jika user sudah login
    if (userAktif) {
        loginButton.style.display = "none";      // sembunyikan login button
        userDropdown.style.display = "inline-block";

        // tampilkan username
        userName.innerText = userAktif.username;   // atau userAktif.nama
    } else {
        // Jika belum login
        loginButton.style.display = "inline-block";
        userDropdown.style.display = "none";
    }

    // Klik username → buka/tutup dropdown
    userName.addEventListener("click", function () {
        dropdownMenu.style.display =
            dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Logout
    logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // hapus user aktif
        localStorage.removeItem("user_aktif");

        // refresh halaman
        window.location.reload();
    });

    // Click luar menutup dropdown
    document.addEventListener("click", function (event) {
        if (!userDropdown.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });

});
