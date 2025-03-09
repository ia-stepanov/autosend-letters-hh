// CSS-селекторы для различных элементов интерфейса
export const SELECTORS = {
  // -------------------- Блок для элементов отклика в попапе --------------------
  // Селектор выпадающего списка с резюме в попапе
  resumeDropdown:
    '.magritte-cell___NQYg5_4-1-3.magritte-align-center___RjG9e_4-1-3:not([class*="magritte-no-right"])',

  // Селектор заголовка вакансии в попапе
  vacancyTitlePopap: '[data-qa="title-container"]:has(h2) [data-qa="title-description"]',

  // Селектор кнопки "Добавить сопроводительное" в попапе
  addMessagePopap: '[data-qa="secondary-actions"] > button',

  // Селектор поля для сопроводительного письма в попапе
  messageInputPopap: '[data-qa="vacancy-response-popup-form-letter-input"]',

  // Селектор кнопки "Откликнуться" в попапе
  btnSubmitPopap: '[data-qa="vacancy-response-submit-popup"]',

  // -------------------- Блок для списка вакансий --------------------
  // Селектор кнопки "Откликнуться" для одной вакансии
  singleVacancy: '[data-qa="vacancy-response-link-top"]',

  // Селектор кнопки "Откликнуться" для нескольких вакансий
  multipleVacancies:
    '[data-qa="vacancy-serp__vacancy_response"]:not([class*="magritte-button_stretched"])',

  // -------------------- Блок для элементов интерфейса --------------------
  // Селектор элементов навигации
  naviItems: '.supernova-navi-item.supernova-navi-item_lvl-2',

  // Селектор попапа
  modalOverlay: document.querySelector('[data-qa="modal-overlay"]'),

  // -------------------- Блок для элементов отклика --------------------
  // Селектор кнопки "Приложить письмо" (вне попапа)
  addMessage: '[data-qa="vacancy-response-letter-toggle-text"]',

  // Селектор поля для сопроводительного письма (вне попапа)
  messageInput: 'textarea[class^="magritte-native-element"]',

  // Селектор кнопки "Отправить" для отправки отклика (вне попапа)
  btnSubmit: '[data-qa="vacancy-response-letter-submit"]',
};
