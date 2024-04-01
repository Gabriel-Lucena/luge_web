export function changeStatus(idTask, status) {

  fetch("http://localhost:3000/task/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status,
        idTask: idTask,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Tarefa marcada como concluída:", data);
    })
    .catch(error => {
      console.error("Erro ao marcar a tarefa como concluída:", error);
    });
}