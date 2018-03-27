var contactsLink = document.querySelector(".contacts-btn");
var modalWriteUs = document.querySelector(".modal-write-us");
var modalClose = document.querySelector(".modal-close");
var yourName = modalWriteUs.querySelector(".your-name");
var yourEmail = modalWriteUs.querySelector(".email");
var yourTxtEmail = modalWriteUs.querySelector(".txt-email");
var form = modalWriteUs.querySelector(".write-us");
var storage = localStorage.getItem("yourName");
var storage = localStorage.getItem("yourEmail");

var buyModal = document.querySelector(".buy");
var modalBasket = document.querySelector(".modal-basket");
var basketClose = document.querySelector(".basket-close");

var mapLink = document.querySelector(".js-map");
var modalMap = document.querySelector(".modal-map");
var mapClose = document.querySelector(".js-close");

try {
  storage = localStorage.getItem("yourName");
  storage = localStorage.getItem("yourEmail");
} catch (err) {
  isStorageSupport = false;
}
contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
   modalWriteUs.classList.add("modal-show");
   yourName.focus();
   if (storage) {
     yourName.value = storage;
     yourEmail.value = storage;
   }
});
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
  modalWriteUs.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!yourName.value || !yourEmail.value || !yourTxtEmail.value) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal-error");
}
else {
  if (isStorageSupport) {
  localStorage.setItem("yourName", yourName.value);
  localStorage.setItem("yourEmail", yourEmail.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
  if (modalWriteUs.classList.contains("modal-show")) {
    modalWriteUs.classList.remove("modal-show");
    modalWriteUs.classList.remove("modal-error");
     }
  }
});

mapLink.addEventListener("click", function (evt) {evt.preventDefault(); modalMap.classList.add("modal-show");});
mapClose.addEventListener("click", function (evt) {evt.preventDefault(); modalMap.classList.remove("modal-show");});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
  if (modalMap.classList.contains("modal-show")) {
    modalMap.classList.remove("modal-show");
     }
  }
});


buyModal.addEventListener("click", function (evt) {
  evt.preventDefault();
   modalBasket.classList.add("modal-show");
console.log('работает');
});
basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.remove("modal-show");
});
