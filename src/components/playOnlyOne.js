export function playOnlyOne() {
  const audioElements = document.querySelectorAll("audio");

  audioElements.forEach((audio) => {
    audio.addEventListener("play", handlePlay);
  });

  function handlePlay(event) {
    const currentAudio = event.target;

    audioElements.forEach((song) => {
      if (song !== currentAudio) {
        song.pause();
      }
    });
  }
}
