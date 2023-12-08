import { containerElement } from "../../containerElement.js";
import { renderTracks } from "./../../playlist/tracks/renderTracks.js";

export function renderPlaylist(parentItem) {
  const playlistWrapperElement = document.createElement("section");
  playlistWrapperElement.classList.add("playlist");

  const container = containerElement()
  playlistWrapperElement.appendChild(container)
  
  renderTracks(container);

  parentItem.appendChild(playlistWrapperElement);
}
