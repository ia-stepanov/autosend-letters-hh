// Импортируем URL-адреса страниц вакансий
import { JOB_URLS } from '../../config/jobUrls.js';

// Импортируем константы
import { CONSTANTS } from '../../config/constants.js';

// Импорт функций для отклика на вакансии
import { submitSingleVacancy } from '../submit/submitSingleVacancy.js';
import { submitMultiVacancies } from '../submit/submitMultiVacancies.js';

// Импортируем функцию для перехода на следующую страницу
import { goToNextPage } from '../../utils/goToNextPage.js';

// Функция для проверки, на какой странице находится пользователь
export async function processVacancies() {
  // Получаем текущий адрес страницы
  const url = window.location.href;

  // Ссылка на страницу отдельной вакансии
  const vacancy = JOB_URLS.hh.vacancyPage;

  // Ссылка на страницу списка вакансий
  const vacancies = JOB_URLS.hh.vacancyList;

  // Если в адресе страницы содержится путь отдельной вакансии
  if (url.includes(vacancy)) {
    // Отправляем отклик на одну вакансию
    await submitSingleVacancy();
    // Если в адресе страницы содержится путь списка вакансий
  } else if (vacancies.some((path) => url.includes(path))) {
    // Отправляем отклики на несколько вакансий
    await submitMultiVacancies();

    // Переходим на следующую страницу и продолжаем отправлять отклики
    // goToNextPage();
  }
}
