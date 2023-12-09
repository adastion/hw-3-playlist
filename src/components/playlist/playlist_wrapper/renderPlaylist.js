import { renderCategories } from "../../cadigories/renderCadigories.js";
import { containerElement } from "../../containerElement.js";
import { renderTracks } from "./../../playlist/tracks/renderTracks.js";

export function renderPlaylist(parentItem) {
  const playlistWrapperElement = document.createElement("section");
  playlistWrapperElement.classList.add("playlist");

  const container = containerElement();
  playlistWrapperElement.appendChild(container);

  const stateList = document
    .getElementById("btnList")
    .classList.contains("active");
  const stateGrid = document
    .getElementById("btnGrid")
    .classList.contains("active");

  if (stateList) {
    renderTracks(container);
  } else {
    renderCategories(container);
  }

  console.log(stateList);
  console.log(stateGrid);

  parentItem.appendChild(playlistWrapperElement);
}
