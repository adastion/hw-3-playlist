import { renderSelectCategories } from './categories/renderSelectCategories.js';
import { renderSearch } from './search/renderSearch.js';

export function renderForm(parentItem) {
  const formElement = document.createElement("form");
  formElement.classList.add("form");

  
  renderSearch(formElement)
  renderSelectCategories(formElement)

  parentItem.appendChild(formElement)
}
