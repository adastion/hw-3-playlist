import { renderPlaylist } from "../playlist/playlist_wrapper/renderPlaylist.js";

export function renderCategories(parentItem) {
  const categoriesElement = document.createElement("ul");
  categoriesElement.classList.add("categories");

  const categoryElemnt = document.createElement("li");
  categoryElemnt.classList.add("categories__block");

  renderPlaylist(categoriesElement);

  parentItem.appendChild(categoriesElement);
}
