// Импортируем функцию для проверки, идет ли процесс отправки откликов
import { getIsSubmitting } from '../../globals/globals.js';

// Импортируем константы
import { CONSTANTS } from '../../config/constants.js';

// Импортируем селекторы
import { SELECTORS } from '../../config/selectors.js';

// Импортируем функцию задержки выполнения кода
import { delay } from '../../utils/delay.js';

// Импортируем функцию для проверки пропуска текущей вакансии
// import { skipVacancy } from '../../utils/addToBlacklist.js';

// Импортируем вспомогательные функции для обработки попапов
import {
  confirmCountry, // Подтверждает отклик на вакансию в другой стране
  confirmEmployerAlert, // Подтверждает отклик на вакансию "Непрямой работодатель"
  checkPopupActive, // Проверяет, открыт ли попап формы отклика
} from '../../utils/popupHelpers.js';

// Импортируем функцию для отправки сопроводительного письма через поап
import { submitCoverLetterPopup } from '../popup/submitCoverLetterPopup.js';

// Импортируем функцию для отправки сопроводительного письма напрямую
import { submitCoverLetter } from '../popup/submitCoverLetter.js';

// Функция для отправки откликов на несколько вакансий
export async function submitMultiVacancies() {
  // Находим все доступные вакансии
  const vacancies = document.querySelectorAll(SELECTORS.vacancyCards);

  // Если вакансии не найдены, прекращаем выполнение
  if (!vacancies.length) return;

  // Проходим по каждой вакансии и отправляем отклик
  for (const vacancy of vacancies) {
    // Если процесс отправки был остановлен, прекращаем выполнение
    if (!getIsSubmitting()) break;

    // Плавно прокручиваем вакансии и визуально выделяем синей рамкой
    vacancy.scrollIntoView({ behavior: 'smooth', block: 'center' });
    vacancy.style.boxShadow = '0 0 8px #0059b3';

    // Пропускаем вакансию, если установлен флаг пропуска
    // if (skipVacancy()) continue;

    // Находим название вакансии
    const vacancyTitle = vacancy.querySelector(SELECTORS.vacancyTitle)?.innerText;

    // Находим кнопку "Откликнуться"
    const respondBtn = vacancy.querySelector(SELECTORS.respondBtn);

    // Проверяем, доступна ли кнопка отклика
    if (['Respond', 'Откликнуться'].includes(respondBtn?.innerText)) {
      // Нажимаем кнопку "Откликнуться"
      respondBtn.click();

      // Ждём заданное время перед продолжением
      await delay(CONSTANTS.delayMs);

      // Подтверждаем отклик на вакансию в другой стране, если открылся попап
      confirmCountry();

      // Подтверждаем отклик на вакансию "Непрямой работодатель", если открылся попап
      await confirmEmployerAlert();

      // Проверяем, открыт ли попап формы отклика
      if (checkPopupActive()) {
        // Если попап открыт, отправляем сопроводительное письмо через попап
        await submitCoverLetterPopup(vacancyTitle);
      } else {
        // Иначе отправляем сопроводительное письмо напрямую
        await submitCoverLetter(vacancyTitle);
      }
    }

    // Убираем синюю рамку после обработки текущей вакансии
    vacancy.style.boxShadow = '';
  }
}
