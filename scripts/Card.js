import { openModalWindow, imageModalWindow, popupImage, popupCaption } from './utility.js';

class Card {
  constructor( data, elementSelector ) {
    this._title = data.title;
    this._link = data.link;

    this._elementSelector = elementSelector;

    this._element = this._getTemplate();

    this._element.querySelector('.element__title').textContent = this._title;
    this._element.querySelector('.element__image').style.backgroundImage = `url(${this._link})`;
    this._likeButton = this._element.querySelector('.element__like-button');

    this._setEventListeners();
  }

  // Темплейт
  _getTemplate() {
    const elementTemplate = document
      .querySelector(this._elementSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return elementTemplate;
  }

  _setEventListeners() {
    this._element.querySelector('.element__image')
      .addEventListener('click', () => this._handlePreviewPicture());

      this._likeButton.addEventListener('click', () => this._handleLikeIcon());
      this._element.querySelector('.element__delete-button')
      .addEventListener('click', () => this._handleDeleteElement());
  }

  _handlePreviewPicture() {
    popupImage.src = this._link;
    popupImage.alt = `Изображение ${this._title}`;
    popupCaption.textContent = this._title;
    openModalWindow(imageModalWindow);
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle('element__like-button_filled');
  }

  _handleDeleteElement() {
    if (this._element) {
      this._element.remove();
      this._element = null;}
  }

  getView() {
    return this._element;
  }
}

export default Card;
