import { getPathStatic } from "../../data.js";
import { iconElement } from "./../iconElement.js";

export function renderButtonTogleTheme(parentItem) {
  if (!localStorage.getItem("currentTheme")) {
    localStorage.setItem("currentTheme", "dark");
  }

  const buttonToggleTheme = document.createElement("button");
  buttonToggleTheme.classList.add("btn", "btn--toggle-theme");

  const iconTheme = iconElement("src/assets/images/sprite-icon.svg#icon-moon");

  const currentPath = document.querySelector(".logo");

  const kitColors = document.querySelector("body");
  if (!kitColors.getAttribute("data-theme")) {
    kitColors.setAttribute("data-theme", localStorage.getItem("currentTheme"));
  }

  buttonToggleTheme.addEventListener("click", () => {
    if (kitColors.getAttribute("data-theme") === "dark") {
      localStorage.setItem("currentTheme", "light");
      kitColors.setAttribute("data-theme", "light");
      buttonToggleTheme.classList.add("light-theme");
      currentPath.src = getPathStatic().pathLogo.forLight;
    } else {
      localStorage.setItem("currentTheme", "dark");
      kitColors.setAttribute("data-theme", "dark");
      buttonToggleTheme.classList.remove("light-theme");
      currentPath.src = getPathStatic().pathLogo.forDark;
    }
  });

  buttonToggleTheme.append(iconTheme);
  parentItem.append(buttonToggleTheme);
}
