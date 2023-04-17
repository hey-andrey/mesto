const initialCards = [
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Домбай',
    link: 'https://turvopros.com/wp-content/uploads/2018/12/dostoprimechatelnosti-dombaya.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2017/08/Arhyiz-e1502372601843.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://thumb.tildacdn.com/tild6162-3235-4939-b765-333931613137/-/resize/824x/-/format/webp/shutterstock_1399371.jpg'
  },
  {
    name: 'Камчатка',
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
  editFormModalWindow: '.popup_type_edit', // нахожу pop-up редактирования профиля с помощью .querySelector
  elementFormModalWindow: '.popup_type_new-element', // нахожу pop-up добавления карточки с помощью .querySelector
  imageModalWindow: '.popup_type_image', // нахожу pop-up изображения с помощью .querySelector
};

export const profileConfig = {
  profileTitle: '.profile__title',
  profileDescription: '.profile__description'
};

export const elementsConfig = {
  elementsWrap: 'elements__list',
  elementSelector: '#element-template'
};
