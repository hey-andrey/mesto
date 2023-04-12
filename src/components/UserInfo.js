class UserInfo { // Класс UserInfo отвечает за управление отображением информации о пользователе на странице
  constructor({ userTitleSelector, userDescriptionSelector }) { // Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе
    this._userTitleElement = document.querySelector(userTitleSelector);
    this._userDescriptionElement = document.querySelector(userDescriptionSelector);
  }

  getUserInfo() { // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии
    return {
      userTitle: this._userTitleElement.textContent,
      userDescription: this._userDescriptionElement.textContent
    }
  }

  setUserInfo({ userTitle, userDescription }) { // Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу
    this._userTitleElement.textContent = userTitle;
    this._userDescriptionElement.textContent = userDescription;
  }
}

export default UserInfo;
