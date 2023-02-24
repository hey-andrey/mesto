const ESC_KEYCODE = 27;

// Темплейт
const elementTemplate = document
  .querySelector('#element-template') // нахожу темплейт по id с помощью метода .querySelector
  .content.querySelector('.elements__item'); // обращаюсь к свойству темплейт content

// Вставки
const elementsWrap = document.querySelector('.elements__list'); // нахожу elements__list с помощью .querySelector

const editFormModalWindow = document.querySelector('.popup_type_edit'); // нахожу pop-up редактирования профиля с помощью .querySelector
const elementFormModalWindow = document.querySelector('.popup_type_element'); // нахожу pop-up добавления карточки с помощью .querySelector
const imageModalWindow = document.querySelector('.popup_type_image'); // нахожу pop-up изображения с помощью .querySelector

// Кнопки
const openEditFormButton = document.querySelector('.profile__edit-button');
const openElementFormButton = document.querySelector('.profile__add-button');
const closeEditFormButton = editFormModalWindow.querySelector('.popup__close-button');
const closeElementFormButton = elementFormModalWindow.querySelector('.popup__close-button');
const closeImageModalButton = imageModalWindow.querySelector('.popup__close-button');

// Элементы формы
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupImage = imageModalWindow.querySelector('.popup__image');
const popupCaption = imageModalWindow.querySelector('.popup__caption');

// Импуты
const titleInputValue = editFormModalWindow.querySelector('.popup__input_type_title');
const descriptionInputValue = editFormModalWindow.querySelector('.popup__input_type_description');
const elementTitleInputValue = elementFormModalWindow.querySelector('.popup__input_type_element-title');
const elementLinkInputValue = elementFormModalWindow.querySelector('.popup__input_type_url');

// Функции для добавления карточки
const getElementElements = (data) => {
  const elementElements = elementTemplate.cloneNode(true); // клонирую содержимое тега темплейт

  const deleteButton = elementElements.querySelector('.element__delete-button');
  const likeButton = elementElements.querySelector('.element__like-button');
  const elementImage = elementElements.querySelector('.element__image');

  elementImage.style.backgroundImage = `url(${data.link})`;
  elementElements.querySelector('.element__title').textContent = data.title;

  likeButton.addEventListener('click', handleLikeIcon);
  deleteButton.addEventListener('click', handleDeleteElement);
  elementImage.addEventListener('click', () => handlePreviewPicture(data));

  return elementElements;
};

const renderElement = (data, wrap) => {
  wrap.prepend(getElementElements(data));
};

const isEscEvent = (evt, action) => {
  if (evt.which === ESC_KEYCODE) {
    const activePopup = document.querySelector('.popup_opened');
    action(activePopup);
  }
};

const openModalWindow = (modalWindow) => {
  modalWindow.classList.add('popup_opened');
  document.addEventListener('keyup', handleEscUp);
};

const closeModalWindow = (modalWindow) => {
  modalWindow.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleEscUp);
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

const handlePreviewPicture = (data) => {
  popupImage.src = data.link;
  popupImage.alt = `Изображение ${data.title}`;
  popupCaption.textContent = data.title;
  openModalWindow(imageModalWindow);
};

const handleLikeIcon = (evt) => { // если лайкнуть карточку, сердечко поменяет цвет
  evt.target.classList.toggle('element__like-button_filled');
};

const handleDeleteElement = (evt) => { // карточка удаляется при клике на иконку урны
  evt.target.closest('.element').remove(); // метод closest
};

const handleEscUp = (evt) => {
  evt.preventDefault();
  isEscEvent(evt, closeModalWindow);
};

// Слушатели на click
openElementFormButton.addEventListener('click', () => {openModalWindow(elementFormModalWindow);
}); // Клик на открытие попап добавления карточки

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
