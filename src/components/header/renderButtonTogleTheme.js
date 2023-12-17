import { getPathStatic } from "../../data.js";
import { iconElement } from "./../iconElement.js";

export function renderButtonTogleTheme(parentItem) {
  let currentTheme = localStorage.getItem("currentTheme");

  if (!currentTheme) {
    localStorage.setItem("currentTheme", "dark");
  }

  const buttonToggleTheme = document.createElement("button");
  buttonToggleTheme.classList.add("btn", "btn--toggle-theme");

  const iconTheme = iconElement("src/assets/images/sprite-icon.svg#icon-moon");

  const currentPath = document.querySelector(".logo");

  const kitColors = document.querySelector("body");

  if (currentTheme === "dark") {
    kitColors.setAttribute("data-theme", currentTheme);
    currentPath.src = getPathStatic().pathLogo.forDark;
  }

  if (localStorage.getItem("currentTheme") === "light") {
    kitColors.setAttribute("data-theme", localStorage.getItem("currentTheme"));
    currentPath.src = getPathStatic().pathLogo.forLight;
    buttonToggleTheme.classList.add("light-theme");
  }

  buttonToggleTheme.addEventListener("click", () => {
    if (localStorage.getItem("currentTheme") === "dark") {
      localStorage.setItem("currentTheme", "light");
      kitColors.setAttribute("data-theme", "light");
      buttonToggleTheme.classList.add("light-theme");
      currentPath.src = getPathStatic().pathLogo.forLight;
    } else if (localStorage.getItem("currentTheme") === "light") {
      localStorage.setItem("currentTheme", "dark");
      kitColors.setAttribute("data-theme", "dark");
      buttonToggleTheme.classList.remove("light-theme");
      currentPath.src = getPathStatic().pathLogo.forDark;
    }
  });

  buttonToggleTheme.append(iconTheme);
  parentItem.append(buttonToggleTheme);
}
