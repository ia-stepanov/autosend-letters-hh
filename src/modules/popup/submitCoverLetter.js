// Импортируем константы
import { CONSTANTS } from '../../config/constants.js';

// Импортируем селекторы
import { SELECTORS } from '../../config/selectors.js';

// Импортируем функцию задержки выполнения кода
import { delay } from '../../utils/delay.js';

// Импортируем функцию для выбора резюме
import { selectResume } from './selectResume.js';

// Импортируем функцию для добавления готового письма в поле ввода
import { insertCoverLetter } from './insertCoverLetter.js';

// Функция для отправки сопроводительного письма
export async function submitCoverLetter() {
  // Ждём заданное время перед продолжением
  await delay(CONSTANTS.delayMs);

  // Находим кнопку "Откликнуться"
  const btnSubmit = document.querySelector(SELECTORS.btnSubmitPopap);

  // Выбираем резюме
  await selectResume();

  // Ждём заданное время перед вставкой письма
  await delay(CONSTANTS.delayMs);

  // Вставляем сопроводительное письмо
  insertCoverLetter(CONSTANTS.coverLetter);

  // Нажимаем кнопку "Откликнуться"
  btnSubmit.click();

  // Ждём, чтобы корректно завершить процесс
  await delay(CONSTANTS.delayMs);
}
