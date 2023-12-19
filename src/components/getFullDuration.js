import { formatDuration } from "./playlist/tracks/formatDuration.js";

export function getFullDuration() {
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

  return formatDuration(totalDuration);
}
