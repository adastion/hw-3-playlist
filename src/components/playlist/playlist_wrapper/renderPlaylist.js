import { containerElement } from "../../containerElement.js";
import { searchFilter } from "../../search/searchSongs.js";
import { sortName } from "../../sort/sortName.js";
import { eventClicks } from "./eventClicks.js";

export function renderPlaylist(parentItem) {
  const playlistWrapperElement = document.createElement("section");
  playlistWrapperElement.classList.add("playlist");

  const container = containerElement();
  playlistWrapperElement.append(container);

  eventClicks(container);
  searchFilter();
  sortName();

  parentItem.append(playlistWrapperElement);
}
