import Popup from './Popup.js';

class PopupWithImage extends Popup { // Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open
  open({ link, title }) {
    this._popupElement.querySelector('.popup__caption').textContent = title;
    const image =  this._popupElement.querySelector('.popup__image');

    image.src = link;
    image.alt = `Изображение ${title}`;
    super.open(); // В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке
  }
}

export default PopupWithImage;
