import { iconElement } from "../../iconElement.js";

export function PanelButtons() {
  const buttonsElement = document.createElement("div");
  buttonsElement.classList.add("panel__buttons");

  const buttonListElement = document.createElement("button");
  buttonListElement.classList.add("btn", "btn--view-module", "active");
  buttonListElement.id = "btnList";

  const iconListElement = iconElement(
    "src/assets/images/sprite-icon.svg#icon-list"
  );

  const buttonGridElement = document.createElement("button");
  buttonGridElement.classList.add("btn", "btn--view-module");
  buttonGridElement.id = "btnGrid";

  const iconGridElement = iconElement(
    "src/assets/images/sprite-icon.svg#icon-grid"
  );

  buttonListElement.append(iconListElement);
  buttonGridElement.append(iconGridElement);
  buttonsElement.append(buttonListElement);
  buttonsElement.append(buttonGridElement);

  return buttonsElement;
}
