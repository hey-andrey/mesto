import { openModalWindow, imageModalWindow, popupImage, popupCaption } from './utility.js';

class Card {
  constructor(data, elementSelector) {
    this._text = data.name;
    this._link = data.link;

    this._elementSelector = elementSelector;
  }

  // Темплейт
  _getTemplate() {
    const elementTemplate = document
      .querySelector(this._elementSelector) // нахожу темплейт с помощью метода .querySelector
      .content.querySelector('elements__item').cloneNode(true); // обращаюсь к свойству темплейт content

    return elementTemplate;
  }

  _setEventListeners() {
    this._element.querySelector('.element__image')
      .addEventListener('click', () => this._handlePreviewPicture());

    this._element.querySelector('.element__like-button')
      .addEventListener('click', () => this._handleLikeIcon());

    this._element.querySelector('.element__delete-button')
      .addEventListener('click', () => this._handleDeleteElement());
  }

  _handlePreviewPicture() {
    popupImage.src = this.link;
    popupImage.alt = `Изображение ${this.title}`;
    popupCaption.textContent = this._title;
    openModalWindow(imageModalWindow);
  }

  _handleLikeIcon() {
    this._element.querySelector('.card__like-button').
    classList.toggle('element__like-button_filled');
  }

  _handleDeleteElement() {
    this._element.remove();
    this._element = null;
  }

  getView() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').style.backgroundImage = `url(${this._link})`;
    this._element.querySelector('.element__title').textContent = this._text;

    return this._element;
  }
}

export default Card;
