import { getPlaylist, setSortSongs } from "../../../data.js";
import { renderCategories } from "../../cadigories/renderCadigories.js";
import { containerElement } from "../../containerElement.js";
import { renderTracks } from "./../../playlist/tracks/renderTracks.js";

export function renderPlaylist(parentItem) {
  const playlistWrapperElement = document.createElement("section");
  playlistWrapperElement.classList.add("playlist");

  const container = containerElement();
  playlistWrapperElement.appendChild(container);

  const btnList = document.getElementById("btnList");
  const btnGrid = document.getElementById("btnGrid");
  const btnSort = document.getElementById("buttonSort");

  btnList.addEventListener("click", () => {
    container.innerHTML = "";
    btnList.classList.add("active");
    btnGrid.classList.remove("active");
    renderTracks(container);
  });

  btnGrid.addEventListener("click", () => {
    container.innerHTML = "";
    btnGrid.classList.add("active");
    btnList.classList.remove("active");
    renderCategories(container);
  });

  if (btnList.classList.contains("active")) {
    renderTracks(container);
  } else {
    null;
  }

  btnSort.addEventListener("click", () => {
    setSortSongs(getPlaylist());
  });

  parentItem.appendChild(playlistWrapperElement);
}
