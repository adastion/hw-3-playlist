// import { setTracks } from "../../../data.js";
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

  btnList.addEventListener("click", () => {
    container.innerHTML = ""
    btnList.classList.add("active");
    btnGrid.classList.remove("active");
    renderTracks(container);
  });

  btnGrid.addEventListener("click", () => {
    container.innerHTML = ""
    btnGrid.classList.add("active");
    btnList.classList.remove("active");
    renderCategories(container);
  });


  btnList.classList.contains("active") ? renderTracks(container) : null

  console.log(btnList);

  // stateGrid.addEventListener("click", () => {
  //   container.innerHTML = null;
  //   setTracks(renderCategories(container));
  // });

  // if (stateList.classList.contains("active")) {
  //   container.innerHTML = "";

  //   setTracks(renderTracks(container);)
  // } else if (stateGrid.classList.contains("active")) {
  //   container.innerHTML = "";
  //   renderCategories(container);
  //   setTracks()
  // }

  // const observer = new MutationObserver(function (mutationsList) {
  //   for (let mutation of mutationsList) {
  //     if (mutation.target === stateList || mutation.target === stateGrid) {
  //       if (stateList.classList.contains("active")) {
  //         renderTracks(container);
  //       } else {
  //         renderCategories(container);
  //       }
  //     }
  //   }
  // });

  // observer.observe(stateList, {attributes: true})
  // observer.observe(stateGrid, {attributes: true})

  // console.log(stateGrid);

  parentItem.appendChild(playlistWrapperElement);
}
