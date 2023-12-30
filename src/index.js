import { Header } from "./components/Header/Header.js";
import { subscribe } from "./data.js";

subscribe(renderApp);

export function renderApp() {
  const rootElement = document.getElementById("root");
  rootElement.classList.add("wrapper");
  rootElement.innerHTML = "";

  const header = Header();
  rootElement.append(header);

  // playOnlyOne();
  return rootElement;
}

renderApp();
