// Функция, которая добавляет класс с ошибкой
// Передадим текст ошибки вторым параметром
const showFieldError = (elementForm, elementInput, messageError, {errorClass, inputErrorClass}) => {
  const elementError = elementForm.querySelector(`#${elementInput.id}-error`);
  elementInput.classList.add(inputErrorClass);
  elementError.textContent = messageError; // Заменим содержимое span с ошибкой на переданный параметр
  elementError.classList.add(errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideFieldError = (elementForm, elementInput, {errorClass, inputErrorClass}) => {
  const elementError = elementForm.querySelector(`#${elementInput.id}-error`);
  elementInput.classList.remove(inputErrorClass);
  elementError.classList.remove(errorClass);
  // Очистим ошибку
  elementError.textContent = '';
};

// Функция, которая проверяет валидность поля
const checkFieldValidity = (elementForm, elementInput, enums) => {
  if (!elementInput.validity.valid) { // Передадим сообщение об ошибке вторым аргументом
    showFieldError(elementForm, elementInput, elementInput.validationMessage, enums); // Если поле не проходит валидацию, покажем ошибку
  } else {
    hideFieldError(elementForm, elementInput, enums); // Если проходит, скроем
  }
};

// Функция принимает массив полей
const hasInvalidField = (listInput) => {
// проходим по этому массиву методом some
  return listInput.some((elementInput) => {
// Если поле не валидно, колбэк вернёт true
// Обход массива прекратится и вся функция
// hasInvalidInput вернёт true
    return !elementInput.validity.valid;
  });
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (listInput, buttonElement, inactiveButtonClass) => {
// Если есть хотя бы один невалидный инпут
  if (hasInvalidField(listInput)) {
    buttonElement.classList.add(inactiveButtonClass);
// сделай кнопку неактивной
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
// иначе сделай кнопку активной
    buttonElement.disabled = false;
  }
};

const setEventListeners = (elementForm, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) => {
  // Находим все поля внутри формы,
  // Делаем из них массив методом Array.from
  const listInput = Array.from(elementForm.querySelectorAll(inputSelector));
  // Найдём в текущей форме кнопку отправки
  const buttonElement = elementForm.querySelector(submitButtonSelector);

  elementForm.addEventListener('reset', () => { // собыите `reset` происходит когда вызывается `reset` у формы
    setTimeout(() => {  // добавим таймаут, чтобы `toggleButtonState` вызвался уже после сохранения формы
      toggleButtonState(listInput, buttonElement, inactiveButtonClass), 0 })
  })

  // Обойдём все элементы полученной коллекции
  listInput.forEach((elementInput) => {
  // каждому полю добавим обработчик события input
    elementInput.addEventListener('input', () => { // Вызовем функцию на каждый ввод символа
      checkFieldValidity(elementForm, elementInput, rest);
  // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(listInput, buttonElement, inactiveButtonClass);
    });
  });
};

const enableValidation = ({formSelector, ...rest}) => {
  const getFormList = Array.from(document.querySelectorAll(formSelector));
   // Переберём полученную коллекцию
  getFormList.forEach((elementForm) => {
    elementForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(elementForm, rest);
  })
};

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// Вызовем функцию
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
