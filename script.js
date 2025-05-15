document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("formLogin");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const usuario = document.getElementById("usuario").value;
      const password = document.getElementById("password").value;
      if (usuario === "admin" && password === "1234") {
        window.location.href = "panel.html";
      } else {
        alert("Credenciales incorrectas.");
      }
    });
  }
});
