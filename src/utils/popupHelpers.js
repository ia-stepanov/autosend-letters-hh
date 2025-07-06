// Импортируем константы
import { CONSTANTS } from '../config/constants.js';

// Импортируем селекторы
import { SELECTORS } from '../config/selectors.js';

// Импортируем функцию задержки выполнения кода
import { delay } from '../utils/delay.js';

//  Функция для подтверждения отклика на вакансию в другой стране
export async function confirmCountry() {
  // Ищем кнопку по заданному селектору, если она найдена, нажимаем на неё
  document.querySelector(SELECTORS.countryConfirmBtn)?.click();
}

// Функция для подтверждения отклика на вакансию "Непрямой работодатель"
export async function confirmEmployerAlert() {
  // Ищем попап "Непрямой работодатель"
  const alertBox = document.querySelector(SELECTORS.alertBox);

  // Переходим к его соседнему элементу, где находятся кнопки
  const buttons = alertBox?.nextElementSibling?.querySelectorAll('button');

  // Если кнопки найдены, нажимаем на кнопку "Всё равно откликнуться"
  buttons?.[1]?.click();

  // Ждём заданное время перед продолжением
  await delay(CONSTANTS.delayMs);
}

// Функция для проверки, открылась ли форма отклика в попапе
export function checkPopupActive() {
  // Ищем форму отклика по заданному селектору и возвращаем булевое значение
  return !!document.querySelector(SELECTORS.modalOverlay);
}

// Функция для закрытия чата
export function checkChatikActive() {
  // Ищем кнопку по заданному селектору, если она найдена, нажимаем на неё
  document.querySelector(SELECTORS.chatikCloseBtn)?.click();
}
