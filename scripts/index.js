import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, openModalWindow, closeModalWindow } from './utility.js';

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

const elementSelector = '.element-template';
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

const createElement = (data) => {
  const element = new Card(data, elementSelector);
  return element.getView();
}

const renderElement = (data, wrap) => {
  const element = createElement(data);
  wrap.prepend(element.getView());
};

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

  evt.target.reset();
};

// Слушатели
openElementFormButton.addEventListener('click', () => {openModalWindow(elementFormModalWindow);}); // Клик на открытие попап добавления карточки

openEditFormButton.addEventListener('click', () => {
  titleInputValue.value = profileTitle.textContent; // Инпут title
  descriptionInputValue.value = profileDescription.textContent; // Инпут description
  openModalWindow(editFormModalWindow); // Клик на кнопку открытия попап редактирования профиля
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
