// Импортируем URL-адреса страниц вакансий
import { JOB_URLS } from '../../config/jobUrls.js';

// Импортируем функцию для отклика на одну вакансию
import { submitSingleVacancy } from '../submit/submitSingleVacancy.js';

// Импортируем функцию для отклика на несколько вакансий
import { submitMultipleVacancies } from '../submit/submitMultipleVacancies.js';

// Функция для проверки, на какой странице находится пользователь
export async function processVacancies() {
  // Получаем текущий адрес страницы
  const currentURL = window.location.href;

  // Если в адресе страницы содержится путь отдельной вакансии
  if (currentURL.includes(JOB_URLS.vacancyPageHH)) {
    // Отправляем отклик на одну вакансию
    await submitSingleVacancy();
    // Если в адресе страницы содержится путь списка вакансий
  } else if (currentURL.includes(JOB_URLS.vacancyListHH)) {
    // Отправляем отклики на несколько вакансий
    await submitMultipleVacancies();
  }
}
