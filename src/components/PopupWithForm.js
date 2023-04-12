import Popup from './Popup.js';

class PopupWithForm extends Popup { // Создайте класс PopupWithForm, который наследует от Popup
  constructor({ popupSelector, handleFormSubmit }) { // Кроме селектора попапа принимает в конструктор колбэк сабмита формы
    super(popupSelector);

    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() { // Содержит приватный метод _getInputValues, который собирает данные всех полей формы
    this._inputList = this._popupElement.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.title] = input.value);

    return this._formValues;
  }

  setEventListeners() { // Перезаписывает родительский метод setEventListeners
    this._popupElement.addEventListener('submit', () => {
      this._handleFormSubmit(this._getInputValues()); // Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы
      this.close();
    });

    super.setEventListeners();
  }

  close() { // Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
    this._popupForm.reset();
    super.close();
  }
}

export default PopupWithForm;
