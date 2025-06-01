// Импортируем константы
import { CONSTANTS } from '../config/constants.js';

// Импортируем селекторы
import { SELECTORS } from '../config/selectors.js';

// Импортируем функцию задержки выполнения кода
import { delay } from './delay.js';

// Функция для добавления в чёрный список первой вакансии
export async function addToBlacklist() {
  // Находим первую вакансию
  const vacancy = document.querySelectorAll(SELECTORS.vacancyCards)[0];

  // Находим кнопку для вызова меню "Добавить в чёрный список"
  const blacklist = vacancy.querySelector(SELECTORS.blacklist);

  // Кликаем по кнопке, если она найдена
  blacklist?.click();

  // Ждём заданное время перед продолжением
  await delay(CONSTANTS.delayMs);

  // Находим кнопку "Добавить в чёрный список"
  const addBlacklist = document.querySelector(SELECTORS.addBlacklist);

  // Нажимаем на кнопку, если она найдена
  addBlacklist?.click();

  // Убираем синюю рамку после обработки текущей вакансии
  vacancy.style.boxShadow = '';

  // Устанавливаем флаг, что  вакансию нужно пропустить
  sessionStorage.setItem('skipVacancy', 'true');
}

// Функция для проверки пропуска текущей вакансии
export function skipVacancy() {
  // Проверяем, установлен ли флаг пропуска
  const shouldSkip = !!sessionStorage.getItem('skipVacancy');

  // Если флаг был установлен, удаляем его
  if (shouldSkip) sessionStorage.removeItem('skipVacancy');

  // Возвращаем результат
  return shouldSkip;
}
