import { updateDuration } from "./updateDuration.js";

export function getFullDuration() {
  const totalDuration = 0;
  const allTracks = document.querySelectorAll("audio");

  allTracks.forEach((audioTrack) => {
    audioTrack.addEventListener("loadedmetadata", () => {
      totalDuration += audio.duration;
      
    });
  });
  
  return updateDuration(totalDuration);
}
