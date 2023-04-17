class Card {
  constructor({ data, handleElementClick, handleLikeClick, handleDeleteIconClick }, elementSelector ) { // Свяжите класс Card c попапом. Сделайте так, чтобы Card принимал в конструктор функцию
<<<<<<< HEAD
    this._text = data.name;
    this._link = data.link;
    this._likes = data.likes;
=======
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;

>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
    this._userId = data.currentUserId;
    this._ownerId = data.owner._id;
    this._cardId = data._id;

    this._handleElementClick = handleElementClick;
<<<<<<< HEAD
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
=======
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeClick = handleLikeClick;
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0

    this._elementSelector = elementSelector;
  }

  _updateLikesView() {
    this._element.querySelector('.element__like-count').textContent = this._likes.length;

    if (this.isLiked()) this._element.querySelector('.element__like-button')
<<<<<<< HEAD
      .classList.add('element__like-button_is-active');
    else this._element.querySelector('.element__like-button')
      .classList.remove('element__like-button_is-active');
=======
      .classList.add('element__like-button_filled');
    else this._element.querySelector('.element__like-button')
      .classList.remove('element__like-button_filled');
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
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
<<<<<<< HEAD
      this._likeButton.addEventListener('click', () => this._handleLikeClick(this));

      this._element.querySelector('.element__delete-button')
      .addEventListener('click', () => this._handleDeleteIconClick(this));

      this._element.querySelector('.element__image')
      .addEventListener('click', () => this._handleElementClick({ // Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. Эта функция должна открывать попап с картинкой при клике на карточку
        name: this._name,
=======
      this._likeButton.addEventListener('click', () => this._handleLikeIcon(this));

      this._element.querySelector('.element__delete-button')
      .addEventListener('click', () => this._handleDeleteElement(this));

      this._element.querySelector('.element__image')
      .addEventListener('click', () => this._handleElementClick({ // Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. Эта функция должна открывать попап с картинкой при клике на карточку
        name: this._title,
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
        src: this._link
      }));
  }

  removeElement() {
<<<<<<< HEAD
    this._element.remove();
    this._element = null;
=======
    if (this._element) {
      this._element.remove();
      this._element = null;}
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
  }

  getView() {
    this._element = this._getTemplate();
    this._updateLikesView();

<<<<<<< HEAD
    this._element.querySelector('.element__delete-button')
    .classList.add(this._userId === this._ownerId ? 'element__delete-button_visible' : 'element__delete-button_hidden');
=======
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
    this._element.querySelector('.element__title').textContent = this._text;
    this._element.querySelector('.element__image').style.backgroundImage = `url(${this._link})`;
    this._likeButton = this._element.querySelector('.element__like-button');
    this._element.querySelector('.element__delete-button')
    .classList.add(this._userId === this._ownerId ? 'element__delete-button_visible' : 'element__delete-button_hidden');

    this._updateLikesView();
    this._setEventListeners();

    return this._element;
  }

  isLiked() {
    return Boolean(this._likes.find(item => item._id === this._userId));
  }

  id() {
    return this._cardId;
  }

  setLikesInfo(data) {
    this._likes = data.likes;
    this._updateLikesView();
  }
}

export default Card;
