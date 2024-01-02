import { iconElement } from "../../../iconElement.js";

const iconListElement = iconElement(
  "src/assets/images/sprite-icon.svg#icon-list"
);

const iconGridElement = iconElement(
  "src/assets/images/sprite-icon.svg#icon-grid"
);

export function SwitchingButtons() {
  const buttonsElement = document.createElement("div");
  buttonsElement.classList.add("panel__buttons");

  const buttonListElement = document.createElement("button");
  buttonListElement.classList.add("btn", "btn--view-module", "active");
  buttonListElement.id = "btnList";

  const buttonGridElement = document.createElement("button");
  buttonGridElement.classList.add("btn", "btn--view-module");
  buttonGridElement.id = "btnGrid";

  buttonListElement.append(iconListElement);
  buttonGridElement.append(iconGridElement);
  buttonsElement.append(buttonListElement);
  buttonsElement.append(buttonGridElement);
  return buttonsElement;
}
