import { iconElement } from "../../iconElement.js";

export function Search() {
  const formSearchElement = document.createElement("label");
  formSearchElement.classList.add("form__search");
  formSearchElement.setAttribute("for", "searchTrack");

  const iconSearchElement = iconElement(
    "src/assets/images/sprite-icon.svg#icon-search"
  );

  const searchField = document.createElement("input");
  searchField.classList.add("form__input");
  searchField.type = "search";
  searchField.id = "searchTrack";
  searchField.placeholder = "input search";

  formSearchElement.append(searchField);
  formSearchElement.append(iconSearchElement);

  return formSearchElement;
}
