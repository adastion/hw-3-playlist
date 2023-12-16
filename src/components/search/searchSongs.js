import { getSearchTerm, setSearchTerm } from "../../data.js";

export function searchFilter() {
  const searchField = document.getElementById("searchTrack");
  searchField.value = getSearchTerm();

  searchField.addEventListener("input", () => {
    setSearchTerm(searchField.value);
  });

  requestAnimationFrame(() => {
    searchField.focus();
  });
}
