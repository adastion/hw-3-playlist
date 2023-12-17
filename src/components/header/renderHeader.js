import { getPathStatic } from "../../data.js";
import { renderButtonTogleTheme } from "./renderButtonTogleTheme.js";

export function renderHeader(parentItem) {
  const logoData = getPathStatic();

  const headerElement = document.createElement("header");
  headerElement.classList.add("header");

  const containerElement = document.createElement("div");
  containerElement.classList.add("container");

  const logoElement = document.createElement("a");
  logoElement.href = "/";
  const imageLogo = document.createElement("img");

  const kitColors = document.querySelector("body")

  if (kitColors.getAttribute("data-theme") === "dark") {
    imageLogo.src = logoData.pathLogo.forDark;
  } else {
    imageLogo.src = logoData.pathLogo.forLight;
  }

  logoElement.append(imageLogo);
  containerElement.append(logoElement);

  renderButtonTogleTheme(containerElement);

  headerElement.append(containerElement);
  parentItem.append(headerElement);
}
