import { getPlaylistWithInfo } from "../../data.js";
import { createPlaylist } from "../playlist/tracks/createPlaylist.js";

export function renderCategories(parentItem) {
  const categoriesElement = document.createElement("ul");
  categoriesElement.classList.add("categories");

  const playlistsWithInfo = getPlaylistWithInfo();

  playlistsWithInfo.forEach((tracksList) => {
    createPlaylist(categoriesElement, tracksList);

    parentItem.appendChild(categoriesElement);
  });
}
