export function iconElement(iconPath) {
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  const iconImg = document.createElementNS("http://www.w3.org/2000/svg", "use");

  iconImg.setAttributeNS("http://www.w3.org/1999/xlink", "href", iconPath);

  icon.append(iconImg);
  return icon;
}
