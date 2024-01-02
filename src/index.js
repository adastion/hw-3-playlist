import { Header } from "./components/Header/Header.js";
import { PanelContent } from "./components/PanelContent/PanelContent.js";
import { subscribe } from "./data.js";


const header = Header();
const panel = PanelContent();

export function renderApp() {
  const rootElement = document.getElementById("root");
  rootElement.classList.add("wrapper");
  rootElement.innerHTML = "";
  
  rootElement.append(header);
  rootElement.append(panel);
  
  // playOnlyOne();
  return rootElement;
}

renderApp();

subscribe(renderApp);