// import { Header } from "./components/Header/Header.js";
import { subscribe } from "./data.js";

subscribe(renderApp);

export function renderApp() {
  const rootElement = document.getElementById("root");
  rootElement.classList.add("wrapper");
  rootElement.innerHTML = "";

  Header(rootElement);

  // playOnlyOne();
  return rootElement;
}

renderApp();
