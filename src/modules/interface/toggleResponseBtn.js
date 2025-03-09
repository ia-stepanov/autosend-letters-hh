// Импортируем функции для проверки и установки состояния отправки откликов
import { getIsSubmitting, setIsSubmitting } from '../../globals/globals';

// Импортируем функцию для отправки откликов
import { processVacancies } from '../process/processVacancies';

// Функция переключает состояние кнопки "Отправить отклики"
export async function toggleResponseBtn() {
  // Находим кнопку "Отправить отклики"
  const button = document.querySelector('[data-action="submit-responses"]');

  // Если процесс уже запущен, останавливаем его
  if (getIsSubmitting()) {
    setIsSubmitting(false);
    button.textContent = 'Отправить отклики';
    console.log('⏹️ Отправка откликов остановлена');
    return;
  }

  // Если процесс не запущен, запускаем его
  setIsSubmitting(true);
  button.textContent = 'Остановить отправку';
  console.log('▶️ Начата отправка откликов');

  try {
    // Выполняем асинхронную функцию для отправки откликов
    await processVacancies();
  } catch (error) {
    // Если произошла ошибка, выводим её в консоль
    console.error('Ошибка при отправке откликов:', error);
  } finally {
    // В любом случае завершаем процесс и восстанавливаем текст кнопки
    setIsSubmitting(false);
    button.textContent = 'Отправить отклики';
    console.log('✅ Отправка откликов завершена');
  }
}
