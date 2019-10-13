
// 'get element by id' returns objects that represent HTML form and list elements
let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

// 'event listener' for when items are submitted 
ourForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createItem(ourField.value)
})

// 'function' to create items
function createItem(x) {
  let ourHTML = `<li>${x} <button onclick="deleteItem(this)">Delete</button> </li>`
  ourList.insertAdjacentHTML("beforeend", ourHTML)
  ourField.value = ""
  ourField.focus
}

// 'function' to delete items
function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove()
}