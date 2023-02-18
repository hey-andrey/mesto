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
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  }
];

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

  const likeButton = elementElements.querySelector('.element__like-button');
  const deleteButton = elementElements.querySelector('.element__delete-button');
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

// Метод toogle
const toggleModalWindow = (modalWindow) => {
  modalWindow.classList.toggle('popup_opened');
};

// Обработчики
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = titleInputValue.value;
  profileDescription.textContent = descriptionInputValue.value;
  toggleModalWindow(editFormModalWindow);
};

const handleElementFormSubmit = (evt) => {
  evt.preventDefault();
  renderElement({
    title: elementTitleInputValue.value,
    link: elementLinkInputValue.value
  }, elementsWrap);
  toggleModalWindow(elementFormModalWindow);
}

const handleLikeIcon = (evt) => { // если лайкнуть карточку, сердечко поменяет цвет
  evt.target.classList.toggle('element__like-button_filled');
};

const handleDeleteElement = (evt) => { // карточка удаляется при клике на иконку урны
  evt.target.closest('.element').remove(); // метод closest
};

const handlePreviewPicture = (data) => { // превью фотографий
  popupImage.src = data.link;
  popupImage.alt = `Изображение ${data.title}`;
  popupCaption.textContent = data.title;
  toggleModalWindow(imageModalWindow);
};

// Слушатели на submit
editFormModalWindow.addEventListener('submit', handleProfileFormSubmit); // Сохранить редактирование профиля
elementFormModalWindow.addEventListener('submit', handleElementFormSubmit); // Сохранить добавление карточки

// Слушатели на click
openEditFormButton.addEventListener('click', () => { // Клик на кнопку открытия формы для редактирования профиля
  titleInputValue.value = profileTitle.textContent; // Поле title в форме редактирования профиля
  descriptionInputValue.value = profileDescription.textContent; // Поле description в форме редактирования профиля
  toggleModalWindow(editFormModalWindow);}); // Метод toogle
closeEditFormButton.addEventListener('click', () => {toggleModalWindow(editFormModalWindow);}); // Клик на кнопку закрытия формы для редактирования профиля
openElementFormButton.addEventListener('click', () => {toggleModalWindow(elementFormModalWindow);}); // Клик на кнопку открытия формы для добавления карточки
  // как очистить форму после добавления
closeElementFormButton.addEventListener('click', () => {toggleModalWindow(elementFormModalWindow);}); // Клик на кнопку закрытия формы для добавления карточки
closeImageModalButton.addEventListener('click', () => {toggleModalWindow(imageModalWindow);}); // Клик на кнопку закрытия всплывающего окна с изображением

initialCards.forEach((data) => {
  renderElement(data, elementsWrap)
});
