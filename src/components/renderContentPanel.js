export function renderContentPanel(parentItem) {
  const contentPanelElement = document.createElement("section");
  contentPanelElement.classList.add("content");
  const containerElement = document.createElement("div");
  containerElement.classList.add("container");
  contentPanelElement.appendChild(containerElement);

  const contentHeaderElement = document.createElement("div");
  contentHeaderElement.classList.add("content__header");
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "my playlists";

  const addButtonContent = document.createElement("button");
  addButtonContent.classList.add("btn", "content__add-btn");
  addButtonContent.textContent = "add playlist";

  containerElement.appendChild(title);
  containerElement.appendChild(addButtonContent);

  parentItem.appendChild(contentPanelElement);
}
