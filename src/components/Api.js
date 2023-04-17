class Api {
<<<<<<< HEAD
  constructor({ address, token, groupId }) {
    this._token = token;
    this._groupId = groupId;
    this._address = address;
  }

  getAppInfo() {
    return Promise.all([this.getCardList(), this.getUserInfo()]);
  }

  getCardList() {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      headers: {
        authorization: this._token
      }
=======
  constructor({ address, token, cohortId }) {
    this._address = address;
    this._token = token;
    this._cohortId = cohortId;
  }

  getAppInfo() { return Promise.all([this.getElementList(), this.getProfileInfo()]); } // Загрузка информации о пользователе с сервера, информация о пользователе должна подгружаться с сервера

  getProfileInfo() {
    return fetch(`${this._address}/${this._cohortId}/users/me`, {
      headers: { authorization: this._token }
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

<<<<<<< HEAD
  addCard({ name, link }) {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link
      })
=======
  getElementList() { // Загрузка карточек с сервера, начальные карточки должны подгружаться с сервера
    return fetch(`${this._address}/${this._cohortId}/cards`, { // Сделайте GET-запрос, в ответ придёт JSON с массивом карточек, которые загрузили студенты вашей группы
      headers: { authorization: this._token }
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

<<<<<<< HEAD
  removeCard(cardID) {
    return fetch(`${this._address}/${this._groupId}/cards/${cardID}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

  getUserInfo() {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      headers: {
        authorization: this._token
      }
=======
  setProfileInfo({ name, about }) { // Редактирование профиля
    return fetch(`${this._address}/${this._cohortId}/users/me`, {
      method: 'PATCH', // Отредактированные данные профиля должны сохраняться на сервере. Для этого отправьте запрос методом PATCH
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json' // В заголовках запроса, кроме токена, необходимо отправить Content-Type
      },
      body: JSON.stringify({ name, about }) // В теле — JSON с двумя свойствами — name и about, значениями этих свойств должны быть обновлённые данные пользователя
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

<<<<<<< HEAD
  setUserInfo({ name, about }) {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
=======
  setProfileAvatar({ avatar }) { // Редактирование профиля
    return fetch(`${this._address}/${this._cohortId}/users/me/avatar`, {
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
<<<<<<< HEAD
      body: JSON.stringify({
        name,
        about
      })
=======
      body: JSON.stringify({ avatar })
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

<<<<<<< HEAD
  setUserAvatar({ avatar }) {
    return fetch(`${this._address}/${this._groupId}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar
      })
=======
  addElement({ name, link }) { // Добавление карточки
    return fetch(`${this._address}/${this._cohortId}/cards`, {
      method: 'POST', // Чтобы добавить на сервер новую карточку, отправьте POST-запрос
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json' // В заголовках запроса, кроме токена, необходимо отправить Content-Type
      },
      body: JSON.stringify({ name, link })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

  removeElement(cardID) { // Удаление карточки
    return fetch(`${this._address}/${this._cohortId}/cards/${cardID}`, {
      method: 'DELETE',
      headers: { authorization: this._token, }
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

<<<<<<< HEAD
  changeLikeCardStatus(cardID, like) {
    return fetch(`${this._address}/${this._groupId}/cards/like/${cardID}`, {
=======
  changeLikeElementStatus(cardID, like) { // Отображение количества лайков карточки
    return fetch(`${this._address}/${this._cohortId}/cards/like/${cardID}`, {
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
      method: like ? 'PUT' : 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }
}

export default Api;
