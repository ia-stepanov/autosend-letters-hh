// Импортируем селекторы
import { SELECTORS } from '../config/selectors.js';

// Импортируем функцию продолжения отправки откликов после обновления страницы
import { resumeMultiSubmit } from './resumeMultiSubmit';

// Функция для перехода на следующую страницу
export function goToNextPage() {
  // Ищем кнопку "Следующая страница"
  const nextPage = document.querySelector(SELECTORS.pagerNext);

  // Если кнопка не найдена, прекращаем выполнение
  if (!nextPage) return;

  // Устанавливаем флаг перед перезагрузкой страницы
  sessionStorage.setItem('resumeAfterNextPage', 'true');

  // Нажимаем кнопку "Следующая страница"
  nextPage.click();
}
