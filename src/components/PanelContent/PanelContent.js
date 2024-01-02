import { containerElement } from "../containerElement.js";
import { HeaderContent } from "./HeaderContent/HeaderContent.js";
import { NavigationContent } from "./NavigationContent/NavigationContent.js";

const container = containerElement();
const header = HeaderContent();
const nvigdtion = NavigationContent();

export function PanelContent() {
  const panel = document.createElement("div");
  panel.classList.add("content");

  container.append(header);
  container.append(nvigdtion);
  panel.append(container);
  return panel;
}
