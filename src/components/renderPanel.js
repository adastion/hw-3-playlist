import { containerElement } from "./containerElement.js";
import { renderForm } from "./form/renderForm.js";
import { renderPanelButtons } from "./panel_buttons/renderPanelButtons.js";
import { renderSort } from "./sort/renderSort.js";

export function renderPanel(parentItem) {
  const container = containerElement();

  const panelElement = document.createElement("div");
  panelElement.classList.add("panel");
  container.appendChild(panelElement);

  renderForm(panelElement);
  renderSort(panelElement);
  renderPanelButtons(panelElement);

  parentItem.appendChild(panelElement);
}
