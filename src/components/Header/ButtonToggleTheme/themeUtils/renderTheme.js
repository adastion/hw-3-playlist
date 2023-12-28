export function renderTheme(
  theme,
  iconPath,
  kitColors,
  currentPath,
  buttonToggleTheme
) {
  if (theme === "dark") {
    kitColors.setAttribute("data-theme", theme);
    currentPath.src = iconPath.dark;
    buttonToggleTheme.classList.remove("light-theme");
  } else if (theme === "light") {
    kitColors.setAttribute("data-theme", theme);
    currentPath.src = iconPath.light;
    buttonToggleTheme.classList.add("light-theme");
  }
}
