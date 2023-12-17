import { formatDuration } from "./formatDuration.js";

export function updateDuration(totalDuration) {
  const formatedDuration = formatDuration(totalDuration);
  
  return formatedDuration;
}
