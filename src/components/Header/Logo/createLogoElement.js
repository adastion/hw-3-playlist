import { getStaticPaths } from "../../../data.js";

const logoPath = getStaticPaths().pathLogo;
const themeState = localStorage.getItem("currentTheme");

export function createLogoElement() {
  const logoElement = document.createElement("a");
  logoElement.href = "#";

  const image = document.createElement("img");
  image.classList.add("logo");
  image.id = "headerLogo";
  image.alt = "logotype";
  if (themeState === "dark") {
    image.src = logoPath.forDark;
  } else if (themeState === "light") {
    image.src = logoPath.forLight;
  }

  logoElement.append(image);
  return logoElement;
}
