class Card {
  constructor( data, handleElementClick, elementSelector ) { // Свяжите класс Card c попапом. Сделайте так, чтобы Card принимал в конструктор функцию
    this._title = data.title;
    this._link = data.link;
    this._handleElementClick = handleElementClick;

    this._elementSelector = elementSelector;
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
      this._likeButton.addEventListener('click', () => this._handleLikeIcon());

      this._element.querySelector('.element__delete-button')
      .addEventListener('click', () => this._handleDeleteElement());

      this._element.querySelector('.element__image')
      .addEventListener('click', () => this.handleElementClick({ // Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. Эта функция должна открывать попап с картинкой при клике на карточку
        title: this._title,
        link: this._link
      }));
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle('element__like-button_filled');
  }

  _handleDeleteElement() {
      this._element.remove();
      this._element = null;
  }

  getView() {
    this._element = this._getTemplate();

    this._element.querySelector('.element__title').textContent = this._title;
    this._element.querySelector('.element__image').style.backgroundImage = `url(${this._link})`;
    this._likeButton = this._element.querySelector('.element__like-button');

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
