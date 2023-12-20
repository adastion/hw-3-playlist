import { getTheBestSong } from "../../categories/getTheBestSong.js";
import { renderTracks } from "./renderTracks.js";

export function createPlaylist(parentItem, tracksList) {
  const categoryElement = document.createElement("li");
  categoryElement.classList.add("categories__block");

  const coverElement = document.createElement("div");
  coverElement.classList.add("categories__cover");

  const theBestSong = getTheBestSong(tracksList);

  const imageElement = document.createElement("img");

  imageElement.src = theBestSong.cover;
  imageElement.alt = "cover-category";

  const infoElement = document.createElement("section");
  infoElement.classList.add("categories__info");

  const titleElement = document.createElement("h4");
  titleElement.classList.add("categories__title");
  titleElement.textContent = "Playlist";

  const trackName = document.createElement("h2");
  trackName.classList.add("categories__name");
  trackName.textContent = tracksList.title;

  const numberOfSong = document.createElement("div");
  numberOfSong.classList.add("categories__number-of-songs");

  const numberTracks = document.createElement("span");
  numberTracks.textContent = `${tracksList.songs.length}  tracks, `;

  const totalTime = document.createElement("span");
  totalTime.textContent = "12m 13s";

  const topSongs = document.createElement("div");
  topSongs.classList.add("categories__top-songs");

  const nameTopTrack = document.createElement("p");
  nameTopTrack.textContent = `${theBestSong.musician} - ${theBestSong.songName} `;

  const staticTextElement = document.createElement("span");
  staticTextElement.textContent = "and others";

  const traksWrapperElement = document.createElement("div");
  traksWrapperElement.classList.add("categories__tracks-wrapper");

  coverElement.appendChild(imageElement);
  categoryElement.appendChild(coverElement);
  infoElement.appendChild(titleElement);
  infoElement.appendChild(trackName);
  numberOfSong.appendChild(numberTracks);
  numberOfSong.appendChild(totalTime);
  infoElement.appendChild(numberOfSong);
  nameTopTrack.appendChild(staticTextElement);
  topSongs.appendChild(nameTopTrack);
  infoElement.appendChild(topSongs);
  categoryElement.appendChild(infoElement);
  categoryElement.appendChild(traksWrapperElement);
  parentItem.appendChild(categoryElement);

  renderTracks(traksWrapperElement, tracksList.songs);
}
