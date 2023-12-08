export function renderSort(parentItem) {
  const sortElement = document.createElement("div");
  sortElement.classList.add("sort");

  const titleElement = document.createElement("span");
  titleElement.classList.add("sort__title");
  titleElement.textContent = "sort by:";

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("sort__btn");
  buttonElement.type = "button";

  const textElement = document.createElement("span");
  textElement.textContent = "name";

  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.classList.add("ascending");

  const iconArrow = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "use"
  );
  iconArrow.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "href",
    "src/assets/images/sprite-icon.svg#arrow-up"
  );

  icon.appendChild(iconArrow);
  buttonElement.appendChild(textElement);
  buttonElement.appendChild(icon);
  sortElement.appendChild(titleElement);
  sortElement.appendChild(buttonElement);

  parentItem.appendChild(sortElement);
}
