let contactUsBtn = document.querySelector("#contactUsButton");
let modalContactForm  = document.querySelector(".modal-contact-form");
let modalContactFormCloseBtn = document.querySelector(".modal-contact-form button.modal-close");
let mapImageLink = document.querySelector(".map-image-preview");
let modalMap = document.querySelector(".modal-map");
let modalMapCloseBtn = document.querySelector(".modal-map button.modal-close")

contactUsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalContactForm.classList.remove("visually-hidden")
})

modalContactFormCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalContactForm.classList.add("visually-hidden")
})

mapImageLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("visually-hidden")
})

modalMapCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("visually-hidden")
})




