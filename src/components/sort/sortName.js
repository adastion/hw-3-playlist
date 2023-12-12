import { getSortDiraction, setSortSongs } from "../../data.js";

export function sortName() {
  const btnSort = document.getElementById("buttonSort");
  const b = document.querySelector(".content__add-btn");
  const iconArrow = btnSort.querySelector("svg");
  let clickCount = 0;
  let directionState = getSortDiraction();

  btnSort.addEventListener("click", () => {
    setSortSongs("ascending");
    // console.log(getSortDiraction());
  });

  b.addEventListener("click", () => {
    setSortSongs("decsnding");

    // console.log(getSortDiraction());
  });
}
