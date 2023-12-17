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
  imageLogo.classList.add("logo");
  imageLogo.src = logoData.pathLogo.forDark;

  logoElement.append(imageLogo);
  containerElement.append(logoElement);

  headerElement.append(containerElement);
  parentItem.append(headerElement);

  renderButtonTogleTheme(containerElement);
}
