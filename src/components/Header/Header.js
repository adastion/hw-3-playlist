import { getstaticPaths } from "../../data.js";
import { containerElement } from "./../containerElement.js";
import { Logo } from "./Logo/Logo.js";
import { ThemeSwitchButton } from "./ThemeSwitchButton/ThemeSwitchButton.js";

const imagePath = getstaticPaths();

export function Header() {
  const headerElement = document.createElement("section");
  headerElement.classList.add("header");

  const container = containerElement();
  const logo = Logo(imagePath.pathLogo);
  const switchButton = ThemeSwitchButton();

  container.append(logo);
  container.append(switchButton);
  headerElement.append(container);

  return headerElement;
}
