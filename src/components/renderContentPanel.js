import { containerElement } from "./containerElement.js";
import { renderPanel } from "./renderPanel.js";

export function renderContentPanel(parentItem) {
  const contentPanelElement = document.createElement("section");
  contentPanelElement.classList.add("content");

  const container = containerElement();
  contentPanelElement.appendChild(container);

  const contentHeaderElement = document.createElement("div");
  contentHeaderElement.classList.add("content__header");
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "my playlists";

  const addButtonContent = document.createElement("button");
  addButtonContent.classList.add("btn", "content__add-btn");
  addButtonContent.textContent = "add playlist";

  container.appendChild(title);
  container.appendChild(addButtonContent);

  parentItem.appendChild(contentPanelElement);
  renderPanel(container);
}
