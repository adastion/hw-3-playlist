import { renderTracks } from "./components/renderTracks.js";
import { renderHeader } from "./components/renderHeader.js";
import { renderContentPanel } from "./components/renderContentPanel.js";

export const rootElement = document.getElementById("root");
rootElement.classList.add("wrapper");

// addEventListener(renderApp)

export function renderApp() {
  renderHeader(rootElement);
  renderContentPanel(rootElement);
  renderTracks(rootElement);
}

renderApp();
