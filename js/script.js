let name = document.querySelector("[name = name]")
let email = document.querySelector("[name = email]")
let message = document.querySelector("[name = message]")
let isStorageSupport = true
let storage = ""
let storageName = localStorage.getItem("name")
let storageEmail = localStorage.getItem("email")

document.querySelector(".submenu-toggle-button").addEventListener("click", function (e) {
  document.querySelector(".submenu").classList.toggle("visually-hidden")
})

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault()
    document.querySelector(".submenu").classList.add("visually-hidden")
  }
})

document.querySelector(".map-image-preview").addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".modal-map").classList.remove("visually-hidden")
})

document.querySelector(".modal-map .modal-close").addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".modal-map").classList.add("visually-hidden")
})

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault()
    document.querySelector(".modal-map").classList.add("visually-hidden")
  }
})

document.querySelector(".contact-us a.button").addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".modal-contact-form").classList.remove("visually-hidden")
  document.querySelector(".modal-contact-form").classList.add("bounce-animation")

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

document.querySelector(".modal-contact-form").querySelector("form").addEventListener("submit", function (e) {
  if (!name.value || !email.value || !message.value) {
    e.preventDefault()
    document.querySelector(".modal-contact-form").classList.add("modal-error")
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value)
      localStorage.setItem("email", email.value)
    }
  }
})

document.querySelector(".modal-contact-form .modal-close").addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".modal-contact-form").classList.add("visually-hidden")
  document.querySelector(".modal-contact-form").classList.remove("bounce-animation")
  document.querySelector(".modal-contact-form").classList.remove("modal-error")
})

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault()
    document.querySelector(".modal-contact-form").classList.add("visually-hidden")
    document.querySelector(".modal-contact-form").classList.remove("bounce-animation")
    document.querySelector(".modal-contact-form").classList.remove("modal-error")
  }
})
