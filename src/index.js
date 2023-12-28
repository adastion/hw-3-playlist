import { addPlaylist } from "./components/add_playlist/addPlaylist.js";
import { Header } from "./components/Header/Header.js";
import { playOnlyOne } from "./components/playOnlyOne.js";
import { renderPlaylist } from "./components/playlist/playlist_wrapper/renderPlaylist.js";
import { renderContentPanel } from "./components/renderContentPanel.js";
import { subscribe } from "./data.js";

subscribe(renderApp);

export function renderApp() {
  const rootElement = document.getElementById("root");
  rootElement.classList.add("wrapper");
  rootElement.innerHTML = "";

  const header = Header(rootElement);
  const panel = renderContentPanel(rootElement);
  const playlists = renderPlaylist(rootElement);
  const musicList = addPlaylist(rootElement);
  playOnlyOne();

  return rootElement;
}

renderApp();
