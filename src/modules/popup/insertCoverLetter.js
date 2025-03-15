// Импортируем селекторы
import { SELECTORS } from '../../config/selectors.js';

// Импортируем список шаблонов сопроводительных писем
import { TEMPLATES } from '../../data/data.js';

// Импортируем функцию для получения названия вакансии
import { getVacancyName } from './getVacancyName.js';

// Импортируем функцию для программного изменения "textarea"
import { setTextareaValue } from '../../utils/setTextareaValue.js';

// Импортируем функцию для программного вызова события "change"
import { dispatchChange } from '../../utils/dispatchChange.js';

// Функция для добавления готового письма в поле ввода
export function insertCoverLetter(coverLetter) {
  // Ищем поле ввода для сопроводительного письма
  const messageInput = document.querySelector(SELECTORS.messageInputPopap);

  // Если поле не найдено, прекращаем выполнение
  if (!messageInput) return;

  // Получаем название вакансии
  const vacancyName = getVacancyName();

  // Формируем письмо, подставив в него название вакансии
  const messageValue = TEMPLATES[coverLetter].replace('{#vacancyName}', vacancyName);

  // Добавляем в поле готовое письмо через сеттер
  setTextareaValue(messageInput, messageValue);

  // Вызываем событие "change" для корректной обработки изменений в поле
  dispatchChange(messageInput);
}
