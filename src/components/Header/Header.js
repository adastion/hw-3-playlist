import { containerElement } from "./../containerElement.js";
import { createLogoElement } from "./Logo/createLogoElement.js";
import { ThemeSwitchButton } from "./ThemeSwitchButton/ThemeSwitchButton.js";

export function Header() {
  const headerElement = document.createElement("div");
  headerElement.classList.add("header");

  const container = containerElement();
  const logo = createLogoElement();
  const switchButton = ThemeSwitchButton(logo);

  container.append(logo);
  container.append(switchButton);
  headerElement.append(container);

  return headerElement;
}
