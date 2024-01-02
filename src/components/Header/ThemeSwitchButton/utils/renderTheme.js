export function renderTheme(theme, colorsKit, switchButton) {
  if (theme === "dark") {
    colorsKit.setAttribute("data-theme", theme);
    switchButton.classList.remove("light-theme");
  } else if (theme === "light") {
    colorsKit.setAttribute("data-theme", theme);
    switchButton.classList.add("light-theme");
  }
}
