export function exibir() {
  const h3Element = document.querySelector("h3");

  h3Element.style.display = "block";

  setTimeout(() => {
    h3Element.style.display = "none"
  }, 3000);
}