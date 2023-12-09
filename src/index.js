import { renderHeader } from "./components/renderHeader.js";
import { renderContentPanel } from "./components/renderContentPanel.js";
import { renderPlaylist } from "./components/playlist/playlist_wrapper/renderPlaylist.js";
import { renderCategories } from "./components/cadigories/renderCadigories.js";

export const rootElement = document.getElementById("root");
rootElement.classList.add("wrapper");

// addEventListener(renderApp)

export function renderApp() {
  renderHeader(rootElement);
  renderContentPanel(rootElement);


  const stateList = document.getElementById("btnList").classList.contains("active")
  const stateGrid = document.getElementById("btnGrid").classList.contains("active")
  
  if (stateList) {

    renderPlaylist(rootElement);
  } else {

    
    
    // renderCategories(rootElement)
  }


  console.log(stateList);
  console.log(stateGrid);
}

renderApp();
