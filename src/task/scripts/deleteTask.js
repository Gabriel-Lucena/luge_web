import {
  getIdByCookie
} from "../../session/getIdByCookie.js";

setTimeout(function () {
  const checkboxes = document.querySelectorAll('img');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function (event) {
      const idTask = event.target.id.replace('delete', '');
      const idUser = getIdByCookie();

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
}, 100);