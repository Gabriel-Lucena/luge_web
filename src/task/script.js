import {
  checkCookie,
  redirectToLogin,
  deleteCookie
} from '../session/cookies.js';

document.addEventListener("DOMContentLoaded", function () {
  // Verificar se o cookie "username" existe
  if (!checkCookie("username")) {
    // Se o cookie "username" não existir, redirecionar para a página de login
    redirectToLogin();
    console.log("object");
  }
});

document
  .getElementById("logoutButton")
  .addEventListener("click", function () {

    deleteCookie("username");

    window.location.href = "../login/index.html";
  });