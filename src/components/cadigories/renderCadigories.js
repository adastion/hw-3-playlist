import { getPlaylistWithInfo } from "../../data.js";
import { renderTracks } from "./../playlist/tracks/renderTracks.js";

export function renderCategories(parentItem) {
  const categoriesElement = document.createElement("ul");
  categoriesElement.classList.add("categories");

  const playlistsWithInfo = getPlaylistWithInfo();

  playlistsWithInfo.forEach((tracksList) => {
    const categoryElement = document.createElement("li");
    categoryElement.classList.add("categories__block");

    const coverElement = document.createElement("div");
    coverElement.classList.add("categories__cover");

    let theBestSong;
    if (tracksList.songs.find((song) => song.theBestSong === true)) {
      theBestSong = {
        cover: tracksList.songs.find((song) => song.theBestSong === true).cover,
        musician: tracksList.songs.find((song) => song.theBestSong === true)
          .musician,
        songName: tracksList.songs.find((song) => song.theBestSong === true)
          .songName,
      };
    } else {
      null;
    }

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
    categoriesElement.appendChild(categoryElement);
    parentItem.appendChild(categoriesElement);

    renderTracks(categoryElement, tracksList.songs);
  });
}
