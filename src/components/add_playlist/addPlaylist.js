import { rootElement } from "./../../index.js";

export function addPlaylist() {
  const addButton = document.querySelector(".content__add-btn");

  const modalElement = document.createElement("section");
  modalElement.style.background = "#d9d9d9";
  modalElement.textContent = "POP UP!!!";

  const formElement = document.createElement("form");
  const downloadButton = document.createElement("button");
  const buttonAddSong = document.createElement("button");
  const buttonCloseModal = document.createElement("button");

  buttonCloseModal.textContent = "Close modal";
  buttonCloseModal.style.position = "absolute";
  buttonCloseModal.style.top = "10px";
  buttonCloseModal.style.right = "10px";

  addButton.addEventListener("click", () => {
    modalElement.style.width = "200px";
    modalElement.style.height = "200px";
    modalElement.style.position = "absolute";
    modalElement.style.top = "50%";
    modalElement.style.left = "50%";
    modalElement.style.transform = "translate(-50%, -50%)";
    modalElement.style.display = "block";
  });

  buttonCloseModal.addEventListener("click", () => {
    modalElement.style.display = "none";
  });

  modalElement.append(buttonCloseModal);
  rootElement.append(modalElement);
  // return modalElement
}
