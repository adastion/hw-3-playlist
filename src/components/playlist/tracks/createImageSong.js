import { getPathStatic } from "../../../data.js";

export function createImageHotSong(parentItem, isHotSong) {
  const imageHotSong = document.createElement("img");
  imageHotSong.classList.add("playlist__isHot");
  imageHotSong.src = getPathStatic().pathIsHot;

  if (isHotSong) {
    parentItem.append(imageHotSong);
  }

  return imageHotSong;
}
