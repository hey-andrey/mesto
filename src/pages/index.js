import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import { defaultFormConfig, popupConfig, profileConfig, elementsConfig } from '../utils/consts.js';

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

const userInfo = new UserInfo({
  userTitleSelector: profileConfig.profileTitle,
  userDescriptionSelector: profileConfig.profileDescription
});

const createElement = (data) => {
const element = new Card({
  data,
  handleElementClick: () => {
    imagePopup.open(data);
  }
}, elementsConfig.elementSelector);
  return element.getView();
}

const elementList = new Section({
  renderer: (data) => {
    elementList.addItem(createElement(data));
  }
}, elementsConfig.elementsWrap
);

const imagePopup = new PopupWithImage(popupConfig.imageModalWindow);

const userInfoPopup = new PopupWithForm({
  popupSelector: popupConfig.editFormModalWindow,
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data)
  }
});

const newElementPopup = new PopupWithForm({
  popupSelector: popupConfig.elementFormModalWindow,
  handleFormSubmit: (data) => {
    elementList.addItem(createElement(data));
  }
});

const editFormValidator = new FormValidator(defaultFormConfig, popupConfig.editFormModalWindow);
const elementFormValidator = new FormValidator(defaultFormConfig, popupConfig.elementFormModalWindow);

imagePopup.setEventListeners();
userInfoPopup.setEventListeners();
newElementPopup.setEventListeners();

elementList.renderItems(initialCards);

editFormValidator.enableValidation();
elementFormValidator.enableValidation();

// Кнопки
const openEditFormButton = document.querySelector('.profile__edit-button');
const openElementFormButton = document.querySelector('.profile__add-button');
// Импуты
const titleInputValue = document.querySelector('.popup__input_type_title');
const descriptionInputValue = document.querySelector('.popup__input_type_description');

// Слушатели
openEditFormButton.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo();
  titleInputValue.value = currentUserInfo.userTitle; // Инпут title
  descriptionInputValue.value = currentUserInfo.userDescription; // Инпут description
  editFormValidator.resetValidation();
  userInfoPopup.open();
});

openElementFormButton.addEventListener('click', () => {
  newElementPopup.open();
  elementFormValidator.disableSubmitButton();

  elementFormValidator.resetValidation();
});
