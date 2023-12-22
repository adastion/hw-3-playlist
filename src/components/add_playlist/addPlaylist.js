import { loadInfoSelectedFiles } from "./loadInfoSelectedFiles.js";

export function addPlaylist(parentItem) {
  const addButton = document.querySelector(".content__add-btn");

  const modalElement = document.createElement("section");
  modalElement.classList.add("modal");

  const contentElement = document.createElement("div");
  contentElement.classList.add("modal__content");

  const headerElement = document.createElement("div");
  headerElement.classList.add("modal__header");

  const buttonCloseElement = document.createElement("button");
  buttonCloseElement.classList.add("btn", "modal__btn-close");
  buttonCloseElement.textContent = "X";

  const titleElement = document.createElement("h2");
  titleElement.classList.add("modal__title");
  titleElement.textContent = "create your own playlist!";

  const previewFilesElement = document.createElement("ul");
  previewFilesElement.classList.add("modal__list-songs");

  const buttonLoad = document.createElement("label");
  buttonLoad.classList.add("btn", "modal__description");
  buttonLoad.textContent = "select files";
  buttonLoad.htmlFor = "addSong";

  const inputFileElement = document.createElement("input");
  inputFileElement.classList.add("modal__add-file");
  inputFileElement.id = "addSong";
  inputFileElement.type = "file";
  inputFileElement.accept = ".mp3";
  inputFileElement.multiple = true;

  const buttonDownload = document.createElement("button");
  buttonDownload.classList.add("btn");
  buttonDownload.textContent = "create";

  headerElement.append(titleElement);
  contentElement.append(buttonCloseElement);
  contentElement.append(headerElement);
  contentElement.append(buttonLoad);
  contentElement.append(inputFileElement);
  contentElement.append(loadInfoSelectedFiles(previewFilesElement, inputFileElement));
  contentElement.append(buttonDownload);
  modalElement.append(contentElement);
  parentItem.append(modalElement);

  modalElement.addEventListener("click", () => {
    modalElement.classList.remove("active");
    document.querySelector("body").classList.remove("hidden");
  });

  contentElement.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  addButton.addEventListener("click", () => {
    modalElement.classList.add("active");
    document.querySelector("body").classList.add("hidden");
  });

  buttonCloseElement.addEventListener("click", () => {
    modalElement.classList.remove("active");
    document.querySelector("body").classList.remove("hidden");
  });
}

//
// export function setupPlaylistModal(parentItem) {
//   const addButton = document.querySelector(".content__add-btn");

//   const modalElement = createModalElement();
//   parentItem.append(modalElement);

//   modalElement.addEventListener("click", closeModal);

//   addButton.addEventListener("click", openModal);
// }

// function createModalElement() {
//   const modalElement = document.createElement("section");
//   modalElement.classList.add("modal");

//   const contentElement = document.createElement("div");
//   contentElement.classList.add("modal__content");

//   const headerElement = document.createElement("div");
//   headerElement.classList.add("modal__header");

//   const buttonCloseElement = createCloseButtonElement();

//   const titleElement = document.createElement("h2");
//   titleElement.classList.add("modal__title");
//   titleElement.textContent = "Create your own playlist!";

//   const inputFileElement = createFileInputElement();

//   const buttonDownload = createDownloadButtonElement();

//   headerElement.append(titleElement);
//   contentElement.append(buttonCloseElement);
//   contentElement.append(headerElement);
//   contentElement.append(inputFileElement);
//   contentElement.append(buttonDownload);
//   modalElement.append(contentElement);

//   return modalElement;
// }

// function createCloseButtonElement() {
//   const buttonCloseElement = document.createElement("button");
//   buttonCloseElement.classList.add("btn", "modal__btn-close");
//   buttonCloseElement.textContent = "X";
//   buttonCloseElement.addEventListener("click", closeModal);
//   return buttonCloseElement;
// }

// function createFileInputElement() {
//   const inputFileElement = document.createElement("input");
//   inputFileElement.classList.add("btn", "modal__add-file");
//   inputFileElement.type = "file";
//   return inputFileElement;
// }

// function createDownloadButtonElement() {
//   const buttonDownload = document.createElement("button");
//   buttonDownload.classList.add("btn");
//   buttonDownload.textContent = "Download";
//   return buttonDownload;
// }

// function closeModal() {
//   const modalElement = document.querySelector(".modal");
//   modalElement.classList.remove("active");
//   document.querySelector("body").classList.remove("hidden");
// }

// function openModal() {
//   const modalElement = document.querySelector(".modal");
//   modalElement.classList.add("active");
//   document.querySelector("body").classList.add("hidden");
// }
