export const renderLoading = (popup, isLoading = false) => {
  const currentActiveButton = document.querySelector(`.${popup} .popup__button`);
  if (isLoading) {
    currentActiveButton.textContent = 'Загрузка...';
  } else {
    currentActiveButton.textContent = 'Сохранить';
  }
};
