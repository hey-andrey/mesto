// Открываю Pop-up с кнопки edit-button
const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');

// Закрываю Pop-up с кнопки close-button
const popupCloseButton = document.querySelector('.popup__close-button');

// Слежу за событием/кликом на открытие и закрытие Pop-up
profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', openPopup);

function openPopup(evt) {
  if (!popup.classList.contains('popup_opened')) {
    titleInputValue.value = profileTitle.textContent;
    descriptionInputValue.value = profileDescription.textContent;
  }
  popup.classList.toggle('popup_opened');
}

// Нахожу форму в DOM
const popupForm = document.querySelector('.popup__form');

// Нахожу поля формы в DOM
const titleInputValue = popupForm.querySelector('.popup__input_type_title');
const descriptionInputValue = popupForm.querySelector('.popup__input_type_description');

// DOM профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
    evt.preventDefault(); // Отменяю стандартную отправку формы
    profileTitle.textContent = titleInputValue.value;
    profileDescription.textContent = descriptionInputValue.value;
    openPopup();
  }

// Слежу за событием/кликом на кнопку «отправки» формы
popupForm.addEventListener('submit', formSubmitHandler);