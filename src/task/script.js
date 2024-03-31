import {
  checkCookie,
  redirectToLogin,
  deleteCookie
} from '../session/cookies.js';

import {
  getIdByCookie
} from '../session/getIdByCookie.js';

document.addEventListener("DOMContentLoaded", function () {
  // Verificar se o cookie "username" existe
  if (!checkCookie("id")) {
    // Se o cookie "username" não existir, redirecionar para a página de login
    redirectToLogin();
  }
});

document.addEventListener("DOMContentLoaded", function () {

  const id = getIdByCookie();

  // Fazer uma requisição HTTP para obter a lista de tarefas
  fetch(`http://localhost:3000/task/${id}`)
    .then(response => response.json())
    .then(data => {
      // Montar o HTML das tarefas com base na resposta da requisição
      const tasksList = document.getElementById("tasksList");

      data.forEach((task) => {
        const li = document.createElement("li");

        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = task.idTask;
        input.name = task.name;

        const label = document.createElement("label");
        label.htmlFor = task.idTask;
        label.textContent = task.string;

        li.appendChild(input);
        li.appendChild(label);

        tasksList.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Erro ao obter as tarefas:", error);
    });
});

document
  .getElementById("logoutButton")
  .addEventListener("click", function () {

    deleteCookie("id");

    window.location.href = "../login/index.html";
  });