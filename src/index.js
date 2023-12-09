import { renderPlaylist } from "./components/playlist/playlist_wrapper/renderPlaylist.js";
import { renderContentPanel } from "./components/renderContentPanel.js";
import { renderHeader } from "./components/renderHeader.js";

export const rootElement = document.getElementById("root");
rootElement.classList.add("wrapper");

// addEventListener(renderApp)

export function renderApp() {
  renderHeader(rootElement);
  renderContentPanel(rootElement);
  renderPlaylist(rootElement);
}

renderApp();
