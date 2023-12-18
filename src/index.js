import { renderHeader } from "./components/header/renderHeader.js";
import { renderPlaylist } from "./components/playlist/playlist_wrapper/renderPlaylist.js";
import { formatDuration } from "./components/playlist/tracks/formatDuration.js";
import { renderContentPanel } from "./components/renderContentPanel.js";
import { subscribe } from "./data.js";

export const rootElement = document.getElementById("root");
rootElement.classList.add("wrapper");

export function renderApp() {
  rootElement.innerHTML = "";
  renderHeader(rootElement);
  renderContentPanel(rootElement);
  renderPlaylist(rootElement);

  const allSongs = Array.from(document.querySelectorAll("audio"));
  let totalDuration = 0;

  const updateTotalDuration = () => {
    totalDuration = allSongs.reduce((accumulator, song) => {
      return accumulator + song.duration;
    }, 0);
    console.log("Total duration:", formatDuration(totalDuration));
  };

  const loadedMetadataPromises = allSongs.map((song) => {
    return new Promise((resolve) => {
      song.addEventListener("loadedmetadata", () => {
        resolve();
      });
    });
  });

  Promise.all(loadedMetadataPromises).then(() => {
    updateTotalDuration();
  });
}

renderApp();

subscribe(renderApp);
