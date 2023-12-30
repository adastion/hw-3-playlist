const currentTheme = localStorage.getItem("currentTheme");

export function Logo(path) {
  const logoElement = document.createElement("a");
  logoElement.href = "#";

  const image = document.createElement("img");
  image.classList.add("logo");
  image.alt = "logotype";

  if (currentTheme === "dark") {
    image.src = path.forDark;
  } else if (currentTheme === "light") {
    image.src = path.forLight;
  } else {
    image.src = path.forDark;
  }

  logoElement.append(image);
  return logoElement;
}
