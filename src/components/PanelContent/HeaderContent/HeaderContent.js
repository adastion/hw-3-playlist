import { AccentButton } from "./../../AccentButton/AccentButton.js";

export function HeaderContent() {
  const headerElement = document.createElement("section");
  headerElement.classList.add("content__header");

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "my palylists";

  const addButton = AccentButton();
  addButton.classList.add("content__add-btn");
  addButton.textContent = "add palylist";

  headerElement.append(title);
  headerElement.append(addButton);
  return headerElement;
}
