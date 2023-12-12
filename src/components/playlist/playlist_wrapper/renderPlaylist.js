import { containerElement } from "../../containerElement.js";
import { sortName } from "../../sort/sortName.js";
import { eventClicks } from "./eventClicks.js";

export function renderPlaylist(parentItem) {
  const playlistWrapperElement = document.createElement("section");
  playlistWrapperElement.classList.add("playlist");

  const container = containerElement();
  playlistWrapperElement.appendChild(container);

  eventClicks(container);
  sortName();

  parentItem.appendChild(playlistWrapperElement);
}
