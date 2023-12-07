import { renderTracks } from "./components/renderTracks.js";
import { renderHeader } from './components/renderHeader.js';


export const rootElement = document.getElementById('root')
rootElement.classList.add("wrapper")

// addEventListener(renderApp)

export function renderApp() {
  renderHeader(rootElement);
  renderTracks(rootElement);
}

renderApp();
