import { containerElement } from "./containerElement.js";
import { renderPanel } from "./renderPanel.js";

export function renderContentPanel(parentItem) {
  const contentPanelElement = document.createElement("section");
  contentPanelElement.classList.add("content");

  const container = containerElement();
  contentPanelElement.append(container);

  const contentHeaderElement = document.createElement("div");
  contentHeaderElement.classList.add("content__header");

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "my playlists";

  const addButtonContent = document.createElement("button");
  addButtonContent.classList.add("btn", "content__add-btn");
  addButtonContent.textContent = "add playlist";

  container.append(contentHeaderElement);
  contentHeaderElement.append(title);
  contentHeaderElement.append(addButtonContent);

  parentItem.append(contentPanelElement);
  renderPanel(container);
}
