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
_checkFieldValidity (elementInput) {
  if (!elementInput.validity.valid) { // Передадим сообщение об ошибке вторым аргументом
    this._showFieldError(elementInput, elementInput.validationMessage); // Если поле не проходит валидацию, покажем ошибку
  } else {
    this._hideFieldError(elementInput); // Если проходит, скроем
  }
}

// Функция, которая добавляет класс с ошибкой
// Передадим текст ошибки вторым параметром
_showFieldError(elementInput, errorMessage) {
  const errorElement = this._element.querySelector(`#${elementInput.id}-error`);

  elementInput.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.classList.add(this._errorClass);
}

// Функция, которая удаляет класс с ошибкой
_hideFieldError (elementInput) {
  const errorElement = this._element.querySelector(`#${elementInput.id}-error`);
  elementInput.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  // Очистим ошибку
  errorElement.textContent = '';
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
  // Если есть хотя бы один невалидный инпут
  if (this._getInvalidInput()) {
  // сделай кнопку неактивной
    this.disableSubmitButton();
  // иначе сделай кнопку активной
  } else {
    this._enableSubmitButton()
  }
}

// Функция принимает массив полей
_getInvalidInput() {
  // проходим по этому массиву методом some
  return this._inputList.some((elementInput) => {
  // Если поле не валидно, колбэк вернёт true
  // Обход массива прекратится и вся функция
  // getInvalidInput вернёт true
    return !elementInput.validity.valid;
  });
}

_setEventListeners () {
  // Находим все поля внутри формы,
  // Делаем из них массив методом Array.from
  this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector));

  // Найдём в текущей форме кнопку отправки
  this._buttonElement = this._element.querySelector(this._submitButtonSelector);

  this._element.addEventListener('reset', () => { // событие `reset` происходит когда вызывается `reset` у формы
    setTimeout(() => {  // добавим таймаут, чтобы `toggleButtonState` вызвался уже после сохранения формы
      this._toggleButtonState(), 0 });
  })

  // Обойдём все элементы полученной коллекции
  this._inputList.forEach((elementInput) => {

  // каждому полю добавим обработчик события input
  elementInput.addEventListener('input', () => {
    // Вызовем функцию на каждый ввод символа
      this._checkFieldValidity(elementInput);
  // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      this._toggleButtonState();
    });
  });
}

enableValidation() {
  this._element.addEventListener('submit', (evt) => {
    evt.preventDefault();
    });
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    this._setEventListeners();
  }

  resetValidation() {
    this._toggleButtonState(); // управляем кнопкой
    this._inputList.forEach((elementInput) => {
      this._hideFieldError(elementInput) // очищаем ошибки
    });
  }

}



export default FormValidator;
