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

export const imageModalWindow = document.querySelector('.popup_type_image'); // нахожу pop-up изображения с помощью .querySelector
export const popupImage = imageModalWindow.querySelector('.popup__image');
export const popupCaption = imageModalWindow.querySelector('.popup__caption');
export const ESC_KEYCODE = 27;

export const openModalWindow = (modalWindow) => {
  modalWindow.classList.add('popup_opened');
  document.addEventListener('keyup', handleEscUp);
};

export const closeModalWindow = (modalWindow) => {
  modalWindow.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleEscUp);
};

export const isEscEvent = (evt, action) => {
  if (evt.which === ESC_KEYCODE) {
    const activePopup = document.querySelector('.popup_opened');
    action(activePopup);
  }
};

export const handleEscUp = (evt) => {
  evt.preventDefault();
  isEscEvent(evt, closeModalWindow);
};
