function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data === 1) {

          setCookie("username", username, 1);

          window.location.href = "../task/index.html";
        } else {
          alert("Erro ao fazer login. Tente novamente.");
        }
      })
      .catch(error => {
        console.error("Erro ao fazer login:", error);
        alert("Erro ao fazer login. Tente novamente.");
      });
  });
});