const productCatalog = document.querySelector(".product-catalog")
const subMenu = document.querySelector(".submenu")
const mapImagePreview = document.querySelector(".map-image-preview")
const modalMap = document.querySelector(".modal-map")
const modalMapCloseBtn = document.querySelector(".modal-map .modal-close")
const modalContactForm = document.querySelector(".modal-contact-form")
const modalContactFormLink = document.querySelector(".contact-us a.button")
const modalContactFormCloseBtn = document.querySelector(".modal-contact-form .modal-close")

productCatalog.addEventListener("mouseover", function (evt) {
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
  modalContactForm.classList.remove("visually-hidden")
})

modalContactFormCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault()
  modalContactForm.classList.add("visually-hidden")
})


