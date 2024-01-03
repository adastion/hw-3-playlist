import { containerElement } from "../containerElement.js";

const container = containerElement();

export function PlaylistsWrapper() {
  const playlistWrapperElement = document.createElement("section");
  playlistWrapperElement.classList.add("playlist");
  playlistWrapperElement.textContent = "Test";

  playlistWrapperElement.append(container);
  return playlistWrapperElement;
}
