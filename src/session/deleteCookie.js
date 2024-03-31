/**
 * Deletes a cookie with the specified name.
 *
 * @param {string} name - The name of the cookie to delete.
 * @return {undefined} This function does not return a value.
 */
export function deleteCookie(name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/;";
}