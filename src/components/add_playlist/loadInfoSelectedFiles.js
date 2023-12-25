import { setInfoFilesToPreview } from "./setInfoFilesToPreview.js";
const listSongs = [];

export function loadInfoSelectedFiles(parentItem, field) {
  listSongs.length = 0;
  const previewList = parentItem;

  field.addEventListener("change", (event) => {
    const filesList = event.target.files;

    for (let i = 0; i < filesList.length; i++) {
      const file = filesList[i];
      const fileURL = URL.createObjectURL(file);
      const infoSong = {
        url: fileURL,
        name: file.name,
      };

      setInfoFilesToPreview(parentItem, file.name, file.size);
      listSongs.push(infoSong);
    }
  });

  return previewList;
}

export function returnInfoSongs() {
  return listSongs;
}
