const submenuToggleButton = document.querySelector(".submenu-toggle-button")
const subMenu = document.querySelector(".submenu")
const mapImagePreview = document.querySelector(".map-image-preview")
const modalMap = document.querySelector(".modal-map")
const modalMapCloseBtn = document.querySelector(".modal-map .modal-close")
const modalContactFormPopup = document.querySelector(".modal-contact-form")
const modalContactFormLink = document.querySelector(".contact-us a.button")
const modalContactFormCloseBtn = document.querySelector(".modal-contact-form .modal-close")
const modalContactForm = modalContactFormPopup.querySelector("form")
const name = document.querySelector("[name = name]")
const email = document.querySelector("[name = email]")
const message = document.querySelector("[name = message]")

submenuToggleButton.addEventListener("click", function (evt) {
  subMenu.classList.toggle("visually-hidden")
})

mapImagePreview.addEventListener("click", function (evt) {
  evt.preventDefault()
  modalMap.classList.remove("visually-hidden")
})

modalMapCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault()
  modalMap.classList.add("visually-hidden")
})

modalContactFormLink.addEventListener("click", function (evt) {
  evt.preventDefault()
  modalContactFormPopup.classList.remove("visually-hidden")
  name.focus()
})

modalContactFormCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault()
  modalContactFormPopup.classList.add("visually-hidden")
})

modalContactForm.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault()
    console.log("Заполните все поля формы")
  }
})


