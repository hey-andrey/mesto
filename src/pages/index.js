import './index.css';
import '../images/avatar.jpg';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
<<<<<<< HEAD
=======

>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'

<<<<<<< HEAD
=======
import Api from '../components/Api.js'

>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
import { defaultFormConfig, popupConfig, profileConfig, elementsConfig } from '../utils/consts.js';
import { renderLoading } from "../utils/utils.js";

// Кнопки
const openEditFormButton = document.querySelector('.profile__edit-button');
const openElementFormButton = document.querySelector('.profile__add-button');
const openAvatarFormButton = document.querySelector('.profile__image');

// Импуты
const openAvatarFormButton = document.querySelector('.profile__image');
const titleInputValue = document.querySelector('.popup__input_type_title');
const descriptionInputValue = document.querySelector('.popup__input_type_description');

<<<<<<< HEAD
const userInfo = new UserInfo({
  userNameSelector: profileConfig.profileTitle,
  userDescriptionSelector: profileConfig.profileDescription,
  userAvatarSelector: profileConfig.profileAvatar
=======
const profileInfo = new UserInfo({
  profileTitleSelector: profileConfig.profileTitle,
  profileDescriptionSelector: profileConfig.profileDescription,
  profileAvatarSelector: profileConfig.profileAvatar
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
});

const api = new Api({
  address: 'https://nomoreparties.co',
<<<<<<< HEAD
  groupId: `cohort-63`,
  token: `aabed2a9-cb60-40c1-9dc7-a845e7bea33b`,
=======
  cohortId: `cohort-63`,
  token: `aabed2a9-cb60-40c1-9dc7-a845e7bea33b`
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
});

let userId = null;

const imagePopup = new PopupWithImage(popupConfig.imageModalWindow);
imagePopup.setEventListeners();

const elementInfoSubmit = new PopupWithConfirmation(popupConfig.removeElementModalWindow);
elementInfoSubmit.setEventListeners();

const editFormValidator = new FormValidator(defaultFormConfig, popupConfig.editFormModalWindow);
editFormValidator.enableValidation();

const elementFormValidator = new FormValidator(defaultFormConfig, popupConfig.elementFormModalWindow);
elementFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(defaultFormConfig, popupConfig.changeAvatarModalWindow);
avatarFormValidator.enableValidation();

const createElement = (cardData) => {
<<<<<<< HEAD
  const element = new Card({
    data: { ...cardData, currentUserId: userId },
    handleElementClick: () => {
      imagePopup.open(cardData);
    },
    handleLikeClick: (element) => {
      api.changeLikeCardStatus(element.id(), !element.isLiked())
        .then(data => {
          element.setLikesInfo({ ...data });
        })
        .catch(err => console.log(`Ошибка изменения статуса лайка: ${err}`))
    },
    handleDeleteIconClick: (element) => {
      elementInfoSubmit.open();
      elementInfoSubmit.setSubmitAction(() => {
        api.removeCard(element.id())
          .then(() => {
            element.removeCard();
            cardInfoSubmit.close();
          })
          .catch(err => console.log(`При удалении карточки: ${err}`))
      });
    },
  }, elementsConfig.elementSelector);

  return element.getView();
}

  const elementList = new Section({
    renderer: (data) => {
      elementList.addItem(createElement(data));
    }
  }, elementsConfig.elementsWrap
  );

  const newElementPopup = new PopupWithForm({
    popupSelector: popupConfig.elementFormModalWindow,
    handleFormSubmit: (data) => {
      renderLoading(popupConfig.elementFormModalWindow, true);

      api.addCard(data)
=======
const element = new Card({
  data: { ...cardData, currentUserId: userId },
  handleElementClick: () => {
    imagePopup.open(cardData);
  },
  handleLikeClick: (element) => {
    api.changeLikeCardStatus(cardData.id, !card.isLiked())
      .then(data => { element.setLikesInfo({ ...data }); })
      .catch(err => console.log(`Ошибка изменения статуса лайка: ${err}`))
  },
  handleDeleteIconClick: (element) => {
    elementInfoSubmit.open();
    elementInfoSubmit.setSubmitAction(() => {
      api.removeElement(cardData.id)
        .then(() => {
          element.removeElement();
          elementInfoSubmit.close();
        })
        .catch(err => console.log(`При удалении карточки: ${err}`))
    });
  },
}, elementsConfig.elementSelector);
return element.getView();
}

const elementList = new Section({
  renderer: (data) => {
    elementList.addItem(createElement(data));
  }
}, elementsConfig.elementsWrap
);

const newElementPopup = new PopupWithForm({
  popupSelector: popupConfig.elementFormModalWindow,
  handleFormSubmit: (data) => {
    renderLoading(popupConfig.elementFormModalWindow, true);

    api.addElement(data)
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
      .then((cardData) => {
        elementList.addItem(createElement(cardData));
        newElementPopup.close();
      })
      .catch(err => console.log(`Ошибка добавление карточки: ${err}`))
<<<<<<< HEAD
      .finally(() => {
        renderLoading(popupConfig.elementFormModalWindow);
      });
=======
      .finally(() => { renderLoading(popupConfig.elementFormModalWindow); });
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
  }
});
newElementPopup.setEventListeners();

const userInfoPopup = new PopupWithForm({
  popupSelector: popupConfig.editFormModalWindow,
  handleFormSubmit: (data) => {
    renderLoading(popupConfig.editFormModalWindow, true);
<<<<<<< HEAD
    api.setUserInfo({
      name: data.userName,
      about: data.userDescription
    })
      .then((info) => {
        userInfo.setUserInfo({
          userName: info.name,
          userDescription: info.about,
        })
        userInfoPopup.close();
      })
      .catch(err => console.log(`Ошибка при обновлении информации о пользователе: ${err}`))
      .finally(() => {
        renderLoading(popupConfig.editFormModalWindow);
      });
=======
    api.setProfileInfo({ name: data.userName, about: data.userDescription })
    .then((info) => {
      profileInfo.setProfileInfo({ profileTitle: info.name, profileDescription: info.about, })
      profileInfo.close();
    })
    .catch(err => console.log(`Ошибка при обновлении информации о пользователе: ${err}`))
    .finally(() => {
      renderLoading(popupConfig.editFormModalWindow);
    });
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
  }
});
userInfoPopup.setEventListeners();

const changeAvatarPopup = new PopupWithForm({
  popupSelector: popupConfig.changeAvatarModalWindow,
  handleFormSubmit: (data) => {
    renderLoading(popupConfig.changeAvatarModalWindow, true);

<<<<<<< HEAD
    api.setUserAvatar({
      avatar: data.avatar
    })
      .then((info) => {
        userInfo.setUserInfo({
          userAvatar: info.avatar,
        });
=======
    api.setProfileAvatar({ avatar: data.avatar })
      .then((info) => {
        profileInfo.setProfileInfo({ profileAvatar: info.avatar, });
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
        changeAvatarPopup.close();
      })
      .catch(err => console.log(`При изменении аватара пользователя: ${err}`))
      .finally(() => {
        renderLoading(popupConfig.changeAvatarModalWindow);
      });
  }
});
changeAvatarPopup.setEventListeners();

// Слушатели
openEditFormButton.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo();
  titleInputValue.value = currentUserInfo.userName; // Инпут title
  descriptionInputValue.value = currentUserInfo.userDescription; // Инпут description
  userInfoPopup.open();
  editFormValidator.resetValidation();
});

openElementFormButton.addEventListener('click', () => {
  newElementPopup.open();
  elementFormValidator.disableSubmitButton();
  elementFormValidator.resetValidation();
});

openAvatarFormButton.addEventListener('click', () => {
  changeAvatarPopup.open();
  avatarFormValidator.disableSubmitButton();
<<<<<<< HEAD
=======
  avatarFormValidator.resetValidation();
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
});

api.getAppInfo()
  .then(([ cardsArray, userData ]) => {
    userId = userData._id;

<<<<<<< HEAD
    userInfo.setUserInfo({
      userName: userData.name,
      userDescription: userData.about,
      userAvatar: userData.avatar
    });

    elementList.renderItems(cardsArray);
=======
    profileInfo.setProfileInfo({ profileTitle: userData.name, profileDescription: userData.about, profileAvatar: userData.avatar });

    cardList.renderItems(cardsArray);
>>>>>>> 2ae2b65559c090ebc1f22dfe5fd4d5da0018f9b0
  })
  .catch(err => console.log(`Ошибка загрузки данных: ${err}`))
