import { getFullListTracks } from "../../../data.js";
import { renderCategories } from "../../categories/renderCategories.js";
import { renderTracks } from "../tracks/renderTracks.js";

export function renderSongsDefault(parentItem) {
  const btnList = document.getElementById("btnList");
  const btnGrid = document.getElementById("btnGrid");

  if (localStorage.getItem("stateList") === "list") {
    btnList.classList.add("active");
    btnGrid.classList.remove("active");

    renderTracks(parentItem, getFullListTracks());
  }

  if (localStorage.getItem("stateList") === "grid") {
    btnGrid.classList.add("active");
    btnList.classList.remove("active");

    renderCategories(parentItem);
  }
}
