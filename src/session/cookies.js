/**
 * Function to check if a specific cookie exists.
 *
 * @param {string} name - The name of the cookie to check.
 * @return {boolean} Returns true if the cookie exists, false otherwise.
 */

export function checkCookie(name) {
  const cookieArr = document.cookie.split(";");

  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split("=");

    if (name === cookiePair[0].trim()) {
      return true;
    }
  }

  return false;
}

/**
 * Redirects the user to the login page.
 *
 * @return {void} This function does not return a value.
 */
export function redirectToLogin() {
  window.location.href = "../login/index.html"; // Altere para o caminho correto da página de login
}

/**
 * Deletes a cookie with the specified name.
 *
 * @param {string} name - The name of the cookie to delete.
 * @return {undefined} This function does not return a value.
 */
export function deleteCookie(name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/;";
}

/**
 * Sets a cookie with the given name, value, and expiration days.
 *
 * @param {string} name - The name of the cookie
 * @param {string} value - The value of the cookie
 * @param {number} days - The number of days until the cookie expires
 * @return {void}
 */
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
