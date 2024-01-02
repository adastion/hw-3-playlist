import { getStaticPaths } from "../../../../data.js";
const logoPath = getStaticPaths().pathLogo;

export function switchingTheme(
  renderTheme,
  currentTheme,
  colorsKit,
  switchButton,
  imageLogo
) {
  switchButton.addEventListener("click", () => {
    if (currentTheme === "dark") {
      currentTheme = "light";
      imageLogo.src = logoPath.forLight;
    } else if (currentTheme === "light") {
      currentTheme = "dark";
      imageLogo.src = logoPath.forDark;
    }

    localStorage.setItem("currentTheme", currentTheme);
    renderTheme(currentTheme, colorsKit, switchButton);
  });
}
