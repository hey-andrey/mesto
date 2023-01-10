// Нахожу Pop-up
const popup = document.querySelector('.popup');
// Нахожу Pop-up с кнопкой открытия (edit-button)
const profileEditButton = document.querySelector('.profile__edit-button');
// Нахожу Pop-up с кнопкой закрытия (close-button)
const popupCloseButton = document.querySelector('.popup__close-button');

// Нахожу форму в DOM
const popupForm = document.querySelector('.popup__form');
// Нахожу DOM профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
// Нахожу поля формы в DOM
const titleInputValue = popupForm.querySelector('.popup__input_type_title');
const descriptionInputValue = popupForm.querySelector('.popup__input_type_description');

function togglePopup(evt) {
  if (!popup.classList.contains('popup_opened')) {
    titleInputValue.value = profileTitle.textContent;
    descriptionInputValue.value = profileDescription.textContent;
  }
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Отменяю стандартную отправку формы
  profileTitle.textContent = titleInputValue.value;
  profileDescription.textContent = descriptionInputValue.value;
  togglePopup();
}

// Слежу за событием/кликом на открытие Pop-up
profileEditButton.addEventListener('click', togglePopup);
// Слежу за событием/кликом на закрытие Pop-up
popupCloseButton.addEventListener('click', togglePopup);
// Слежу за событием/кликом на кнопку «отправки» формы
popupForm.addEventListener('submit', formSubmitHandler);
