import { renderCategories } from "../cadigories/renderCadigories.js";
import { iconElement } from "../iconElement.js";

export function renderPanelButtons(parentItem) {
  const buttonsElement = document.createElement("div");
  buttonsElement.classList.add("panel__buttons");

  const buttonListElement = document.createElement("button");
  buttonListElement.classList.add("btn", "btn--view-module");
  buttonListElement.id = "btnList"

  const iconListElement = iconElement(
    "src/assets/images/sprite-icon.svg#icon-list"
  );

  const buttonGridElement = document.createElement("button");
  buttonGridElement.classList.add("btn", "btn--view-module", "active");
  buttonGridElement.id = "btnGrid"

  const iconGridElement = iconElement(
    "src/assets/images/sprite-icon.svg#icon-grid"
  );

  buttonListElement.addEventListener("click", () => {
    if (!buttonListElement.classList.contains("active")) {
      buttonListElement.classList.add("active");
      buttonGridElement.classList.remove("active");
    }
  });

  buttonGridElement.addEventListener("click", () => {
    if (!buttonGridElement.classList.contains("active")) {
      buttonGridElement.classList.add("active");
      buttonListElement.classList.remove("active");
      renderCategories();
    }
  });

  buttonListElement.appendChild(iconListElement);
  buttonGridElement.appendChild(iconGridElement);
  buttonsElement.appendChild(buttonListElement);
  buttonsElement.appendChild(buttonGridElement);
  parentItem.appendChild(buttonsElement);
}
