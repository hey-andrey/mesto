class UserInfo { // Класс UserInfo отвечает за управление отображением информации о пользователе на странице
  constructor({ profileTitleSelector, profileDescriptionSelector }) { // Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе
    this._profileNameElement = document.querySelector(profileTitleSelector);
    this._profileDescriptionElement = document.querySelector(profileDescriptionSelector);
  }

  getProfileInfo() { // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии
    return {
      profileTitle: this._profileNameElement.textContent,
      profileDescription: this._profileDescriptionElement.textContent
    }
  }

  setProfileInfo({ profileTitle, profileDescription }) { // Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу
    this._profileNameElement.textContent = profileTitle;
    this._profileDescriptionElement.textContent = profileDescription;
  }
}

export default UserInfo;
