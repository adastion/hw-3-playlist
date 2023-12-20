import { createImageHotSong } from "./createImageSong.js";

export function renderTracks(parentItem, tracksList) {
  const playlistWrapperElement = document.createElement("section");
  playlistWrapperElement.classList.add("panel");
  const listTracksElement = document.createElement("ul");
  listTracksElement.classList.add("playlist__list");

  tracksList.forEach((song) => {
    const fileUrl = song.fileUrl;
    const cover = song.cover;
    const musicianName = song.musician;
    const nameTrack = song.songName;
    const isHotSong = song.isHot;

    const trackElement = document.createElement("li");
    trackElement.classList.add("palylist__item");

    const coverElement = document.createElement("div");
    coverElement.classList.add("playlist__cover");

    const imageCoverElement = document.createElement("img");
    imageCoverElement.src = cover;
    coverElement.append(imageCoverElement);
    trackElement.append(coverElement);

    const audioWrapper = document.createElement("section");
    audioWrapper.classList.add("playlist__track");

    const rowWrapper = document.createElement("div");
    rowWrapper.classList.add("playlist__row-wrapper");

    createImageHotSong(rowWrapper, isHotSong);

    const titleElement = document.createElement("h2");
    titleElement.classList.add("playlist__track-title");

    const musician = document.createElement("span");
    musician.classList.add("playlist__actor");
    musician.textContent = musicianName + " - ";
    titleElement.append(musician);

    const songName = document.createElement("span");
    songName.classList.add("playlist__track-name");
    songName.textContent = nameTrack;

    const songElement = new Audio();
    songElement.controls = true;
    songElement.src = fileUrl;

    titleElement.append(songName);
    rowWrapper.append(titleElement);
    audioWrapper.append(rowWrapper);
    audioWrapper.append(songElement);
    trackElement.append(audioWrapper);
    listTracksElement.append(trackElement);
    parentItem.append(listTracksElement);
  });
}
