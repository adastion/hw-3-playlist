import { getPlaylist } from "./../data.js";

export function renderTracks(parentItem) {
  const listTracksElement = document.createElement("ul");
  listTracksElement.classList.add("playlist__list");

  const trackList = getPlaylist();

  trackList.map((song) => {
    const fileUrls = song.fileUrl;
    const cover = song.cover;
    const musicianName = song.musician;
    const nameTrack = song.songName;

    const treckElement = document.createElement("li");
    treckElement.classList.add("palylist__item");

    const coverElement = document.createElement("div");
    coverElement.classList.add("playlist__cover");

    const imageCoverElement = document.createElement("img");
    imageCoverElement.src = cover;
    coverElement.appendChild(imageCoverElement);
    treckElement.appendChild(coverElement);

    const audioWrapper = document.createElement("section");
    audioWrapper.classList.add("playlist__track");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("palaylist__track-title");
    const musician = document.createElement("span");
    musician.classList.add("playlist__actor");
    musician.textContent = musicianName + " - ";
    titleElement.appendChild(musician);

    const songName = document.createElement("span");
    songName.classList.add("playlist__track-name");
    songName.textContent = nameTrack;
    titleElement.appendChild(songName);

    audioWrapper.appendChild(titleElement);

    const songElement = document.createElement("audio");
    songElement.controls = true;
    songElement.src = fileUrls;
    audioWrapper.appendChild(songElement);
    treckElement.appendChild(audioWrapper);
    listTracksElement.appendChild(treckElement);

    parentItem.appendChild(listTracksElement);
  });
}
