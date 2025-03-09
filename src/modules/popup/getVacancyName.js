// Импортируем селекторы
import { SELECTORS } from '../../config/selectors.js';

// Функция для извлечения название вакансии
export function getVacancyName() {
  // Ищем заголовок вакансии
  const vacancyTitle = document.querySelector(SELECTORS.vacancyTitlePopap);

  // Получаем текст заголовка и обрезаем кавычки
  return vacancyTitle.textContent;
}
