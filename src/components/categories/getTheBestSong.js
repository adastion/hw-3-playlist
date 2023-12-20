export function getTheBestSong(tracksList) {
  let theBestSong = null;
  if (tracksList.songs.find((song) => song.theBestSong)) {
    theBestSong = {
      cover: tracksList.songs.find((song) => song.theBestSong).cover,
      musician: tracksList.songs.find((song) => song.theBestSong).musician,
      songName: tracksList.songs.find((song) => song.theBestSong).songName,
    };
  }

  return theBestSong;
}
