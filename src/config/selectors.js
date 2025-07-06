// CSS-селекторы для различных элементов интерфейса
export const SELECTORS = {
  // -------------------- Блок для элементов интерфейса --------------------
  // Селектор элементов навигации
  naviItems: '.supernova-navi-item.supernova-navi-item_lvl-2',

  // Селектор кнопки вызова меню "Добавить в чёрный список"
  blacklist: '[data-qa=vacancy__blacklist-show-add]',

  // Селектор кнопки "Добавить в чёрный список"
  addBlacklist: '[data-qa=vacancy__blacklist-menu-add-vacancy]',

  // Селектор кнопки "Следующая страница"
  pagerNext: '[data-qa="pager-next"]',

  // Селектор попапа формы отклика
  modalOverlay: '[data-qa="modal-overlay"]',

  // Селектор попапа "Непрямой работодатель"
  alertBox: '[data-qa="magritte-alert"]',

  // Селектор кнопки подтверждения выбора страны
  countryConfirmBtn: '[data-qa="relocation-warning-confirm"]',

  // Селектор кнопки закрытия чата
  chatikCloseBtn: '[data-qa="chatik-close-chatik"]',

  // -------------------- Блок для списка вакансий --------------------
  // Селектор карточки для нескольких вакансий
  vacancyCards: '[data-qa="vacancy-serp__vacancy"]',

  // Селектор кнопки "Откликнуться" для одной вакансии
  vacancyCard: '[data-qa="vacancy-response-link-top"]',

  // -------------------- Блок для элементов отклика --------------------
  // Селектор заголовка вакансии
  vacancyTitle: "[data-qa='serp-item__title']",

  // Селектор кнопки "Приложить письмо"
  addCoverLetter: '[data-qa="vacancy-response-letter-toggle-text"]',

  // Селектор поля для сопроводительного письма
  coverLetterInput: '#cover-letter textarea',

  // Селектор кнопки "Откликнуться" для отправки отклика
  respondBtn: '[data-qa="vacancy-serp__vacancy_response"]',

  // Селектор кнопки "Отправить" для отправки отклика
  sendBtn: '[data-qa="vacancy-response-letter-submit"]',

  // -------------------- Блок для элементов отклика в попапе --------------------
  // Селектор заголовка вакансии в попапе
  vacancyTitlePopup: '[data-qa="title-description"]',

  // Селектор выпадающего списка с резюме в попапе
  resumeDropdown: '[data-qa="resume-title"]',

  // Селектор кнопки "Добавить сопроводительное" в попапе
  addCoverLetterPopup: '[data-qa="add-cover-letter"]',

  // Селектор поля для сопроводительного письма в попапе
  coverLetterInputPopup: '[data-qa="vacancy-response-popup-form-letter-input"]',

  // Селектор кнопки "Откликнуться" в попапе
  respondBtnPopup: '[data-qa="vacancy-response-submit-popup"]',
};
