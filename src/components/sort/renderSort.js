import { iconElement } from "../iconElement.js";

export function renderSort(parentItem) {
  const sortElement = document.createElement("div");
  sortElement.classList.add("sort");

  const titleElement = document.createElement("span");
  titleElement.classList.add("sort__title");
  titleElement.textContent = "sort by:";

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("sort__btn");
  buttonElement.type = "button";
  buttonElement.id = "buttonSort";

  const textElement = document.createElement("span");
  textElement.textContent = "name";

  const icon = iconElement("src/assets/images/sprite-icon.svg#arrow-up");

  buttonElement.appendChild(textElement);
  buttonElement.appendChild(icon);
  sortElement.appendChild(titleElement);
  sortElement.appendChild(buttonElement);

  parentItem.appendChild(sortElement);
}
