document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("login_username").value.trim();
  const password = document.getElementById("login_password").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user_aktif", JSON.stringify(user));

    const redirect = localStorage.getItem("redirectAfterLogin");
    if (redirect) {
      localStorage.removeItem("redirectAfterLogin");
      window.location.href = redirect;
    } else {
      window.location.href = "index.html";
    }
  } else {
    alert("Username atau password salah!");
  }
});
