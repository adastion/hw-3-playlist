import { SelectCategories } from "./SelectCategories/SelectCategories.js";
import { Search } from "./Search/Search.js";

export function Form() {
  const formElement = document.createElement("form");
  formElement.classList.add("form");

  formElement.append(Search());
  formElement.append(SelectCategories());

  return formElement;
}
