import Popup from './Popup.js';

class PopupWithImage extends Popup { // Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open
  constructor(popupElement) {
    super(popupElement);

    this._popupСaption = this._popupElement.querySelector('.popup__caption');
  }

  open({ link, title }) {
    this._popupСaption.textContent = title;
    const image =  this._popupElement.querySelector('.popup__image');

    image.src = link;
    image.alt = `Изображение ${title}`;
    super.open(); // В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке
  }
}

export default PopupWithImage;

// Поиск элементов нужно вынести в конструктор.
// Сейчас при каждом открытии картинки будет происходить поиск в DOM, хотя элементы не меняются и их можно найти один раз и хранить в полях класса.
