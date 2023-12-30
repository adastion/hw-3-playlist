import { getPathStatic } from "../../data.js";
import { containerElement } from "../containerElement.js";
import { ButtonToggleTheme } from "./ButtonToggleTheme/ButtonToggleTheme.js";
import { Logo } from "./Logo/logo.js";

export function Header(parentItem) {
  const logoData = getPathStatic();
  const container = containerElement();
  const logotype = Logo(logoData);

  const headerElement = document.createElement("header");
  headerElement.classList.add("header");

  container.append(logotype);
  headerElement.append(container);

  parentItem.append(headerElement);
  const buttonToggle = ButtonToggleTheme();
  container.append(buttonToggle);
}
