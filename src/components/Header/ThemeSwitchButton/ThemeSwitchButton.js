import { AccentButton } from "../../AccentButton/AccentButton.js";
import { iconElement } from "./../../iconElement.js";
import { renderTheme } from "./utils/renderTheme.js";
import { switchingTheme } from "./utils/switchingTheme.js";

const icon = iconElement("src/assets/images/sprite-icon.svg#icon-moon");
const colorsKit = document.querySelector("body");
const switchButton = AccentButton();
switchButton.classList.add("btn--toggle-theme");

export function ThemeSwitchButton(logoElement) {
  const imageLogo = logoElement.querySelector(".logo");

  let currentTheme = localStorage.getItem("currentTheme");

  if (!currentTheme) {
    currentTheme = "dark";
    localStorage.setItem("currentTheme", currentTheme);
  }

  renderTheme(currentTheme, colorsKit, switchButton);
  switchingTheme(renderTheme, currentTheme, colorsKit, switchButton, imageLogo);

  switchButton.append(icon);
  return switchButton;
}
