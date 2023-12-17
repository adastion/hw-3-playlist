export function renderTracks(parentItem, tracksList) {
  const playlistWrapperElement = document.createElement("section");
  playlistWrapperElement.classList.add("panel");
  const listTracksElement = document.createElement("ul");
  listTracksElement.classList.add("playlist__list");

  tracksList.map((song) => {
    const fileUrls = song.fileUrl;
    const cover = song.cover;
    const musicianName = song.musician;
    const nameTrack = song.songName;
    const isHotSong = song.isHotSong;

    const treckElement = document.createElement("li");
    treckElement.classList.add("palylist__item");

    const coverElement = document.createElement("div");
    coverElement.classList.add("playlist__cover");

    const imageCoverElement = document.createElement("img");
    imageCoverElement.src = cover;
    coverElement.append(imageCoverElement);
    treckElement.append(coverElement);

    const audioWrapper = document.createElement("section");
    audioWrapper.classList.add("playlist__track");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("palaylist__track-title");

    const musician = document.createElement("span");
    musician.classList.add("playlist__actor");
    musician.textContent = musicianName + " - ";
    titleElement.append(musician);

    const songName = document.createElement("span");
    songName.classList.add("playlist__track-name");
    songName.textContent = nameTrack;
    titleElement.append(songName);
    audioWrapper.append(titleElement);
    
    const songElement = document.createElement("audio");
    songElement.controls = true;
    songElement.src = fileUrls;

    audioWrapper.append(songElement);
    treckElement.append(audioWrapper);
    listTracksElement.append(treckElement);
    parentItem.append(listTracksElement);
  });
}
