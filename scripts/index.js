import Card from './Card.js';
import FormValidator from './FormValidator.js';

import { openModalWindow, closeModalWindow } from './utility.js';

const initialCards = [
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Домбай',
    link: 'https://turvopros.com/wp-content/uploads/2018/12/dostoprimechatelnosti-dombaya.jpg'
  },
  {
    title: 'Архыз',
    link: 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2017/08/Arhyiz-e1502372601843.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://thumb.tildacdn.com/tild6162-3235-4939-b765-333931613137/-/resize/824x/-/format/webp/shutterstock_1399371.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://www.rgo.ru/sites/default/files/styles/head_image_article/public/node/47522/00-aleksandr-kukrinov-saharnoe-utro-529605.jpg?itok=K53wHckX'
  }
];

// Вставки
const elementsWrap = document.querySelector('.elements__list'); // нахожу elements__list с помощью .querySelector
const editFormModalWindow = document.querySelector('.popup_type_edit'); // нахожу pop-up редактирования профиля с помощью .querySelector
const elementFormModalWindow = document.querySelector('.popup_type_new-element'); // нахожу pop-up добавления карточки с помощью .querySelector
const imageModalWindow = document.querySelector('.popup_type_image'); // нахожу pop-up изображения с помощью .querySelector

// Кнопки
const openEditFormButton = document.querySelector('.profile__edit-button');
const openElementFormButton = document.querySelector('.profile__add-button');

// Элементы формы
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Импуты
const titleInputValue = editFormModalWindow.querySelector('.popup__input_type_title');
const descriptionInputValue = editFormModalWindow.querySelector('.popup__input_type_description');
const elementTitleInputValue = elementFormModalWindow.querySelector('.popup__input_type_element-title');
const elementLinkInputValue = elementFormModalWindow.querySelector('.popup__input_type_url');

const elementSelector = ('#element-template');
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const editFormValidator = new FormValidator(validationConfig, editFormModalWindow);
const elementFormValidator = new FormValidator(validationConfig, elementFormModalWindow);

editFormValidator.enableValidation();
elementFormValidator.enableValidation();

editFormValidator.resetValidation();
elementFormValidator.resetValidation();

// Обработчики
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = titleInputValue.value;
  profileDescription.textContent = descriptionInputValue.value;
  closeModalWindow(editFormModalWindow);
};

const handleElementFormSubmit = (evt) => {
  evt.preventDefault();
  renderElement({
    title: elementTitleInputValue.value,
    link: elementLinkInputValue.value
  }, elementsWrap);
  closeModalWindow(elementFormModalWindow);

  elementTitleInputValue.value = '';
  elementLinkInputValue.value = '';
};

const createElement = (data) => {
  const element = new Card(data, elementSelector);
  return element.getView();
}

const renderElement = (data, wrap) => {
  const element = createElement(data);
  wrap.prepend(element);
};

// Слушатели
openElementFormButton.addEventListener('click', () => {openModalWindow(elementFormModalWindow);
  elementTitleInputValue.value = '';
  elementLinkInputValue.value = '';

  elementFormValidator.resetValidation();

}); // Клик на открытие попап добавления карточки



openEditFormButton.addEventListener('click', () => {
  titleInputValue.value = profileTitle.textContent; // Инпут title
  descriptionInputValue.value = profileDescription.textContent; // Инпут description
  openModalWindow(editFormModalWindow); // Клик на кнопку открытия попап редактирования профиля

  editFormValidator.resetValidation();

});

// Находим все попапы в проекте и пробегаемся по ним, навешивая обработчик.
const popups = document.querySelectorAll('.popup')
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
          closeModalWindow(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
          closeModalWindow(popup)
        }
    })
})

// Слушатели на submit
editFormModalWindow.addEventListener('submit', handleProfileFormSubmit); // Сохранить редактирование профиля
elementFormModalWindow.addEventListener('submit', handleElementFormSubmit); // Сохранить добавление карточки

initialCards.forEach((data) => {
  renderElement(data, elementsWrap)
});
