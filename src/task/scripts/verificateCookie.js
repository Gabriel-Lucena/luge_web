import {
  checkCookie
} from "../../session/checkCookie.js";
import {
  redirectToLogin
} from "../../session/redirectToLogin.js";

if (!checkCookie("id")) {
  redirectToLogin();
}