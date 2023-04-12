export const initialCards = [
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

export const defaultFormConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const popupConfig = {
  editFormModalWindow: '.popup_type_edit',
  elementFormModalWindow: '.popup_type_new-element',
  imageModalWindow: '.popup_type_image',
};

export const profileConfig = {
  profileTitle: '.profile__title',
  profileDescription: '.profile__description'
};

export const elementsConfig = {
  elementsWrap: '.elements__list',
  elementSelector: '#element-template'
};

export const ESC_KEYCODE = 27;
