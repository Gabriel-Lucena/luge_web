import {
  deleteCookie
} from "../session/deleteCookie.js";
import {
  getIdByCookie
} from '../session/getIdByCookie.js';


document.addEventListener("DOMContentLoaded", function() {

  const id = getIdByCookie();

  fetch(`http://localhost:3000/task/${id}`)
    .then(response => response.json())
    .then(data => {

      const tasksList = document.getElementById("tasksList");
      data.forEach((task) => {

        const li = document.createElement("li");

        const label = document.createElement("label");
        label.className = "todo-item";

        const input = document.createElement("input");
        input.type = "checkbox";
        input.className = "todo-checkbox";
        input.id = "task" + task.idTask;
        input.name = "task" + task.idTask;

        if (task.status) {
          input.checked = true
        } else {
          input.checked = false
        }

        const div = document.createElement("div");
        div.className = "todo-text";

        const spanTitle = document.createElement("span");
        spanTitle.className = "todo-title";
        spanTitle.textContent = task.name;

        const spanText = document.createElement("span");
        spanText.textContent = task.string;

        div.appendChild(spanTitle);
        div.appendChild(spanText);

        label.appendChild(input);
        label.appendChild(div);

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
  .addEventListener("click", function() {

    deleteCookie("id");

    window.location.href = "../login/index.html";
  });

