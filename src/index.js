import { renderPlaylist } from "./components/playlist/playlist_wrapper/renderPlaylist.js";
import { renderContentPanel } from "./components/renderContentPanel.js";
import { renderHeader } from "./components/header/renderHeader.js";
import { subscribe } from "./data.js";

export const rootElement = document.getElementById("root");
rootElement.classList.add("wrapper");

export function renderApp() {
  rootElement.innerHTML = "";
  renderHeader(rootElement);
  renderContentPanel(rootElement);
  renderPlaylist(rootElement);
}

renderApp();

subscribe(renderApp);
