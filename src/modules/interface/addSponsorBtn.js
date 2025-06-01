// Импортируем селекторы
import { SELECTORS } from '../../config/selectors.js';

// Импортируем функцию для поиска элемента с указанным текстом
import { findElementByText } from './findElementByText.js';

// Функция добавляет новую кнопку в навигации "Поддержать проект"
export async function addSponsorBtn() {
  // Получаем список элементов навигации
  const navItems = document.querySelectorAll(SELECTORS.naviItems);

  // Клонируем 5-й элемент навигации
  const clonedItem = navItems[4].cloneNode(true);

  // Находим текстовый элемент внутри склонированного элемента
  const textElement = findElementByText(clonedItem);

  // Меняем текст кнопки
  textElement.textContent = 'Поддержать проект';

  // Удаляем ссылку, чтобы не было перехода по умолчанию
  clonedItem.removeAttribute('href');

  // Меняем курсор на указатель (визуально как кнопка)
  clonedItem.style.cursor = 'pointer';

  // Добавляем обработчик перехода
  clonedItem.addEventListener('click', () => {
    window.open('https://boosty.to/ia-stepanov/donate', '_blank');
  });

  // Вставляем склонированный элемент сразу после исходного
  navItems[5].insertAdjacentElement('afterend', clonedItem);
}
