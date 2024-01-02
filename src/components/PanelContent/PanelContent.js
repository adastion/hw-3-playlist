import { containerElement } from "../containerElement.js";
import { HeaderContent } from "./HeaderContent/HeaderContent.js";

export function PanelContent() {
  const panel = document.createElement("div");
  panel.classList.add("content");

  const container = containerElement();

  const header = HeaderContent();
  // const nvigdtion = NavigationContent();

  container.append(header);
  panel.append(container);
  return panel;
}
