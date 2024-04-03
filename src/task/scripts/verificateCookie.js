import { checkCookie } from "../../session/checkCookie.js";
import { redirectToLogin } from "../../session/redirectToLogin.js";

// Verificar se o cookie "username" existe
if (!checkCookie("id")) {
  // Se o cookie "username" não existir, redirecionar para a página de login
  redirectToLogin();
}

