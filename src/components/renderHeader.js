import { getPathStatic } from "../data.js";

export function renderHeader(parentItem) {
  const logoData = getPathStatic();

  const headerElement = document.createElement("header");
  headerElement.classList.add("header");
  const containerElement = document.createElement("div");
  containerElement.classList.add("container");
  headerElement.appendChild(containerElement);

  const logoElement = document.createElement("a");
  logoElement.href = "/";
  const imageLogo = document.createElement("img");
  imageLogo.src = logoData.pathLogo;
  logoElement.appendChild(imageLogo);
  containerElement.appendChild(logoElement);

  parentItem.appendChild(headerElement);
}
