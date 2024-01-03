import { Header } from "./components/Header/Header.js";
import { PanelContent } from "./components/PanelContent/PanelContent.js";
import { subscribe } from "./data.js";
import { PlaylistsWrapper } from "./components/Playlists/PlaylistsWrapper.js";

const header = Header();
const panel = PanelContent();
const content = PlaylistsWrapper();

export function renderApp() {
  const rootElement = document.getElementById("root");
  rootElement.classList.add("wrapper");
  rootElement.innerHTML = "";

  rootElement.append(header);
  rootElement.append(panel);
  rootElement.append(content);

  return rootElement;
}

renderApp();

subscribe(renderApp);
