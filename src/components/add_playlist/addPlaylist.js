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

  const buttonLoadElement = document.createElement("input");
  buttonLoadElement.classList.add("btn", "modal__add-file");
  buttonLoadElement.type = "file";

  const buttonDownload = document.createElement("button");
  buttonDownload.classList.add("btn");
  buttonDownload.textContent = "download";

  headerElement.append(titleElement);
  contentElement.append(buttonCloseElement);
  contentElement.append(headerElement);
  contentElement.append(buttonLoadElement);
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
