const submenuToggleButton = document.querySelector(".submenu-toggle-button")
const subMenu = document.querySelector(".submenu")
const mapImagePreview = document.querySelector(".map-image-preview")
const modalMap = document.querySelector(".modal-map")
const modalMapCloseBtn = document.querySelector(".modal-map .modal-close")
const modalContactFormPopup = document.querySelector(".modal-contact-form")
const modalContactFormLink = document.querySelector(".contact-us a.button")
const modalContactFormCloseBtn = document.querySelector(".modal-contact-form .modal-close")
const modalContactForm = modalContactFormPopup.querySelector("form")
let name = document.querySelector("[name = name]")
let email = document.querySelector("[name = email]")
let message = document.querySelector("[name = message]")
let isStorageSupport = true
let storage = ""
let storageName = localStorage.getItem("name")
let storageEmail = localStorage.getItem("email")

submenuToggleButton.addEventListener("click", function (e) {
  subMenu.classList.toggle("visually-hidden")
})

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault()
    subMenu.classList.add("visually-hidden")
  }
})

mapImagePreview.addEventListener("click", function (e) {
  e.preventDefault()
  modalMap.classList.remove("visually-hidden")
})

modalMapCloseBtn.addEventListener("click", function (e) {
  e.preventDefault()
  modalMap.classList.add("visually-hidden")
})

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault()
    modalMap.classList.add("visually-hidden")
  }
})

modalContactFormLink.addEventListener("click", function (e) {
  e.preventDefault()
  modalContactFormPopup.classList.remove("visually-hidden")
  modalContactFormPopup.classList.add("bounce-animation")

  if (storage) {
    name.value = storage
    email.focus()
  } else {
    name.focus()
  }

  if (storage) {
    name.value = storageName
    email.value = storageEmail
    message.focus()
  } else {
    name.focus()
  }
})

try {
  storage = localStorage.getItem("name")
}
catch (err) {
  isStorageSupport = false
}

modalContactForm.addEventListener("submit", function (e) {
  if (!name.value || !email.value || !message.value) {
    e.preventDefault()
    modalContactFormPopup.classList.add("modal-error")
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value)
      localStorage.setItem("email", email.value)
    }
  }
})

modalContactFormCloseBtn.addEventListener("click", function (e) {
  e.preventDefault()
  modalContactFormPopup.classList.add("visually-hidden")
  modalContactFormPopup.classList.remove("bounce-animation")
  modalContactFormPopup.classList.remove("modal-error")
})

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault()
    modalContactFormPopup.classList.add("visually-hidden")
    modalContactFormPopup.classList.remove("bounce-animation")
    modalContactFormPopup.classList.remove("modal-error")
  }
})

