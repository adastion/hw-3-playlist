import { addPlaylist } from "./components/add_playlist/addPlaylist.js";
import { renderHeader } from "./components/header/renderHeader.js";
import { playOnlyOne } from "./components/playOnlyOne.js";
import { renderPlaylist } from "./components/playlist/playlist_wrapper/renderPlaylist.js";
import { renderContentPanel } from "./components/renderContentPanel.js";
import { subscribe } from "./data.js";

export const rootElement = document.getElementById("root");
rootElement.classList.add("wrapper");

export function renderApp() {
  rootElement.innerHTML = "";
  renderHeader(rootElement);
  renderContentPanel(rootElement);
  renderPlaylist(rootElement);
  playOnlyOne();
  addPlaylist(rootElement)
}

renderApp();

subscribe(renderApp);
