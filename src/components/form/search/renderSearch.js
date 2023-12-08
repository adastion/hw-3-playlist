export function renderSearch(parentItem) {
  const formSearchElement = document.createElement("label");
  formSearchElement.classList.add("form__search");
  formSearchElement.setAttribute("for", "searchTrack");

  const iconSearchElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  const iconElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "use"
  );
  iconElement.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "href",
    "src/assets/images/sprite-icon.svg#icon-search"
  );
  iconSearchElement.appendChild(iconElement);

  const searchField = document.createElement("input");
  searchField.classList.add("form__input");
  searchField.type = "search";
  searchField.id = "searchTrack";
  searchField.placeholder = "input search";

  formSearchElement.appendChild(searchField);
  formSearchElement.appendChild(iconSearchElement);

  parentItem.appendChild(formSearchElement);
}
