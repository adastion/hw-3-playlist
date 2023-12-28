import { getPathStatic } from "../../../data.js";
import { iconElement } from "../../iconElement.js";
import { renderTheme } from "./themeUtils/renderTheme.js";
import { toggleTheme } from "./themeUtils/toggleTheme.js";

export function ButtonToggleTheme() {
  const buttonToggleTheme = document.createElement("button");
  buttonToggleTheme.classList.add("btn", "btn--toggle-theme");

  const currentPath = document.querySelector(".logo");
  const kitColors = document.querySelector("body");
  const iconTheme = iconElement("src/assets/images/sprite-icon.svg#icon-moon");

  const iconPath = {
    dark: getPathStatic().pathLogo.forDark,
    light: getPathStatic().pathLogo.forLight,
  };

  let currentTheme = localStorage.getItem("currentTheme");

  if (!currentTheme) {
    currentTheme = "dark";
    localStorage.setItem("currentTheme", currentTheme);
  }

  renderTheme(
    currentTheme,
    iconPath,
    kitColors,
    currentPath,
    buttonToggleTheme
  );

  toggleTheme(
    renderTheme,
    buttonToggleTheme,
    currentTheme,
    iconPath,
    kitColors,
    currentPath
  );

  buttonToggleTheme.append(iconTheme);

  return buttonToggleTheme;
}
