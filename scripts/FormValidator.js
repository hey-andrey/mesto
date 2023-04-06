// Функция, которая добавляет класс с ошибкой
// Передадим текст ошибки вторым параметром
class FormValidator {
  constructor(config, popupElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._element = popupElement;
  }

// Функция, которая проверяет валидность поля
  _checkFieldValidity(elementInput) {
    if (!elementInput.validity.valid) { // Передадим сообщение об ошибке вторым аргументом
      this._showFieldError(elementInput, elementInput.validationMessage); // Если поле не проходит валидацию, покажем ошибку
    } else {
      this._hideFieldError(elementInput); // Если проходит, скроем
    }
  }

  _showFieldError(elementInput, messageError) {
    const elementError = this._element.querySelector(`#${elementInput.id}-error`);
    elementInput.classList.add(this._inputErrorClass);
    elementError.textContent = messageError; // Заменим содержимое span с ошибкой на переданный параметр
    elementError.classList.add(this._errorClass);
  }

// Функция, которая удаляет класс с ошибкой
  _hideFieldError(elementInput) {
    const elementError = this._element.querySelector(`#${elementInput.id}-error`);
    elementInput.classList.remove(this._inputErrorClass);
    elementError.classList.remove(this._errorClass);
    elementError.textContent = '';
  }

  disableSubmitButton = () => {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableSubmitButton = () =>{
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  // Функция принимает массив полей ввода
  // и элемент кнопки, состояние которой нужно менять
  _toggleButtonState() {
    if (this._getInvalidField()) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton()
    }
  }

  _getInvalidField() {
    return this._listInput.some((elementInput) => {
  // Если поле не валидно, колбэк вернёт true
  // Обход массива прекратится и вся функция
      return !elementInput.validity.valid;
    });
  }

  _setEventListeners() {
  // Находим все поля внутри формы,
  // Делаем из них массив методом Array.from
    this._listInput = Array.from(this._element.querySelectorAll(this._inputSelector));
  // Найдём в текущей форме кнопку отправки
    this._buttonElement = this._element.querySelector(this._submitButtonSelector);

    this._listInput.forEach((elementInput) => {
      elementInput.addEventListener('input', () => {
        this._checkFieldValidity(elementInput);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

export default FormValidator;



