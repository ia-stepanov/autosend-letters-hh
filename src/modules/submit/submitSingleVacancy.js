// Импортируем селекторы
import { SELECTORS } from '../../config/selectors.js';

// Импортируем функцию для отправки сопроводительного письма
import { submitCoverLetter } from '../popup/submitCoverLetter.js';

// Функция для отклика на одну вакансию
export async function submitSingleVacancy() {
  // Находим элемент вакансии
  const vacancy = document.querySelector(SELECTORS.singleVacancy);

  // Если вакансия не найдена, прекращаем выполнение
  if (!vacancy) return;

  // Нажимаем кнопку "Откликнуться", открывая форму отклика
  vacancy.click();

  // Отправляем сопроводительное письмо
  await submitCoverLetter();
}
