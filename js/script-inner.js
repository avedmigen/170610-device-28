
document.querySelector(".submenu-toggle-button").addEventListener("click", function (e) {
  document.querySelector(".submenu").classList.toggle("visually-hidden")
})

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault()
    document.querySelector(".submenu").classList.add("visually-hidden")
  }
})







