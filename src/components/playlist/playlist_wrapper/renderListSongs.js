import { renderInGrid } from "./renderInGrid.js";
import { renderInList } from "./renderInList.js";
import { renderSongsDefault } from "./renderSongsDefault.js";

export function renderListSongs(parentItem) {
  if (!localStorage.getItem("stateList")) {
    localStorage.setItem("stateList", "list");
  }

  renderSongsDefault(parentItem);
  renderInList(parentItem);
  renderInGrid(parentItem);
}
