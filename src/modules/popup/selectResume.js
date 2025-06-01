// Импортируем константы
import { CONSTANTS } from '../../config/constants.js';

// Импортируем селекторы
import { SELECTORS } from '../../config/selectors.js';

// Импортируем функцию задержки выполнения кода
import { delay } from '../../utils/delay.js';

// Функция для выбора резюме и нажатия на кнопку "Добавить сопроводительное"
export async function selectResume() {
  // Находим заголовок вакансии
  const vacancyTitle = document.querySelector(SELECTORS.vacancyTitlePopup);

  // Находим выпадающий список с резюме
  const resumeDropdown = document.querySelector(SELECTORS.resumeDropdown);

  // Находим кнопку "Добавить сопроводительное"
  const addCoverLetter = document.querySelector(SELECTORS.addCoverLetterPopup);

  // Открываем выпадающий список
  resumeDropdown.click();

  // Ждём заданное время перед продолжением
  await delay(CONSTANTS.delayMs);

  // Находим резюме на странице
  const resume = document.querySelector(CONSTANTS.resume);

  // Выбираем резюме
  resume?.click();

  // Если кнопка "Добавить сопроводительное" найдена, нажимаем её,
  // иначе кликаем на заголовок вакансии, чтобы закрыть выпадающий список
  addCoverLetter?.click() || vacancyTitle.click();
}
