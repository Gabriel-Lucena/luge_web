import {
  deleteCookie
} from "../../session/deleteCookie.js";

document
  .getElementById("logoutButton")
  .addEventListener("click", function () {

    deleteCookie("id");

    window.location.href = "../login/index.html";
  });