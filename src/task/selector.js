import { changeStatus } from "../fun/changeStatus.js";

setTimeout(function() {
  const checkboxes = document.querySelectorAll('input');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("click", function(event) {
      const taskId = event.target.id.replace('task', '');
      const status = checkbox.checked ? 'true' : 'false';

      console.log(taskId, status);
      changeStatus(taskId, status);
    });
  });
  console.log(document.querySelector("input"));
}, 100);


