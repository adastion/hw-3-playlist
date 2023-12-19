import { renderCategories } from "../../categories/renderCategories.js";

export function renderInGrid(parentItem) {
  const btnList = document.getElementById("btnList");
  const btnGrid = document.getElementById("btnGrid");

  btnGrid.addEventListener("click", () => {
    parentItem.innerHTML = "";
    btnGrid.classList.add("active");
    btnList.classList.remove("active");

    localStorage.setItem("stateList", "grid");
    renderCategories(parentItem);
  });
}
