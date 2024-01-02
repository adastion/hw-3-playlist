import { iconElement } from "../../../iconElement.js";

const icon = iconElement("./src/assets/images/sprite-icon.svg#icon-search");

export function FormSearch() {
  const form = document.createElement("form");
  form.classList.add("form");

  const fieldWrapper = document.createElement("label");
  fieldWrapper.classList.add("form__search");
  fieldWrapper.for = "searchTrack";

  const fieldSearch = document.createElement("input");
  fieldSearch.classList.add("form__input");
  fieldSearch.placeholder = "input search";
  fieldSearch.type = "search";
  fieldSearch.id = "searchTrack";

  fieldWrapper.append(icon);
  fieldWrapper.append(fieldSearch);
  form.append(fieldWrapper);
  return form;
}
