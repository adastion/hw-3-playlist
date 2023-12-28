import { getSortDirection, setSortSongs } from "../../../../data.js";

export function sortName() {
  const btnSort = document.getElementById("buttonSort");
  const iconArrow = btnSort.querySelector("svg");
  iconArrow.classList.add(getSortDirection().selector);

  
  btnSort.addEventListener("click", () => {
    if (getSortDirection().direction === "ascending") {
      setSortSongs("descending");
    } else {
      setSortSongs("ascending");
    }
  });
}
