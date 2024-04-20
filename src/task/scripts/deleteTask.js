import {
  getIdByCookie
} from "../../session/getIdByCookie.js";

import {
  destroyTask
} from "../../fun/destroyTask.js";

setTimeout(function () {
  const images = document.querySelectorAll('img');

  images.forEach(function (checkbox) {
    checkbox.addEventListener("click", function (event) {
      const idTask = event.target.id.replace('delete', '');
      const idUser = getIdByCookie();

      destroyTask(idTask);
      fetch(`http://localhost:3000/task/`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idUser: idUser,
            idTask: idTask,
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log("Tarefa excluída:", data);
        })
        .catch(error => {
          console.error("Erro ao excluir a tarefa:", error);
        });
    });
  });
}, 300);