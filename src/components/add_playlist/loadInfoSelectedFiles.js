import { setInfoFilesToPreview } from "./setInfoFilesToPreview.js";

export function loadInfoSelectedFiles(parentItem, field) {
  const previewList = parentItem;

  field.addEventListener("change", () => {
    const filesList = field.files;

    for (let i = 0; i < filesList.length; i++) {
      let file = filesList[i];

      setInfoFilesToPreview(parentItem, file.name, file.size);
    }
  });

  return previewList;
}
