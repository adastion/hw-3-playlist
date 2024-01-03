import { containerElement } from "../containerElement.js";
import { Tracks } from "./Playlist/Tracks/Tracks.js";

const container = containerElement();
const trackList = Tracks();

export function PlaylistsWrapper() {
  const playlistWrapperElement = document.createElement("section");
  playlistWrapperElement.classList.add("playlist");

  container.append(trackList);
  playlistWrapperElement.append(container);
  return playlistWrapperElement;
}
