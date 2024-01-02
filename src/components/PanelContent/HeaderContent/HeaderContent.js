export function HeaderContent() {
  const headerElement = document.createElement("section");
  headerElement.classList.add("content__header");

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "my palylists";

  headerElement.append(title);
  return headerElement;
}
