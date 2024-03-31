/**
 * Retrieves the ID from the cookie by splitting the document.cookie string and returning the trimmed first element.
 *
 * @return {string} The ID extracted from the cookie.
 */
export function getIdByCookie() {
  const cookieArr = document.cookie.split(";");

  const id = cookieArr[0][3];

  return id;
}