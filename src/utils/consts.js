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
  elementsWrap: '.elements__list',
  elementSelector: '#element-template'
};