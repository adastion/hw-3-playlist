export function Logo(path) {
  const logo = document.createElement("a");
  logo.href = "#";

  const imageLogo = document.createElement("img");
  imageLogo.classList.add("logo");
  imageLogo.src = path.pathLogo.forDark;

  logo.append(imageLogo);
  return logo;
}
