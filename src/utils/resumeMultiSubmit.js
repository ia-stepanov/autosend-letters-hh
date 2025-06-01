// Импортируем функцию задержки выполнения кода
import { delay } from './delay.js';

// Импортируем функцию для добавления вакансии в чёрный список
import { addToBlacklist } from './addToBlacklist.js';

// Функция для продолжения отправки откликов после обновления страницы
export async function resumeMultiSubmit() {
  // Определяем, какой из двух флагов установлен
  const FLAG_RELOAD = 'resumeAfterReload'; // перезагрузка страницы
  const FLAG_NEXT = 'resumeAfterNextPage'; // переход на следующую страницу

  // Получаем активный флаг из sessionStorage
  const flag = sessionStorage.getItem(FLAG_RELOAD)
    ? FLAG_RELOAD
    : sessionStorage.getItem(FLAG_NEXT)
    ? FLAG_NEXT
    : null;

  // Прекращаем выполнение, если нет активных флагов
  if (!flag) return;

  // Удаляем флаг, чтобы не сработал повторно
  sessionStorage.removeItem(flag);

  // Ждём заданное время перед продолжением
  await delay(4000);

  // Если это возврат после перезагрузки
  if (flag === FLAG_RELOAD) {
    // Добавляем первую вакансию в чёрный список
    await addToBlacklist();
  }

  // Ищем кнопку "Отправить отклики"
  const submitResBtn = document.querySelector('[data-action="submit-responses"]');

  // Если кнопка найдена, нажимаем на неё
  submitResBtn?.click();
}
