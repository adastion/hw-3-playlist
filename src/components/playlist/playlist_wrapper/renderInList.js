import { getFullListTracks } from "../../../data.js";
import { renderTracks } from "../tracks/renderTracks.js";

export function renderInList(parentItem) {
  const btnList = document.getElementById("btnList");
  const btnGrid = document.getElementById("btnGrid");

  btnList.addEventListener("click", () => {
    parentItem.innerHTML = "";
    btnList.classList.add("active");
    btnGrid.classList.remove("active");

    localStorage.setItem("stateList", "list");

    renderTracks(parentItem, getFullListTracks());
  });
}
