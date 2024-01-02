import { FormSearch } from "./FormSearch/FormSearch.js";
import { SwitchingButtons } from "./SwitchingButtons/SwitchingButtons.js";
import { Sort } from "./Sort/Sort.js";

const formSearch = FormSearch();
const sortSongs = Sort();
const buttonsForDisplayOptions = SwitchingButtons();

export function NavigationContent() {
  const navigationElement = document.createElement("div");
  navigationElement.classList.add("panel");

  navigationElement.append(formSearch);
  navigationElement.append(sortSongs);
  navigationElement.append(buttonsForDisplayOptions);
  return navigationElement;
}
