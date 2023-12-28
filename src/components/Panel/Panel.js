import { containerElement } from "../containerElement.js";
import { Form } from "../form/Form.js";
import { PanelButtons } from "./PanelButtons/PanelButtons.js";
import { SortSongs } from "../Sort/SortSongs.js";

export function Panel() {
  const container = containerElement();

  const panelElement = document.createElement("div");
  panelElement.classList.add("panel");
  container.append(panelElement);

  panelElement.append(Form());
  panelElement.append(SortSongs());
  panelElement.append(PanelButtons());

  return panelElement;
}
