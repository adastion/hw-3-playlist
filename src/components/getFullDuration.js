import { formatDuration } from "./playlist/tracks/formatDuration.js";

export function getFullDuration() {
  const allSongs = Array.from(document.querySelectorAll("audio"));
  let totalDuration = 0;

  

  return formatDuration(totalDuration);
}
