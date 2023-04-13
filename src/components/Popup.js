class Popup { // Создайте класс Popup, который отвечает за открытие и закрытие попапа
  constructor(popupSelector) { // Принимает в конструктор единственный параметр — селектор попапа
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) { // Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc
    evt.preventDefault();
    if (evt.key === "Escape")    {
    this.close();
    }
  }

  setEventListeners() { // Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа
    this._popupElement.addEventListener('click', (evt) => { // Модальное окно также закрывается при клике на затемнённую область вокруг формы

      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        this.close();
      }
    });
  }

  open() { // Содержит публичный метод open, который отвечает за открытие попапа
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() { // Содержит публичный метод close, который отвечает за закрытие попапа
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }
}

export default Popup;
