import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import { initialCards, defaultFormConfig, popupConfig, profileConfig, elementsConfig } from '../utils/consts.js';

// Кнопки
const openEditFormButton = document.querySelector('.profile__edit-button');
const openElementFormButton = document.querySelector('.profile__add-button');
// Импуты
const titleInputValue = editFormModalWindow.querySelector('.popup__input_type_title');
const descriptionInputValue = editFormModalWindow.querySelector('.popup__input_type_description');

const userInfo = new UserInfo({
  userTitleSelector: profileConfig.profileTitle,
  userDescriptionSelector: profileConfig.profileDescription
});

const createNewElement = (data) => {
const element = new Card({ data, handleElementClick: () => { imagePopup.open(data); }}, elementsConfig.elementSelector);
  return element.getView();
}

const elementList = new Section({ renderer: (data) => { elementList.addItem(createNewElement(data));}}, elementsConfig.elementsWrap);
const imagePopup = new PopupWithImage(popupConfig.imageModalWindow);
const userInfoPopup = new PopupWithForm({ popupSelector: popupConfig.editFormModalWindow, handleElementFormSubmit: (data) => { userInfo.setUserInfo(data)}});
const newElementPopup = new PopupWithForm({ popupSelector: popupConfig.elementFormModalWindow, handleFormSubmit: (data) => { elementList.addItem(createNewElement(data));}});

const editFormValidator = new FormValidator(defaultFormConfig, popupConfig.editFormModalWindow);
const elementFormValidator = new FormValidator(defaultFormConfig, popupConfig.elementFormModalWindow);

imagePopup.setEventListeners();
newElementPopup.setEventListeners();
userInfoPopup.setEventListeners();

elementList.renderItems(initialCards);

editFormValidator.enableValidation();
elementFormValidator.enableValidation();
editFormValidator.resetValidation();
elementFormValidator.resetValidation();

// Слушатели
openEditFormButton.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo();
  titleInputValue.value = currentUserInfo.userName;
  descriptionInputValue.value = currentUserInfo.userDescription;

  userInfoPopup.open();
});

openElementFormButton.addEventListener('click', () => {
  newElementPopup.open();
  elementFormValidator.disableSubmitButton();

  titleInputValue.value = '';

  elementFormValidator.resetValidation();
});
