export function destroyTask(idTask) {

  const tasksLi = document.getElementById("task" + idTask);
  tasksLi.remove();
}