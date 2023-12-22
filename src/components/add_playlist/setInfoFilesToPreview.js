import { returnFileSize } from "./returnFileSize.js";

export function setInfoFilesToPreview(parentItem, nameFile, sizeFile) {
  const previewElement = document.createElement("li");
  previewElement.classList.add("modal__song");

  const info = document.createElement("p");
  info.textContent = `${nameFile} / ${returnFileSize(sizeFile)}`;

  previewElement.append(info);
  parentItem.append(previewElement);
}
