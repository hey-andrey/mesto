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
