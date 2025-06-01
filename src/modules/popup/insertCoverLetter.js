// Импортируем селекторы
import { SELECTORS } from '../../config/selectors.js';

// Импортируем список шаблонов сопроводительных писем
import { TEMPLATES } from '../../data/data.js';

// Импортируем функцию для программного изменения "value" у "input"
import { triggerInputChange } from '../../utils/triggerInputChange.js';

// Функция для добавления готового письма в поле ввода
export function insertCoverLetter(coverLetter, vacancyName) {
  // Ищем поле ввода для сопроводительного письма
  const coverLetterInput =
    document.querySelector(SELECTORS.coverLetterInput) ||
    document.querySelector(SELECTORS.coverLetterInputPopup);

  // Если поле не найдено, прекращаем выполнение
  if (!coverLetterInput) return;

  // Формируем письмо, подставив в него название вакансии
  const messageValue = TEMPLATES[coverLetter].replace('{#vacancyName}', vacancyName);

  // Добавляем в поле готовое письмо через сеттер
  triggerInputChange(coverLetterInput, messageValue);
}
