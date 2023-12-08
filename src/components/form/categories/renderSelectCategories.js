export function renderSelectCategories (parentItem) {
  const selectElement = document.createElement("select")
  selectElement.classList.add("form__category")
  selectElement.name = "search-category"
  
  const categoryGenreElement = document.createElement("option")
  categoryGenreElement.selected = true
  categoryGenreElement.value = "genre"
  categoryGenreElement.textContent = "genre"
  
  const categoryActorElement = document.createElement("option")
  categoryActorElement.value = "actor"
  categoryActorElement.textContent = "actor"
  

  selectElement.appendChild(categoryGenreElement)
  selectElement.appendChild(categoryActorElement)

  parentItem.appendChild(selectElement)
}