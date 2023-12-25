export function getTheBestSong(tracksList) {
  let theBestSong = null;
  const bestSong = tracksList.songs.find((song) => song.theBestSong === true);
  if (bestSong) {
    theBestSong = {
      cover: bestSong.cover,
      musician: bestSong.musician,
      songName: bestSong.songName,
    };
  } else {
    theBestSong = {
      cover: tracksList.songs[0].cover,
      musician: tracksList.songs[0].musician,
      songName: tracksList.songs[0].songName,
    };
  }

  return theBestSong;
}
