import {
  checkPasswords
} from "./checkPasswords.js";
import {
  exibir
} from "../../user/exibir.js";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("createAccountForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (checkPasswords()) {
      requisition(username, password);
    }

  });
});

function requisition(username, password) {
  fetch("http://localhost:3000/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(async response => {
      if (response.status === 409) {
        exibir();

        const data = await response.json();
        throw new Error(data.message || "Usuário Já Existe!!!");
      }

      if (!response.ok) {
        throw new Error("Erro ao criar conta!");
      }

      return response.json();
    })
    .then(data => {
      alert(data.MSG);
    })
    .catch(error => {
      console.error("Erro ao fazer login:", error);
    });
}