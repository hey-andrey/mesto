class UserInfo { // Класс UserInfo отвечает за управление отображением информации о пользователе на странице
<<<<<<< HEAD
  constructor({ userNameSelector, userDescriptionSelector, userAvatarSelector }) {
    this._userNameElement = document.querySelector(`.${userNameSelector}`);
    this._userDescriptionElement = document.querySelector(`.${userDescriptionSelector}`);
    this._userAvatarElement = document.querySelector(`.${userAvatarSelector}`);
=======
  constructor({ profileTitleSelector, profileDescriptionSelector, profileAvatarSelector }) { // Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе
    this._profileNameElement = document.querySelector(`.${profileTitleSelector}`);
    this._profileDescriptionElement = document.querySelector(`.${profileDescriptionSelector}`);
    this._profileAvatarElement = document.querySelector(`.${profileAvatarSelector}`);
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
  }

  getUserInfo() { // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии
    return {
<<<<<<< HEAD
      userName: this._userNameElement.textContent,
      userDescription: this._userDescriptionElement.textContent,
      userAvatar: this._userAvatarElement.style.backgroundImage.slice(5, -2)
    }
  }

  setUserInfo({ userName, userDescription, userAvatar }) { // Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу
    if (userName) this._userNameElement.textContent = userName;
    if (userDescription) this._userDescriptionElement.textContent = userDescription;
    if (userAvatar) this._userAvatarElement.style.backgroundImage = `url(${userAvatar})`;
=======
      profileTitle: this._profileNameElement.textContent,
      profileDescription: this._profileDescriptionElement.textContent,
      profileAvatar: this._profileAvatarElement.style.backgroundImage.slice(5, -2)
    }
  }

  setProfileInfo({ profileTitle, profileDescription, profileAvatar }) { // Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу
    if (profileTitle) this._profileNameElement.textContent = profileTitle;
    if (profileDescription) this._profileDescriptionElement.textContent = profileDescription;
    if (profileAvatar) this._profileAvatarElement.style.backgroundImage = `url(${profileAvatar})`;
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
  }
}

export default UserInfo;
