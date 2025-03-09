// Импортируем функцию для проверки, идет ли процесс отправки откликов
import { getIsSubmitting } from '../../globals/globals';

// Импортируем селекторы
import { SELECTORS } from '../../config/selectors.js';

// Импортируем функцию для отправки сопроводительного письма
import { submitCoverLetter } from '../popup/submitCoverLetter.js';

// Функция для отклика на несколько вакансий
export async function submitMultipleVacancies() {
  // Ищем все доступные вакансии
  const vacancies = document.querySelectorAll(SELECTORS.multipleVacancies);

  // Если вакансии не найдены, прекращаем выполнение
  if (!vacancies.length) return;

  // Проходим по каждой вакансии и отправляем отклик
  for (const vacancy of vacancies) {
    if (!getIsSubmitting()) break;

    // Нажимаем кнопку "Откликнуться", открывая форму отклика
    vacancy.click();

    // Отправляем сопроводительное письмо
    await submitCoverLetter();
  }
}
