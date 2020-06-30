const submenuToggleButton = document.querySelector(".submenu-toggle-button")
const subMenu = document.querySelector(".submenu")
const goodsItems = document.querySelectorAll(".goods-item")
const goodsItemControls = document.querySelector(".goods-item-controls")

submenuToggleButton.addEventListener("click", function (e) {
  subMenu.classList.toggle("visually-hidden")
})

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault()
    subMenu.classList.add("visually-hidden")
  }
})







