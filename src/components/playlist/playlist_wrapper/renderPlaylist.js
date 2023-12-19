import { containerElement } from "../../containerElement.js";
import { searchFilter } from "../../search/searchSongs.js";
import { sortName } from "../../sort/sortName.js";
import { renderListSongs } from "./renderListSongs.js";

export function renderPlaylist(parentItem) {
  const playlistWrapperElement = document.createElement("section");
  playlistWrapperElement.classList.add("playlist");

  const container = containerElement();
  playlistWrapperElement.append(container);

  renderListSongs(container);
  searchFilter();
  sortName();

  parentItem.append(playlistWrapperElement);
}
