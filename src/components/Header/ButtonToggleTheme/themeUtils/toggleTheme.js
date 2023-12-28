export function toggleTheme(
  renderTheme,
  buttonToggle,
  currentTheme,
  iconPath,
  kitColors,
  currentPath
) {
  buttonToggle.addEventListener("click", () => {
    if (currentTheme === "dark") {
      currentTheme = "light";
    } else if (currentTheme === "light") {
      currentTheme = "dark";
    }
    localStorage.setItem("currentTheme", currentTheme);
    renderTheme(
      currentTheme,
      iconPath,
      kitColors,
      currentPath,
      buttonToggle
    );
  });
}
