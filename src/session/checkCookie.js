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