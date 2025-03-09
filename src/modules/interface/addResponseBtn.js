// Импортируем константы
import { CONSTANTS } from '../../config/constants.js';

// Импортируем селекторы
import { SELECTORS } from '../../config/selectors.js';

// Импортируем функцию задержки выполнения кода
import { delay } from '../../utils/delay.js';

// Импортируем функцию для переключения состояния кнопки
import { toggleResponseBtn } from './toggleResponseBtn.js';

// Импортируем функцию для поиска элемента с указанным текстом
import { findElementByText } from './findElementByText.js';

// Функция добавляет новую кнопку в навигации "Отправить отклики"
export async function addResponseBtn() {
  // Ждём заданное время перед продолжением
  await delay(CONSTANTS.delayMs);

  // Получаем список элементов навигации
  const navItems = document.querySelectorAll(SELECTORS.naviItems);

  // Клонируем 5-й элемент навигации
  const clonedItem = navItems[4].cloneNode(true);

  // Находим текстовый элемент внутри склонированного элемента
  const textElement = findElementByText(clonedItem);

  // Устанавливаем атрибут для назначения обработчика
  textElement.setAttribute('data-action', 'submit-responses');

  // Меняем текст кнопки
  textElement.textContent = 'Отправить отклики';

  // Вставляем склонированный элемент сразу после исходного
  navItems[4].insertAdjacentElement('afterend', clonedItem);

  // Ищем в клоне новую кнопку по атрибуту
  const newButton = clonedItem.querySelector('[data-action="submit-responses"]');

  // Навешиваем обработчик клика на новую кнопку
  newButton.addEventListener('click', toggleResponseBtn);
}
