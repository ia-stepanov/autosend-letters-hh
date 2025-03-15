// Импортируем константы
import { CONSTANTS } from '../../config/constants.js';

// Импортируем селекторы
import { SELECTORS } from '../../config/selectors.js';

// Импортируем функцию задержки выполнения кода
import { delay } from '../../utils/delay.js';

// Функция для выбора резюме и нажатия на кнопку "Добавить сопроводительное"
export async function selectResume() {
  // Находим выпадающий список с резюме
  const resumeDropdown = document.querySelector(SELECTORS.resumeDropdown).closest('div');

  // Открываем выпадающий список
  resumeDropdown.click();

  // Ждём заданное время перед продолжением
  await delay(CONSTANTS.delayMs);

  // Ищем резюме на странице
  const resume = document.querySelector(CONSTANTS.resume);

  // Ищем кнопку "Добавить сопроводительное"
  const addMessage = document.querySelector(SELECTORS.addMessagePopap);

  // Ищем заголовок вакансии
  const vacancyTitle = document.querySelector(SELECTORS.vacancyTitlePopap);

  // Выбираем резюме
  resume.click();

  // Если кнопка "Добавить сопроводительное" найдена, нажимаем её,
  // иначе кликаем на заголовок вакансии, чтобы закрыть выпадающий список
  addMessage?.click() || vacancyTitle.click();
}
