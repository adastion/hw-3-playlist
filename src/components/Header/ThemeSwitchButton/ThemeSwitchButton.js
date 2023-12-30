import { iconElement } from "./../../iconElement.js";

const icon = iconElement("src/assets/images/sprite-icon.svg#icon-moon");

export function ThemeSwitchButton() {
  const switchButton = document.createElement("button");
  switchButton.classList.add("btn", "btn-toggle-theme");

  switchButton.append(icon);
  return switchButton;
}
