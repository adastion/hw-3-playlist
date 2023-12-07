import { containerElement } from "./containerElement.js";
import { renderForm } from "./renderForm.js";
import { renderPanelButtons } from "./renderPanelButtons.js";

export function renderPanel(parentItem) {
  const container = containerElement()

  const panelElement = document.createElement("div");
  panelElement.classList.add("panel");
  container.appendChild(panelElement);

  renderForm(panelElement)
  renderPanelButtons(panelElement)




  parentItem.appendChild(panelElement);
}
