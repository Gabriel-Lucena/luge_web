export function checkPasswords() {

  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("confirmPassword");

  const password = passwordInput.value;
  const confirmPassword = confirmInput.value;

  if (password == confirmPassword) {
    return true;
  }

  if (password != confirmPassword) {
    alert("Ajeite as senhas!!!");
    return false;
  }
}

