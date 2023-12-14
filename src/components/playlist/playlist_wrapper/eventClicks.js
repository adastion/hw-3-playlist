import { getPlaylistWithInfo } from "../../../data.js";
import { renderTracks } from "../tracks/renderTracks.js";
import { renderCategories } from "./../../cadigories/renderCadigories.js";

export function eventClicks(parentItem) {
  const btnList = document.getElementById("btnList");
  const btnGrid = document.getElementById("btnGrid");

  if (!localStorage.getItem("stateList")) {
    localStorage.setItem("stateList", "list");
  }

  btnList.addEventListener("click", () => {
    parentItem.innerHTML = "";
    btnList.classList.add("active");
    btnGrid.classList.remove("active");

    localStorage.setItem("stateList", "list");
    getPlaylistWithInfo().forEach((tracksList) => {
      renderTracks(parentItem, tracksList.songs);
    });
  });

  btnGrid.addEventListener("click", () => {
    parentItem.innerHTML = "";
    btnGrid.classList.add("active");
    btnList.classList.remove("active");

    localStorage.setItem("stateList", "grid");
    renderCategories(parentItem);
  });

  if (localStorage.getItem("stateList") === "list") {
    btnList.classList.add("active");
    btnGrid.classList.remove("active");

    getPlaylistWithInfo().filter((tracksList) => {
      renderTracks(parentItem, tracksList.songs);
    });
  }

  if (localStorage.getItem("stateList") === "grid") {
    btnGrid.classList.add("active");
    btnList.classList.remove("active");

    renderCategories(parentItem);
  }
}
